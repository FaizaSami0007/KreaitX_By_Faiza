/**
 * KreaitX Telemetry & Analytics Dispatcher
 * 
 * Provides a privacy-conscious, type-safe event abstraction for Next.js App Router.
 * Automatically forwards events to Google Analytics (window.gtag) when NEXT_PUBLIC_GA_ID
 * is configured, while providing structured developer logging in non-production environments.
 * 
 * Privacy Safeguard: Strictly excludes PII (names, emails, inquiry messages).
 */

export type AnalyticsEventName =
  | "lead_form_start"
  | "lead_form_validation_error"
  | "lead_form_submit_attempt"
  | "lead_form_success"
  | "lead_form_server_error"
  | "service_cta_click"
  | "case_study_click"
  | "direct_contact_click";

export interface AnalyticsEventParams {
  [key: string]: string | number | boolean | undefined;
}

// Global declaration for window.gtag
declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "consent",
      action: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Filter and sanitize parameters to ensure no PII is transmitted.
 */
function sanitizeParams(params?: AnalyticsEventParams): Record<string, unknown> {
  if (!params) return {};

  const blockedKeys = [
    "name",
    "fullname",
    "email",
    "phone",
    "message",
    "details",
    "projectdetails",
    "inquiry",
    "company",
    "companyname"
  ];

  const sanitized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    const lowerKey = key.toLowerCase();

    // Skip any parameter containing blocked PII identifiers
    if (blockedKeys.some((blocked) => lowerKey.includes(blocked))) {
      continue;
    }

    sanitized[key] = value;
  }

  return sanitized;
}

/**
 * Dispatch an analytics event safely across active tracking providers.
 *
 * @param eventName The standard event name from the taxonomy.
 * @param params Optional categorical event parameters (no PII).
 */
export function trackEvent(
  eventName: AnalyticsEventName,
  params?: AnalyticsEventParams
): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const cleanParams = sanitizeParams(params);

    // 1. Log to developer console in non-production environments
    if (process.env.NODE_ENV !== "production") {
      console.log(
        `%c[KreaitX Analytics]%c ${eventName}`,
        "color: #FFFFFF; font-weight: bold; background: #EC5D17; padding: 2px 6px; border-radius: 4px;",
        "color: #EC5D17; font-weight: bold;",
        cleanParams
      );
    }

    // 2. Dispatch to Google Analytics (window.gtag) if present
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, cleanParams);

      // If this is a successful lead, also trigger standard GA4 'generate_lead' conversion
      if (eventName === "lead_form_success") {
        window.gtag("event", "generate_lead", {
          currency: "USD",
          value: cleanParams.budget_tier || "standard",
          ...cleanParams
        });
      }
    }
  } catch (err) {
    // Fail silently: Analytics failures must NEVER disrupt the user experience or form submission
    if (process.env.NODE_ENV !== "production") {
      console.warn("[KreaitX Analytics Error]:", err);
    }
  }
}

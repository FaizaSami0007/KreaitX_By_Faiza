# KreaitX — Search Console, Webmaster Tools & Analytics Guide

This guide provides instructions for connecting KreaitX to official search engine webmaster platforms and configuring analytics without exposing sensitive credentials or introducing unnecessary tracking scripts.

---

## 1. Google Search Console Setup

Google Search Console (GSC) is the primary platform for monitoring Google indexation, impressions, click-through rates, and crawl health.

### Step 1: Add Property
1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Sign in with the official KreaitX Google account (`contact@kreaitx.com` or administrator).
3. Select **Add Property**:
   - **Recommended Method**: **Domain Property** (`kreaitx.com`). This covers all subdomains, protocols (`https://` and `http://`), and path variations.
   - **Alternative Method**: **URL Prefix Property** (`https://kreaitx.com`).

### Step 2: Domain Verification
- **DNS TXT Record (Recommended for Domain Property)**:
  1. Copy the TXT record token provided by Google (e.g., `google-site-verification=XXXXXXXXXXXXXXXXXXXX`).
  2. In your DNS provider (e.g., Cloudflare, Namecheap, Vercel Domains), add a TXT record:
     - **Host / Name**: `@` (or leave blank depending on registrar)
     - **Value**: The Google verification string
     - **TTL**: Automatic or 300 seconds
  3. Return to Google Search Console and click **Verify**.
- **HTML Meta Tag (For URL Prefix Property)**:
  - If DNS access is restricted, place the verification token in Vercel environment variables as `NEXT_PUBLIC_GSC_VERIFICATION`. Next.js can output this safely without committing secrets.

### Step 3: Sitemap Submission
1. In the left navigation menu, click **Sitemaps**.
2. Enter the sitemap endpoint: `sitemap.xml` (Full path: `https://kreaitx.com/sitemap.xml`).
3. Click **Submit**.
4. Confirm status changes to **Success**.

### Step 4: URL Inspection & Initial Crawl
1. Use the **URL Inspection** bar at the top for key priority URLs:
   - `https://kreaitx.com/`
   - `https://kreaitx.com/solutions`
   - `https://kreaitx.com/work`
   - `https://kreaitx.com/process`
   - `https://kreaitx.com/about`
   - `https://kreaitx.com/contact`
2. Click **Test Live URL** to confirm that Googlebot renders the page and detects the structured JSON-LD schemas.
3. Click **Request Indexing** for the homepage.

---

## 2. Bing Webmaster Tools Setup

Bing powers search for Bing, Microsoft Copilot, DuckDuckGo, and Yahoo.

### Setup Process
1. Navigate to [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Select **Import from Google Search Console**.
3. Sign in with the same Google account verified in Step 1.
4. All verified properties, DNS verifications, and sitemaps will synchronize automatically.
5. Verify that `https://kreaitx.com/sitemap.xml` is listed and status shows **Processing** or **Success**.

---

## 3. Indexing Diagnostics & Issue Resolution

### Core Reports to Review Monthly
- **Pages (Coverage Report)**:
  - **Indexed**: Public routes (`/solutions/*`, `/work/*`, `/insights/*`, etc.) should appear here.
  - **Not Indexed (Intentional)**: `/api/*` endpoints and `/404` pages are intentionally blocked via `robots.txt` or returned as 404.
  - **Discovered — currently not indexed**: Normal for new sites; resolves as internal linking and backlinks establish domain authority.
- **Enhancements & Rich Results**:
  - Verify that Googlebot validates schemas: `BreadcrumbList`, `Service`, `HowTo`, `BlogPosting`, `Organization`.
- **Page Experience & Core Web Vitals**:
  - Review real-user LCP (Largest Contentful Paint < 2.5s), INP (Interaction to Next Paint < 200ms), and CLS (Cumulative Layout Shift < 0.1).

---

## 4. Privacy-Centric Analytics Setup (Optional)

If Google Analytics 4 (GA4) or privacy-first analytics (Plausible / PostHog) is enabled:

### Safe Configuration via Environment Variables
- Set `NEXT_PUBLIC_GA_ID` in your **Vercel Project Settings > Environment Variables**:
  - **Key**: `NEXT_PUBLIC_GA_ID`
  - **Value**: `G-XXXXXXXXXX`
  - **Environment**: Production, Preview

### Recommended Conversion Events to Track
1. `contact_form_submit`: Triggered upon successful completion of the `/contact` form.
2. `service_cta_click`: Triggered when visitors click "Start a Project" or "Inquire Directly" on service pages.
3. `case_study_view`: Triggered when readers spend >60 seconds reviewing a portfolio breakdown.
4. `editorial_read_complete`: Triggered when visitors scroll through >80% of an Insights essay.

### Privacy & Consent Best Practices
- Do not track Personally Identifiable Information (PII) such as form field inputs, client names, or email addresses in analytics events.
- Enable IP anonymization.
- Respect browser `Do-Not-Track` (`DNT`) signals.

---

## 5. Security & Credentials Policy
- **Never commit credentials**: Do not commit Google API keys, OAuth tokens, or Search Console verification files to GitHub.
- **Use DNS verification**: DNS TXT verification requires zero code changes and remains valid across all deployments.

"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import {
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  Loader2,
  AlertCircle,
  ShieldCheck
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { servicesData, siteConfig } from "@/data/siteData";

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $35,000",
  "$35,000+",
  "Undetermined / Let's Discuss"
];

const timelineOptions = [
  "Immediate (Next 2-4 weeks)",
  "1 – 3 Months",
  "3 – 6 Months",
  "Flexible / Discovery First"
];

export const ContactClient: React.FC = () => {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    selectedServices: [] as string[],
    budgetRange: "",
    projectTimeline: "",
    projectDetails: "",
    website: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [inboundContext, setInboundContext] = useState<string | null>(null);

  // Deduplication guards to prevent double-firing of events
  const hasStartedRef = useRef(false);

  // Trigger form start tracking safely once per session
  const triggerFormStart = (trigger: string) => {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackEvent("lead_form_start", {
        form_id: "studio_inquiry",
        trigger
      });
    }
  };

  // Handle incoming query params (?service=branding, etc.)
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const projectParam = searchParams.get("project");

    if (serviceParam) {
      const matchedService = servicesData.find(
        (s) => s.id.toLowerCase() === serviceParam.toLowerCase() ||
               s.title.toLowerCase().includes(serviceParam.toLowerCase())
      );
      if (matchedService) {
        setInboundContext(`Inquiring for: ${matchedService.title}`);
        setFormData((prev) => ({
          ...prev,
          selectedServices: prev.selectedServices.includes(matchedService.title)
            ? prev.selectedServices
            : [...prev.selectedServices, matchedService.title]
        }));
      }
    }

    if (projectParam) {
      setInboundContext(`Case Study Reference: ${projectParam}`);
      setFormData((prev) => ({
        ...prev,
        projectDetails: prev.projectDetails || `Inquiring regarding collaboration similar to the ${projectParam} case study.`
      }));
    }
  }, [searchParams]);

  const handleServiceToggle = (title: string) => {
    triggerFormStart("service_pill_click");
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(title);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== title)
          : [...prev.selectedServices, title]
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setStatus("error");
      setErrorMessage("Please provide your full name so our partners know who they are speaking with.");
      trackEvent("lead_form_validation_error", {
        form_id: "studio_inquiry",
        error_field: "fullName"
      });
      return;
    }

    if (!formData.email.trim()) {
      setStatus("error");
      setErrorMessage("Please provide a valid work email address for our project response.");
      trackEvent("lead_form_validation_error", {
        form_id: "studio_inquiry",
        error_field: "email"
      });
      return;
    }

    if (!formData.projectDetails.trim()) {
      setStatus("error");
      setErrorMessage("Please include a brief description of your project scope or challenge.");
      trackEvent("lead_form_validation_error", {
        form_id: "studio_inquiry",
        error_field: "projectDetails"
      });
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    trackEvent("lead_form_submit_attempt", {
      form_id: "studio_inquiry",
      service_count: formData.selectedServices.length,
      has_budget: Boolean(formData.budgetRange),
      has_timeline: Boolean(formData.projectTimeline)
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error("Unable to transmit inquiry at this moment.");
      }

      setStatus("success");
      trackEvent("lead_form_success", {
        form_id: "studio_inquiry",
        service_count: formData.selectedServices.length
      });
    } catch (err: unknown) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "An unexpected communication error occurred.";
      setErrorMessage(message);
    }
  };

  return (
    <>
      {/* Contact Hero — Pure White Canvas */}
      <section className="relative bg-white text-[#34312F] py-20 lg:py-28 border-b border-[#E5E1DA] overflow-hidden">
        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#CA6702] px-3.5 py-1.5 rounded-md bg-[#FFF0E0] border border-[#E5E1DA] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#CA6702]" />
                <span>Direct Collaboration × Global Partnerships</span>
              </span>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold text-[#34312F] tracking-tight leading-[1.08]">
                Let&apos;s Create{" "}
                <span className="font-display font-bold text-[#CA6702]">
                  Together
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#6B6560] leading-relaxed font-sans font-normal max-w-2xl">
                Tell us what you&apos;re building. We&apos;ll help turn your ideas into real commercial opportunities, clear technical scopes, and actionable next steps.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href="#inquiry-form"
                  className="inline-flex items-center justify-center px-8 py-3.5 min-h-[50px] rounded-lg text-sm font-bold text-white bg-[#CA6702] hover:bg-[#B25902] transition-colors w-full sm:w-auto"
                >
                  Fill Project Brief ↓
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center justify-center px-6 py-3.5 min-h-[50px] rounded-lg text-sm font-semibold text-[#34312F] bg-white hover:bg-[#F7F5F0] hover:text-[#CA6702] border border-[#E5E1DA] transition-colors w-full sm:w-auto shadow-2xs"
                >
                  Direct Email Inquiry
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section id="inquiry-form" className="bg-[#F7F5F0] py-16 sm:py-24 border-b border-[#E5E1DA]">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Interactive Form */}
            <div className="lg:col-span-8">
              <div className="rounded-xl bg-white border border-[#E5E1DA] shadow-sm p-6 sm:p-10 lg:p-12">
                {status === "success" ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="h-16 w-16 bg-[#FFF0E0] text-[#CA6702] rounded-full flex items-center justify-center mx-auto border border-[#E5E1DA]">
                      <CheckCircle2 className="h-8 w-8 text-[#CA6702]" />
                    </div>

                    <div className="space-y-2 max-w-md mx-auto">
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#34312F] tracking-tight">
                        Inquiry Received
                      </h2>
                      <p className="text-sm sm:text-base text-[#6B6560] leading-relaxed font-sans font-normal">
                        Thank you for reaching out to KreaitX. Our leadership team has received your project briefing and will review your requirements. You will hear from us within 24 business hours.
                      </p>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="button"
                        variant="secondary"
                        size="md"
                        onClick={() => {
                          setStatus("idle");
                          setFormData({
                            fullName: "",
                            email: "",
                            companyName: "",
                            selectedServices: [],
                            budgetRange: "",
                            projectTimeline: "",
                            projectDetails: "",
                            website: ""
                          });
                        }}
                      >
                        Submit Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                    {/* Error Banner */}
                    {status === "error" && (
                      <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-rose-600" />
                        <div className="space-y-1">
                          <p className="font-semibold">{errorMessage}</p>
                          <p className="text-xs text-rose-700">
                            Alternatively, feel free to email us directly at{" "}
                            <a
                              href={`mailto:${siteConfig.contact.email}`}
                              className="underline font-bold hover:text-rose-950"
                            >
                              {siteConfig.contact.email}
                            </a>.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Inbound Query Context Pill */}
                    {inboundContext && (
                      <div className="p-3.5 rounded-lg bg-[#FFF0E0] border border-[#E5E1DA] flex items-center justify-between gap-3 text-xs text-[#CA6702]">
                        <div className="flex items-center gap-2 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#CA6702]" />
                          <span>{inboundContext}</span>
                        </div>
                        <span className="text-[11px] text-[#6B6560] hidden sm:inline">
                          Form pre-scoped
                        </span>
                      </div>
                    )}

                    {/* Step 1: Capabilities / Services Selector */}
                    <div>
                      <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#34312F] mb-3">
                        01 • What capabilities are you interested in? (Select all that apply)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {servicesData.map((s) => {
                          const isSelected = formData.selectedServices.includes(s.title);
                          return (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => handleServiceToggle(s.title)}
                              aria-pressed={isSelected}
                              className={`px-3.5 py-2 min-h-[40px] rounded-lg text-xs font-semibold transition-colors cursor-pointer border flex items-center ${
                                isSelected
                                  ? "bg-[#34312F] text-[#CA6702] border-[#34312F] shadow-xs"
                                  : "bg-[#F7F5F0] text-[#34312F] border-[#E5E1DA] hover:border-[#34312F]/30 hover:bg-white"
                              }`}
                            >
                              {s.title}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Anti-spam Honeypot Field */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Website (leave blank)</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      />
                    </div>

                    {/* Step 2: Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E5E1DA]">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-sans font-bold uppercase tracking-wider text-[#34312F] mb-2"
                        >
                          Full Name <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          required
                          aria-required="true"
                          value={formData.fullName}
                          onFocus={() => triggerFormStart("input_focus")}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full min-h-[46px] rounded-lg border border-[#E5E1DA] bg-[#F7F5F0] px-4 py-2.5 text-sm text-[#34312F] placeholder:text-[#6B6560]/60 focus:bg-white focus:border-[#CA6702] focus:ring-1 focus:ring-[#CA6702] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-sans font-bold uppercase tracking-wider text-[#34312F] mb-2"
                        >
                          Work Email <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          aria-required="true"
                          value={formData.email}
                          onFocus={() => triggerFormStart("input_focus")}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="sarah@company.com"
                          className="w-full min-h-[46px] rounded-lg border border-[#E5E1DA] bg-[#F7F5F0] px-4 py-2.5 text-sm text-[#34312F] placeholder:text-[#6B6560]/60 focus:bg-white focus:border-[#CA6702] focus:ring-1 focus:ring-[#CA6702] focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="companyName"
                          className="block text-xs font-sans font-bold uppercase tracking-wider text-[#34312F] mb-2"
                        >
                          Company / Organization Name
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData({ ...formData, companyName: e.target.value })
                          }
                          placeholder="e.g. Acme Health Corp"
                          className="w-full min-h-[46px] rounded-lg border border-[#E5E1DA] bg-[#F7F5F0] px-4 py-2.5 text-sm text-[#34312F] placeholder:text-[#6B6560]/60 focus:bg-white focus:border-[#CA6702] focus:ring-1 focus:ring-[#CA6702] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Step 3: Budget & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E5E1DA]">
                      <div>
                        <label
                          htmlFor="budgetRange"
                          className="block text-xs font-sans font-bold uppercase tracking-wider text-[#34312F] mb-2"
                        >
                          Estimated Budget (Optional)
                        </label>
                        <select
                          id="budgetRange"
                          value={formData.budgetRange}
                          onChange={(e) =>
                            setFormData({ ...formData, budgetRange: e.target.value })
                          }
                          className="w-full min-h-[46px] rounded-lg border border-[#E5E1DA] bg-[#F7F5F0] px-4 py-2.5 text-sm text-[#34312F] focus:bg-white focus:border-[#CA6702] focus:ring-1 focus:ring-[#CA6702] focus:outline-none transition-colors"
                        >
                          <option value="">Select an estimated range...</option>
                          {budgetOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="projectTimeline"
                          className="block text-xs font-sans font-bold uppercase tracking-wider text-[#34312F] mb-2"
                        >
                          Target Launch / Timeline
                        </label>
                        <select
                          id="projectTimeline"
                          value={formData.projectTimeline}
                          onChange={(e) =>
                            setFormData({ ...formData, projectTimeline: e.target.value })
                          }
                          className="w-full min-h-[46px] rounded-lg border border-[#E5E1DA] bg-[#F7F5F0] px-4 py-2.5 text-sm text-[#34312F] focus:bg-white focus:border-[#CA6702] focus:ring-1 focus:ring-[#CA6702] focus:outline-none transition-colors"
                        >
                          <option value="">Select expected timeline...</option>
                          {timelineOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Step 4: Project Details */}
                    <div className="pt-4 border-t border-[#E5E1DA]">
                      <label
                        htmlFor="projectDetails"
                        className="block text-xs font-sans font-bold uppercase tracking-wider text-[#34312F] mb-2"
                      >
                        Project Details &amp; Objectives <span className="text-rose-600">*</span>
                      </label>
                      <textarea
                        id="projectDetails"
                        rows={5}
                        required
                        aria-required="true"
                        value={formData.projectDetails}
                        onFocus={() => triggerFormStart("input_focus")}
                        onChange={(e) =>
                          setFormData({ ...formData, projectDetails: e.target.value })
                        }
                        placeholder="Tell us about the challenge you are trying to solve, target audience, and desired business outcomes..."
                        className="w-full rounded-lg border border-[#E5E1DA] bg-[#F7F5F0] p-4 text-sm text-[#34312F] placeholder:text-[#6B6560]/60 focus:bg-white focus:border-[#CA6702] focus:ring-1 focus:ring-[#CA6702] focus:outline-none transition-colors resize-y"
                      />
                    </div>

                    {/* Submit Button & Reassurance Signals */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <Button
                        type="submit"
                        variant="cyan"
                        size="lg"
                        disabled={status === "loading"}
                        withArrow={status !== "loading"}
                        className="w-full sm:w-auto min-h-[50px] font-bold"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin text-white" />
                            Transmitting Inquiry...
                          </>
                        ) : (
                          "Send Project Inquiry"
                        )}
                      </Button>

                      <div className="flex flex-col gap-1 sm:text-right text-center">
                        <span className="text-xs text-[#34312F] font-semibold flex items-center justify-center sm:justify-end gap-1.5">
                          <ShieldCheck className="h-4 w-4 text-[#CA6702]" />
                          Direct senior practitioner review
                        </span>
                        <span className="text-[11px] text-[#6B6560]">
                          Response within 24h • Strict NDA confidentiality • No spam
                        </span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Direct Studio Contact & Location */}
            <div className="lg:col-span-4 space-y-8">
              {/* Studio Info Card */}
              <div className="rounded-xl bg-white border border-[#E5E1DA] shadow-xs p-8 space-y-6">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#CA6702] block flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#CA6702]" />
                  Studio Headquarters
                </span>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#CA6702] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-[#34312F]">{siteConfig.name}</p>
                      <p className="text-[#6B6560]">{siteConfig.location.formatted}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#CA6702] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-[#34312F]">Direct Inquiries</p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-[#34312F] underline underline-offset-2 hover:text-[#CA6702] font-medium"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#CA6702] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-[#34312F]">Working Hours &amp; Response</p>
                      <p className="text-[#6B6560]">Mon – Fri: 9:00 AM – 6:00 PM PKT</p>
                      <p className="text-xs text-[#6B6560] mt-1">Guaranteed review within 24 business hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Note */}
              <div className="rounded-xl bg-[#34312F] text-white p-8 relative overflow-hidden shadow-sm border border-white/10">
                <div className="relative z-10 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#CA6702] font-bold">
                    Direct Partner Access
                  </span>
                  <h3 className="text-xl font-display font-bold text-white tracking-tight">
                    What happens after you submit?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E5E1DA] leading-relaxed font-sans font-normal">
                    Your inquiry is reviewed directly by our creative and technical leadership. If there is a strong mutual fit, we will arrange a 30-minute scoping call to map out actionable milestones and technical architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

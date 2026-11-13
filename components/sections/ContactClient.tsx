"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import {
  CheckCircle2,
  Mail,
  MapPin,
  Loader2,
  AlertCircle,
  Calendar,
  FileText,
  SearchCheck,
  Building2,
  ArrowRight
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { coreOfferings, siteConfig } from "@/data/siteData";

type InquiryType = "consultation" | "quote" | "audit";

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

  const [inquiryType, setInquiryType] = useState<InquiryType>("consultation");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    websiteUrl: "",
    selectedServices: [] as string[],
    budgetRange: "",
    projectTimeline: "",
    currentChallenge: "",
    projectDetails: "",
    website: "" // Honeypot anti-spam
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const hasStartedRef = useRef(false);

  const triggerFormStart = (trigger: string) => {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackEvent("lead_form_start", {
        form_id: "studio_inquiry",
        trigger
      });
    }
  };

  // Handle incoming query params (?type=audit, ?service=Brand%20Film, etc.)
  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam === "audit" || typeParam === "quote" || typeParam === "consultation") {
      setInquiryType(typeParam as InquiryType);
    }

    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setInquiryType("quote");
      setFormData((prev) => ({
        ...prev,
        selectedServices: prev.selectedServices.includes(serviceParam)
          ? prev.selectedServices
          : [...prev.selectedServices, serviceParam]
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
      return;
    }

    if (!formData.email.trim()) {
      setStatus("error");
      setErrorMessage("Please provide a valid work email address for our project response.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const payload = {
        inquiryType,
        ...formData
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to transmit inquiry at this moment.");
      }

      setStatus("success");
      setStatusMessage(data.message || "Thank you. Your message has been received.");
      trackEvent("lead_form_success", {
        form_id: "studio_inquiry",
        inquiry_type: inquiryType
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
      <section className="relative bg-white text-[#10172A] py-20 lg:py-28 border-b border-[#C5CCDC] overflow-hidden">
        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] px-3.5 py-1.5 rounded-md bg-[#F7F8FC] border border-[#C5CCDC] mb-6 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#3047D5]" />
                <span>07 // Work With Us</span>
              </span>

              <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-extrabold text-[#10172A] tracking-tight leading-[1.06]">
                Three ways to <span className="text-[#3047D5]">begin</span>.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#3A4454] leading-relaxed font-sans font-normal max-w-2xl">
                Every client relationship begins with a conversation. Whether you need a 30-minute introductory call, a fixed USD quote, or a complimentary X-Ray Audit, select the path that fits your goals:
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section id="inquiry-form" className="bg-[#F7F8FC] py-16 sm:py-24 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Interactive Multi-Mode Form */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl bg-white border border-[#C5CCDC] shadow-sm p-6 sm:p-10 lg:p-12">
                
                {/* 3 Inquiry Type Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 pb-8 border-b border-[#C5CCDC]">
                  <button
                    type="button"
                    onClick={() => {
                      setInquiryType("consultation");
                      setStatus("idle");
                    }}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      inquiryType === "consultation"
                        ? "bg-[#F7F8FC] border-[#3047D5] ring-2 ring-[#3047D5]/20 shadow-xs"
                        : "bg-white border-[#C5CCDC] hover:border-[#3047D5]/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#3047D5]">
                        Way 01
                      </span>
                      <Calendar className="h-4 w-4 text-[#3047D5]" />
                    </div>
                    <span className="text-sm font-display font-bold text-[#10172A] block">
                      Consultation
                    </span>
                    <span className="text-xs text-[#6A7180] mt-0.5 block">
                      30 mins · No cost
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setInquiryType("quote");
                      setStatus("idle");
                    }}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      inquiryType === "quote"
                        ? "bg-[#F7F8FC] border-[#3047D5] ring-2 ring-[#3047D5]/20 shadow-xs"
                        : "bg-white border-[#C5CCDC] hover:border-[#3047D5]/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#3047D5]">
                        Way 02
                      </span>
                      <FileText className="h-4 w-4 text-[#3047D5]" />
                    </div>
                    <span className="text-sm font-display font-bold text-[#10172A] block">
                      Request a Quote
                    </span>
                    <span className="text-xs text-[#6A7180] mt-0.5 block">
                      Fixed USD Proposal
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setInquiryType("audit");
                      setStatus("idle");
                    }}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      inquiryType === "audit"
                        ? "bg-[#F7F8FC] border-[#3047D5] ring-2 ring-[#3047D5]/20 shadow-xs"
                        : "bg-white border-[#C5CCDC] hover:border-[#3047D5]/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#3047D5]">
                        Way 03 · Free
                      </span>
                      <SearchCheck className="h-4 w-4 text-[#3047D5]" />
                    </div>
                    <span className="text-sm font-display font-bold text-[#10172A] block">
                      X-Ray Audit
                    </span>
                    <span className="text-xs text-[#6A7180] mt-0.5 block">
                      Diagnostic Report
                    </span>
                  </button>
                </div>

                {status === "success" ? (
                  <div className="text-center py-10 space-y-6">
                    <div className="h-16 w-16 bg-[#F7F8FC] text-[#3047D5] rounded-full flex items-center justify-center mx-auto border border-[#C5CCDC]">
                      <CheckCircle2 className="h-8 w-8 text-[#3047D5]" />
                    </div>

                    <div className="space-y-3 max-w-md mx-auto">
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#10172A] tracking-tight">
                        Inquiry Confirmed
                      </h2>
                      <p className="text-sm sm:text-base text-[#3A4454] leading-relaxed font-sans font-normal">
                        {statusMessage}
                      </p>
                      <p className="text-xs font-mono text-[#6A7180] pt-2">
                        Confirmation copy routed to: {formData.email}
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
                            websiteUrl: "",
                            selectedServices: [],
                            budgetRange: "",
                            projectTimeline: "",
                            currentChallenge: "",
                            projectDetails: "",
                            website: ""
                          });
                        }}
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Honeypot field for anti-spam */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website-field">Leave this empty</label>
                      <input
                        id="website-field"
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Mode Description Bar */}
                    <div className="p-4 rounded-xl bg-[#F7F8FC] border border-[#C5CCDC] mb-6">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#3047D5]" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10172A]">
                          {inquiryType === "consultation" && "Booking 30-Minute Consultation Call"}
                          {inquiryType === "quote" && "Requesting Guaranteed Fixed USD Proposal"}
                          {inquiryType === "audit" && "Requesting Complimentary 6-Area X-Ray Audit"}
                        </span>
                      </div>
                      <p className="text-xs text-[#6A7180] mt-1 font-sans">
                        {inquiryType === "consultation" && "Discuss your company, target buyers, and immediate goals. No cost, no commitment."}
                        {inquiryType === "quote" && "Detailed scope, deliverables, timeline, and fixed USD price delivered in 3 to 5 business days."}
                        {inquiryType === "audit" && "We review your brand, messaging, and proof across 6 credibility areas. Findings are yours to keep."}
                      </p>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#10172A] mb-2">
                          Your Full Name <span className="text-[#3047D5]">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => {
                            triggerFormStart("input_name");
                            setFormData({ ...formData, fullName: e.target.value });
                          }}
                          placeholder="e.g. Jane Sterling"
                          className="w-full px-4 py-3 rounded-lg border border-[#C5CCDC] bg-white text-[#10172A] placeholder:text-[#6A7180]/60 text-sm focus:border-[#3047D5] focus:ring-1 focus:ring-[#3047D5] outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#10172A] mb-2">
                          Work Email Address <span className="text-[#3047D5]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            triggerFormStart("input_email");
                            setFormData({ ...formData, email: e.target.value });
                          }}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-lg border border-[#C5CCDC] bg-white text-[#10172A] placeholder:text-[#6A7180]/60 text-sm focus:border-[#3047D5] focus:ring-1 focus:ring-[#3047D5] outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Company & Website Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="companyName" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#10172A] mb-2">
                          Company / Organization
                        </label>
                        <input
                          id="companyName"
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="e.g. Acme Technologies"
                          className="w-full px-4 py-3 rounded-lg border border-[#C5CCDC] bg-white text-[#10172A] placeholder:text-[#6A7180]/60 text-sm focus:border-[#3047D5] focus:ring-1 focus:ring-[#3047D5] outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="websiteUrl" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#10172A] mb-2">
                          Current Website URL
                        </label>
                        <input
                          id="websiteUrl"
                          type="text"
                          value={formData.websiteUrl}
                          onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                          placeholder="https://yourcompany.com"
                          className="w-full px-4 py-3 rounded-lg border border-[#C5CCDC] bg-white text-[#10172A] placeholder:text-[#6A7180]/60 text-sm focus:border-[#3047D5] focus:ring-1 focus:ring-[#3047D5] outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Quote Mode: Core Offerings Selection */}
                    {inquiryType === "quote" && (
                      <div className="space-y-3 pt-2">
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#10172A]">
                          Select Offering(s) of Interest
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {coreOfferings.map((offering) => {
                            const isSelected = formData.selectedServices.includes(offering.title);
                            return (
                              <button
                                key={offering.id}
                                type="button"
                                onClick={() => handleServiceToggle(offering.title)}
                                className={`px-3.5 py-2 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer ${
                                  isSelected
                                    ? "bg-[#3047D5] text-white shadow-brand-button"
                                    : "bg-[#F7F8FC] text-[#3A4454] border border-[#C5CCDC] hover:border-[#3047D5]"
                                }`}
                              >
                                {offering.title}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Quote Mode: Budget & Timeline */}
                    {inquiryType === "quote" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                        <div>
                          <label htmlFor="budgetRange" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#10172A] mb-2">
                            Budget Range (USD)
                          </label>
                          <select
                            id="budgetRange"
                            value={formData.budgetRange}
                            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-[#C5CCDC] bg-white text-[#10172A] text-sm focus:border-[#3047D5] outline-none"
                          >
                            <option value="">Select USD Budget Range</option>
                            {budgetOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="projectTimeline" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#10172A] mb-2">
                            Anticipated Timeline
                          </label>
                          <select
                            id="projectTimeline"
                            value={formData.projectTimeline}
                            onChange={(e) => setFormData({ ...formData, projectTimeline: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-[#C5CCDC] bg-white text-[#10172A] text-sm focus:border-[#3047D5] outline-none"
                          >
                            <option value="">Select Deployment Timeline</option>
                            {timelineOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Audit Mode Specifics */}
                    {inquiryType === "audit" && (
                      <div>
                        <label htmlFor="currentChallenge" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#10172A] mb-2">
                          Where is your credibility currently being lost?
                        </label>
                        <textarea
                          id="currentChallenge"
                          rows={3}
                          value={formData.currentChallenge}
                          onChange={(e) => setFormData({ ...formData, currentChallenge: e.target.value })}
                          placeholder="e.g. Our competitors look more established on video, or our best enterprise case studies are buried in slide decks."
                          className="w-full px-4 py-3 rounded-lg border border-[#C5CCDC] bg-white text-[#10172A] placeholder:text-[#6A7180]/60 text-sm focus:border-[#3047D5] outline-none resize-y"
                        />
                      </div>
                    )}

                    {/* Project Scope / Discussion Details */}
                    <div>
                      <label htmlFor="projectDetails" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#10172A] mb-2">
                        {inquiryType === "consultation" && "What are your immediate commercial goals?"}
                        {inquiryType === "quote" && "Project Scope & Target Deliverables"}
                        {inquiryType === "audit" && "Additional Notes or Specific Competitors to Benchmark"}
                      </label>
                      <textarea
                        id="projectDetails"
                        rows={4}
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                        placeholder={
                          inquiryType === "consultation"
                            ? "Tell us about your upcoming initiative, target decision-makers, or questions for our leadership team."
                            : inquiryType === "quote"
                            ? "Describe what needs to be filmed, designed, or positioned, and any specific deadlines."
                            : "Provide any competitor URLs or specific areas of concern you'd like our diagnostic team to evaluate."
                        }
                        className="w-full px-4 py-3 rounded-lg border border-[#C5CCDC] bg-white text-[#10172A] placeholder:text-[#6A7180]/60 text-sm focus:border-[#3047D5] outline-none resize-y"
                      />
                    </div>

                    {/* Error Banner */}
                    {status === "error" && errorMessage && (
                      <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-xs">
                        <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-4 px-6 rounded-lg text-sm font-bold text-white bg-[#3047D5] hover:bg-[#2538B0] transition-colors shadow-brand-button flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Transmitting Request...</span>
                          </>
                        ) : (
                          <>
                            <span>
                              {inquiryType === "consultation" && "Book Consultation (No Cost)"}
                              {inquiryType === "quote" && "Request Guaranteed Fixed Quote"}
                              {inquiryType === "audit" && "Request Complimentary X-Ray Audit"}
                            </span>
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-[#6A7180] text-center font-mono">
                      Guaranteed response within 24 business hours from Founder &amp; CEO Mehboob Akbar.
                    </p>
                  </form>
                )}

              </div>
            </div>

            {/* Right: Studio Credentials & Direct Channels */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Founder Direct Contact Card */}
              <div className="rounded-2xl bg-white border border-[#C5CCDC] p-6 sm:p-8 shadow-2xs space-y-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#3047D5] block">
                  Direct Studio Contact
                </span>
                <h3 className="text-xl font-display font-bold text-[#10172A]">
                  Mehboob Akbar
                </h3>
                <p className="text-xs font-mono text-[#6A7180]">
                  Founder and Chief Executive Officer
                </p>

                <div className="pt-2 border-t border-[#C5CCDC]/60 space-y-3">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2.5 text-xs text-[#10172A] hover:text-[#3047D5] transition-colors font-mono font-medium"
                  >
                    <Mail className="h-4 w-4 text-[#3047D5]" />
                    <span>{siteConfig.contact.email}</span>
                  </a>

                  <div className="flex items-start gap-2.5 text-xs text-[#6A7180] font-sans">
                    <MapPin className="h-4 w-4 text-[#3047D5] shrink-0 mt-0.5" />
                    <span>
                      Khyber Pakhtunkhwa, Pakistan. <br />
                      Serving clients worldwide.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-[#6A7180] font-sans">
                    <Building2 className="h-4 w-4 text-[#3047D5] shrink-0 mt-0.5" />
                    <span>
                      Advisory Board: Dubai, UAE
                    </span>
                  </div>
                </div>
              </div>

              {/* KreaitX Operating Guarantees */}
              <div className="rounded-2xl bg-white border border-[#C5CCDC] p-6 sm:p-8 shadow-2xs space-y-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#10172A] block">
                  Studio Standards
                </span>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#3047D5] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-display font-bold text-[#10172A] block">
                        Direct Senior Collaboration
                      </span>
                      <p className="text-[11px] text-[#6A7180] mt-0.5">
                        Zero account management layers or translation loss.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#3047D5] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-display font-bold text-[#10172A] block">
                        Fixed USD Pricing Policy
                      </span>
                      <p className="text-[11px] text-[#6A7180] mt-0.5">
                        Defined scope and guaranteed price before work starts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#3047D5] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-display font-bold text-[#10172A] block">
                        US Timezone Overlap
                      </span>
                      <p className="text-[11px] text-[#6A7180] mt-0.5">
                        Scheduled video syncs and rapid asynchronous updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </section>
    </>
  );
};

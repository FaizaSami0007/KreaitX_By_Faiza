"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Mail, MapPin, Clock, ArrowRight, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactHeroBg } from "@/components/ui/HeroBackgroundDesigns";
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    selectedServices: [] as string[],
    budgetRange: "",
    projectTimeline: "",
    projectDetails: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleServiceToggle = (title: string) => {
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
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.projectDetails.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, and Project Details).");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <>
      {/* Contact Page Hero with Decent & Minimal Background Design */}
      <section className="relative overflow-hidden bg-white text-slate-900 min-h-[640px] lg:min-h-[720px] flex items-center justify-center py-20 lg:py-28 border-b border-slate-200/80">
        {/* Bespoke Contact Hero Background */}
        <ContactHeroBg />

        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-700 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 mb-6 backdrop-blur-md shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-purple-600 animate-pulse" />
                <span>Direct Collaboration × Global Partnerships</span>
              </span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-bold text-slate-950 tracking-tight leading-[1.05]">
                Let&apos;s Create{" "}
                <span className="font-serif italic font-normal bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Together
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-sans font-normal max-w-2xl">
                Tell us what you&apos;re building. We&apos;ll help turn your ideas into real commercial opportunities, clear technical scopes, and actionable next steps.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href="#inquiry-form"
                  className="inline-flex items-center justify-center px-8 py-3.5 min-h-[50px] rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-700 hover:to-indigo-700 shadow-button transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  Fill Project Brief ↓
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center justify-center px-6 py-3.5 min-h-[50px] rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5"
                >
                  Direct Email Inquiry
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section id="inquiry-form" className="bg-slate-50/50 py-16 sm:py-24 border-b border-slate-200/80">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Interactive Form */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl bg-white border border-slate-200/80 shadow-card p-6 sm:p-10 lg:p-12">
                {status === "success" ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="h-16 w-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto border border-purple-200 shadow-subtle">
                      <CheckCircle2 className="h-8 w-8 text-purple-600" />
                    </div>

                    <div className="space-y-2 max-w-md mx-auto">
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
                        Inquiry Received
                      </h2>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans font-normal">
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
                            projectDetails: ""
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
                      <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-rose-600" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Step 1: Capabilities / Services Selector */}
                    <div>
                      <label className="block text-xs font-sans font-bold uppercase tracking-wider text-slate-900 mb-3">
                        01 • What services are you interested in? (Select all that apply)
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {servicesData.map((s) => {
                          const isSelected = formData.selectedServices.includes(s.title);
                          return (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => handleServiceToggle(s.title)}
                              className={`px-4 py-2.5 min-h-[44px] rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer border flex items-center ${
                                isSelected
                                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent shadow-button"
                                  : "bg-slate-50 text-slate-700 border-slate-200/80 hover:border-purple-300 hover:bg-purple-50/50 hover:text-purple-700"
                              }`}
                            >
                              {s.title}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 2: Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-sans font-bold uppercase tracking-wider text-slate-900 mb-2"
                        >
                          Full Name <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full min-h-[48px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-purple-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-sans font-bold uppercase tracking-wider text-slate-900 mb-2"
                        >
                          Work Email <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="sarah@company.com"
                          className="w-full min-h-[48px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-purple-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="companyName"
                          className="block text-xs font-sans font-bold uppercase tracking-wider text-slate-900 mb-2"
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
                          className="w-full min-h-[48px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-purple-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Step 3: Budget & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                      <div>
                        <label
                          htmlFor="budgetRange"
                          className="block text-xs font-sans font-bold uppercase tracking-wider text-slate-900 mb-2"
                        >
                          Estimated Budget (Optional)
                        </label>
                        <select
                          id="budgetRange"
                          value={formData.budgetRange}
                          onChange={(e) =>
                            setFormData({ ...formData, budgetRange: e.target.value })
                          }
                          className="w-full min-h-[48px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-purple-500 focus:outline-none transition-colors"
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
                          className="block text-xs font-sans font-bold uppercase tracking-wider text-slate-900 mb-2"
                        >
                          Target Launch / Timeline
                        </label>
                        <select
                          id="projectTimeline"
                          value={formData.projectTimeline}
                          onChange={(e) =>
                            setFormData({ ...formData, projectTimeline: e.target.value })
                          }
                          className="w-full min-h-[48px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-purple-500 focus:outline-none transition-colors"
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
                    <div className="pt-4 border-t border-slate-100">
                      <label
                        htmlFor="projectDetails"
                        className="block text-xs font-sans font-bold uppercase tracking-wider text-slate-900 mb-2"
                      >
                        Project Details &amp; Objectives <span className="text-rose-600">*</span>
                      </label>
                      <textarea
                        id="projectDetails"
                        rows={5}
                        required
                        value={formData.projectDetails}
                        onChange={(e) =>
                          setFormData({ ...formData, projectDetails: e.target.value })
                        }
                        placeholder="Tell us about the problem you are trying to solve, target goals, audience, and any current constraints..."
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-purple-500 focus:outline-none transition-colors resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={status === "loading"}
                        withArrow={status !== "loading"}
                        className="w-full sm:w-auto min-h-[50px]"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Transmitting Inquiry...
                          </>
                        ) : (
                          "Send Inquiry"
                        )}
                      </Button>

                      <span className="text-xs text-slate-500 text-center sm:text-left">
                        Strict confidentiality guaranteed. No spam ever.
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Direct Studio Contact & Location */}
            <div className="lg:col-span-4 space-y-8">
              {/* Studio Info Card */}
              <div className="rounded-3xl bg-white border border-slate-200/80 shadow-card p-8 space-y-6">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-purple-700 block">
                  Studio Headquarters
                </span>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-slate-900">{siteConfig.name}</p>
                      <p className="text-slate-600">{siteConfig.location.formatted}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-slate-900">Direct Inquiries</p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-purple-700 underline underline-offset-2 hover:text-purple-900 font-medium"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-slate-900">Working Hours &amp; Response</p>
                      <p className="text-slate-600">Mon – Fri: 9:00 AM – 6:00 PM PKT</p>
                      <p className="text-xs text-slate-500 mt-1">Guaranteed reply &lt; 24 business hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Note */}
              <div className="rounded-3xl bg-slate-950 text-white p-8 relative overflow-hidden shadow-xl border border-slate-800">
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 space-y-3">
                  <span className="text-xs font-sans uppercase tracking-widest text-cyan-400 font-bold">
                    Direct Partner Access
                  </span>
                  <h3 className="text-xl font-display font-bold text-white tracking-tight">
                    What happens after you submit?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-normal">
                    Your inquiry is reviewed directly by our creative and technical leadership. If there is a strong mutual fit, we will arrange a 30-minute scoping call to map out actionable next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

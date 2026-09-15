"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Mail, MapPin, Clock, ArrowRight, Loader2, Sparkles, AlertCircle } from "lucide-react";
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
      {/* Cinematic Contact Page Hero with User-Provided Art */}
      <section className="relative overflow-hidden bg-[#14213D] text-[#F5F6F2] min-h-[75vh] flex items-center justify-center py-20 lg:py-28 border-b border-[#F5F6F2]/10">
        {/* User-Provided Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero-bg.png"
            alt="Let's Create Together — From Peshawar to a More Creative Tomorrow"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center select-none"
          />
          {/* Atmospheric gradient overlay for text readability */}
          <div className="absolute inset-0 bg-[#14213D]/70 via-[#14213D]/50 to-[#14213D]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14213D] via-transparent to-[#14213D]/60" />
        </div>

        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#B7B98A] px-4 py-1.5 rounded-full bg-white/10 border border-[#F5F6F2]/15 mb-6 inline-block backdrop-blur-md">
                Direct Collaboration × Global Partnerships
              </span>
              <h1 className="text-[clamp(28px,5vw,56px)] font-semibold text-[#F5F6F2] tracking-[-0.04em] leading-[1.08]">
                Let&apos;s Create{" "}
                <span className="font-serif-italic font-normal text-[#B7B98A]">
                  Together
                </span>.
              </h1>
              <p className="mt-6 text-[clamp(14px,1.5vw,18px)] text-[#F5F6F2]/80 leading-relaxed font-normal max-w-2xl">
                Tell us what you&apos;re building. We&apos;ll help turn your ideas into real commercial opportunities, clear technical scopes, and actionable next steps.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <a
                  href="#inquiry-form"
                  className="inline-flex items-center justify-center px-7 py-3 min-h-[48px] rounded-full text-xs sm:text-sm font-semibold text-[#14213D] bg-[#F5F6F2] hover:bg-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  Fill Project Brief ↓
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-xs sm:text-sm font-medium text-[#F5F6F2] bg-white/10 hover:bg-white/20 border border-[#F5F6F2]/20 backdrop-blur-md transition-all duration-200 w-full sm:w-auto"
                >
                  Direct Email Inquiry
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section id="inquiry-form" className="bg-[#F5F6F2] py-16 sm:py-24">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Interactive Form */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#14213D]/10 p-6 sm:p-10 lg:p-12 shadow-subtle">
                {status === "success" ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="h-16 w-16 bg-[#B7B98A]/20 text-[#14213D] rounded-full flex items-center justify-center mx-auto border border-[#B7B98A]">
                      <CheckCircle2 className="h-8 w-8 text-[#14213D]" />
                    </div>

                    <div className="space-y-2 max-w-md mx-auto">
                      <h2 className="text-2xl sm:text-3xl font-semibold text-[#14213D] tracking-tight">
                        Inquiry Received
                      </h2>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
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
                      <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Step 1: Capabilities / Services Selector */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold mb-3">
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
                              className={`px-3.5 py-2.5 min-h-[44px] rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer border flex items-center ${
                                isSelected
                                  ? "bg-[#14213D] text-[#F5F6F2] border-[#14213D] shadow-sm"
                                  : "bg-[#F5F6F2] text-[#14213D] border-[#14213D]/10 hover:border-[#14213D]/30 hover:bg-slate-100"
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
                          className="block text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold mb-2"
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
                          className="w-full min-h-[48px] rounded-xl border border-slate-200 bg-[#F5F6F2] px-4 py-3 text-sm text-[#111111] placeholder:text-slate-400 focus:bg-white focus:border-[#B7B98A] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold mb-2"
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
                          className="w-full min-h-[48px] rounded-xl border border-slate-200 bg-[#F5F6F2] px-4 py-3 text-sm text-[#111111] placeholder:text-slate-400 focus:bg-white focus:border-[#B7B98A] focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="companyName"
                          className="block text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold mb-2"
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
                          className="w-full min-h-[48px] rounded-xl border border-slate-200 bg-[#F5F6F2] px-4 py-3 text-sm text-[#111111] placeholder:text-slate-400 focus:bg-white focus:border-[#B7B98A] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Step 3: Budget & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                      <div>
                        <label
                          htmlFor="budgetRange"
                          className="block text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold mb-2"
                        >
                          Estimated Budget (Optional)
                        </label>
                        <select
                          id="budgetRange"
                          value={formData.budgetRange}
                          onChange={(e) =>
                            setFormData({ ...formData, budgetRange: e.target.value })
                          }
                          className="w-full min-h-[48px] rounded-xl border border-slate-200 bg-[#F5F6F2] px-4 py-3 text-sm text-[#111111] focus:bg-white focus:border-[#B7B98A] focus:outline-none transition-colors"
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
                          className="block text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold mb-2"
                        >
                          Target Launch / Timeline
                        </label>
                        <select
                          id="projectTimeline"
                          value={formData.projectTimeline}
                          onChange={(e) =>
                            setFormData({ ...formData, projectTimeline: e.target.value })
                          }
                          className="w-full min-h-[48px] rounded-xl border border-slate-200 bg-[#F5F6F2] px-4 py-3 text-sm text-[#111111] focus:bg-white focus:border-[#B7B98A] focus:outline-none transition-colors"
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
                        className="block text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold mb-2"
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
                        className="w-full rounded-xl border border-slate-200 bg-[#F5F6F2] p-4 text-sm text-[#111111] placeholder:text-slate-400 focus:bg-white focus:border-[#B7B98A] focus:outline-none transition-colors resize-y"
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
                        className="w-full sm:w-auto min-h-[48px]"
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
              <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#14213D]/10 p-8 shadow-subtle space-y-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold block">
                  Studio Headquarters
                </span>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#14213D] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-[#111111]">{siteConfig.name}</p>
                      <p className="text-slate-600">{siteConfig.location.formatted}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#14213D] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-[#111111]">Direct Inquiries</p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-[#14213D] underline underline-offset-2 hover:text-[#B7B98A]"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#14213D] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-[#111111]">Working Hours &amp; Response</p>
                      <p className="text-slate-600">Mon – Fri: 9:00 AM – 6:00 PM PKT</p>
                      <p className="text-xs text-slate-500 mt-1">Guaranteed reply &lt; 24 business hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Note */}
              <div className="rounded-2xl sm:rounded-3xl bg-[#14213D] text-[#F5F6F2] p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-grid opacity-30" />
                <div className="relative z-10 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#B7B98A]">
                    Direct Partner Access
                  </span>
                  <h3 className="text-xl font-semibold text-[#F5F6F2] tracking-tight">
                    What happens after you submit?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F5F6F2]/80 leading-relaxed font-normal">
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

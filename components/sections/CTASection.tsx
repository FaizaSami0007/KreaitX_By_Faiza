"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, FileText, SearchCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/siteData";

export interface CTASectionProps {
  bg?: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ bg, className }) => {
  void bg;
  return (
    <section className={`bg-white py-20 sm:py-24 lg:py-28 border-t border-[#C5CCDC] text-[#10172A] relative overflow-hidden ${className || ""}`}>
      <Container size="default" className="relative z-10 max-w-[1320px]">
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3047D5]" aria-hidden="true" />
              <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5]">
                07 // Work With Us
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.5rem)] font-extrabold text-[#10172A] tracking-tight leading-[1.08]">
              Three ways to <span className="text-[#3047D5]">begin</span>.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#6A7180] leading-relaxed font-sans font-normal max-w-xl mx-auto">
              Every partnership starts with a conversation. Choose the path that fits your immediate commercial needs:
            </p>
          </div>
        </Reveal>

        {/* 3 Starting Points Grid (Exact from PDF Page 8) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Way 01: Book Consultation */}
          <StaggerItem>
            <div className="h-full rounded-2xl bg-[#F7F8FC] p-6 sm:p-8 border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200 flex flex-col justify-between shadow-2xs group">
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#C5CCDC]">
                  <span className="text-xs font-mono font-bold text-[#3047D5] uppercase tracking-wider">
                    Way 01
                  </span>
                  <Calendar className="h-4 w-4 text-[#6A7180] group-hover:text-[#3047D5] transition-colors" />
                </div>

                <h3 className="text-xl font-display font-bold text-[#10172A] tracking-tight">
                  Book a Consultation
                </h3>

                <p className="mt-2.5 text-xs font-mono text-[#3047D5] font-semibold">
                  30 minutes · No cost, no commitment
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#6A7180] leading-relaxed font-sans">
                  A focused video call to discuss your company, current positioning, and immediate commercial goals. We determine whether KreaitX is the right partner.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C5CCDC]/60">
                <Link
                  href="/contact?type=consultation"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg text-xs font-bold text-white bg-[#3047D5] hover:bg-[#2538B0] transition-colors shadow-brand-button"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </StaggerItem>

          {/* Way 02: Request Quote */}
          <StaggerItem>
            <div className="h-full rounded-2xl bg-[#F7F8FC] p-6 sm:p-8 border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200 flex flex-col justify-between shadow-2xs group">
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#C5CCDC]">
                  <span className="text-xs font-mono font-bold text-[#3047D5] uppercase tracking-wider">
                    Way 02
                  </span>
                  <FileText className="h-4 w-4 text-[#6A7180] group-hover:text-[#3047D5] transition-colors" />
                </div>

                <h3 className="text-xl font-display font-bold text-[#10172A] tracking-tight">
                  Request a Quote
                </h3>

                <p className="mt-2.5 text-xs font-mono text-[#3047D5] font-semibold">
                  3 to 5 business days turnaround
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#6A7180] leading-relaxed font-sans">
                  Share your project requirements and receive a detailed proposal with clear scope, timeline, deliverables, and guaranteed fixed price in USD.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C5CCDC]/60">
                <Link
                  href="/contact?type=quote"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg text-xs font-bold text-[#10172A] bg-white hover:bg-[#F7F8FC] hover:text-[#3047D5] border border-[#C5CCDC] hover:border-[#3047D5] transition-colors shadow-2xs"
                >
                  <span>Request a Fixed Quote</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </StaggerItem>

          {/* Way 03: Request X-Ray Audit */}
          <StaggerItem>
            <div className="h-full rounded-2xl bg-white p-6 sm:p-8 border border-[#3047D5]/40 hover:border-[#3047D5] transition-all duration-200 flex flex-col justify-between shadow-xs group ring-1 ring-[#3047D5]/20">
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#C5CCDC]">
                  <span className="text-xs font-mono font-bold text-[#3047D5] uppercase tracking-wider">
                    Way 03 · Recommended
                  </span>
                  <SearchCheck className="h-4 w-4 text-[#3047D5]" />
                </div>

                <h3 className="text-xl font-display font-bold text-[#10172A] tracking-tight">
                  Request an X-Ray Audit
                </h3>

                <p className="mt-2.5 text-xs font-mono text-[#3047D5] font-semibold">
                  Complimentary · Zero commitment
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#6A7180] leading-relaxed font-sans">
                  A comprehensive review of your current marketing and positioning assets, identifying your credibility gap and practical recommendations. Yours to keep.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C5CCDC]/60">
                <Link
                  href="/contact?type=audit"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg text-xs font-bold text-white bg-[#3047D5] hover:bg-[#2538B0] transition-colors shadow-brand-button"
                >
                  <span>Request Complimentary Audit</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>

        {/* Studio Direct Contact & Office Bar (Exact from PDF Page 8) */}
        <Reveal yOffset={20}>
          <div className="mt-12 sm:mt-16 rounded-xl bg-[#F7F8FC] border border-[#C5CCDC] p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              
              {/* Direct Email */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6A7180] block">
                  Direct Email
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm font-display font-bold text-[#3047D5] hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
                <p className="text-xs text-[#6A7180] font-sans">
                  Direct response from Founder &amp; CEO
                </p>
              </div>

              {/* Studio Location */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6A7180] block">
                  Based In
                </span>
                <p className="text-sm font-display font-bold text-[#10172A]">
                  Khyber Pakhtunkhwa, Pakistan
                </p>
                <p className="text-xs text-[#6A7180] font-sans">
                  Serving clients worldwide · US timezone overlap
                </p>
              </div>

              {/* Advisory Board */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6A7180] block">
                  Advisory Board
                </span>
                <p className="text-sm font-display font-bold text-[#10172A]">
                  Dubai, United Arab Emirates
                </p>
                <p className="text-xs text-[#6A7180] font-sans">
                  Cross-border governance and commercial strategy
                </p>
              </div>

            </div>
          </div>
        </Reveal>

      </Container>
    </section>
  );
};

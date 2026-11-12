"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { whyKreaitXPillars } from "@/data/siteData";

export const WhyKreaitXSection: React.FC = () => {
  return (
    <section id="why" className="bg-[#F7F8FC] py-20 sm:py-24 lg:py-28 border-b border-[#C5CCDC]">
      <Container size="default">
        
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#3047D5] mb-3">
              05 — WHY KREAITX
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10172A] tracking-tight leading-[1.12]">
              Proof first.{" "}
              <span className="text-[#3047D5]">Production second.</span>
            </h2>
          </div>
        </Reveal>

        {/* 4 Pillars with Royal Blue Top Rule */}
        <Reveal yOffset={20}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whyKreaitXPillars.map((pillar) => (
              <div key={pillar.title} className="pt-4 relative flex flex-col">
                <div className="w-full h-[3px] bg-[#3047D5] absolute top-0 left-0" aria-hidden="true" />
                
                <h3 className="text-base sm:text-lg font-display font-bold text-[#10172A] mt-3 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#6A7180] leading-relaxed font-sans font-normal">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* "Who We Work With" Structured Panel */}
        <Reveal yOffset={16}>
          <div className="rounded-xl bg-white border border-[#C5CCDC] p-8 sm:p-10 mb-8 shadow-xs">
            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#3047D5] mb-2">
              WHO WE WORK WITH
            </p>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#10172A] mb-3">
              Companies with genuine capability that the market does not yet take seriously.
            </h3>
            <p className="text-sm sm:text-base text-[#6A7180] font-sans leading-relaxed mb-6 max-w-3xl">
              B2B service, technology, engineering and professional firms with real clients and results. We are most valuable when a company is:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm text-[#10172A] font-medium font-sans">
              <div className="flex items-center gap-2">
                <span className="text-[#3047D5] font-bold">—</span>
                <span>Raising investment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#3047D5] font-bold">—</span>
                <span>Entering a new market</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#3047D5] font-bold">—</span>
                <span>Bidding for major contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#3047D5] font-bold">—</span>
                <span>Losing deals to weaker competitors</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#3047D5] font-bold">—</span>
                <span>Rebranding after a period of growth</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* "Working with Clients in the United States & Worldwide" Panel */}
        <Reveal yOffset={16}>
          <div className="rounded-xl bg-white border border-[#C5CCDC] p-8 sm:p-10 mb-12 shadow-xs">
            <h3 className="text-lg font-display font-bold text-[#10172A] mb-6">
              Working with clients in the United States and worldwide
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-[#C5CCDC]">
              <div className="pt-4">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6A7180] mb-1">
                  Scheduling
                </p>
                <p className="text-sm sm:text-base text-[#10172A] font-semibold font-sans">
                  Calls arranged in your time zone
                </p>
              </div>

              <div className="pt-4">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6A7180] mb-1">
                  Billing
                </p>
                <p className="text-sm sm:text-base text-[#10172A] font-semibold font-sans">
                  Fixed quotes and invoicing in USD
                </p>
              </div>

              <div className="pt-4">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6A7180] mb-1">
                  Team model
                </p>
                <p className="text-sm sm:text-base text-[#10172A] font-semibold font-sans">
                  Core team plus specialists (pay for skill, not agency overhead)
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Next Step Action Bar */}
        <Reveal yOffset={16}>
          <div className="rounded-xl bg-white border border-[#C5CCDC] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#3047D5] mb-1">
                NEXT STEP
              </p>
              <p className="text-sm sm:text-base font-display font-bold text-[#10172A]">
                Tell us about your project and receive a fixed-price quote.
              </p>
            </div>
            <Button
              href="/contact?type=quote"
              variant="primary"
              size="md"
              className="shrink-0 w-full sm:w-auto font-bold text-sm shadow-brand-button px-6"
            >
              Request a quote
            </Button>
          </div>
        </Reveal>

      </Container>
    </section>
  );
};

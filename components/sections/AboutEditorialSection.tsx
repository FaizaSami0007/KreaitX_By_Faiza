"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { companyFacts, theChallengeWeSolve } from "@/data/siteData";

export const AboutEditorialSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#F7F8FC] py-20 sm:py-24 lg:py-28 border-b border-[#C5CCDC]">
      <Container size="default">
        
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#3047D5] mb-3">
              01 — ABOUT KREAITX
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10172A] tracking-tight leading-[1.12]">
              Strong companies often look ordinary.{" "}
              <span className="text-[#3047D5] block sm:inline">We change that.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#3A4454] leading-relaxed font-sans font-normal">
              KreaitX is a brand film and marketing studio. We identify the proof a business already has, shape it into one clear claim, and produce the films, design and campaigns that make that claim credible to buyers, partners and investors.
            </p>
          </div>
        </Reveal>

        {/* 4-Column Structured Facts Bar */}
        <Reveal yOffset={16}>
          <div className="grid grid-cols-2 md:grid-cols-4 border-y border-[#C5CCDC] py-6 mb-16 sm:mb-20 bg-white">
            {companyFacts.map((fact, index) => (
              <div
                key={fact.label}
                className={`p-4 sm:p-6 ${
                  index !== 0 ? "border-l border-[#C5CCDC]" : ""
                }`}
              >
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#6A7180] mb-2">
                  {fact.label}
                </p>
                <p className="text-base sm:text-lg font-display font-bold text-[#10172A]">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* The Challenge We Solve */}
        <Reveal yOffset={20}>
          <div className="mb-14">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#10172A] mb-8">
              The challenge we solve
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {theChallengeWeSolve.map((item) => (
                <div key={item.title} className="flex flex-col pt-4 relative">
                  {/* Royal Blue Top Rule from Company Profile */}
                  <div className="w-full h-[3px] bg-[#3047D5] absolute top-0 left-0" aria-hidden="true" />
                  
                  <h4 className="text-lg font-display font-bold text-[#10172A] mt-4 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#6A7180] leading-relaxed font-sans font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bold Editorial Takeaway Callout */}
        <Reveal yOffset={16}>
          <div className="rounded-xl bg-white border border-[#C5CCDC] p-8 sm:p-10 mb-12 text-center shadow-xs">
            <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-[#10172A]">
              More content will not close this gap.{" "}
              <span className="text-[#3047D5]">Better evidence will.</span>
            </p>
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
                Find out where your business is being undersold.
              </p>
            </div>
            <Button
              href="/contact?type=consultation"
              variant="primary"
              size="md"
              className="shrink-0 w-full sm:w-auto font-bold text-sm shadow-brand-button px-6"
            >
              Book a consultation
            </Button>
          </div>
        </Reveal>

      </Container>
    </section>
  );
};

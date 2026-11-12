"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { approachStages, xrayAuditAreas } from "@/data/siteData";

export const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="bg-white py-20 sm:py-24 lg:py-28 border-b border-[#C5CCDC]">
      <Container size="default">
        
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#3047D5] mb-3">
              02 — OUR APPROACH
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10172A] tracking-tight leading-[1.12]">
              A clear process, from first call to{" "}
              <span className="text-[#3047D5]">final delivery.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#3A4454] leading-relaxed font-sans font-normal">
              Nothing is filmed or designed until we know exactly what it needs to prove.
            </p>
          </div>
        </Reveal>

        {/* 3 Numbered Stages with Top Royal Blue Accent Line */}
        <Reveal yOffset={20}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-12">
            {approachStages.map((stage) => (
              <div key={stage.number} className="pt-4 relative flex flex-col">
                <div className="w-full h-[3px] bg-[#3047D5] absolute top-0 left-0" aria-hidden="true" />
                
                <span className="text-xs font-mono font-bold text-[#3047D5] mt-3 mb-1">
                  {stage.number}
                </span>
                <h3 className="text-lg font-display font-bold text-[#10172A] mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6A7180] leading-relaxed font-sans font-normal">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#6A7180] font-sans mb-16 sm:mb-20">
            Clients on a monthly retainer receive a quarterly re-assessment showing measurable change over time.
          </p>
        </Reveal>

        {/* The X-Ray Audit Table: Six Areas We Assess */}
        <Reveal yOffset={20}>
          <div className="mb-14">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#10172A] mb-6">
              The X-Ray Audit: six areas we assess
            </h3>

            <div className="border-t border-[#C5CCDC]">
              {xrayAuditAreas.map((item) => (
                <div
                  key={item.area}
                  className="grid grid-cols-1 sm:grid-cols-12 py-4 sm:py-4.5 border-b border-[#C5CCDC] gap-2 sm:gap-6 items-baseline"
                >
                  <div className="sm:col-span-3 text-sm sm:text-base font-display font-bold text-[#10172A]">
                    {item.area}
                  </div>
                  <div className="sm:col-span-9 text-sm sm:text-base text-[#6A7180] font-sans">
                    {item.question}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Next Step Action Bar */}
        <Reveal yOffset={16}>
          <div className="rounded-xl bg-[#F7F8FC] border border-[#C5CCDC] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#3047D5] mb-1">
                NEXT STEP
              </p>
              <p className="text-sm sm:text-base font-display font-bold text-[#10172A]">
                Request a complimentary X-Ray Audit. The findings are yours to keep.
              </p>
            </div>
            <Button
              href="/contact?type=audit"
              variant="primary"
              size="md"
              className="shrink-0 w-full sm:w-auto font-bold text-sm shadow-brand-button px-6"
            >
              Request an audit
            </Button>
          </div>
        </Reveal>

      </Container>
    </section>
  );
};

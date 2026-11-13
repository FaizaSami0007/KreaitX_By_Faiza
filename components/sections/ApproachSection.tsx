"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { threeStepApproach, xrayAuditAreas } from "@/data/siteData";

export const ApproachSection: React.FC = () => {
  const [activeArea, setActiveArea] = useState<string>(xrayAuditAreas[0]?.id || "substance");

  return (
    <section className="bg-[#F7F8FC] py-20 sm:py-24 lg:py-28 border-b border-[#C5CCDC] text-[#10172A] relative overflow-hidden">
      <Container size="default" className="relative z-10 max-w-[1320px]">
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#3047D5]" aria-hidden="true" />
                <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5]">
                  02 // Our Approach
                </span>
              </div>
              <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.5rem)] font-extrabold text-[#10172A] tracking-tight leading-[1.08]">
                Clarity before commitment. <br />
                <span className="text-[#3047D5]">Results without friction.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#6A7180] leading-relaxed font-sans font-normal">
                A simple, disciplined three-stage engagement model that eliminates agency bureaucracy, protects your time, and guarantees fixed-price USD terms before work begins.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/process"
                className="group inline-flex items-center text-sm font-sans font-bold text-[#10172A] hover:text-[#3047D5] transition-colors"
              >
                <span>Explore Full Process Detail</span>
                <ArrowRight className="ml-1.5 h-4 w-4 text-[#3047D5] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* 3 Process Stages (Exact from PDF Page 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {threeStepApproach.map((stage) => (
            <Reveal key={stage.number} yOffset={20}>
              <div className="h-full rounded-xl bg-white p-6 sm:p-8 border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200 flex flex-col justify-between shadow-2xs group">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#C5CCDC]">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3047D5]">
                      Stage {stage.number}
                    </span>
                    <span className="text-xs font-mono text-[#6A7180] font-medium px-2 py-0.5 rounded bg-[#F7F8FC] border border-[#C5CCDC]">
                      {stage.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#10172A] tracking-tight group-hover:text-[#3047D5] transition-colors">
                    {stage.title}
                  </h3>

                  <p className="mt-3.5 text-sm sm:text-base text-[#6A7180] leading-relaxed font-sans">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C5CCDC]/60">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#10172A] block mb-1">
                    Direct Output:
                  </span>
                  <span className="text-xs text-[#3A4454] font-medium leading-relaxed block">
                    {stage.output}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The X-Ray Audit Framework (6 Assessment Areas from PDF Page 3) */}
        <Reveal yOffset={24}>
          <div className="mt-14 sm:mt-20 rounded-2xl bg-white border border-[#C5CCDC] p-6 sm:p-10 lg:p-12 shadow-xs">
            <div className="max-w-3xl mb-8 sm:mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] block mb-2">
                Diagnostic Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#10172A] tracking-tight">
                The X-Ray Audit Framework
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#6A7180] leading-relaxed font-sans">
                Before producing any film or marketing asset, we assess six core areas of your current presence to identify where your credibility is being lost:
              </p>
            </div>

            {/* Interactive Grid of the 6 Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {xrayAuditAreas.map((area, idx) => {
                const isSelected = activeArea === area.id;
                return (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setActiveArea(area.id)}
                    className={`text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#F7F8FC] border-[#3047D5] shadow-xs ring-1 ring-[#3047D5]"
                        : "bg-white border-[#C5CCDC] hover:border-[#3047D5]/50 hover:bg-[#F7F8FC]/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#3047D5] uppercase tracking-wider">
                        0{idx + 1} · {area.area}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="h-4 w-4 text-[#3047D5]" />
                      )}
                    </div>
                    <p className="text-sm font-display font-bold text-[#10172A] leading-snug">
                      &ldquo;{area.question}&rdquo;
                    </p>
                    <p className="mt-2 text-xs text-[#6A7180] font-sans leading-relaxed">
                      {area.businessValue}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Audit Request Banner */}
            <div className="mt-8 pt-8 border-t border-[#C5CCDC] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F7F8FC] p-6 rounded-xl">
              <div>
                <h4 className="text-base font-display font-bold text-[#10172A]">
                  Request a complimentary X-Ray Audit for your business
                </h4>
                <p className="text-xs sm:text-sm text-[#6A7180] font-sans">
                  We audit your current marketing and deliver a Credibility Gap Report within 3 to 5 business days. Zero cost.
                </p>
              </div>

              <Link
                href="/contact?type=audit"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#3047D5] hover:bg-[#2538B0] transition-colors shrink-0 shadow-brand-button"
              >
                <span>Request Complimentary Audit</span>
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};


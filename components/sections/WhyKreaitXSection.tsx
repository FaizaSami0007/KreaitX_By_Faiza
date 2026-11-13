"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { whyKreaitXDifferentiators, targetAudience } from "@/data/siteData";

export const WhyKreaitXSection: React.FC = () => {
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
                  05 // Why KreaitX
                </span>
              </div>
              <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.5rem)] font-extrabold text-[#10172A] tracking-tight leading-[1.08]">
                Four differentiators. <br />
                <span className="text-[#3047D5]">Built for capable companies.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#6A7180] leading-relaxed font-sans font-normal">
                We combine documentary-caliber film production, evidence-led marketing strategy, and transparent USD pricing without agency bureaucracy.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/why-kreaitx"
                className="group inline-flex items-center text-sm font-sans font-bold text-[#10172A] hover:text-[#3047D5] transition-colors"
              >
                <span>Explore Full Why KreaitX Page</span>
                <ArrowRight className="ml-1.5 h-4 w-4 text-[#3047D5] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* 4 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyKreaitXDifferentiators.map((diff) => (
            <Reveal key={diff.number} yOffset={20}>
              <div className="h-full rounded-xl bg-white p-6 sm:p-7 border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200 flex flex-col justify-between shadow-2xs group">
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#C5CCDC]">
                    <span className="text-xs font-mono font-bold text-[#3047D5]">
                      {diff.number}
                    </span>
                    <span className="text-[11px] font-mono text-[#6A7180] uppercase tracking-wider">
                      Differentiator
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#10172A] tracking-tight group-hover:text-[#3047D5] transition-colors">
                    {diff.title}
                  </h3>

                  <p className="mt-2 text-xs font-sans font-semibold text-[#3047D5]">
                    {diff.summary}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#6A7180] leading-relaxed font-sans">
                    {diff.description}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-[#C5CCDC]/60 flex items-center gap-1.5 text-[11px] font-mono text-[#10172A]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#3047D5]" />
                  <span>KreaitX Operating Standard</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Target Audience & 5 Trigger Situations */}
        <Reveal yOffset={24}>
          <div className="mt-14 sm:mt-18 rounded-2xl bg-white border border-[#C5CCDC] p-6 sm:p-10 lg:p-12 shadow-xs">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] block mb-2">
                Who We Work With
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#10172A] tracking-tight">
                {targetAudience.headline}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#6A7180] font-sans">
                {targetAudience.description} We deliver the highest return when companies find themselves in one of five specific trigger situations:
              </p>
            </div>

            {/* 5 Situations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {targetAudience.situations.map((sit, idx) => (
                <div key={sit.title} className="p-4 rounded-xl bg-[#F7F8FC] border border-[#C5CCDC]">
                  <span className="text-xs font-mono font-bold text-[#3047D5] block mb-1">
                    Situation 0{idx + 1}
                  </span>
                  <h4 className="text-sm font-display font-bold text-[#10172A] leading-snug">
                    {sit.title}
                  </h4>
                  <p className="mt-2 text-xs text-[#6A7180] font-sans leading-relaxed">
                    {sit.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Working with US & International Clients Strip */}
            <div className="mt-10 pt-8 border-t border-[#C5CCDC]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {targetAudience.usWorkingModel.map((model) => (
                  <div key={model.label} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#3047D5] mt-1.5 shrink-0" />
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10172A] block">
                        {model.label}
                      </span>
                      <p className="mt-1 text-xs text-[#6A7180] font-sans leading-relaxed">
                        {model.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};


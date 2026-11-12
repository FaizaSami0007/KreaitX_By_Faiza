"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { differentiators } from "@/data/siteData";

export const Difference: React.FC = () => {
  return (
    <section id="approach" className="relative overflow-hidden bg-[#F7F8FC] py-20 sm:py-24 lg:py-28 border-b border-[#C5CCDC]">
      <Container size="default" className="relative z-10">
        
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">
            <SectionHeading
              eyebrow="Our Approach & Standards"
              title={
                <>
                  Built on discipline.{" "}
                  <span className="font-display font-bold text-[#3047D5]">
                    Engineered for credibility
                  </span>
                  .
                </>
              }
              description="A clear, human approach to creative technology. We eliminate handoff friction and agency bureaucracy so your vision reaches production without translation loss."
            />

            <div className="shrink-0">
              <Link
                href="/process"
                className="group inline-flex items-center text-sm font-sans font-bold text-[#10172A] hover:text-[#3047D5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3047D5]"
              >
                <span>Explore Full 6-Stage Methodology</span>
                <ArrowRight className="ml-1.5 h-4 w-4 text-[#3047D5] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* 6 Structured Differentiator Columns with Thin Dividers (Following Company Profile Editorial Standards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentiators.map((diff, index) => (
            <Reveal key={diff.number} yOffset={20}>
              <div className="h-full rounded-xl bg-white p-6 sm:p-8 border border-[#C5CCDC] shadow-2xs hover:border-[#3047D5] transition-all duration-200 flex flex-col justify-between group">
                <div>
                  {/* Top Bar: Number & Micro Indicator */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#C5CCDC]/60">
                    <span className="text-xs font-mono font-bold text-[#3047D5] tracking-wider">
                      {diff.number}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#6A7180]">
                      Standard 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-display font-bold text-[#10172A] tracking-tight group-hover:text-[#3047D5] transition-colors">
                    {diff.title}
                  </h3>
                  <p className="mt-2 text-sm font-sans font-medium text-[#3047D5]">
                    {diff.summary}
                  </p>

                  {/* Detailed Description */}
                  <p className="mt-3.5 text-sm text-[#6A7180] leading-relaxed font-sans">
                    {diff.description}
                  </p>
                </div>

                {/* Subtle Checkmark footer */}
                <div className="mt-6 pt-4 border-t border-[#C5CCDC]/40 flex items-center gap-2 text-xs font-mono text-[#10172A]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#3047D5]" />
                  <span>KreaitX Core Principle</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Highlighted Value Statement (Follow Page 2 / Page 6 of Company Profile) */}
        <Reveal yOffset={20}>
          <div className="mt-12 sm:mt-16 rounded-xl bg-white border border-[#C5CCDC] p-6 sm:p-10 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#3047D5] block">
                The KreaitX Distinction
              </span>
              <h4 className="text-lg sm:text-xl font-display font-bold text-[#10172A] tracking-tight">
                No account layers. Direct collaboration with the practitioners building your work.
              </h4>
              <p className="text-sm text-[#6A7180] font-sans">
                Ambitious companies don&apos;t need bloated agency hierarchies. You work directly with senior creative directors, cinematographers, and principal software engineers.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center justify-center text-sm font-bold text-white bg-[#10172A] hover:bg-[#1E293B] px-6 py-3 rounded-lg transition-all duration-200 shrink-0 shadow-xs"
            >
              <span>Learn About Our Studio</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </Reveal>

      </Container>
    </section>
  );
};

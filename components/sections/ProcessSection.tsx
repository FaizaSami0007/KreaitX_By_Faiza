"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processStages } from "@/data/siteData";

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative overflow-hidden bg-[#F7F5F0] py-20 sm:py-28 lg:py-32 border-b border-[#E5E1DA]">
      <Container size="default" className="relative z-10 max-w-[1320px]">
        {/* Header */}
        <Reveal yOffset={16}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
            <SectionHeading
              eyebrow="Disciplined Methodology"
              title={
                <>
                  From idea to impact,{" "}
                  <span className="font-display font-bold text-[#E76F51]">
                    without the mystery
                  </span>
                  .
                </>
              }
              description="A disciplined six-stage methodology designed to eliminate agency black-box ambiguity and keep strategy, design, and code aligned throughout."
            />

            <div className="shrink-0">
              <Link
                href="/process"
                className="group inline-flex items-center text-sm font-semibold text-[#34312F] hover:text-[#E76F51] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51]"
              >
                <span>Read Full Process Guide</span>
                <ArrowRight className="ml-1.5 h-4 w-4 text-[#E76F51] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Interactive Step Navigator Header (Buttons that toggle active step) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-10">
          {processStages.map((stage, idx) => (
            <button
              key={stage.number}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`text-left p-3.5 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51] ${
                activeStep === idx
                  ? "bg-[#34312F] text-white border-[#34312F] shadow-sm -translate-y-0.5"
                  : "bg-white text-[#34312F] border-[#E5E1DA] hover:border-[#34312F]/30 hover:bg-[#F7F5F0]"
              }`}
            >
              <div
                className={`text-[11px] sm:text-xs font-mono font-bold mb-1 uppercase tracking-wider ${
                  activeStep === idx ? "text-[#E76F51]" : "text-[#6B6560]"
                }`}
              >
                Stage {stage.number}
              </div>
              <div className="text-[13px] sm:text-sm font-display font-bold truncate">
                {stage.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Detail Showcase */}
        <div className="rounded-2xl bg-white border border-[#E5E1DA] p-6 sm:p-8 lg:p-12 shadow-sm transition-all duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3 py-1 rounded-md bg-[#FBE9E3] text-[#E76F51] text-xs font-mono font-semibold uppercase tracking-wider border border-[#E5E1DA]">
                Stage {processStages[activeStep].number} of 06 // {processStages[activeStep].title}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#34312F] tracking-tight">
                {processStages[activeStep].title}
              </h3>
              <p className="text-base font-semibold text-[#E76F51]">
                {processStages[activeStep].tagline}
              </p>
              <p className="text-base text-[#6B6560] leading-relaxed font-sans font-normal">
                {processStages[activeStep].description}
              </p>

              {/* Step Navigation Arrows */}
              <div className="pt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : processStages.length - 1))}
                  className="px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-[#F7F5F0] border border-[#E5E1DA] hover:bg-white text-[#34312F] transition-colors"
                >
                  ← Previous Stage
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev < processStages.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-[#34312F] text-white hover:bg-[#E76F51] transition-colors shadow-sm"
                >
                  Next Stage →
                </button>
              </div>
            </div>

            {/* Right Collaboration & Deliverables Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 bg-[#F7F5F0] p-6 sm:p-8 rounded-xl border border-[#E5E1DA]">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#34312F] font-bold block mb-2">
                  Client Collaboration
                </span>
                <p className="text-sm text-[#6B6560] leading-relaxed">
                  {processStages[activeStep].clientInput}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#34312F] font-bold block mb-2">
                  KreaitX Deliverable
                </span>
                <p className="text-sm text-[#34312F] leading-relaxed font-medium">
                  {processStages[activeStep].kreaitxOutput}
                </p>
              </div>

              <div className="sm:col-span-2 pt-5 border-t border-[#E5E1DA]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#34312F] font-bold block mb-2.5">
                  Key Milestones &amp; Deliverable Checkpoints
                </span>
                <div className="flex flex-wrap gap-2">
                  {processStages[activeStep].milestones.map((ms) => (
                    <span
                      key={ms}
                      className="px-3 py-1 rounded-md bg-white text-xs font-medium text-[#34312F] border border-[#E5E1DA] flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#E76F51]" />
                      {ms}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

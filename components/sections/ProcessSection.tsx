"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processStages } from "@/data/siteData";

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#F4F1E8] py-20 sm:py-28 lg:py-32 border-b border-[#DEDCD3]">
      <Container size="default">
        {/* Header */}
        <Reveal yOffset={16}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
            <SectionHeading
              eyebrow="Methodology"
              title={
                <>
                  From idea to impact,{" "}
                  <span className="font-serif-italic font-normal">without the mystery</span>.
                </>
              }
              description="A disciplined six-stage progression designed to eliminate agency black-box ambiguity and keep strategy, design, and code aligned."
            />

            <div className="shrink-0">
              <Link
                href="/process"
                className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#14213D] hover:text-[#0D182B] transition-colors group"
              >
                <span>Read Full Process Guide</span>
                <ArrowUpRight className="ml-1.5 h-4 w-4 text-[#B2AD7F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Interactive Step Navigator for desktop */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-12">
          {processStages.map((stage, idx) => (
            <button
              key={stage.number}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                activeStep === idx
                  ? "bg-[#14213D] text-[#F4F1E8] border-[#14213D] shadow-md -translate-y-0.5"
                  : "bg-[#FAF8F2] text-[#14213D] border-[#DEDCD3] hover:border-[#14213D]/40 hover:bg-white"
              }`}
            >
              <div
                className={`text-xs font-mono font-bold mb-1 ${
                  activeStep === idx ? "text-[#B2AD7F]" : "text-[#14213D]"
                }`}
              >
                {stage.number}
              </div>
              <div className="text-sm font-semibold truncate">{stage.title}</div>
            </button>
          ))}
        </div>

        {/* Active Stage Highlight Box (Desktop) */}
        <div className="hidden lg:block mb-16">
          <div className="rounded-2xl bg-[#FAF8F2] border border-[#DEDCD3] p-10 lg:p-12">
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-5 space-y-4">
                <span className="inline-block px-3 py-1 rounded-md bg-[#14213D] text-[#F4F1E8] text-xs font-mono font-bold">
                  Stage {processStages[activeStep].number} of 06
                </span>
                <h3 className="text-3xl font-normal text-[#14213D] tracking-tight">
                  {processStages[activeStep].title}
                </h3>
                <p className="text-sm font-semibold text-[#14213D]/80">
                  {processStages[activeStep].tagline}
                </p>
                <p className="text-base text-[#667085] leading-relaxed">
                  {processStages[activeStep].description}
                </p>
              </div>

              <div className="col-span-7 grid grid-cols-2 gap-6 bg-[#F4F1E8] p-8 rounded-xl border border-[#DEDCD3]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold block mb-2">
                    Client Collaboration
                  </span>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {processStages[activeStep].clientInput}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold block mb-2">
                    KreaitX Deliverable
                  </span>
                  <p className="text-xs sm:text-sm text-[#182231] leading-relaxed font-medium">
                    {processStages[activeStep].kreaitxOutput}
                  </p>
                </div>

                <div className="col-span-2 pt-4 border-t border-[#DEDCD3]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold block mb-2">
                    Key Milestones
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {processStages[activeStep].milestones.map((ms) => (
                      <span
                        key={ms}
                        className="px-2.5 py-1 rounded-md bg-white text-xs font-medium text-[#14213D] border border-[#DEDCD3]"
                      >
                        {ms}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Connected Vertical Timeline View */}
        <div className="lg:hidden space-y-6">
          {processStages.map((stage, idx) => (
            <div
              key={stage.number}
              className="relative pl-8 sm:pl-10 before:absolute before:left-3.5 before:top-8 before:bottom-0 before:w-0.5 before:bg-[#DEDCD3] last:before:hidden"
            >
              {/* Step Circle Node */}
              <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-[#14213D] text-[#F4F1E8] font-mono text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm z-10">
                {idx + 1}
              </div>

              {/* Stage Card */}
              <div className="rounded-xl bg-[#FAF8F2] p-6 sm:p-7 border border-[#DEDCD3]">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#14213D] px-2 py-0.5 rounded bg-white border border-[#DEDCD3]">
                    Stage {stage.number}
                  </span>
                  <span className="text-xs text-[#14213D]/60 font-semibold">{stage.tagline}</span>
                </div>

                <h3 className="text-xl font-normal text-[#14213D] tracking-tight">
                  {stage.title}
                </h3>

                <p className="mt-2 text-sm text-[#667085] leading-relaxed font-normal">
                  {stage.description}
                </p>

                <div className="mt-4 pt-4 border-t border-[#DEDCD3] space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-[#14213D]">Deliverable: </span>
                    <span className="text-[#182231] font-medium">{stage.kreaitxOutput}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#14213D]">Milestones: </span>
                    <span className="text-[#667085]">{stage.milestones.join(" • ")}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

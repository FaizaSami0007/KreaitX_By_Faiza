"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { processStages } from "@/data/siteData";

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32 border-b border-[#14213D]/10">
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
                className="inline-flex items-center text-sm font-semibold text-[#14213D] hover:text-[#0E172B] transition-colors group"
              >
                <span>Read Full Process Guide</span>
                <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                  ? "bg-[#14213D] text-[#F5F6F2] border-[#14213D] shadow-md -translate-y-0.5"
                  : "bg-[#F5F6F2] text-[#14213D] border-[#14213D]/10 hover:border-[#14213D]/30 hover:bg-slate-100"
              }`}
            >
              <div
                className={`text-xs font-mono font-bold mb-1 ${
                  activeStep === idx ? "text-[#B7B98A]" : "text-[#14213D]"
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
          <div className="rounded-2xl sm:rounded-3xl bg-[#F5F6F2] border border-[#14213D]/10 p-10 lg:p-12 shadow-sm">
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-5">
                <span className="inline-block px-3 py-1 rounded bg-[#14213D] text-[#F5F6F2] text-xs font-mono font-bold mb-4">
                  Stage {processStages[activeStep].number} of 06
                </span>
                <h3 className="text-3xl font-semibold text-[#14213D] tracking-tight">
                  {processStages[activeStep].title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[#14213D]/80">
                  {processStages[activeStep].tagline}
                </p>
                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  {processStages[activeStep].description}
                </p>
              </div>

              <div className="col-span-7 grid grid-cols-2 gap-6 bg-white p-8 rounded-2xl border border-[#14213D]/10">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold block mb-2">
                    Client Collaboration
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {processStages[activeStep].clientInput}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold block mb-2">
                    KreaitX Deliverable
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {processStages[activeStep].kreaitxOutput}
                  </p>
                </div>

                <div className="col-span-2 pt-4 border-t border-slate-100">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold block mb-2">
                    Key Milestones
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {processStages[activeStep].milestones.map((ms) => (
                      <span
                        key={ms}
                        className="px-2.5 py-1 rounded bg-[#F5F6F2] text-xs font-medium text-[#14213D] border border-[#14213D]/8"
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
              className="relative pl-8 sm:pl-10 before:absolute before:left-3.5 before:top-8 before:bottom-0 before:w-0.5 before:bg-[#14213D]/15 last:before:hidden"
            >
              {/* Step Circle Node */}
              <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-[#14213D] text-[#F5F6F2] font-mono text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm z-10">
                {idx + 1}
              </div>

              {/* Stage Card */}
              <div className="rounded-2xl bg-[#F5F6F2] p-6 sm:p-7 border border-[#14213D]/10">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#14213D] px-2 py-0.5 rounded bg-white border border-[#14213D]/10">
                    Stage {stage.number}
                  </span>
                  <span className="text-xs text-[#14213D]/60 font-semibold">{stage.tagline}</span>
                </div>

                <h3 className="text-xl font-semibold text-[#14213D] tracking-tight">
                  {stage.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                  {stage.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-[#14213D]">Deliverable: </span>
                    <span className="text-slate-700 font-medium">{stage.kreaitxOutput}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#14213D]">Milestones: </span>
                    <span className="text-slate-600">{stage.milestones.join(" • ")}</span>
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

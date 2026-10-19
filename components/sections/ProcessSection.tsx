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
    <section id="process" className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32 border-b border-slate-200/80">
      <Container size="default" className="relative z-10 max-w-[1320px]">
        {/* Header */}
        <Reveal yOffset={16}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
            <SectionHeading
              eyebrow="Disciplined Methodology"
              title={
                <>
                  From idea to impact,{" "}
                  <span className="font-serif italic font-normal bg-gradient-to-r from-[#003049] via-[#14213D] to-[#42C6D9] bg-clip-text text-transparent">
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
                className="group inline-flex items-center text-sm font-semibold text-[#003049] hover:text-[#14213D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9]"
              >
                <span>Read Full Process Guide</span>
                <ArrowRight className="ml-1.5 h-4 w-4 text-[#42C6D9] transition-transform group-hover:translate-x-1" />
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
              className={`text-left p-3.5 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9] ${
                activeStep === idx
                  ? "bg-[#003049] text-white border-[#003049] shadow-brand-button -translate-y-1"
                  : "bg-[#F7F8FA] text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-white"
              }`}
            >
              <div
                className={`text-[11px] sm:text-xs font-mono font-bold mb-1 uppercase tracking-wider ${
                  activeStep === idx ? "text-[#42C6D9]" : "text-slate-500"
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

        {/* Active Stage Detail Showcase (Single semantic DOM container for active stage) */}
        <div className="rounded-3xl bg-[#F7F8FA] border border-slate-200/90 p-5 sm:p-8 lg:p-12 shadow-card transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white text-[#003049] text-xs font-mono font-semibold uppercase tracking-wider border border-slate-200 shadow-xs">
                Stage {processStages[activeStep].number} of 06 // {processStages[activeStep].title}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 tracking-tight">
                {processStages[activeStep].title}
              </h3>
              <p className="text-base font-semibold text-[#003049]">
                {processStages[activeStep].tagline}
              </p>
              <p className="text-base text-slate-600 leading-relaxed font-sans font-normal">
                {processStages[activeStep].description}
              </p>

              {/* Step Navigation Arrows */}
              <div className="pt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : processStages.length - 1))}
                  className="px-4 py-2 rounded-full text-xs font-mono font-semibold bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
                >
                  ← Previous Stage
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev < processStages.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-2 rounded-full text-xs font-mono font-semibold bg-[#003049] text-white hover:bg-[#14213D] transition-colors"
                >
                  Next Stage →
                </button>
              </div>
            </div>

            {/* Right Collaboration & Deliverables Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-subtle">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold block mb-2">
                  Client Collaboration
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {processStages[activeStep].clientInput}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold block mb-2">
                  KreaitX Deliverable
                </span>
                <p className="text-sm text-slate-900 leading-relaxed font-medium">
                  {processStages[activeStep].kreaitxOutput}
                </p>
              </div>

              <div className="sm:col-span-2 pt-5 border-t border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold block mb-2.5">
                  Key Milestones &amp; Deliverable Checkpoints
                </span>
                <div className="flex flex-wrap gap-2">
                  {processStages[activeStep].milestones.map((ms) => (
                    <span
                      key={ms}
                      className="px-3 py-1 rounded-full bg-[#F7F8FA] text-xs font-medium text-slate-700 border border-slate-200 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#003049]" />
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

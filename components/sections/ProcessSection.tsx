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
    <section className="relative overflow-hidden bg-slate-50/40 py-20 sm:py-28 lg:py-32 border-b border-slate-200/80">
      <Container size="default">
        {/* Header */}
        <Reveal yOffset={16}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
            <SectionHeading
              eyebrow="Proven Methodology"
              title={
                <>
                  From idea to impact,{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    without the mystery
                  </span>
                  .
                </>
              }
              description="A disciplined six-stage progression designed to eliminate agency black-box ambiguity and keep strategy, design, and code aligned."
            />

            <div className="shrink-0">
              <Link
                href="/process"
                className="group inline-flex items-center text-sm font-semibold text-purple-700 hover:text-purple-800 transition-colors"
              >
                <span>Read Full Process Guide</span>
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
              className={`text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeStep === idx
                  ? "bg-white border-purple-300 shadow-card-hover -translate-y-1"
                  : "bg-white/80 text-slate-700 border-slate-200/80 hover:border-purple-200 hover:bg-white"
              }`}
            >
              <div
                className={`text-xs font-sans font-bold mb-1.5 uppercase tracking-wider ${
                  activeStep === idx
                    ? "text-purple-600"
                    : "text-slate-400"
                }`}
              >
                {stage.number}
              </div>
              <div className="text-sm font-display font-bold text-slate-900 truncate">
                {stage.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Highlight Box (Desktop) */}
        <div className="hidden lg:block mb-16">
          <div className="rounded-3xl bg-white border border-slate-200/80 p-10 lg:p-12 shadow-card">
            <div className="grid grid-cols-12 gap-10 items-start">
              <div className="col-span-5 space-y-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider border border-purple-200">
                  Stage {processStages[activeStep].number} of 06
                </span>
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 tracking-tight">
                  {processStages[activeStep].title}
                </h3>
                <p className="text-base font-semibold text-purple-700">
                  {processStages[activeStep].tagline}
                </p>
                <p className="text-base text-slate-600 leading-relaxed font-sans font-normal">
                  {processStages[activeStep].description}
                </p>
              </div>

              <div className="col-span-7 grid grid-cols-2 gap-6 bg-slate-50 p-8 rounded-2xl border border-slate-200/60">
                <div>
                  <span className="text-xs font-sans uppercase tracking-wider text-slate-900 font-bold block mb-2">
                    Client Collaboration
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {processStages[activeStep].clientInput}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-sans uppercase tracking-wider text-slate-900 font-bold block mb-2">
                    KreaitX Deliverable
                  </span>
                  <p className="text-sm text-slate-900 leading-relaxed font-medium">
                    {processStages[activeStep].kreaitxOutput}
                  </p>
                </div>

                <div className="col-span-2 pt-5 border-t border-slate-200">
                  <span className="text-xs font-sans uppercase tracking-wider text-slate-900 font-bold block mb-2.5">
                    Key Milestones
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {processStages[activeStep].milestones.map((ms) => (
                      <span
                        key={ms}
                        className="px-3 py-1 rounded-full bg-white text-xs font-medium text-slate-700 border border-slate-200 shadow-subtle flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-purple-600" />
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
              className="relative pl-8 sm:pl-10 before:absolute before:left-3.5 before:top-8 before:bottom-0 before:w-0.5 before:bg-purple-200 last:before:hidden"
            >
              {/* Step Circle Node */}
              <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-sans text-xs font-bold flex items-center justify-center shadow-md z-10">
                {idx + 1}
              </div>

              {/* Stage Card */}
              <div className="rounded-2xl bg-white p-6 sm:p-7 border border-slate-200/80 shadow-card">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-purple-700 px-2.5 py-0.5 rounded-full bg-purple-50 border border-purple-100">
                    Stage {stage.number}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{stage.tagline}</span>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 tracking-tight">
                  {stage.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed font-sans font-normal">
                  {stage.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-slate-900">Deliverable: </span>
                    <span className="text-slate-800 font-medium">{stage.kreaitxOutput}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Milestones: </span>
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

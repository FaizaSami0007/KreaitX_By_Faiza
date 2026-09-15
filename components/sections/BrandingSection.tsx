"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, Palette, Compass, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const brandingDeliverables = [
  "Brand Positioning & Narrative Architecture",
  "Logo & Visual Identity System",
  "Typography & Color Standards",
  "Comprehensive Brand Guidelines",
  "Stationery, Collateral & Digital Assets"
];

const brandingWorkflow = [
  { step: "01", title: "Discovery & Competitive Audit", desc: "Understanding positioning, market landscape, and audience perception." },
  { step: "02", title: "Strategic Formulation", desc: "Defining core narrative, value pillars, and voice guidelines." },
  { step: "03", title: "Identity Design & Iteration", desc: "Developing marks, typography, color systems, and tactile touchpoints." },
  { step: "04", title: "System Finalization & Rollout", desc: "Delivering production assets, brand book, and implementation standards." }
];

const connectedServices = [
  { name: "Graphic Design", href: "/solutions#graphic-design" },
  { name: "Digital Solutions", href: "/solutions#digital-solutions" },
  { name: "Filming & Production", href: "/solutions#filming-production" },
  { name: "Digital Marketing", href: "/solutions#digital-marketing" }
];

export const BrandingSection: React.FC = () => {
  return (
    <section
      id="branding"
      aria-labelledby="branding-heading"
      className="scroll-mt-24 relative bg-white text-[#14213D] py-24 sm:py-32 lg:py-36 border-b border-[#14213D]/10 overflow-hidden"
    >
      <Container size="default" className="relative z-10 max-w-[1280px]">
        
        {/* Header & Narrative Intro */}
        <div className="max-w-3xl mb-16 sm:mb-20 lg:mb-24">
          <Reveal delay={0.05} yOffset={10}>
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="w-8 h-[1.5px] bg-[#B2AD7F]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[#14213D]/70">
                01 / BRANDING
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12} yOffset={16}>
            <h2
              id="branding-heading"
              className="text-[clamp(36px,5vw,64px)] font-semibold text-[#14213D] tracking-[-0.035em] leading-[1.06]"
            >
              Distill purpose into a{" "}
              <span className="font-serif-italic font-normal text-[#B2AD7F]">
                coherent
              </span>{" "}
              <br className="hidden sm:inline" />
              visual &amp; verbal identity.
            </h2>
          </Reveal>

          <Reveal delay={0.18} yOffset={14}>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#14213D]/75 leading-[1.68] font-normal max-w-2xl">
              Build a recognizable, enduring identity that communicates your core value clearly across every customer touchpoint — from strategy and typography to comprehensive design systems.
            </p>
          </Reveal>
        </div>

        {/* Asymmetrical Layout: Workspace / Identity on Left, Deliverables on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left: Brand Identity Architecture Studio Board */}
          <div className="lg:col-span-7">
            <Reveal delay={0.22} yOffset={20}>
              <div className="relative rounded-2xl bg-[#F7F8F8] border border-[#14213D]/10 p-7 sm:p-9 lg:p-10 shadow-[0_4px_24px_-4px_rgba(20,33,61,0.05)] overflow-hidden">
                
                <div className="flex items-center justify-between pb-6 border-b border-[#14213D]/08 text-xs font-mono text-[#14213D]/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#14213D]" />
                    <span className="uppercase tracking-wider font-semibold text-[#14213D]">
                      IDENTITY ARCHITECTURE // SYSTEM SPEC
                    </span>
                  </div>
                  <span className="text-[11px] text-[#14213D]/45 uppercase hidden sm:inline">
                    FOUNDATION
                  </span>
                </div>

                {/* Identity Triad (Positioning → Design Language → Expression) */}
                <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-[#14213D]/08 flex flex-col items-start justify-between">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF7F0] border border-[#B2AD7F]/30 flex items-center justify-center text-[#B2AD7F] mb-3">
                      <Compass className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-[#14213D] block">
                        Positioning
                      </span>
                      <p className="text-xs text-[#14213D]/65 mt-1 leading-relaxed">
                        Value proposition &amp; verbal tone
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#14213D]/08 flex flex-col items-start justify-between">
                    <div className="w-9 h-9 rounded-lg bg-[#EAF0F5] border border-[#14213D]/15 flex items-center justify-center text-[#14213D] mb-3">
                      <Palette className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-[#14213D] block">
                        Visual Language
                      </span>
                      <p className="text-xs text-[#14213D]/65 mt-1 leading-relaxed">
                        Logo, palette &amp; typography rules
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#14213D]/08 flex flex-col items-start justify-between">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF7F0] border border-[#B2AD7F]/30 flex items-center justify-center text-[#B2AD7F] mb-3">
                      <Layers className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-[#14213D] block">
                        Design System
                      </span>
                      <p className="text-xs text-[#14213D]/65 mt-1 leading-relaxed">
                        Guidelines &amp; asset libraries
                      </p>
                    </div>
                  </div>
                </div>

                {/* The Core Problem Solved Callout */}
                <div className="mt-4 p-4 sm:p-5 rounded-xl bg-[#FAF7F0] border border-[#B2AD7F]/25 flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#B2AD7F]/15 flex items-center justify-center text-[#B2AD7F] shrink-0 mt-0.5">
                    <span className="font-mono text-xs font-bold">!</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#14213D]/70 block mb-1">
                      THE CORE PROBLEM WE SOLVE
                    </span>
                    <p className="text-xs sm:text-sm text-[#14213D]/85 leading-relaxed font-normal">
                      Disconnected visuals, confusing brand messages, and commoditization that prevent premium positioning in competitive markets.
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Right: Deliverables List */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
            <div>
              <Reveal delay={0.24} yOffset={14}>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[#14213D]/70">
                    WHAT KREAITX DELIVERS
                  </span>
                </div>
              </Reveal>

              <div className="space-y-4">
                {brandingDeliverables.map((item, index) => (
                  <Reveal key={item} delay={0.28 + index * 0.04} yOffset={12}>
                    <div className="group p-4 rounded-xl border border-[#14213D]/08 bg-[#F7F8F8]/60 hover:bg-[#F7F8F8] hover:border-[#14213D]/20 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-[#B2AD7F] shrink-0" />
                        <h3 className="text-base font-medium text-[#14213D]">
                          {item}
                        </h3>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* The Approach Workflow */}
        <div className="mt-20 sm:mt-24 pt-10 sm:pt-12 border-t border-[#14213D]/10">
          <Reveal delay={0.34} yOffset={16}>
            <div className="flex items-center justify-between mb-8 sm:mb-10">
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[#14213D]/70">
                THE APPROACH
              </span>
              <span className="text-xs font-mono text-[#14213D]/45 uppercase hidden sm:inline">
                BRAND SYSTEM METHODOLOGY
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {brandingWorkflow.map((step) => (
                <div
                  key={step.step}
                  className="flex flex-col justify-between p-5 rounded-xl bg-[#F7F8F8] border border-[#14213D]/08"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#B2AD7F] block mb-2">
                      {step.step}
                    </span>
                    <h4 className="text-base font-semibold text-[#14213D] tracking-tight mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#14213D]/70 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Connected Services & CTA */}
        <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-[#14213D]/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          <Reveal delay={0.38} yOffset={14}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#14213D]/50 shrink-0">
                CONNECTED WITH:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {connectedServices.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="inline-flex items-center text-xs font-medium text-[#14213D]/80 bg-[#F7F8F8] hover:bg-[#14213D] hover:text-white border border-[#14213D]/12 px-3 py-1.5 rounded-full transition-all duration-200"
                  >
                    + {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.42} yOffset={14} className="shrink-0 w-full sm:w-auto">
            <Link
              href="/contact?service=branding"
              className="group inline-flex items-center justify-center font-semibold text-[#F5F6F2] bg-[#14213D] hover:bg-[#0E172B] rounded-full px-6 sm:px-7 py-3 min-h-[46px] w-full sm:w-auto text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-md active:scale-[0.98]"
            >
              <span>Discuss Branding</span>
              <ArrowRight className="ml-2 h-3.5 w-3.5 text-[#B2AD7F] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>

        </div>

      </Container>
    </section>
  );
};

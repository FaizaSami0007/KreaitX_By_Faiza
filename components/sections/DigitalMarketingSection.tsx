"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, TrendingUp, Sparkles, Target, Zap, Activity } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const deliverables = [
  { id: "strategy", title: "Digital Marketing Strategy", summary: "Market positioning, channel architecture, and ROI roadmap" },
  { id: "social", title: "Social Media Management", summary: "Content scheduling, voice curation, and community growth" },
  { id: "content", title: "Content Strategy", summary: "Editorial themes, creative storytelling, and asset direction" },
  { id: "planning", title: "Campaign Planning", summary: "Launch milestones, multi-channel rollout, and conversion hooks" },
  { id: "paid", title: "Paid Campaign Management", summary: "High-intent ad targeting, spend optimization, and conversion bidding" },
  { id: "analytics", title: "Performance & Analytics", summary: "Attribution models, funnel auditing, and transparent reporting" }
];

const approachSteps = [
  { number: "01", title: "Audience & Market Understanding", desc: "Auditing behavior, intent, and channel opportunities." },
  { number: "02", title: "Strategy & Content Direction", desc: "Crafting narratives and high-converting message frameworks." },
  { number: "03", title: "Campaign Execution", desc: "Coordinated distribution across search, social, and digital touchpoints." },
  { number: "04", title: "Measure & Optimize", desc: "Continuous testing, creative iteration, and revenue scaling." }
];

const connectedServices = [
  { name: "Branding", href: "/solutions#branding" },
  { name: "Social Media Management", href: "/solutions#social-media-management" },
  { name: "Graphic Design", href: "/solutions#graphic-design" },
  { name: "Filming & Production", href: "/solutions#filming-production" },
  { name: "2D Animation", href: "/solutions#2d-animation" },
  { name: "Digital Solutions", href: "/solutions#digital-solutions" }
];

export const DigitalMarketingSection: React.FC = () => {
  const [activeDeliverable, setActiveDeliverable] = useState<string | null>(null);

  return (
    <section
      id="digital-marketing"
      aria-labelledby="digital-marketing-heading"
      className="scroll-mt-24 relative bg-[#F7F8F8] text-[#14213D] py-24 sm:py-32 lg:py-36 border-b border-[#14213D]/10 overflow-hidden"
    >
      {/* Subtle Background Architectural Fine Lines */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-[#14213D]/[0.03]" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-[#14213D]/[0.03]" />
        {/* Soft atmospheric gradient corner */}
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-[#EAF0F5]/50 rounded-full blur-3xl" />
      </div>

      <Container size="default" className="relative z-10 max-w-[1280px]">
        
        {/* ============================================================ */}
        {/* 1. TOP HEADER & NARRATIVE INTRO                              */}
        {/* ============================================================ */}
        <div className="max-w-3xl mb-16 sm:mb-20 lg:mb-24">
          {/* Eyebrow */}
          <Reveal delay={0.05} yOffset={10}>
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="w-8 h-[1.5px] bg-[#B2AD7F]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[#14213D]/70">
                02 / DIGITAL MARKETING
              </span>
            </div>
          </Reveal>

          {/* Main Headline with Cormorant/Instrument Serif Italic Accent */}
          <Reveal delay={0.12} yOffset={16}>
            <h2
              id="digital-marketing-heading"
              className="text-[clamp(36px,5vw,64px)] font-semibold text-[#14213D] tracking-[-0.035em] leading-[1.06]"
            >
              Marketing that{" "}
              <span className="font-serif-italic font-normal text-[#B2AD7F]">
                moves
              </span>{" "}
              <br className="hidden sm:inline" />
              with your audience.
            </h2>
          </Reveal>

          {/* Supporting Description */}
          <Reveal delay={0.18} yOffset={14}>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#14213D]/75 leading-[1.68] font-normal max-w-2xl">
              Turn attention into meaningful growth through strategy, content, social media, and performance-driven campaigns that directly connect to revenue.
            </p>
          </Reveal>
        </div>

        {/* ============================================================ */}
        {/* 2. ASYMMETRICAL TWO-PART MAIN COMPOSITION                     */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* ---------------------------------------------------------- */}
          {/* LEFT: PRIMARY VISUAL WORKSPACE AREA (~58% width, 7 cols)   */}
          {/* ---------------------------------------------------------- */}
          <div className="lg:col-span-7">
            <Reveal delay={0.22} yOffset={20}>
              <div className="relative rounded-2xl bg-[#FFFFFF] border border-[#14213D]/10 p-7 sm:p-9 lg:p-10 shadow-[0_4px_24px_-4px_rgba(20,33,61,0.05)] overflow-hidden">
                
                {/* Visual Workspace Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[#14213D]/08 text-xs font-mono text-[#14213D]/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B2AD7F]" />
                    <span className="uppercase tracking-wider font-semibold text-[#14213D]">
                      CAMPAIGN ARCHITECTURE // SYSTEM FLOW
                    </span>
                  </div>
                  <span className="text-[11px] text-[#14213D]/45 uppercase hidden sm:inline">
                    GROWTH ENGINE
                  </span>
                </div>

                {/* Central Marketing Flow Visual (REACH → ENGAGE → CONVERT) */}
                <div className="py-8 sm:py-10">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 relative items-center">
                    
                    {/* Flow Line Behind Nodes */}
                    <div className="absolute left-[15%] right-[15%] top-1/2 -translate-y-1/2 h-[1.5px] bg-[#14213D]/12 z-0" aria-hidden="true" />

                    {/* Step 1: REACH */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F7F8F8] border border-[#14213D]/15 flex items-center justify-center text-[#14213D] shadow-sm mb-3">
                        <Target className="h-5 w-5 stroke-[1.5]" />
                      </div>
                      <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#14213D]">
                        01 REACH
                      </span>
                      <span className="text-[11px] text-[#14213D]/60 mt-0.5 hidden sm:inline">
                        Audience Intent
                      </span>
                    </div>

                    {/* Step 2: ENGAGE */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF7F0] border border-[#B2AD7F]/40 flex items-center justify-center text-[#B2AD7F] shadow-sm mb-3">
                        <Sparkles className="h-5 w-5 stroke-[1.5]" />
                      </div>
                      <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#B2AD7F]">
                        02 ENGAGE
                      </span>
                      <span className="text-[11px] text-[#14213D]/60 mt-0.5 hidden sm:inline">
                        Content &amp; Narrative
                      </span>
                    </div>

                    {/* Step 3: CONVERT */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#EAF0F5] border border-[#14213D]/20 flex items-center justify-center text-[#14213D] shadow-sm mb-3">
                        <Zap className="h-5 w-5 stroke-[1.5]" />
                      </div>
                      <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#14213D]">
                        03 CONVERT
                      </span>
                      <span className="text-[11px] text-[#14213D]/60 mt-0.5 hidden sm:inline">
                        Revenue &amp; Scale
                      </span>
                    </div>

                  </div>
                </div>

                {/* Illustrative Performance Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 pb-6 border-t border-b border-[#14213D]/08">
                  <div className="p-3 sm:p-4 rounded-xl bg-[#F7F8F8] border border-[#14213D]/06">
                    <div className="flex items-center gap-1.5 text-[#B2AD7F] mb-1">
                      <TrendingUp className="h-3.5 w-3.5" />
                      <span className="font-serif text-lg sm:text-2xl font-normal text-[#14213D]">
                        +42%
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#14213D]/60 block">
                      Engagement
                    </span>
                  </div>

                  <div className="p-3 sm:p-4 rounded-xl bg-[#F7F8F8] border border-[#14213D]/06">
                    <div className="flex items-center gap-1.5 text-[#14213D] mb-1">
                      <Activity className="h-3.5 w-3.5 text-[#B2AD7F]" />
                      <span className="font-serif text-lg sm:text-2xl font-normal text-[#14213D]">
                        3.8×
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#14213D]/60 block">
                      Campaign ROI
                    </span>
                  </div>

                  <div className="p-3 sm:p-4 rounded-xl bg-[#F7F8F8] border border-[#14213D]/06">
                    <div className="flex items-center gap-1.5 text-[#14213D] mb-1">
                      <span className="font-serif text-lg sm:text-2xl font-normal text-[#14213D]">
                        72K
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#14213D]/60 block">
                      Audience Reach
                    </span>
                  </div>
                </div>

                {/* The Core Problem Solved Callout */}
                <div className="mt-6 p-4 sm:p-5 rounded-xl bg-[#FAF7F0] border border-[#B2AD7F]/25 flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#B2AD7F]/15 flex items-center justify-center text-[#B2AD7F] shrink-0 mt-0.5">
                    <span className="font-mono text-xs font-bold">!</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#14213D]/70 block mb-1">
                      THE CORE PROBLEM WE SOLVE
                    </span>
                    <p className="text-xs sm:text-sm text-[#14213D]/85 leading-relaxed font-normal">
                      Scattered campaigns, inconsistent messaging, and activity without a clear connection to business goals.
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

          {/* ---------------------------------------------------------- */}
          {/* RIGHT: WHAT KREAITX DELIVERS LIST (~42% width, 5 cols)     */}
          {/* ---------------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
            <div>
              <Reveal delay={0.24} yOffset={14}>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[#14213D]/70">
                    WHAT KREAITX DELIVERS
                  </span>
                </div>
              </Reveal>

              {/* Continuous Deliverables List */}
              <div className="space-y-4">
                {deliverables.map((item, index) => {
                  const isHovered = activeDeliverable === item.id;

                  return (
                    <Reveal key={item.id} delay={0.28 + index * 0.04} yOffset={12}>
                      <div
                        onMouseEnter={() => setActiveDeliverable(item.id)}
                        onMouseLeave={() => setActiveDeliverable(null)}
                        className={`group p-4 rounded-xl border transition-all duration-200 cursor-default ${
                          isHovered
                            ? "bg-white border-[#B2AD7F]/40 shadow-sm translate-x-1"
                            : "bg-white/60 border-[#14213D]/08 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                isHovered ? "bg-[#B2AD7F]" : "bg-[#14213D]/30"
                              }`}
                            />
                            <h3
                              className={`text-base sm:text-[17px] font-semibold tracking-tight transition-colors duration-200 ${
                                isHovered ? "text-[#14213D]" : "text-[#14213D]/90"
                              }`}
                            >
                              {item.title}
                            </h3>
                          </div>
                          <span className="text-xs text-[#B2AD7F] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            →
                          </span>
                        </div>
                        <p className="text-xs sm:text-[13px] text-[#14213D]/65 mt-1.5 pl-5 leading-relaxed font-normal">
                          {item.summary}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* 3. THE APPROACH: COMPACT 4-STEP HORIZONTAL FLOW              */}
        {/* ============================================================ */}
        <div className="mt-20 sm:mt-24 pt-10 sm:pt-12 border-t border-[#14213D]/10">
          <Reveal delay={0.34} yOffset={16}>
            <div className="flex items-center justify-between mb-8 sm:mb-10">
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[#14213D]/70">
                THE APPROACH
              </span>
              <span className="text-xs font-mono text-[#14213D]/45 uppercase hidden sm:inline">
                STRATEGIC EXECUTION METHODOLOGY
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {approachSteps.map((step, idx) => (
                <div
                  key={step.number}
                  className="flex flex-col justify-between p-5 rounded-xl bg-white/70 border border-[#14213D]/08 hover:border-[#14213D]/20 transition-all duration-200"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#B2AD7F] block mb-2">
                      {step.number}
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

        {/* ============================================================ */}
        {/* 4. CONNECTED SERVICES PILLS & EDITORIAL CTA                  */}
        {/* ============================================================ */}
        <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-[#14213D]/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          {/* Connected Services Pills */}
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
                    className="inline-flex items-center text-xs font-medium text-[#14213D]/80 bg-white hover:bg-[#14213D] hover:text-white border border-[#14213D]/12 px-3 py-1.5 rounded-full transition-all duration-200 shadow-2xs"
                  >
                    + {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Section CTA Button */}
          <Reveal delay={0.42} yOffset={14} className="shrink-0 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <span className="text-xs font-medium text-[#14213D]/65 hidden xl:inline">
                Ready to build momentum?
              </span>
              <Link
                href="/contact?service=digital-marketing"
                className="group inline-flex items-center justify-center font-semibold text-[#F5F6F2] bg-[#14213D] hover:bg-[#0E172B] rounded-full px-6 sm:px-7 py-3 min-h-[46px] w-full sm:w-auto text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-md active:scale-[0.98]"
              >
                <span>Discuss Digital Marketing</span>
                <ArrowRight className="ml-2 h-3.5 w-3.5 text-[#B2AD7F] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

        </div>

      </Container>
    </section>
  );
};

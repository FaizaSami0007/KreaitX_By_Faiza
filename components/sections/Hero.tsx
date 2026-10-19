"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, Film, Layers, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

const studioDisciplines = [
  {
    id: "strategy",
    number: "01",
    label: "Brand Strategy & Systems",
    detail: "Positioning architecture, enduring visual identities, and design tokens.",
    metrics: "Unified narrative & clarity",
    icon: Compass,
    deliverables: ["Visual Identity Systems", "Brand Positioning & Voice", "Multi-platform Design Tokens"]
  },
  {
    id: "production",
    number: "02",
    label: "Cinematic Media & 2D Motion",
    detail: "Commercial filmmaking, UI motion explanation, and sound craft.",
    metrics: "High-retention storytelling",
    icon: Film,
    deliverables: ["Commercials & Brand Films", "2D Explainer Animations", "Product Showcase Media"]
  },
  {
    id: "engineering",
    number: "03",
    label: "Digital & Platform Engineering",
    detail: "Sub-second Next.js web applications, accessible UI, and scalable stacks.",
    metrics: "Sub-second performance",
    icon: Code2,
    deliverables: ["Bespoke Web Platform Engineering", "WCAG 2.1 AA Standards", "Full-Stack System Architecture"]
  }
];

export const Hero: React.FC = () => {
  const [activeDiscipline, setActiveDiscipline] = useState(0);

  return (
    <section className="relative bg-[#21113D] text-white pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-32 border-b border-[#390080]/50 overflow-hidden">
      {/* Background Soft Ambient Accents (Strictly solid radial CSS — NO background images) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6A00F4]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFD6A5]/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10 w-full max-w-[1360px]">
        {/* Editorial Grid Composition: Two balanced, deliberate columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: TYPOGRAPHY, CORE VALUE & CONVERSION ACTIONS */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 1. Studio Status & Eyebrow Badge */}
            <Reveal delay={0.04} yOffset={10}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 shadow-subtle mb-6 sm:mb-8">
                <span className="h-2 w-2 rounded-full bg-[#FFD6A5] animate-pulse" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.18em] text-[#FFD6A5] uppercase">
                  KREAITX STUDIO <span className="text-white/40 font-normal mx-1">•</span> CREATIVE TECHNOLOGY
                </span>
              </div>
            </Reveal>

            {/* 2. Main Display Headline */}
            <Reveal delay={0.1} yOffset={16}>
              <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold text-white tracking-[-0.03em] leading-[1.06] text-balance">
                Creative vision.{" "}
                <span className="font-display font-bold text-[#FFD6A5] bg-gradient-to-r from-white via-[#FFF0D9] to-[#FFD6A5] bg-clip-text text-transparent">
                  Engineered for impact
                </span>
                .
              </h1>
            </Reveal>

            {/* 3. Purpose-Driven Supporting Message */}
            <Reveal delay={0.18} yOffset={14}>
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 font-sans font-normal leading-[1.65] max-w-xl">
                We bring brand strategy, creative production and digital engineering together to build meaningful digital experiences and help ambitious businesses grow.
              </p>
            </Reveal>

            {/* 4. Conversion Actions */}
            <Reveal delay={0.24} yOffset={14}>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <Button
                  href="/contact"
                  variant="cyan"
                  size="lg"
                  withArrow
                  onClick={() =>
                    trackEvent("service_cta_click", {
                      cta_location: "homepage_hero",
                      cta_text: "Start a Project"
                    })
                  }
                  className="font-bold shadow-brand-button min-h-[52px] text-[15px] sm:text-[16px]"
                >
                  Start a Project
                </Button>

                <Button
                  href="/work"
                  variant="dark"
                  size="lg"
                  withArrow
                  className="min-h-[52px] font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40 text-[15px] sm:text-[16px]"
                >
                  Explore Our Work
                </Button>
              </div>
            </Reveal>

            {/* 5. Studio Credentials Footprint */}
            <Reveal delay={0.3} yOffset={12}>
              <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/15 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#FFD6A5] font-bold">
                    HQ × Reach
                  </span>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5 block">
                    Peshawar to Global
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#FFD6A5] font-bold">
                    Engagement
                  </span>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5 block">
                    100% Senior Leads
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#FFD6A5] font-bold">
                    Engineering
                  </span>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5 block">
                    Sub-second Next.js
                  </span>
                </div>
              </div>
            </Reveal>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: INTERACTIVE DISCIPLINE & ARCHITECTURE CARD */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 w-full">
            <Reveal delay={0.2} yOffset={20}>
              <div className="rounded-3xl bg-[#180a30] border border-white/15 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                {/* Card Top Utility Bar */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFD6A5]" aria-hidden="true" />
                    <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                      Connected Discipline Matrix
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    3 In-House Pillars
                  </span>
                </div>

                {/* Interactive Discipline Tabs */}
                <div className="mt-6 space-y-3">
                  {studioDisciplines.map((item, idx) => {
                    const isSelected = activeDiscipline === idx;
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.id}
                        onClick={() => setActiveDiscipline(idx)}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "bg-[#390080] border-[#FFD6A5]/60 shadow-brand-button"
                            : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-xl ${isSelected ? "bg-[#FFD6A5] text-[#21113D]" : "bg-white/10 text-white"}`}>
                              <Icon className="h-4 w-4" aria-hidden="true" />
                            </div>
                            <div>
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                                Stage {item.number}
                              </span>
                              <h3 className="text-sm sm:text-base font-display font-bold text-white">
                                {item.label}
                              </h3>
                            </div>
                          </div>

                          <span className={`text-xs font-mono font-medium shrink-0 px-2.5 py-1 rounded-full ${isSelected ? "bg-[#FFD6A5]/20 text-[#FFD6A5]" : "bg-white/10 text-slate-300"}`}>
                            {item.metrics}
                          </span>
                        </div>

                        {isSelected && (
                          <div className="mt-4 pt-3.5 border-t border-white/10 animate-in fade-in duration-200">
                            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans mb-3">
                              {item.detail}
                            </p>
                            <div className="space-y-1.5">
                              {item.deliverables.map((deliv) => (
                                <div key={deliv} className="flex items-center gap-2 text-xs text-slate-300">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-[#FFD6A5] shrink-0" aria-hidden="true" />
                                  <span>{deliv}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Card Bottom CTA Link */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-300 font-sans">
                    Zero agency silos. One connected team.
                  </span>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center font-semibold text-[#FFD6A5] hover:text-white transition-colors group"
                  >
                    <span>View All 7 Solutions</span>
                    <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Compass, Film, Code2, CheckCircle2 } from "lucide-react";
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
    <section className="relative bg-[#111111] text-white pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 border-b border-white/10 overflow-hidden">
      <Container size="default" className="relative z-10 w-full max-w-[1360px]">
        {/* Editorial Grid Composition: Two balanced, deliberate columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: TYPOGRAPHY, CORE VALUE & CONVERSION ACTIONS */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 1. Studio Status & Eyebrow Badge */}
            <Reveal delay={0.04} yOffset={10}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-white/5 border border-white/10 shadow-subtle mb-6 sm:mb-8">
                <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.16em] text-white uppercase">
                  KREAITX STUDIO <span className="text-[#66635F] mx-1">•</span> <span className="text-[#FF5A1F]">CREATIVE TECHNOLOGY</span>
                </span>
              </div>
            </Reveal>

            {/* 2. Main Display Headline */}
            <Reveal delay={0.1} yOffset={16}>
              <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold text-white tracking-[-0.03em] leading-[1.06] text-balance">
                Creative vision.{" "}
                <span className="font-display font-bold text-[#FF5A1F]">
                  Engineered for impact
                </span>
                .
              </h1>
            </Reveal>

            {/* 3. Purpose-Driven Supporting Message */}
            <Reveal delay={0.18} yOffset={14}>
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#A19E98] font-sans font-normal leading-[1.65] max-w-xl">
                We bring brand strategy, creative production and digital engineering together to build meaningful digital experiences and help ambitious businesses grow.
              </p>
            </Reveal>

            {/* 4. Conversion Actions */}
            <Reveal delay={0.24} yOffset={14}>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  withArrow
                  onClick={() =>
                    trackEvent("service_cta_click", {
                      cta_location: "homepage_hero",
                      cta_text: "Start a Project"
                    })
                  }
                  className="font-medium min-h-[48px] text-[15px]"
                >
                  Start a Project
                </Button>

                <Button
                  href="/work"
                  variant="outline"
                  size="lg"
                  withArrow
                  className="min-h-[48px] font-medium bg-transparent text-white border border-white/20 hover:bg-white hover:text-[#111111] hover:border-white text-[15px]"
                >
                  Explore Selected Work
                </Button>
              </div>
            </Reveal>

            {/* 5. Studio Credentials Footprint */}
            <Reveal delay={0.3} yOffset={12}>
              <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#FF5A1F] font-bold">
                    HQ × Reach
                  </span>
                  <span className="text-xs sm:text-sm text-[#A19E98] font-medium mt-0.5 block">
                    Peshawar to Global
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#FF5A1F] font-bold">
                    Engagement
                  </span>
                  <span className="text-xs sm:text-sm text-[#A19E98] font-medium mt-0.5 block">
                    100% Senior Leads
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#FF5A1F] font-bold">
                    Engineering
                  </span>
                  <span className="text-xs sm:text-sm text-[#A19E98] font-medium mt-0.5 block">
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
              <div className="rounded-2xl bg-[#161616] border border-white/10 p-6 sm:p-7 shadow-xl relative overflow-hidden">
                {/* Card Top Utility Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" aria-hidden="true" />
                    <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                      Connected Discipline Matrix
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#66635F]">
                    3 Core Pillars
                  </span>
                </div>

                {/* Interactive Discipline Tabs */}
                <div className="mt-5 space-y-2.5">
                  {studioDisciplines.map((item, idx) => {
                    const isSelected = activeDiscipline === idx;
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.id}
                        onClick={() => setActiveDiscipline(idx)}
                        className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-[#202020] border-[#FF5A1F]"
                            : "bg-white/[0.03] border-white/5 hover:bg-white/[0.06] hover:border-white/10"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${isSelected ? "bg-[#FF5A1F] text-white" : "bg-white/10 text-white"}`}>
                              <Icon className="h-4 w-4" aria-hidden="true" />
                            </div>
                            <div>
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#66635F] block">
                                Stage {item.number}
                              </span>
                              <h3 className="text-sm sm:text-base font-display font-bold text-white">
                                {item.label}
                              </h3>
                            </div>
                          </div>

                          <span className={`text-xs font-mono font-medium shrink-0 px-2.5 py-0.5 rounded-md ${isSelected ? "bg-[#FF5A1F]/20 text-[#FF5A1F]" : "bg-white/5 text-[#A19E98]"}`}>
                            {item.metrics}
                          </span>
                        </div>

                        {isSelected && (
                          <div className="mt-3.5 pt-3 border-t border-white/10 animate-in fade-in duration-200">
                            <p className="text-xs sm:text-sm text-[#A19E98] leading-relaxed font-sans mb-3">
                              {item.detail}
                            </p>
                            <div className="space-y-1.5">
                              {item.deliverables.map((deliv) => (
                                <div key={deliv} className="flex items-center gap-2 text-xs text-slate-300">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5A1F] shrink-0" aria-hidden="true" />
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
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-[#A19E98] font-sans">
                    Zero agency silos. One connected team.
                  </span>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center font-medium text-[#FF5A1F] hover:text-white transition-colors group"
                  >
                    <span>View All Solutions</span>
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

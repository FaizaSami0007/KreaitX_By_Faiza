"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Sparkles, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const EditorialTrustSection: React.FC = () => {
  return (
    <section
      aria-labelledby="editorial-positioning-heading"
      className="relative bg-white text-slate-900 py-20 sm:py-28 lg:py-32 border-b border-slate-200/80"
    >
      <Container size="default" className="relative z-10 w-full max-w-[1280px]">
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative, Eyebrow & Display Typography (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7 max-w-[620px]">
            
            {/* Eyebrow with delicate rule */}
            <Reveal delay={0.05} yOffset={12}>
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#003049] rounded-full" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#003049]">
                  BUILT WITH AMBITIOUS TEAMS
                </span>
              </div>
            </Reveal>

            {/* Display Headline */}
            <Reveal delay={0.12} yOffset={18}>
              <h2
                id="editorial-positioning-heading"
                className="text-[clamp(36px,4.8vw,60px)] font-display font-bold text-slate-950 tracking-[-0.035em] leading-[1.06]"
              >
                Ambitious ideas <br />
                deserve a better <br />
                <span className="font-serif italic font-normal bg-gradient-to-r from-[#003049] via-[#14213D] to-[#42C6D9] bg-clip-text text-transparent">
                  digital direction.
                </span>
              </h2>
            </Reveal>

            {/* Supporting Editorial Paragraph */}
            <Reveal delay={0.2} yOffset={16}>
              <p className="text-base sm:text-lg text-slate-700 leading-[1.7] font-sans font-normal max-w-[520px]">
                We collaborate with ambitious businesses, creators, and organizations to turn bold ideas into meaningful digital experiences — unifying brand narrative, cinematic production, and high-performance software under one roof.
              </p>
            </Reveal>

            {/* Micro action / proof link */}
            <Reveal delay={0.26} yOffset={14}>
              <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-6">
                <Link
                  href="/about"
                  className="group inline-flex items-center text-xs font-sans font-semibold uppercase tracking-[0.14em] text-[#003049] hover:text-[#14213D] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9]"
                >
                  <span>Our Studio Philosophy</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 text-[#003049] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <span className="text-xs text-slate-300 hidden sm:inline">•</span>
                <span className="text-xs font-mono text-slate-500">
                  EST. PESHAWAR × GLOBAL REACH
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Three Structured Manifesto Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal delay={0.15} yOffset={16}>
              <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/80 shadow-subtle hover:border-[#003049]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#003049] shrink-0">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    Direct Senior Practitioners
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                  You work directly with principal designers, creative directors, and systems engineers. Zero middle layers, zero translation loss.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22} yOffset={16}>
              <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/80 shadow-subtle hover:border-[#003049]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#003049] shrink-0">
                    <Layers className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    Single-Source Cohesion
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                  Brand positioning, commercial production, and digital architecture engineered simultaneously to reinforce each other.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.29} yOffset={16}>
              <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/80 shadow-subtle hover:border-[#003049]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#003049] shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    100% Client Ownership
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                  Every line of code, design system token, and production master file is delivered with complete intellectual property ownership.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
};

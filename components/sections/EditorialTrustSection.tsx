"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Compass, Palette, Code2, TrendingUp, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const differentiators = [
  {
    number: "01",
    title: "Brand Strategy & Positioning",
    description: "Distill your core value into an unmistakable narrative and enduring visual system that commands authority.",
    icon: Compass,
    metric: "Direction"
  },
  {
    number: "02",
    title: "Cinematic Media & 2D Motion",
    description: "Commercial cinematography, product showcase videos, and 2D explanatory motion that captivate attention.",
    icon: Palette,
    metric: "Experience"
  },
  {
    number: "03",
    title: "High-Performance Engineering",
    description: "Sub-second Next.js web applications, accessible design architectures, and scalable full-stack platforms.",
    icon: Code2,
    metric: "Platform"
  },
  {
    number: "04",
    title: "Sustainable Business Growth",
    description: "Conversion funnels, technical SEO, and data-backed analytics focused on real commercial outcomes.",
    icon: TrendingUp,
    metric: "Outcome"
  }
];

export const EditorialTrustSection: React.FC = () => {
  return (
    <section
      id="positioning"
      aria-labelledby="editorial-positioning-heading"
      className="relative bg-[#FFF9F0] text-[#211832] py-20 sm:py-28 lg:py-32 border-b border-[#E9E0F2]"
    >
      <Container size="default" className="relative z-10 w-full max-w-[1320px]">
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative, Eyebrow & Display Typography (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6 sm:space-y-7">
            
            {/* Eyebrow with delicate rule */}
            <Reveal delay={0.05} yOffset={12}>
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-[2px] bg-[#6A00F4] rounded-full" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#6A00F4]">
                  WHY ONE CONNECTED PARTNER
                </span>
              </div>
            </Reveal>

            {/* Display Headline */}
            <Reveal delay={0.12} yOffset={18}>
              <h2
                id="editorial-positioning-heading"
                className="text-[clamp(28px,3.8vw,48px)] font-display font-bold text-[#211832] tracking-[-0.025em] leading-[1.12]"
              >
                Ambitious brands need coherence,{" "}
                <span className="font-display font-bold text-[#6A00F4] bg-gradient-to-r from-[#6A00F4] via-[#390080] to-[#6A00F4] bg-clip-text text-transparent">
                  not disconnected silos
                </span>
                .
              </h2>
            </Reveal>

            {/* Supporting Editorial Paragraph */}
            <Reveal delay={0.2} yOffset={16}>
              <p className="text-base sm:text-lg text-[#625A70] leading-[1.7] font-sans font-normal">
                When brand designers, cinematographers, and engineers work in separate silos, the customer experience fragments. KreaitX unifies the entire creative technology lifecycle under one disciplined roof in Peshawar — giving ambitious clients global caliber execution without translation loss.
              </p>
            </Reveal>

            {/* Micro action / proof link */}
            <Reveal delay={0.26} yOffset={14}>
              <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-6">
                <Link
                  href="/about"
                  className="group inline-flex items-center text-xs font-sans font-semibold uppercase tracking-[0.14em] text-[#6A00F4] hover:text-[#390080] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6A00F4]"
                >
                  <span>Our Studio Story &amp; Origins</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 text-[#6A00F4] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <span className="text-xs text-slate-300 hidden sm:inline">•</span>
                <span className="text-xs font-mono text-[#625A70]">
                  PESHAWAR HQ × GLOBAL CLIENTS
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 2x2 Structured Differentiators Grid (Cols 6-12) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <Reveal key={diff.number} delay={0.1 + index * 0.08} yOffset={16}>
                  <div className="p-5 sm:p-7 rounded-2xl bg-white border border-[#E9E0F2] shadow-card hover:shadow-card-hover hover:border-[#6A00F4]/40 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      {/* Top Row: Index + Framework Tag */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-[#6A00F4] px-2.5 py-1 rounded-full bg-[#F3ECFF] border border-[#E9E0F2]">
                          {diff.number}
                        </span>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#625A70] font-medium">
                          {diff.metric}
                        </span>
                      </div>

                      {/* Title with icon */}
                      <div className="flex items-start gap-3 mb-2.5">
                        <div className="p-2 rounded-xl bg-[#F3ECFF] text-[#6A00F4] group-hover:bg-[#6A00F4] group-hover:text-white transition-colors duration-200 shrink-0 mt-0.5">
                          <Icon className="h-4 w-4 stroke-[1.8]" />
                        </div>
                        <h3 className="font-display text-base sm:text-lg font-bold text-[#211832] group-hover:text-[#6A00F4] transition-colors leading-snug">
                          {diff.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#625A70] leading-relaxed font-sans pt-1">
                        {diff.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-[#E9E0F2] flex items-center justify-between text-[11px] font-mono text-[#625A70]">
                      <span>KreaitX Core Pillar</span>
                      <span className="text-[#6A00F4] font-bold group-hover:text-[#390080] transition-colors">Unified Delivery →</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};

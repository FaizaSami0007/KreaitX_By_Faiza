"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, Palette, Code2, TrendingUp, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    number: "01",
    title: "Strategy",
    description: "Insights and planning that set the right direction.",
    icon: Compass,
    framework: "Determines Direction",
    badgeClass: "bg-purple-50 border-purple-200/80 text-purple-600"
  },
  {
    number: "02",
    title: "Creative",
    description: "Ideas turned into memorable visual experiences.",
    icon: Palette,
    framework: "Creates Experience",
    badgeClass: "bg-indigo-50 border-indigo-200/80 text-indigo-600"
  },
  {
    number: "03",
    title: "Technology",
    description: "Modern, scalable and future-ready solutions.",
    icon: Code2,
    framework: "Builds Solution",
    badgeClass: "bg-cyan-50 border-cyan-200/80 text-cyan-600"
  },
  {
    number: "04",
    title: "Growth",
    description: "Measurable impact that takes you further.",
    icon: TrendingUp,
    framework: "Measures Outcome",
    badgeClass: "bg-pink-50 border-pink-200/80 text-pink-600"
  }
];

export const IdeasToImpactSection: React.FC = () => {
  return (
    <section
      aria-labelledby="ideas-to-impact-heading"
      className="relative bg-white text-slate-900 py-20 sm:py-28 lg:py-32 border-b border-slate-200/80 overflow-hidden flex items-center"
    >
      {/* Subtle Top-Right 3D Silk Ribbon Corner Accent (Section 1 Theme) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <Image
          src="/images/ideas-corner-silk-bg.jpg"
          alt="KreaitX Top-Right Silk Ribbon Accent"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right-top select-none"
          quality={95}
        />
      </div>

      <Container size="default" className="relative z-10 w-full max-w-[1280px] flex flex-col justify-between h-full space-y-16 sm:space-y-24">
        
        {/* Top / Main Editorial Centered Content */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6 sm:space-y-7 pt-4">
          
          {/* Eyebrow */}
          <Reveal delay={0.05} yOffset={12}>
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-purple-600" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] text-purple-600">
                WHAT WE DO
              </span>
              <span className="w-8 h-[1.5px] bg-purple-600" aria-hidden="true" />
            </div>
          </Reveal>

          {/* Display Headline */}
          <Reveal delay={0.12} yOffset={18}>
            <h2
              id="ideas-to-impact-heading"
              className="text-[clamp(44px,6vw,84px)] font-display font-bold text-slate-950 tracking-[-0.035em] leading-[1.02] text-center"
            >
              From ideas to{" "}
              <span className="font-serif italic font-normal bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                impact.
              </span>
            </h2>
          </Reveal>

          {/* Body Copy */}
          <Reveal delay={0.2} yOffset={16}>
            <p className="text-base sm:text-lg text-slate-600 leading-[1.7] font-sans font-normal max-w-2xl mx-auto text-center">
              We blend strategy, creativity and technology to build digital experiences that look exceptional and perform even better.
            </p>
          </Reveal>

          {/* Primary Minimal Editorial CTA */}
          <Reveal delay={0.28} yOffset={14}>
            <div className="pt-2 flex justify-center">
              <Link
                href="/solutions"
                className="group inline-flex items-center text-sm font-sans font-semibold tracking-[0.06em] text-slate-900 hover:text-purple-600 transition-colors py-2 relative"
              >
                <span className="relative">
                  Explore Our Services
                  <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-purple-600 origin-left transition-transform duration-300 group-hover:scale-x-110" />
                </span>
                <span className="ml-3 flex items-center justify-center w-7 h-7 rounded-full border border-purple-200 bg-purple-50 text-purple-600 transition-all duration-300 group-hover:border-purple-500 group-hover:bg-purple-600 group-hover:text-white group-hover:translate-x-1 shadow-sm">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Bottom Four Core Pillars Layout */}
        <Reveal delay={0.32} yOffset={20} className="w-full">
          <div className="pt-10 sm:pt-14 border-t border-slate-200/80">
            
            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-slate-200/80">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`group flex flex-col justify-between pt-6 sm:pt-0 ${
                      idx === 0
                        ? "lg:pr-8"
                        : idx === 3
                        ? "lg:pl-8"
                        : "lg:px-8"
                    }`}
                  >
                    <div>
                      {/* Top Row: Icon + Number */}
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 shadow-sm ${pillar.badgeClass}`}>
                          <IconComponent className="h-5 w-5 stroke-[1.5]" />
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-purple-600 transition-colors">
                          {pillar.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-[26px] font-display font-bold text-slate-950 tracking-tight group-hover:text-purple-600 transition-colors duration-200">
                        {pillar.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed font-sans font-normal">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Micro Framework Note */}
                    <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-500">
                      <span>{pillar.framework}</span>
                      <span className="text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </Reveal>

      </Container>
    </section>
  );
};

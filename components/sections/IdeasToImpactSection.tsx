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
    framework: "Determines Direction"
  },
  {
    number: "02",
    title: "Creative",
    description: "Ideas turned into memorable visual experiences.",
    icon: Palette,
    framework: "Creates Experience"
  },
  {
    number: "03",
    title: "Technology",
    description: "Modern, scalable and future-ready solutions.",
    icon: Code2,
    framework: "Builds Solution"
  },
  {
    number: "04",
    title: "Growth",
    description: "Measurable impact that takes you further.",
    icon: TrendingUp,
    framework: "Measures Outcome"
  }
];

export const IdeasToImpactSection: React.FC = () => {
  return (
    <section
      aria-labelledby="ideas-to-impact-heading"
      className="relative bg-[#14213D] text-[#F4F1E8] py-20 sm:py-28 lg:py-36 border-b border-white/10 overflow-hidden min-h-[820px] lg:min-h-[880px] flex items-center"
    >
      {/* Background Architectural Artwork with Sculptural Stone, Glass & Light */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ideas-to-impact-bg.jpg"
          alt="KreaitX Creative Technology & Strategic Growth Environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center select-none opacity-40"
        />
        {/* Soft atmospheric gradient for crisp typography contrast on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14213D]/95 via-[#14213D]/80 to-transparent lg:from-[#14213D]/90 lg:via-[#14213D]/40 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/90 via-transparent to-[#14213D]/50 pointer-events-none" />
      </div>

      <Container size="default" className="relative z-10 w-full flex flex-col justify-between h-full space-y-16 sm:space-y-24">
        
        {/* Top / Main Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4">
          
          {/* Left Column: Eyebrow, Headline, Paragraph, CTA (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7 max-w-[580px]">
            
            {/* Eyebrow */}
            <Reveal delay={0.05} yOffset={12}>
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1.5px] bg-[#B2AD7F]" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#B2AD7F]">
                  WHAT WE DO
                </span>
              </div>
            </Reveal>

            {/* Display Headline */}
            <Reveal delay={0.12} yOffset={18}>
              <h2
                id="ideas-to-impact-heading"
                className="text-[clamp(48px,6vw,92px)] font-normal text-[#F4F1E8] tracking-[-0.035em] leading-[0.96]"
              >
                From ideas <br />
                to{" "}
                <span className="font-serif-italic font-normal text-[#B2AD7F]">
                  impact.
                </span>
              </h2>
            </Reveal>

            {/* Body Copy */}
            <Reveal delay={0.2} yOffset={16}>
              <p className="text-base sm:text-lg text-[#F4F1E8]/80 leading-[1.68] font-normal max-w-[500px]">
                We blend strategy, creativity and technology to build digital experiences that look exceptional and perform even better.
              </p>
            </Reveal>

            {/* Primary Minimal Editorial CTA */}
            <Reveal delay={0.28} yOffset={14}>
              <div className="pt-2">
                <Link
                  href="/solutions"
                  className="group inline-flex items-center text-sm font-medium tracking-[0.04em] text-[#F4F1E8] hover:text-[#B2AD7F] transition-colors py-2 relative"
                >
                  <span className="relative">
                    Explore Our Services
                    <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-[#B2AD7F] origin-left transition-transform duration-300 group-hover:scale-x-110" />
                  </span>
                  <span className="ml-3 flex items-center justify-center w-7 h-7 rounded-lg border border-[#B2AD7F]/40 text-[#B2AD7F] transition-all duration-300 group-hover:border-[#B2AD7F] group-hover:bg-[#B2AD7F]/10 group-hover:translate-x-1">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Empty negative space */}
          <div className="hidden lg:block lg:col-span-5" aria-hidden="true" />
        </div>

        {/* Bottom Four Core Pillars Layout */}
        <Reveal delay={0.32} yOffset={20} className="w-full">
          <div className="pt-10 sm:pt-14 border-t border-white/15">
            
            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-white/15">
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
                        <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#B2AD7F] transition-transform duration-300 group-hover:-translate-y-0.5">
                          <IconComponent className="h-5 w-5 stroke-[1.5]" />
                        </div>
                        <span className="font-mono text-xs font-bold text-[#B2AD7F]">
                          {pillar.number}
                        </span>
                      </div>

                      {/* Title in Instrument Serif */}
                      <h3 className="text-2xl sm:text-[26px] font-normal text-[#F4F1E8] tracking-tight group-hover:text-[#B2AD7F] transition-colors duration-200">
                        {pillar.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-sm text-[#F4F1E8]/70 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Micro Framework Note */}
                    <div className="mt-6 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#F4F1E8]/45">
                      <span>{pillar.framework}</span>
                      <span className="text-[#B2AD7F] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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

"use client";

import React from "react";
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
    badgeClass: "bg-[#FFF0E8] border-[#E5E1DA] text-[#EC5D17] group-hover:border-[#EC5D17] group-hover:bg-[#34312F] group-hover:text-[#EC5D17]"
  },
  {
    number: "02",
    title: "Creative",
    description: "Ideas turned into memorable visual experiences.",
    icon: Palette,
    framework: "Creates Experience",
    badgeClass: "bg-[#FFF0E8] border-[#E5E1DA] text-[#EC5D17] group-hover:border-[#EC5D17] group-hover:bg-[#34312F] group-hover:text-[#EC5D17]"
  },
  {
    number: "03",
    title: "Technology",
    description: "Modern, scalable and future-ready solutions.",
    icon: Code2,
    framework: "Builds Solution",
    badgeClass: "bg-[#FFF0E8] border-[#E5E1DA] text-[#EC5D17] group-hover:border-[#EC5D17] group-hover:bg-[#34312F] group-hover:text-[#EC5D17]"
  },
  {
    number: "04",
    title: "Growth",
    description: "Measurable impact that takes you further.",
    icon: TrendingUp,
    framework: "Measures Outcome",
    badgeClass: "bg-[#FFF0E8] border-[#E5E1DA] text-[#EC5D17] group-hover:border-[#EC5D17] group-hover:bg-[#34312F] group-hover:text-[#EC5D17]"
  }
];

export const IdeasToImpactSection: React.FC = () => {
  return (
    <section
      aria-labelledby="ideas-to-impact-heading"
      className="relative bg-[#F7F5F0] text-[#34312F] py-20 sm:py-28 lg:py-32 border-b border-[#E5E1DA] flex items-center"
    >
      <Container size="default" className="relative z-10 w-full max-w-[1280px] flex flex-col justify-between h-full space-y-16 sm:space-y-24">
        
        {/* Top / Main Editorial Centered Content */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6 sm:space-y-7 pt-4">
          
          {/* Eyebrow */}
          <Reveal delay={0.05} yOffset={12}>
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#EC5D17] rounded-full" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#EC5D17]">
                WHAT WE DO
              </span>
              <span className="w-8 h-[2px] bg-[#EC5D17] rounded-full" aria-hidden="true" />
            </div>
          </Reveal>

          {/* Display Headline */}
          <Reveal delay={0.12} yOffset={18}>
            <h2
              id="ideas-to-impact-heading"
              className="text-[clamp(44px,6vw,84px)] font-display font-bold text-[#34312F] tracking-[-0.035em] leading-[1.02] text-center"
            >
              From ideas to{" "}
              <span className="font-display font-bold text-[#EC5D17]">
                impact.
              </span>
            </h2>
          </Reveal>

          {/* Body Copy */}
          <Reveal delay={0.2} yOffset={16}>
            <p className="text-base sm:text-lg text-[#6B6560] leading-[1.7] font-sans font-normal max-w-2xl mx-auto text-center">
              We blend strategy, creativity and technology to build digital experiences that look exceptional and perform even better.
            </p>
          </Reveal>

          {/* Primary Minimal Editorial CTA */}
          <Reveal delay={0.28} yOffset={14}>
            <div className="pt-2 flex justify-center">
              <Link
                href="/solutions"
                className="group inline-flex items-center text-sm font-sans font-semibold tracking-[0.06em] text-[#34312F] hover:text-[#EC5D17] transition-colors py-2 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5D17]"
              >
                <span className="relative">
                  Explore Our Services
                  <span className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-[#EC5D17] origin-left transition-transform duration-300 group-hover:scale-x-110" />
                </span>
                <span className="ml-3 flex items-center justify-center w-7 h-7 rounded-md border border-[#E5E1DA] bg-white text-[#EC5D17] transition-all duration-200 group-hover:border-[#34312F] group-hover:bg-[#34312F] group-hover:text-[#EC5D17] group-hover:translate-x-1 shadow-2xs">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Bottom Four Core Pillars Layout */}
        <Reveal delay={0.32} yOffset={20} className="w-full">
          <div className="pt-10 sm:pt-14 border-t border-[#E5E1DA]">
            
            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-[#E5E1DA]">
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
                        <div className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-200 group-hover:-translate-y-0.5 shadow-2xs ${pillar.badgeClass}`}>
                          <IconComponent className="h-5 w-5 stroke-[1.5]" />
                        </div>
                        <span className="font-mono text-xs font-bold text-[#6B6560] group-hover:text-[#EC5D17] transition-colors">
                          {pillar.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-[26px] font-display font-bold text-[#34312F] tracking-tight group-hover:text-[#EC5D17] transition-colors duration-200">
                        {pillar.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-sm text-[#6B6560] leading-relaxed font-sans font-normal">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Micro Framework Note */}
                    <div className="mt-6 pt-3 border-t border-[#E5E1DA] flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#6B6560]">
                      <span>{pillar.framework}</span>
                      <span className="text-[#EC5D17] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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

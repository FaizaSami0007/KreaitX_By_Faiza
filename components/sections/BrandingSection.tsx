"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Target, PenTool, Shapes, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const brandingCapabilities = [
  {
    title: "Brand Strategy",
    description: "Define. Differentiate. Grow.",
    icon: Target,
    href: "/contact?service=branding&scope=strategy"
  },
  {
    title: "Visual Identity",
    description: "A cohesive visual language.",
    icon: PenTool,
    href: "/contact?service=branding&scope=visual-identity"
  },
  {
    title: "Logo Systems",
    description: "Simple. Memorable. Timeless.",
    icon: Shapes,
    href: "/contact?service=branding&scope=logo-systems"
  },
  {
    title: "Brand Guidelines",
    description: "Consistency across every touchpoint.",
    icon: FileText,
    href: "/contact?service=branding&scope=guidelines"
  }
];

export const BrandingSection: React.FC = () => {
  return (
    <section
      id="branding"
      aria-labelledby="branding-heading"
      className="scroll-mt-24 relative bg-[#F6F7F2] py-20 sm:py-28 lg:py-32 border-b border-[#14213D]/10 overflow-hidden"
    >
      <Container size="default" className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Main Editorial Container with Plain #F6F7F2 Background */}
        <div className="relative rounded-[28px] sm:rounded-[32px] lg:rounded-[36px] bg-[#F6F7F2] border border-[#14213D]/08 p-6 sm:p-10 lg:p-12 xl:p-14">
          
          {/* Foreground Grid Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[520px]">
            
            {/* Left Column: Branding Narrative & Primary CTA (Cols 1-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 sm:space-y-8 max-w-[540px]">
              
              <div className="space-y-4 sm:space-y-5">
                {/* Eyebrow: 01 — IDENTITY & STRATEGY */}
                <Reveal delay={0.05} yOffset={10}>
                  <div className="flex items-center gap-3">
                    <span className="font-serif font-normal text-sm sm:text-base text-[#14213D]">
                      01
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#B2AD7F]" aria-hidden="true" />
                    <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.22em] text-[#14213D]/70">
                      IDENTITY &amp; STRATEGY
                    </span>
                  </div>
                </Reveal>

                {/* Main Heading: Branding that builds trust. */}
                <Reveal delay={0.12} yOffset={16}>
                  <h2
                    id="branding-heading"
                    className="text-[clamp(36px,4.5vw,60px)] font-normal text-[#14213D] tracking-[-0.035em] leading-[1.06]"
                  >
                    Branding <br />
                    that builds{" "}
                    <span className="font-serif-italic font-normal text-[#B2AD7F]">
                      trust.
                    </span>
                  </h2>
                </Reveal>

                {/* Supporting Copy */}
                <Reveal delay={0.18} yOffset={14}>
                  <p className="text-base sm:text-[17px] text-[#14213D]/80 leading-[1.68] font-normal max-w-[460px]">
                    Strategic identities that make your brand recognizable, relevant, and memorable.
                  </p>
                </Reveal>

                {/* Primary CTA */}
                <Reveal delay={0.24} yOffset={14}>
                  <div className="pt-2">
                    <Link
                      href="/contact?service=branding"
                      className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-medium text-[#F7F8FC] bg-[#14213D] hover:bg-[#0C182F] transition-all duration-200 shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      <span>Explore Branding</span>
                      <ArrowRight className="h-4 w-4 text-[#B2AD7F] transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Bottom Micro-Copy */}
              <Reveal delay={0.3} yOffset={10}>
                <div className="pt-6 sm:pt-8 border-t border-[#14213D]/10 flex items-center gap-2.5">
                  <span className="w-3.5 h-[1.5px] bg-[#B2AD7F]" aria-hidden="true" />
                  <div className="text-[10px] font-mono tracking-[0.16em] text-[#14213D]/50 uppercase">
                    <span>IDEAS TODAY</span>
                    <span className="mx-1.5 opacity-40">/</span>
                    <span>RECOGNITION TOMORROW</span>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* Right Column: Deep Navy Capabilities Panel (Cols 7-12) */}
            <div className="lg:col-span-6 w-full max-w-[580px] lg:ml-auto">
              <Reveal delay={0.26} yOffset={20}>
                <div className="relative rounded-[22px] sm:rounded-[26px] bg-[#14213D] text-[#F7F8FC] p-6 sm:p-8 lg:p-9 border border-white/10 shadow-2xl overflow-hidden">
                  
                  {/* Subtle ambient light gradient inside navy card */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#B2AD7F]/10 rounded-full blur-3xl pointer-events-none" />

                  {/* 4 Vertical Capabilities List */}
                  <div className="divide-y divide-white/10 relative z-10">
                    {brandingCapabilities.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className={`group flex items-center justify-between py-4 sm:py-4.5 transition-all duration-200 ${
                            index === 0 ? "pt-0" : ""
                          } ${index === brandingCapabilities.length - 1 ? "pb-0" : ""}`}
                        >
                          <div className="flex items-center gap-3.5 sm:gap-4">
                            {/* Circular Icon Ring */}
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-[#B2AD7F] group-hover:border-[#B2AD7F]/50 group-hover:bg-[#B2AD7F]/10 transition-all duration-200 shrink-0">
                              <IconComponent className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                            </div>

                            {/* Title & Short Description */}
                            <div className="space-y-0.5">
                              <h3 className="text-sm sm:text-base font-medium text-white tracking-tight group-hover:text-[#F7F8FC] transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-xs text-white/55 font-normal leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>

                          {/* Interactive Hover Arrow */}
                          <div className="ml-3 shrink-0 text-white/30 group-hover:text-[#B2AD7F] group-hover:translate-x-1 transition-all duration-200">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Card Bottom Tagline */}
                  <div className="mt-6 sm:mt-7 pt-4 border-t border-white/10 flex items-center gap-2 relative z-10">
                    <span className="w-5 h-[1px] bg-[#B2AD7F]" aria-hidden="true" />
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#B2AD7F] uppercase">
                      BRANDS FOR A BRIGHTER TOMORROW
                    </span>
                  </div>

                </div>
              </Reveal>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

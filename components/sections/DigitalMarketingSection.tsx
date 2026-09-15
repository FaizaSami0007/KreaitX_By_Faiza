"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Search, Megaphone, PieChart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const marketingCapabilities = [
  {
    title: "Strategy & Planning",
    description: "Goal-oriented campaigns that create real impact.",
    icon: BarChart3,
    href: "/contact?service=digital-marketing&scope=strategy"
  },
  {
    title: "SEO & Performance",
    description: "Rank higher. Grow faster.",
    icon: Search,
    href: "/contact?service=digital-marketing&scope=seo"
  },
  {
    title: "Paid Advertising",
    description: "Reach the right audience with precision.",
    icon: Megaphone,
    href: "/contact?service=digital-marketing&scope=paid-ads"
  },
  {
    title: "Analytics & Reporting",
    description: "Insights that drive better decisions.",
    icon: PieChart,
    href: "/contact?service=digital-marketing&scope=analytics"
  }
];

export const DigitalMarketingSection: React.FC = () => {
  return (
    <section
      id="digital-marketing"
      aria-labelledby="digital-marketing-heading"
      className="scroll-mt-24 relative bg-white py-16 sm:py-24 lg:py-28 border-b border-[#14213D]/10 overflow-hidden"
    >
      <Container size="default" className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Main Editorial Card Container with Dove White (#F6F7F2) Canvas */}
        <div className="relative rounded-[28px] sm:rounded-[32px] lg:rounded-[36px] bg-[#F6F7F2] border border-[#14213D]/08 p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[0_12px_40px_-12px_rgba(20,33,61,0.05)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
            
            {/* ---------------------------------------------------------- */}
            {/* LEFT: INTEGRATED DIGITAL MARKETING VISUAL (Cols 1-4 / 5)    */}
            {/* ---------------------------------------------------------- */}
            <div className="lg:col-span-4 xl:col-span-4 w-full">
              <Reveal delay={0.1} yOffset={14}>
                <div className="relative w-full aspect-[4/3] lg:aspect-[4/3.6] xl:aspect-[4/3.4] rounded-[22px] sm:rounded-[26px] overflow-hidden border border-[#14213D]/10 shadow-[0_8px_30px_-8px_rgba(20,33,61,0.12)] group">
                  <Image
                    src="/images/digital-marketing-asset.jpg"
                    alt="KreaitX Digital Marketing Performance & Analytics Dashboard"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle inner vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </Reveal>
            </div>

            {/* ---------------------------------------------------------- */}
            {/* CENTER: NARRATIVE & PRIMARY CTA (Cols 5-8 / 9)            */}
            {/* ---------------------------------------------------------- */}
            <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between h-full space-y-6 sm:space-y-7">
              
              <div className="space-y-4 sm:space-y-5">
                {/* Eyebrow: 02 — DIGITAL MARKETING */}
                <Reveal delay={0.05} yOffset={10}>
                  <div className="flex items-center gap-3">
                    <span className="font-serif font-normal text-sm sm:text-base text-[#14213D]">
                      02
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#B2AD7F]" aria-hidden="true" />
                    <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.22em] text-[#14213D]/70">
                      DIGITAL MARKETING
                    </span>
                  </div>
                </Reveal>

                {/* Main Heading: Marketing that delivers results. */}
                <Reveal delay={0.12} yOffset={16}>
                  <h2
                    id="digital-marketing-heading"
                    className="text-[clamp(32px,3.6vw,48px)] font-normal text-[#14213D] tracking-[-0.035em] leading-[1.08]"
                  >
                    Marketing <br />
                    that delivers{" "}
                    <span className="font-serif-italic font-normal text-[#B2AD7F]">
                      results.
                    </span>
                  </h2>
                </Reveal>

                {/* Supporting Copy */}
                <Reveal delay={0.18} yOffset={14}>
                  <p className="text-sm sm:text-base text-[#14213D]/80 leading-[1.65] font-normal max-w-[380px]">
                    Data-driven strategies to increase visibility, engagement, and conversions.
                  </p>
                </Reveal>

                {/* Primary CTA with Gold Badge */}
                <Reveal delay={0.24} yOffset={14}>
                  <div className="pt-2">
                    <Link
                      href="/contact?service=digital-marketing"
                      className="group inline-flex items-center justify-between pl-6 pr-2 py-2 rounded-full text-xs sm:text-sm font-medium text-[#F7F8FC] bg-[#14213D] hover:bg-[#0C182F] transition-all duration-200 shadow-md hover:-translate-y-0.5 active:scale-[0.98] min-h-[46px]"
                    >
                      <span className="mr-3">Explore Digital Marketing</span>
                      <div className="w-8 h-8 rounded-full bg-[#B2AD7F]/30 flex items-center justify-center text-white transition-all duration-200 group-hover:bg-[#B2AD7F]/50 group-hover:translate-x-0.5 shrink-0">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Bottom Micro-Copy */}
              <Reveal delay={0.3} yOffset={10}>
                <div className="pt-5 sm:pt-6 border-t border-[#14213D]/10 flex items-center gap-2.5">
                  <span className="w-3.5 h-[1.5px] bg-[#B2AD7F]" aria-hidden="true" />
                  <div className="text-[10px] font-mono tracking-[0.16em] text-[#14213D]/50 uppercase">
                    <span>STRATEGY TODAY</span>
                    <span className="mx-1.5 opacity-40">/</span>
                    <span>MEASURABLE GROWTH TOMORROW</span>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* ---------------------------------------------------------- */}
            {/* RIGHT: REFINED CAPABILITIES LIST (Cols 9-12)               */}
            {/* ---------------------------------------------------------- */}
            <div className="lg:col-span-4 xl:col-span-4 w-full pl-0 lg:pl-4 xl:pl-6 border-t lg:border-t-0 lg:border-l border-[#14213D]/10 pt-6 lg:pt-0">
              <Reveal delay={0.2} yOffset={16}>
                <div className="divide-y divide-[#14213D]/10">
                  {marketingCapabilities.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className={`group flex items-center justify-between py-4 sm:py-4.5 transition-all duration-200 ${
                          index === 0 ? "pt-0" : ""
                        } ${index === marketingCapabilities.length - 1 ? "pb-0" : ""}`}
                      >
                        <div className="flex items-center gap-3.5 sm:gap-4">
                          {/* Circular Warm Neutral Icon Ring */}
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#14213D]/08 bg-white/90 flex items-center justify-center text-[#B2AD7F] group-hover:border-[#B2AD7F]/50 group-hover:bg-white transition-all duration-200 shrink-0 shadow-2xs">
                            <IconComponent className="h-4.5 w-4.5 sm:h-5 sm:w-5 stroke-[1.7]" />
                          </div>

                          {/* Title & Subtitle */}
                          <div className="space-y-0.5">
                            <h3 className="text-sm sm:text-base font-semibold text-[#14213D] tracking-tight group-hover:text-[#0C182F] transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-[13px] text-[#14213D]/65 font-normal leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* Interactive Hover Arrow */}
                        <div className="ml-3 shrink-0 text-[#14213D]/30 group-hover:text-[#B2AD7F] group-hover:translate-x-1 transition-all duration-200">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </Reveal>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

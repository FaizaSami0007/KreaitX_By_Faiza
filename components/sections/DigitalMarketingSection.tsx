"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Search, Megaphone, PieChart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CapabilityList, CapabilityItem } from "@/components/ui/CapabilityList";

const marketingCapabilities: CapabilityItem[] = [
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
      className="scroll-mt-24 relative bg-[#F4F1E8] py-16 sm:py-24 lg:py-28 border-b border-[#DEDCD3] overflow-hidden"
    >
      <Container size="default" className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Main Editorial Card Container on Warm White (#FAF8F2) Canvas */}
        <div className="relative rounded-2xl bg-[#FAF8F2] border border-[#DEDCD3] p-6 sm:p-8 lg:p-10 xl:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
            
            {/* ---------------------------------------------------------- */}
            {/* LEFT: INTEGRATED DIGITAL MARKETING VISUAL (Cols 1-4 / 5)    */}
            {/* ---------------------------------------------------------- */}
            <div className="lg:col-span-4 xl:col-span-4 w-full">
              <Reveal delay={0.1} yOffset={14}>
                <div className="relative w-full aspect-[4/3] lg:aspect-[4/3.6] xl:aspect-[4/3.4] rounded-xl overflow-hidden border border-[#DEDCD3] group">
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
                  <SectionLabel number="02" label="DIGITAL MARKETING" />
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
                  <p className="text-sm sm:text-base text-[#182231]/80 leading-[1.65] font-normal max-w-[380px]">
                    Data-driven strategies to increase visibility, engagement, and conversions.
                  </p>
                </Reveal>

                {/* Primary CTA */}
                <Reveal delay={0.24} yOffset={14}>
                  <div className="pt-2">
                    <Link
                      href="/contact?service=digital-marketing"
                      className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-medium text-[#F4F1E8] bg-[#14213D] hover:bg-[#0D182B] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      <span>Explore Digital Marketing</span>
                      <ArrowRight className="h-4 w-4 text-[#B2AD7F] transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Bottom Micro-Copy */}
              <Reveal delay={0.3} yOffset={10}>
                <div className="pt-5 sm:pt-6 border-t border-[#DEDCD3] flex items-center gap-2.5">
                  <span className="w-3.5 h-[1.5px] bg-[#B2AD7F]" aria-hidden="true" />
                  <div className="text-[10px] font-mono tracking-[0.16em] text-[#182231]/50 uppercase">
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
            <div className="lg:col-span-4 xl:col-span-4 w-full pl-0 lg:pl-4 xl:pl-6 border-t lg:border-t-0 lg:border-l border-[#DEDCD3] pt-6 lg:pt-0">
              <Reveal delay={0.2} yOffset={16}>
                <CapabilityList items={marketingCapabilities} theme="light" />
              </Reveal>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

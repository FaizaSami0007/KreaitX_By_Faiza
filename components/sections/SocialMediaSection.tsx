"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileEdit, Users, MessageSquare, BarChart2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const socialMediaCapabilities = [
  {
    title: "Content Strategy",
    description: "Plan. Create. Engage.",
    icon: FileEdit,
    href: "/contact?service=social-media-management&scope=strategy"
  },
  {
    title: "Content Creation",
    description: "Scroll-stopping visuals.",
    icon: Users,
    href: "/contact?service=social-media-management&scope=creation"
  },
  {
    title: "Community Management",
    description: "Real conversations.",
    icon: MessageSquare,
    href: "/contact?service=social-media-management&scope=community"
  },
  {
    title: "Performance Tracking",
    description: "Measure what matters.",
    icon: BarChart2,
    href: "/contact?service=social-media-management&scope=performance"
  }
];

export const SocialMediaSection: React.FC = () => {
  return (
    <section
      id="social-media-management"
      aria-labelledby="social-media-heading"
      className="scroll-mt-24 relative bg-white py-16 sm:py-24 lg:py-28 border-b border-[#14213D]/10 overflow-hidden"
    >
      <Container size="default" className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Main Editorial Card Container with Dove White (#F6F7F2) Canvas */}
        <div className="relative rounded-[28px] sm:rounded-[32px] lg:rounded-[36px] bg-[#F6F7F2] border border-[#14213D]/08 p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[0_12px_40px_-12px_rgba(20,33,61,0.05)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
            
            {/* ---------------------------------------------------------- */}
            {/* LEFT: NARRATIVE & PRIMARY CTA (Cols 1-4)                   */}
            {/* ---------------------------------------------------------- */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 sm:space-y-7">
              
              <div className="space-y-4 sm:space-y-5">
                {/* Eyebrow: 03 — SOCIAL MEDIA MANAGEMENT */}
                <Reveal delay={0.05} yOffset={10}>
                  <div className="flex items-center gap-3">
                    <span className="font-serif font-normal text-sm sm:text-base text-[#14213D]">
                      03
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#B2AD7F]" aria-hidden="true" />
                    <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.22em] text-[#14213D]/70">
                      SOCIAL MEDIA MANAGEMENT
                    </span>
                  </div>
                </Reveal>

                {/* Main Heading: Social media with purpose. */}
                <Reveal delay={0.12} yOffset={16}>
                  <h2
                    id="social-media-heading"
                    className="text-[clamp(32px,3.6vw,48px)] font-normal text-[#14213D] tracking-[-0.035em] leading-[1.08]"
                  >
                    Social media <br />
                    with{" "}
                    <span className="font-serif-italic font-normal text-[#B2AD7F]">
                      purpose.
                    </span>
                  </h2>
                </Reveal>

                {/* Supporting Copy */}
                <Reveal delay={0.18} yOffset={14}>
                  <p className="text-sm sm:text-base text-[#14213D]/80 leading-[1.65] font-normal max-w-[380px]">
                    Consistent, creative content that builds real connections.
                  </p>
                </Reveal>

                {/* Primary CTA with Gold Badge */}
                <Reveal delay={0.24} yOffset={14}>
                  <div className="pt-2">
                    <Link
                      href="/contact?service=social-media-management"
                      className="group inline-flex items-center justify-between pl-6 pr-2 py-2 rounded-full text-xs sm:text-sm font-medium text-[#F7F8FC] bg-[#14213D] hover:bg-[#0C182F] transition-all duration-200 shadow-md hover:-translate-y-0.5 active:scale-[0.98] min-h-[46px]"
                    >
                      <span className="mr-3">Explore Social Media</span>
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
                    <span>REAL CONVERSATIONS</span>
                    <span className="mx-1.5 opacity-40">/</span>
                    <span>STRONGER BRANDS TOMORROW</span>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* ---------------------------------------------------------- */}
            {/* CENTER: SOCIAL MEDIA VISUAL ASSET (Cols 5-8)               */}
            {/* ---------------------------------------------------------- */}
            <div className="lg:col-span-4 w-full">
              <Reveal delay={0.15} yOffset={14}>
                <div className="relative w-full aspect-[4/3] lg:aspect-[4/3.6] xl:aspect-[4/3.4] rounded-[22px] sm:rounded-[26px] overflow-hidden border border-[#14213D]/10 shadow-[0_8px_30px_-8px_rgba(20,33,61,0.12)] group">
                  <Image
                    src="/images/social-media-asset.jpg"
                    alt="KreaitX Social Media Management and Mobile Engagement Showcase"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 440px"
                    className="object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle ambient light vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </Reveal>
            </div>

            {/* ---------------------------------------------------------- */}
            {/* RIGHT: DEEP NAVY CAPABILITIES PANEL (Cols 9-12)            */}
            {/* ---------------------------------------------------------- */}
            <div className="lg:col-span-4 w-full">
              <Reveal delay={0.22} yOffset={18}>
                <div className="relative rounded-[22px] sm:rounded-[26px] bg-[#14213D] text-[#F7F8FC] p-6 sm:p-7 lg:p-8 border border-white/10 shadow-2xl overflow-hidden">
                  
                  {/* Ambient Light Accent */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#B2AD7F]/10 rounded-full blur-3xl pointer-events-none" />

                  {/* 4 Vertical Capabilities */}
                  <div className="divide-y divide-white/10 relative z-10">
                    {socialMediaCapabilities.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className={`group flex items-center justify-between py-3.5 sm:py-4 transition-all duration-200 ${
                            index === 0 ? "pt-0" : ""
                          } ${index === socialMediaCapabilities.length - 1 ? "pb-0" : ""}`}
                        >
                          <div className="flex items-center gap-3.5 sm:gap-4">
                            {/* Circular Icon Ring */}
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-[#B2AD7F] group-hover:border-[#B2AD7F]/50 group-hover:bg-[#B2AD7F]/10 transition-all duration-200 shrink-0">
                              <IconComponent className="h-4 w-4 sm:h-4.5 sm:w-4.5 stroke-[1.7]" />
                            </div>

                            {/* Title & Description */}
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

                  {/* Bottom Micro Detail */}
                  <div className="mt-5 sm:mt-6 pt-3.5 border-t border-white/10 flex items-center gap-2 relative z-10">
                    <span className="w-4 h-[1px] bg-[#B2AD7F]" aria-hidden="true" />
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#B2AD7F] uppercase">
                      ENGAGE · GROW · BUILD COMMUNITY
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

"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileEdit, Users, MessageSquare, BarChart2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CapabilityList, CapabilityItem } from "@/components/ui/CapabilityList";

const socialMediaCapabilities: CapabilityItem[] = [
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
      className="scroll-mt-24 relative bg-[#F4F1E8] py-16 sm:py-24 lg:py-28 border-b border-[#DEDCD3] overflow-hidden"
    >
      <Container size="default" className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Main Editorial Card Container on Warm White (#FAF8F2) Canvas */}
        <div className="relative rounded-2xl bg-[#FAF8F2] border border-[#DEDCD3] p-6 sm:p-10 lg:p-12 xl:p-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[500px]">
            
            {/* ---------------------------------------------------------- */}
            {/* LEFT: NARRATIVE & PRIMARY CTA (Cols 1-6)                   */}
            {/* ---------------------------------------------------------- */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 sm:space-y-8 max-w-[540px]">
              
              <div className="space-y-4 sm:space-y-5">
                {/* Eyebrow: 03 — SOCIAL MEDIA MANAGEMENT */}
                <Reveal delay={0.05} yOffset={10}>
                  <SectionLabel number="03" label="SOCIAL MEDIA MANAGEMENT" />
                </Reveal>

                {/* Main Heading: Social media with purpose. */}
                <Reveal delay={0.12} yOffset={16}>
                  <h2
                    id="social-media-heading"
                    className="text-[clamp(36px,4.5vw,60px)] font-normal text-[#14213D] tracking-[-0.035em] leading-[1.06]"
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
                  <p className="text-base sm:text-[17px] text-[#182231]/80 leading-[1.68] font-normal max-w-[460px]">
                    Consistent, creative content that builds real connections.
                  </p>
                </Reveal>

                {/* Primary CTA */}
                <Reveal delay={0.24} yOffset={14}>
                  <div className="pt-2">
                    <Link
                      href="/contact?service=social-media-management"
                      className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-medium text-[#F4F1E8] bg-[#14213D] hover:bg-[#0D182B] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                      <span>Explore Social Media</span>
                      <ArrowRight className="h-4 w-4 text-[#B2AD7F] transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Bottom Micro-Copy */}
              <Reveal delay={0.3} yOffset={10}>
                <div className="pt-6 sm:pt-8 border-t border-[#DEDCD3] flex items-center gap-2.5">
                  <span className="w-3.5 h-[1.5px] bg-[#B2AD7F]" aria-hidden="true" />
                  <div className="text-[10px] font-mono tracking-[0.16em] text-[#182231]/50 uppercase">
                    <span>REAL CONVERSATIONS</span>
                    <span className="mx-1.5 opacity-40">/</span>
                    <span>STRONGER BRANDS TOMORROW</span>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* ---------------------------------------------------------- */}
            {/* RIGHT: DEEP NAVY CAPABILITIES PANEL (Cols 7-12)            */}
            {/* ---------------------------------------------------------- */}
            <div className="lg:col-span-6 w-full max-w-[580px] lg:ml-auto">
              <Reveal delay={0.22} yOffset={18}>
                <div className="relative rounded-xl bg-[#14213D] text-[#F4F1E8] p-6 sm:p-8 lg:p-9 border border-white/10 overflow-hidden">
                  
                  {/* Ambient Light Accent */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#B2AD7F]/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Vertical Capabilities */}
                  <CapabilityList items={socialMediaCapabilities} theme="dark" className="relative z-10" />

                  {/* Bottom Micro Detail */}
                  <div className="mt-6 sm:mt-7 pt-4 border-t border-white/10 flex items-center gap-2 relative z-10">
                    <span className="w-5 h-[1px] bg-[#B2AD7F]" aria-hidden="true" />
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

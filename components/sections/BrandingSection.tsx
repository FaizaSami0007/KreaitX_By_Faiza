"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Target, PenTool, Shapes, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CapabilityList, CapabilityItem } from "@/components/ui/CapabilityList";

const brandingCapabilities: CapabilityItem[] = [
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
      className="scroll-mt-24 relative bg-white py-16 sm:py-24 lg:py-28 border-b border-slate-200/80 overflow-hidden"
    >
      <Container size="default" className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Main Softy Card Container */}
        <div className="relative rounded-3xl bg-white border border-slate-200/80 shadow-card p-6 sm:p-10 lg:p-12 xl:p-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[480px]">
            
            {/* Left Column: Branding Narrative & Primary CTA (Cols 1-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 sm:space-y-8 max-w-[540px]">
              
              <div className="space-y-4 sm:space-y-5">
                {/* Eyebrow: 01 — IDENTITY & STRATEGY */}
                <Reveal delay={0.05} yOffset={10}>
                  <SectionLabel number="01" label="IDENTITY & STRATEGY" />
                </Reveal>

                {/* Main Heading: Branding that builds trust. */}
                <Reveal delay={0.12} yOffset={16}>
                  <h2
                    id="branding-heading"
                    className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold text-slate-900 tracking-tight leading-[1.08]"
                  >
                    Branding <br />
                    that builds{" "}
                    <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                      trust.
                    </span>
                  </h2>
                </Reveal>

                {/* Supporting Copy */}
                <Reveal delay={0.18} yOffset={14}>
                  <p className="text-base sm:text-lg text-slate-600 leading-[1.68] font-sans font-normal max-w-[460px]">
                    Strategic identities that make your brand recognizable, relevant, and memorable across every medium.
                  </p>
                </Reveal>

                {/* Primary CTA */}
                <Reveal delay={0.24} yOffset={14}>
                  <div className="pt-2">
                    <Link
                      href="/contact?service=branding"
                      className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-sans font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 hover:-translate-y-0.5 shadow-button active:scale-[0.98]"
                    >
                      <span>Explore Branding</span>
                      <ArrowRight className="h-4 w-4 text-white/90 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Bottom Micro-Copy */}
              <Reveal delay={0.3} yOffset={10}>
                <div className="pt-6 sm:pt-8 border-t border-slate-100 flex items-center gap-2.5">
                  <span className="w-3.5 h-[2px] rounded-full bg-purple-600" aria-hidden="true" />
                  <div className="text-xs font-sans tracking-wider text-slate-500 uppercase font-semibold">
                    <span>IDEAS TODAY</span>
                    <span className="mx-2 text-purple-400">•</span>
                    <span>RECOGNITION TOMORROW</span>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* Right Column: Capabilities Panel (Cols 7-12) */}
            <div className="lg:col-span-6 w-full max-w-[580px] lg:ml-auto">
              <Reveal delay={0.26} yOffset={20}>
                <div className="relative rounded-2xl bg-slate-950 text-white p-7 sm:p-9 border border-slate-800 shadow-xl overflow-hidden">
                  
                  {/* Subtle ambient glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

                  {/* Vertical Capabilities List */}
                  <CapabilityList items={brandingCapabilities} theme="dark" className="relative z-10" />

                  {/* Card Bottom Tagline */}
                  <div className="mt-6 sm:mt-7 pt-4 border-t border-slate-800 flex items-center gap-2 relative z-10">
                    <span className="w-5 h-[2px] rounded-full bg-cyan-400" aria-hidden="true" />
                    <span className="text-xs font-sans font-bold tracking-widest text-cyan-400 uppercase">
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

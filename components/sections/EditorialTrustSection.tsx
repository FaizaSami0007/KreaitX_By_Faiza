"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const EditorialTrustSection: React.FC = () => {
  return (
    <section
      aria-labelledby="editorial-positioning-heading"
      className="relative bg-slate-50 text-slate-900 py-20 sm:py-28 lg:py-36 border-b border-slate-200/80 overflow-hidden min-h-[580px] lg:min-h-[660px] flex items-center"
    >
      {/* Editorial Studio Art Background with Mountain Sunset Vista */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/editorial-positioning-theme.jpg"
          alt="KreaitX Creative Technology Studio & Mountain Sunset Vista"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center select-none opacity-95"
        />
        {/* Atmospheric gradient for crisp typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/80 to-transparent lg:from-slate-50/60 lg:via-transparent lg:to-transparent" />
      </div>

      <Container size="default" className="relative z-10 w-full max-w-[1280px]">
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Narrative, Eyebrow & Display Typography (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7 max-w-[620px]">
            
            {/* Eyebrow with delicate rule */}
            <Reveal delay={0.05} yOffset={12}>
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1.5px] bg-purple-600" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] text-purple-600">
                  BUILT WITH AMBITIOUS TEAMS
                </span>
              </div>
            </Reveal>

            {/* Display Headline */}
            <Reveal delay={0.12} yOffset={18}>
              <h2
                id="editorial-positioning-heading"
                className="text-[clamp(36px,4.8vw,64px)] font-display font-bold text-slate-950 tracking-[-0.035em] leading-[1.04]"
              >
                Ambitious ideas <br />
                deserve a better <br />
                <span className="font-serif italic font-normal bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  digital direction.
                </span>
              </h2>
            </Reveal>

            {/* Supporting Editorial Paragraph */}
            <Reveal delay={0.2} yOffset={16}>
              <p className="text-base sm:text-lg text-slate-700 leading-[1.68] font-sans font-normal max-w-[500px]">
                We collaborate with ambitious businesses, creators, and organizations to turn bold ideas into meaningful digital experiences — unifying brand narrative, cinematic production, and high-performance software under one roof.
              </p>
            </Reveal>

            {/* Micro action / proof link */}
            <Reveal delay={0.26} yOffset={14}>
              <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-6">
                <Link
                  href="/about"
                  className="group inline-flex items-center text-xs font-sans font-semibold uppercase tracking-[0.14em] text-slate-900 hover:text-purple-600 transition-colors py-1"
                >
                  <span>Our Studio Philosophy</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 text-purple-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <span className="text-xs text-slate-300 hidden sm:inline">•</span>
                <span className="text-xs font-mono text-slate-500">
                  EST. PESHAWAR × GLOBAL
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Empty spacer to let the photographic background artwork shine through */}
          <div className="hidden lg:block lg:col-span-5 min-h-[350px]" aria-hidden="true" />
        </div>

      </Container>
    </section>
  );
};

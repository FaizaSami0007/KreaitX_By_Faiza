"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#F7F5F0] text-[#34312F] py-20 sm:py-24 lg:py-28 border-b border-[#E5E1DA] overflow-hidden">
      <Container size="default" className="relative z-10 w-full text-center">
        <Reveal yOffset={16}>
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            {/* 1. Eyebrow Badge matching provided UI screenshot */}
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF5A1F] px-4 py-1.5 rounded-md bg-[#FFF0E8] border border-[#E5E1DA] mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" aria-hidden="true" />
              <span>Capabilities × Solutions Architecture</span>
            </span>

            {/* 2. Main Display Headline */}
            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold text-[#34312F] tracking-tight leading-[1.08] max-w-3xl">
              Creative &amp; digital{" "}
              <br className="hidden sm:inline" />
              capabilities,{" "}
              <span className="font-display font-bold text-[#FF5A1F]">
                connected
              </span>.
            </h1>

            {/* 3. Supporting Paragraph */}
            <p className="mt-6 text-lg sm:text-xl text-[#6B6560] leading-relaxed font-sans font-normal max-w-2xl">
              We organize our capabilities around your business challenges rather than isolated deliverables. Discover how each discipline integrates seamlessly into your broader growth engine.
            </p>

            {/* 4. Action Buttons matching provided UI screenshot */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button
                href="/contact"
                variant="cyan"
                size="md"
                withArrow
                onClick={() =>
                  trackEvent("service_cta_click", {
                    cta_location: "homepage_hero",
                    cta_text: "Start a Project"
                  })
                }
                className="w-full sm:w-auto min-h-[48px] font-bold shadow-xs"
              >
                Start a Project
              </Button>

              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-lg text-sm font-semibold text-[#34312F] bg-white hover:bg-[#F7F5F0] hover:text-[#FF5A1F] border border-[#E5E1DA] transition-all duration-200 w-full sm:w-auto shadow-xs"
              >
                Explore All 7 Services ↓
              </Link>
            </div>

          </div>
        </Reveal>
      </Container>
    </section>
  );
};

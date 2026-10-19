"use client";

import React from "react";
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
            
            {/* 1. Studio Status & Eyebrow Badge — matching reference design UI */}
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF5A1F] px-4 py-1.5 rounded-md bg-[#FFF0E8] border border-[#E5E1DA] mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" aria-hidden="true" />
              <span>
                KREAITX STUDIO <span className="text-[#6B6560] mx-1">•</span> <span className="text-[#FF5A1F]">CREATIVE TECHNOLOGY</span>
              </span>
            </span>

            {/* 2. Main Display Headline — centered, bold, modern typography matching reference UI */}
            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold text-[#34312F] tracking-tight leading-[1.08] max-w-3xl mx-auto text-center">
              Creative vision.{" "}
              <br className="hidden sm:inline" />
              <span className="font-display font-bold text-[#FF5A1F]">
                Engineered for impact
              </span>
              .
            </h1>

            {/* 3. Supporting Paragraph — centered, controlled line length matching reference UI */}
            <p className="mt-6 text-lg sm:text-xl text-[#6B6560] leading-relaxed font-sans font-normal max-w-2xl mx-auto text-center">
              We bring brand strategy, creative production and digital engineering together to build meaningful digital experiences and help ambitious businesses grow.
            </p>

            {/* 4. Action Buttons — dual side-by-side buttons matching reference UI */}
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

              <Button
                href="/work"
                variant="secondary"
                size="md"
                withArrow
                className="w-full sm:w-auto min-h-[48px] font-semibold bg-white text-[#34312F] border border-[#E5E1DA] hover:border-[#34312F] hover:bg-[#F7F5F0] hover:text-[#FF5A1F] shadow-xs"
              >
                Explore Selected Work
              </Button>
            </div>

          </div>
        </Reveal>
      </Container>
    </section>
  );
};

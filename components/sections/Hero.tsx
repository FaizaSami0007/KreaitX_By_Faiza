"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
            
            {/* 1. Eyebrow Badge — Reference UI pill design with 100% exact content preserved */}
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#E76F51] px-4 py-1.5 rounded-md bg-[#FBE9E3] border border-[#E5E1DA] mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E76F51]" aria-hidden="true" />
              <span>
                KREAITX STUDIO <span className="text-[#6B6560] mx-0.5">•</span> CREATIVE TECHNOLOGY
              </span>
            </span>

            {/* 2. Main Display Headline — Reference UI large centered display typography with 100% exact wording preserved */}
            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold text-[#34312F] tracking-tight leading-[1.08] max-w-3xl">
              Creative vision.{" "}
              <br className="hidden sm:inline" />
              <span className="font-display font-bold text-[#E76F51]">
                Engineered for impact
              </span>
              .
            </h1>

            {/* 3. Supporting Paragraph — Reference UI centered comfortable line-width with 100% exact text preserved */}
            <p className="mt-6 text-lg sm:text-xl text-[#6B6560] leading-relaxed font-sans font-normal max-w-2xl">
              We bring brand strategy, creative production and digital engineering together to build meaningful digital experiences and help ambitious businesses grow.
            </p>

            {/* 4. Action Buttons — Reference UI dual button composition with 100% exact labels, destinations and handlers preserved */}
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
                className="w-full sm:w-auto min-h-[48px] font-bold shadow-xs text-sm"
              >
                Start a Project
              </Button>

              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-lg text-sm font-semibold text-[#34312F] bg-white hover:bg-[#F7F5F0] hover:text-[#E76F51] border border-[#E5E1DA] transition-all duration-200 w-full sm:w-auto shadow-xs group"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 text-[#34312F] group-hover:text-[#E76F51]" />
              </Link>
            </div>

          </div>
        </Reveal>
      </Container>
    </section>
  );
};

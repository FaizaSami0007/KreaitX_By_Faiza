"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white text-[#10172A] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-[#C5CCDC] overflow-hidden">
      <Container size="default" className="relative z-10 w-full">
        <Reveal yOffset={16}>
          {/* Main Editorial Grid matching Company Profile Cover */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Category Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#3047D5]" aria-hidden="true" />
                <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5]">
                  Brand Films <span className="text-[#6A7180] mx-1">·</span> Proof-Driven Marketing
                </span>
              </div>

              {/* Display Headline */}
              <h1 className="font-display text-[clamp(2.75rem,5.5vw,4.85rem)] font-extrabold text-[#10172A] tracking-tight leading-[1.03]">
                We Design <br />
                <span className="text-[#3047D5]">Growth.</span>
              </h1>

              {/* Editorial Accent Rule */}
              <div className="w-14 h-[3px] bg-[#10172A] my-6" aria-hidden="true" />

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg lg:text-[19px] text-[#3A4454] leading-relaxed font-sans font-normal max-w-xl">
                KreaitX produces brand films, digital engineering, and proof-driven marketing that help capable companies be seen for what they are, and win the clients, contracts and investment that follow.
              </p>

              {/* Dual Action CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  withArrow
                  onClick={() =>
                    trackEvent("service_cta_click", {
                      cta_location: "homepage_hero",
                      cta_text: "Book a consultation"
                    })
                  }
                  className="font-bold min-h-[48px] px-7 shadow-brand-button text-sm justify-center"
                >
                  Book a consultation
                </Button>

                <Link
                  href="/contact"
                  onClick={() =>
                    trackEvent("service_cta_click", {
                      cta_location: "homepage_hero",
                      cta_text: "Request a quote"
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-lg text-sm font-bold text-[#10172A] hover:text-[#3047D5] hover:bg-[#F7F8FC] border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200 group"
                >
                  <span>Request a quote</span>
                  <ArrowRight className="h-4 w-4 text-[#10172A] group-hover:text-[#3047D5] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>

            {/* Right Brand Symbol Column */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] aspect-square rounded-2xl bg-[#F7F8FC] border border-[#C5CCDC] p-8 sm:p-12 flex items-center justify-center shadow-xs overflow-hidden group">
                {/* Subtle Geometric Background Structure */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5CCDC_1px,transparent_1px),linear-gradient(to_bottom,#C5CCDC_1px,transparent_1px)] bg-[size:32px_32px] opacity-25" />
                
                {/* Official Brandmark Symbol */}
                <div className="relative z-10 w-full flex items-center justify-center">
                  <Image
                    src="/images/kreaitx-symbol.png"
                    alt="KreaitX Official Geometric Brandmark"
                    width={222}
                    height={178}
                    priority
                    className="w-3/4 max-w-[280px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Subtle Editorial Label */}
                <span className="absolute bottom-4 right-5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#6A7180]">
                  EST. 2026 · PK × GLOBAL
                </span>
              </div>
            </div>

          </div>

          {/* Bottom 3-Column Metadata Bar (Exact from Company Profile Cover) */}
          <div className="mt-14 sm:mt-18 pt-8 border-t border-[#C5CCDC] grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            {/* Selected Work */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#6A7180] block">
                Selected Work
              </span>
              <p className="text-sm font-sans font-medium text-[#10172A] leading-snug">
                Prime Video documentary trailer, ToltHawk, KP Livestock Department
              </p>
            </div>

            {/* Based In */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#6A7180] block">
                Based In
              </span>
              <p className="text-sm font-sans font-medium text-[#10172A] leading-snug">
                Khyber Pakhtunkhwa, Pakistan. <br className="hidden sm:inline" />
                Serving clients worldwide.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#6A7180] block">
                Contact
              </span>
              <p className="text-sm font-sans font-medium text-[#10172A] leading-snug">
                <a
                  href="https://www.kreaitx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3047D5] transition-colors"
                >
                  www.kreaitx.com
                </a>
                <br />
                <a
                  href="mailto:mehboobakbar@kreaitx.com"
                  className="text-[#3047D5] hover:underline"
                >
                  mehboobakbar@kreaitx.com
                </a>
              </p>
            </div>

          </div>
        </Reveal>
      </Container>
    </section>
  );
};

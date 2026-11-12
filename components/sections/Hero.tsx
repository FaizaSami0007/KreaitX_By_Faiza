"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteData";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white text-[#10172A] pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 border-b border-[#C5CCDC] overflow-hidden">
      <Container size="default" className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pb-16 sm:pb-20">
          
          {/* Main Editorial Headline & Copy */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <Reveal yOffset={16}>
              {/* Eyebrow Label from Company Profile Cover */}
              <p className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.18em] text-[#3047D5] mb-5">
                BRAND FILMS <span className="text-[#6A7180] mx-1">·</span> PROOF-DRIVEN MARKETING
              </p>

              {/* Main Headline */}
              <h1 className="font-display text-[clamp(2.75rem,6.5vw,5rem)] font-extrabold text-[#10172A] tracking-tight leading-[1.02] max-w-2xl">
                We Design{" "}
                <span className="text-[#3047D5] block sm:inline">Growth.</span>
              </h1>

              {/* Editorial Accent Rule */}
              <div className="w-12 h-[3px] bg-[#10172A] my-6 sm:my-7" aria-hidden="true" />

              {/* Lead Description */}
              <p className="text-lg sm:text-xl text-[#3A4454] leading-relaxed font-sans max-w-xl font-normal">
                KreaitX produces brand films and marketing that help capable companies be seen for what they are, and win the clients, contracts and investment that follow.
              </p>

              {/* Dual Action Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="min-h-[48px] px-7 font-bold text-sm shadow-brand-button"
                >
                  Book a consultation
                </Button>

                <Link
                  href="/contact?type=quote"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-lg text-sm font-semibold text-[#10172A] hover:text-[#3047D5] bg-white hover:bg-[#F7F8FC] border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200"
                >
                  Request a quote
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Brand Geometry (Large Geometric X from Cover) */}
          <div className="lg:col-span-4 hidden lg:flex justify-end items-center">
            <Reveal yOffset={24}>
              <div className="relative w-64 h-64 xl:w-72 xl:h-72 flex items-center justify-center select-none pointer-events-none opacity-95">
                <Image
                  src="/images/kreaitx-symbol.png"
                  alt="KreaitX brandmark"
                  width={288}
                  height={230}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Metadata Anchor Row — Directly Mirroring Cover Page 1 */}
        <div className="pt-8 sm:pt-10 border-t border-[#C5CCDC] grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {/* Selected Work Meta */}
          <div className="space-y-1.5">
            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#6A7180]">
              SELECTED WORK
            </p>
            <p className="text-xs sm:text-[13px] text-[#10172A] font-medium leading-relaxed font-sans">
              Prime Video documentary trailer, ToltHawk, KP Livestock Department
            </p>
          </div>

          {/* Location Meta */}
          <div className="space-y-1.5">
            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#6A7180]">
              BASED IN
            </p>
            <p className="text-xs sm:text-[13px] text-[#10172A] font-medium leading-relaxed font-sans">
              Khyber Pakhtunkhwa, Pakistan. <br />
              <span className="text-[#6A7180] font-normal">Serving clients worldwide &amp; in the US.</span>
            </p>
          </div>

          {/* Contact Meta */}
          <div className="space-y-1.5">
            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#6A7180]">
              CONTACT
            </p>
            <p className="text-xs sm:text-[13px] text-[#10172A] font-medium leading-relaxed font-sans">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[#3047D5] hover:underline font-semibold"
              >
                {siteConfig.contact.email}
              </a>
              <br />
              <span className="text-[#6A7180] font-normal">www.kreaitx.com</span>
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
};

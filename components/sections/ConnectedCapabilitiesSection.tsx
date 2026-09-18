"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const capabilitiesList = [
  { id: "branding", name: "Branding", href: "#branding", number: "01" },
  { id: "digital-marketing", name: "Digital Marketing", href: "#digital-marketing", number: "02" },
  { id: "social-media-management", name: "Social Media Management", href: "#social-media-management", number: "03" },
  { id: "filming-production", name: "Filming & Production", href: "#filming-production", number: "04" },
  { id: "graphic-design", name: "Graphic Design", href: "#graphic-design", number: "05" },
  { id: "2d-animation", name: "2D Animation", href: "#2d-animation", number: "06" },
  { id: "digital-solutions", name: "Digital Solutions", href: "#digital-solutions", number: "07" }
];

export const ConnectedCapabilitiesSection: React.FC = () => {
  return (
    <section
      id="connected-capabilities"
      aria-labelledby="connected-capabilities-heading"
      className="relative bg-[#F4F1E8] text-[#14213D] py-20 sm:py-28 lg:py-36 border-b border-[#DEDCD3] overflow-hidden flex items-center justify-center min-h-[680px] lg:min-h-[780px]"
    >
      {/* Background Architectural Artwork Layer - 100% Sharp & Unblurred */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <Image
          src="/images/connected-capabilities-bg.png"
          alt="KreaitX Connected Capabilities Studio Environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none"
        />
      </div>

      <Container size="default" className="relative z-10 w-full max-w-[1320px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Eyebrow, Headline, Paragraph, Service Index (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-7 max-w-[640px]">
            
            {/* Eyebrow with gold bar */}
            <Reveal delay={0.05} yOffset={12}>
              <div className="flex items-center gap-3">
                <span className="w-7 h-[1.5px] bg-[#B2AD7F]" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.22em] text-[#B2AD7F]">
                  CONNECTED CAPABILITIES
                </span>
              </div>
            </Reveal>

            {/* Main Statement Headline */}
            <Reveal delay={0.12} yOffset={18}>
              <h2
                id="connected-capabilities-heading"
                className="text-[clamp(34px,4.5vw,62px)] font-normal text-[#14213D] tracking-[-0.035em] leading-[1.06]"
              >
                Everything we build <br />
                <span className="font-serif-italic font-normal text-[#B2AD7F]">
                  is connected.
                </span>
              </h2>
            </Reveal>

            {/* Supporting Idea Copy */}
            <Reveal delay={0.18} yOffset={14}>
              <p className="text-base sm:text-lg text-[#182231]/80 leading-[1.7] font-normal max-w-[540px]">
                Strategy, creativity and technology working together to create stronger outcomes for your business — unifying brand narrative, cinematic production, and high-performance software under one roof.
              </p>
            </Reveal>

            {/* Interactive 7-Services Index Pills */}
            <Reveal delay={0.24} yOffset={14}>
              <div className="pt-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#667085] block mb-3">
                  EXPLORE ALL 7 DISCIPLINES
                </span>
                <div className="flex flex-wrap gap-2 sm:gap-2.5 max-w-[580px]">
                  {capabilitiesList.map((service) => (
                    <a
                      key={service.id}
                      href={service.href}
                      className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#182231] bg-[#FAF8F2] hover:bg-[#14213D] hover:text-[#F4F1E8] border border-[#DEDCD3] transition-all duration-200 shadow-subtle"
                    >
                      <span className="font-mono text-[10px] text-[#B2AD7F] group-hover:text-[#B2AD7F]">
                        {service.number}
                      </span>
                      <span>{service.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Bottom Meta & Direct Navigation */}
            <Reveal delay={0.3} yOffset={14}>
              <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-[#DEDCD3] w-full">
                <a
                  href="#branding"
                  className="group inline-flex items-center text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#14213D] hover:text-[#0D182B] transition-colors py-1"
                >
                  <span>Explore Our Services</span>
                  <ArrowDown className="ml-2 h-3.5 w-3.5 text-[#B2AD7F] transition-transform duration-200 group-hover:translate-y-1" />
                </a>
                <span className="text-xs text-[#DEDCD3] hidden sm:inline">•</span>
                <span className="text-[11px] sm:text-xs font-mono tracking-wider text-[#667085] uppercase">
                  EST. PESHAWAR × GLOBAL
                </span>
              </div>
            </Reveal>

          </div>

          {/* Right Column: Open visual space for the circular artwork portal */}
          <div className="hidden lg:block lg:col-span-5 min-h-[420px]" aria-hidden="true" />

        </div>
      </Container>
    </section>
  );
};

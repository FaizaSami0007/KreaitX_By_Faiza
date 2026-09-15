"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="connected-capabilities"
      aria-labelledby="connected-capabilities-heading"
      className="relative bg-[#F7F8FC] text-[#14213D] py-24 sm:py-32 lg:py-40 border-b border-[#14213D]/10 overflow-hidden flex items-center justify-center min-h-[720px] lg:min-h-[820px]"
    >
      {/* Background Architectural Artwork Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <Image
          src="/images/connected-capabilities-bg.png"
          alt="KreaitX Connected Capabilities Studio Environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60 sm:opacity-75"
        />
        {/* Soft atmospheric gradient to ensure crisp, readable centered typography */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F8FC]/85 via-[#F7F8FC]/60 to-[#F7F8FC]/90" />
      </div>

      <Container size="default" className="relative z-10 w-full max-w-[1280px]">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Eyebrow */}
          <Reveal delay={0.05} yOffset={10}>
            <div className="flex flex-col items-center justify-center mb-6 sm:mb-8">
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#14213D]/70">
                OUR CAPABILITIES
              </span>
              <span className="w-10 h-[1.5px] bg-[#B2AD7F] mt-3" aria-hidden="true" />
            </div>
          </Reveal>

          {/* Main Statement Headline */}
          <Reveal delay={0.12} yOffset={18}>
            <h2
              id="connected-capabilities-heading"
              className="text-[clamp(38px,5.8vw,80px)] font-normal text-[#14213D] tracking-[-0.035em] leading-[1.02]"
            >
              Everything we build <br />
              <span className="font-serif-italic font-normal text-[#B2AD7F]">
                is connected.
              </span>
            </h2>
          </Reveal>

          {/* Supporting Idea Copy */}
          <Reveal delay={0.18} yOffset={14}>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-[19px] text-[#14213D]/75 leading-[1.68] font-normal max-w-[620px] mx-auto">
              Strategy, creativity and technology working together to create stronger outcomes for your business.
            </p>
          </Reveal>

          {/* ============================================================ */}
          {/* SERVICE NAVIGATION INDEX                                     */}
          {/* ============================================================ */}
          <Reveal delay={0.26} yOffset={16} className="w-full mt-14 sm:mt-18 lg:mt-20">
            {/* Desktop & Tablet: Sophisticated Flowing Index */}
            <div className="hidden md:flex flex-wrap items-center justify-center gap-x-8 lg:gap-x-10 gap-y-6 max-w-4xl mx-auto">
              {capabilitiesList.map((service) => {
                const isHovered = hoveredId === service.id;

                return (
                  <a
                    key={service.id}
                    href={service.href}
                    onMouseEnter={() => setHoveredId(service.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="group inline-flex flex-col items-center py-2 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#B2AD7F] opacity-70 group-hover:opacity-100">
                        {service.number}
                      </span>
                      <span
                        className={`text-sm lg:text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${
                          isHovered ? "text-[#14213D]" : "text-[#14213D]/85"
                        }`}
                      >
                        {service.name}
                      </span>
                    </div>

                    {/* Interactive Expanding Underline + Green-Gold Dot */}
                    <div className="flex items-center justify-center mt-2 w-full">
                      <div
                        className={`h-[1.5px] transition-all duration-300 ${
                          isHovered ? "w-12 bg-[#B2AD7F]" : "w-6 bg-[#14213D]/20"
                        }`}
                      />
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-[#B2AD7F] ml-1.5 transition-all duration-300 ${
                          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-50"
                        }`}
                      />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Mobile: Clean Vertical List with Accessible Touch Targets */}
            <div className="flex md:hidden flex-col w-full divide-y divide-[#14213D]/10 bg-white/70 backdrop-blur-sm rounded-2xl border border-[#14213D]/10 p-2 shadow-sm">
              {capabilitiesList.map((service) => (
                <a
                  key={service.id}
                  href={service.href}
                  className="flex items-center justify-between py-3.5 px-4 text-left min-h-[46px] hover:bg-white/80 active:bg-white transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#B2AD7F]">
                      {service.number}
                    </span>
                    <span className="text-sm font-semibold text-[#14213D]">
                      {service.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#B2AD7F]">→</span>
                </a>
              ))}
            </div>
          </Reveal>

          {/* ============================================================ */}
          {/* SECTION CONTINUATION / SUBTLE CTA                            */}
          {/* ============================================================ */}
          <Reveal delay={0.34} yOffset={14}>
            <div className="mt-16 sm:mt-20 flex flex-col items-center">
              <a
                href="#branding"
                className="group inline-flex flex-col items-center text-xs font-mono font-semibold uppercase tracking-[0.18em] text-[#14213D]/70 hover:text-[#14213D] transition-colors"
              >
                <span>Explore Our Services</span>
                <span className="w-[1px] h-8 sm:h-10 bg-[#14213D]/25 group-hover:h-14 group-hover:bg-[#B2AD7F] transition-all duration-300 my-2.5" />
                <ArrowDown className="h-3.5 w-3.5 text-[#B2AD7F] transition-transform duration-200 group-hover:translate-y-1" />
              </a>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
};

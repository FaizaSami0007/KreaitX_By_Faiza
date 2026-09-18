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
      className="relative bg-white text-slate-900 py-20 sm:py-28 lg:py-36 border-b border-slate-200/80 overflow-hidden flex items-center justify-center min-h-[680px] lg:min-h-[780px]"
    >
      {/* Background Architectural Artwork Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <Image
          src="/images/connected-capabilities-bg.png"
          alt="KreaitX Connected Capabilities Studio Environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none opacity-90"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      <Container size="default" className="relative z-10 w-full max-w-[1320px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Eyebrow, Headline, Paragraph, Service Index (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-7 max-w-[640px] bg-white/80 p-8 sm:p-10 rounded-3xl backdrop-blur-md border border-slate-200/80 shadow-card">
            
            {/* Eyebrow */}
            <Reveal delay={0.05} yOffset={12}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 text-xs font-semibold uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-600 animate-pulse" />
                <span>CONNECTED CAPABILITIES</span>
              </div>
            </Reveal>

            {/* Main Statement Headline */}
            <Reveal delay={0.12} yOffset={18}>
              <h2
                id="connected-capabilities-heading"
                className="font-display text-4xl sm:text-5xl lg:text-[58px] font-bold text-slate-950 tracking-tight leading-[1.08]"
              >
                Everything we build <br />
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  is connected.
                </span>
              </h2>
            </Reveal>

            {/* Supporting Idea Copy */}
            <Reveal delay={0.18} yOffset={14}>
              <p className="text-base sm:text-lg text-slate-600 leading-[1.7] font-sans font-normal max-w-[540px]">
                Strategy, creativity and technology working together to create stronger outcomes for your business — unifying brand narrative, cinematic production, and high-performance software under one roof.
              </p>
            </Reveal>

            {/* Interactive 7-Services Index Pills */}
            <Reveal delay={0.24} yOffset={14}>
              <div className="pt-1">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  EXPLORE ALL 7 DISCIPLINES
                </span>
                <div className="flex flex-wrap gap-2 sm:gap-2.5 max-w-[580px]">
                  {capabilitiesList.map((service) => (
                    <a
                      key={service.id}
                      href={service.href}
                      className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-medium text-slate-800 bg-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white border border-slate-200/80 transition-all duration-300 shadow-subtle hover:shadow-button"
                    >
                      <span className="font-display font-bold text-xs text-purple-600 group-hover:text-purple-200">
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
              <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-slate-200/80 w-full">
                <a
                  href="#branding"
                  className="group inline-flex items-center text-xs font-sans font-bold uppercase tracking-wider text-purple-700 hover:text-purple-800 transition-colors py-1"
                >
                  <span>Explore Our Services</span>
                  <ArrowDown className="ml-2 h-3.5 w-3.5 text-purple-600 transition-transform duration-200 group-hover:translate-y-1" />
                </a>
                <span className="text-xs text-slate-300 hidden sm:inline">•</span>
                <span className="text-xs font-sans font-semibold tracking-wider text-slate-500 uppercase">
                  EST. PESHAWAR × GLOBAL
                </span>
              </div>
            </Reveal>

          </div>

          {/* Right Column: Open visual space */}
          <div className="hidden lg:block lg:col-span-5 min-h-[420px]" aria-hidden="true" />

        </div>
      </Container>
    </section>
  );
};

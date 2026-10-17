"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const capabilitiesList = [
  { id: "branding", name: "Branding", href: "#branding", number: "01", desc: "Identity, strategy, positioning & design systems" },
  { id: "digital-marketing", name: "Digital Marketing", href: "#digital-marketing", number: "02", desc: "Performance funnels, search visibility & paid campaigns" },
  { id: "social-media-management", name: "Social Media Management", href: "#social-media-management", number: "03", desc: "Community building, narrative content & engagement" },
  { id: "filming-production", name: "Filming & Production", href: "#filming-production", number: "04", desc: "Commercial cinematography & cinematic storytelling" },
  { id: "graphic-design", name: "Graphic Design", href: "#graphic-design", number: "05", desc: "Editorial layouts, visual assets & brand collateral" },
  { id: "2d-animation", name: "2D Animation", href: "#2d-animation", number: "06", desc: "Explainer motion, kinetic typography & visual effects" },
  { id: "digital-solutions", name: "Digital Solutions", href: "#digital-solutions", number: "07", desc: "High-performance web apps & enterprise platforms" }
];

export const ConnectedCapabilitiesSection: React.FC = () => {
  return (
    <section
      id="connected-capabilities"
      aria-labelledby="connected-capabilities-heading"
      className="relative bg-[#003049] text-white py-20 sm:py-28 lg:py-32 border-b border-slate-800"
    >
      <Container size="default" className="relative z-10 w-full max-w-[1320px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Eyebrow, Headline, Paragraph, Actions (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6 sm:space-y-7 sticky top-28">
            
            {/* Eyebrow */}
            <Reveal delay={0.05} yOffset={12}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#42C6D9] text-xs font-mono font-bold uppercase tracking-wider shadow-subtle">
                <span className="h-1.5 w-1.5 rounded-full bg-[#42C6D9]" />
                <span>CONNECTED CAPABILITIES</span>
              </div>
            </Reveal>

            {/* Main Statement Headline */}
            <Reveal delay={0.12} yOffset={18}>
              <h2
                id="connected-capabilities-heading"
                className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.08]"
              >
                Everything we build <br />
                <span className="font-serif italic font-normal bg-gradient-to-r from-white via-cyan-100 to-[#42C6D9] bg-clip-text text-transparent">
                  is connected.
                </span>
              </h2>
            </Reveal>

            {/* Supporting Idea Copy */}
            <Reveal delay={0.18} yOffset={14}>
              <p className="text-base sm:text-lg text-slate-300 leading-[1.7] font-sans font-normal">
                Strategy, creativity, and technology working together to create stronger outcomes for your business — unifying brand narrative, cinematic production, and high-performance software under one roof.
              </p>
            </Reveal>

            {/* Primary Action */}
            <Reveal delay={0.24} yOffset={14}>
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#branding"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-[#003049] bg-[#42C6D9] hover:bg-cyan-300 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Explore 7 Disciplines</span>
                  <ArrowDown className="h-4 w-4 text-[#003049]" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#42C6D9] hover:text-white py-2 transition-colors"
                >
                  <span>Discuss Your Scope</span>
                  <ArrowRight className="h-4 w-4 text-[#42C6D9]" />
                </Link>
              </div>
            </Reveal>

            {/* Bottom Meta */}
            <div className="pt-6 border-t border-white/10 w-full text-xs font-mono text-slate-400 uppercase tracking-wider">
              Single-Source Delivery Model // Peshawar × Global
            </div>

          </div>

          {/* Right Column: Structured 7-Capability Vertical Matrix (Cols 6-12) */}
          <div className="lg:col-span-7 space-y-3">
            {capabilitiesList.map((service, idx) => (
              <Reveal key={service.id} delay={0.08 + idx * 0.04} yOffset={12}>
                <a
                  href={service.href}
                  className="group flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-[#14213D] border border-slate-700/80 shadow-card hover:border-[#42C6D9] transition-all duration-200 block"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#42C6D9] bg-white/10 border border-white/15 px-2.5 py-1 rounded-lg shrink-0">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#42C6D9] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-sans mt-0.5">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-slate-300 group-hover:border-[#42C6D9] group-hover:bg-[#42C6D9] group-hover:text-[#003049] transition-all duration-200 shrink-0 ml-4">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

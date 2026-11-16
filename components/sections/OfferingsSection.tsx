"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { coreOfferings, additionalCapabilities } from "@/data/siteData";

export const OfferingsSection: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28 border-b border-[#C5CCDC] text-[#10172A] relative overflow-hidden">
      <Container size="default" className="relative z-10 max-w-[1320px]">
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#3047D5]" aria-hidden="true" />
                <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5]">
                  03 // Services &amp; Pricing
                </span>
              </div>
              <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.5rem)] font-extrabold text-[#10172A] tracking-tight leading-[1.08]">
                Four core offerings. <br />
                <span className="text-[#3047D5]">Clear scope, fixed USD pricing.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#6A7180] leading-relaxed font-sans font-normal">
                Structured around our proof-driven methodology. Every engagement begins with a defined scope and a guaranteed fixed price in USD before work begins.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/solutions"
                className="group inline-flex items-center text-sm font-sans font-bold text-[#10172A] hover:text-[#3047D5] transition-colors"
              >
                <span>View Full Solutions Page</span>
                <ArrowRight className="ml-1.5 h-4 w-4 text-[#3047D5] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* 4 Core Offerings Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreOfferings.map((offering) => {
            const isComplimentary = offering.id === "x-ray-audit";

            return (
              <StaggerItem key={offering.id}>
                <div
                  className={`h-full rounded-xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-200 group shadow-2xs ${
                    isComplimentary
                      ? "bg-[#F7F8FC] border-[#3047D5]/40 hover:border-[#3047D5]"
                      : "bg-white border-[#C5CCDC] hover:border-[#3047D5]"
                  }`}
                >
                  <div>
                    {/* Top Tag & Number */}
                    <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#C5CCDC]">
                      <span className="text-xs font-mono font-bold text-[#3047D5] uppercase tracking-wider">
                        {offering.tag}
                      </span>
                      <span className="text-xs font-mono text-[#6A7180] font-semibold">
                        {offering.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold text-[#10172A] tracking-tight group-hover:text-[#3047D5] transition-colors">
                      {offering.title}
                    </h3>

                    {/* Pricing Badge */}
                    <div className="mt-3 py-1.5 px-2.5 rounded bg-white border border-[#C5CCDC] inline-block">
                      <span className="text-xs font-mono font-bold text-[#10172A]">
                        {offering.pricingLabel}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-3.5 text-xs sm:text-sm text-[#6A7180] leading-relaxed font-sans">
                      {offering.description}
                    </p>

                    {/* Features list */}
                    <ul className="mt-5 space-y-2 pt-4 border-t border-[#C5CCDC]/60">
                      {offering.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs font-sans text-[#3A4454]">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#3047D5] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action CTA */}
                  <div className="mt-6 pt-4 border-t border-[#C5CCDC]/60">
                    <Link
                      href={`/contact?type=${offering.ctaType}&service=${encodeURIComponent(offering.title)}`}
                      className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg text-xs font-bold transition-all duration-200 ${
                        isComplimentary
                          ? "bg-[#3047D5] text-white hover:bg-[#2538B0] shadow-brand-button"
                          : "bg-white text-[#10172A] border border-[#C5CCDC] hover:border-[#3047D5] hover:text-[#3047D5]"
                      }`}
                    >
                      <span>{offering.ctaLabel}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Additional Capabilities Strip */}
        <Reveal yOffset={20}>
          <div className="mt-12 rounded-xl bg-[#F7F8FC] border border-[#C5CCDC] p-6 sm:p-8">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#6A7180] block mb-3">
              Additional Studio Capabilities
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {additionalCapabilities.map((cap) => (
                <div key={cap.title} className="p-3.5 rounded-lg bg-white border border-[#C5CCDC]">
                  <h4 className="text-xs font-display font-bold text-[#10172A]">
                    {cap.title}
                  </h4>
                  <p className="mt-1 text-[11px] text-[#6A7180] leading-snug font-sans">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Fixed USD Pricing Commitment Banner (Exact from PDF Page 4) */}
        <Reveal yOffset={20}>
          <div className="mt-8 rounded-xl bg-white border border-[#C5CCDC] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xs">
            <div className="flex items-start gap-4 max-w-2xl">
              <div className="w-10 h-10 rounded-lg bg-[#F7F8FC] border border-[#C5CCDC] flex items-center justify-center shrink-0 text-[#3047D5]">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base font-display font-bold text-[#10172A]">
                  The KreaitX Pricing Commitment
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-[#6A7180] font-sans leading-relaxed">
                  Every engagement begins with a defined scope and a fixed price in USD. No hidden costs. No open-ended billing. You know exactly what you will receive and what it will cost before work begins.
                </p>
              </div>
            </div>

            <Link
              href="/contact?type=quote"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-[#10172A] bg-white hover:bg-[#F7F8FC] hover:text-[#3047D5] border border-[#C5CCDC] hover:border-[#3047D5] transition-colors shrink-0"
            >
              <span>Request a Fixed Quote</span>
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};


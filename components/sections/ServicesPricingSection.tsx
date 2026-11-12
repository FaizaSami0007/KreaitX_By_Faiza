"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { profilePackages } from "@/data/siteData";

export const ServicesPricingSection: React.FC = () => {
  return (
    <section id="services" className="bg-[#F7F8FC] py-20 sm:py-24 lg:py-28 border-b border-[#C5CCDC]">
      <Container size="default">
        
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#3047D5] mb-3">
              03 — SERVICES AND PRICING
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10172A] tracking-tight leading-[1.12]">
              Defined scope.{" "}
              <span className="text-[#3047D5]">Fixed pricing.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#3A4454] leading-relaxed font-sans font-normal">
              Every engagement is quoted at a fixed price, in USD, before work begins.
            </p>
          </div>
        </Reveal>

        {/* 4 Packages in 2x2 Grid */}
        <Reveal yOffset={20}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {profilePackages.map((pkg) => (
              <div
                key={pkg.title}
                className="rounded-xl bg-white border border-[#C5CCDC] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#3047D5] transition-colors duration-200"
              >
                <div>
                  <p className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#6A7180] mb-2">
                    {pkg.category}
                  </p>
                  <h3 className="text-2xl font-display font-bold text-[#10172A] mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#3047D5] mb-6">
                    {pkg.pricing}
                  </p>

                  <div className="w-full h-px bg-[#C5CCDC] mb-6" />

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-[#3A4454] font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3047D5] shrink-0 mt-2" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  href={pkg.ctaHref}
                  variant={pkg.category === "ASSESSMENT" ? "secondary" : "primary"}
                  size="md"
                  className="w-full font-bold text-sm shadow-xs"
                >
                  {pkg.ctaText}
                </Button>
              </div>
            ))}
          </div>
        </Reveal>

        {/* "Also Available" Strip directly from Page 4 */}
        <Reveal yOffset={16}>
          <div className="rounded-xl bg-white border border-[#C5CCDC] p-6 sm:p-7 flex flex-col sm:flex-row items-baseline gap-3 sm:gap-6">
            <span className="text-sm font-display font-bold text-[#10172A] shrink-0">
              Also available
            </span>
            <span className="text-sm text-[#6A7180] font-sans">
              Demonstration videos, photography, motion graphics, brand identity, and web engineering campaigns.
            </span>
          </div>
        </Reveal>

      </Container>
    </section>
  );
};

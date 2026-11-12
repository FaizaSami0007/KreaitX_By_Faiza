"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteData";

export interface CTASectionProps {
  bg?: "light" | "dark" | "porcelain" | "white" | "peach" | "cool-gray";
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  bg = "white",
  className
}) => {
  const isAlt = bg === "peach" || bg === "cool-gray";
  const bgClass = isAlt ? "bg-[#F7F8FC]" : "bg-white";

  const options = [
    {
      title: "Book a consultation",
      description: "15 minutes on your goals, timeline and budget.",
      ctaText: "Book now",
      href: "/contact?type=consultation",
      isPrimary: true
    },
    {
      title: "Request a quote",
      description: "Share your project brief and receive a fixed price.",
      ctaText: "Request a quote",
      href: "/contact?type=quote",
      isPrimary: false
    },
    {
      title: "Complimentary X-Ray Audit",
      description: "See where your business is being undersold.",
      ctaText: "Request an audit",
      href: "/contact?type=audit",
      isPrimary: false
    }
  ];

  return (
    <section id="contact-start" className={`${bgClass} py-20 sm:py-24 lg:py-28 border-t border-[#C5CCDC] relative ${className || ""}`}>
      <Container size="default">
        <Reveal yOffset={16}>
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#3047D5] mb-3">
              07 — CONTACT
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10172A] tracking-tight leading-[1.12]">
              Let&apos;s find the proof{" "}
              <span className="text-[#3047D5] block sm:inline">you already have.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#3A4454] leading-relaxed font-sans font-normal">
              Choose the starting point that suits you. Every conversation is confidential and carries no obligation.
            </p>
          </div>
        </Reveal>

        {/* 3 Starting Points with Clean Dividers */}
        <Reveal yOffset={20}>
          <div className="border-t border-[#C5CCDC] divide-y divide-[#C5CCDC] mb-14 sm:mb-16">
            {options.map((opt) => (
              <div
                key={opt.title}
                className="py-6 sm:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#10172A]">
                    {opt.title}
                  </h3>
                  <p className="text-sm text-[#6A7180] font-sans mt-0.5">
                    {opt.description}
                  </p>
                </div>

                <Button
                  href={opt.href}
                  variant={opt.isPrimary ? "primary" : "secondary"}
                  size="md"
                  className="shrink-0 w-full sm:w-auto font-bold text-sm shadow-xs px-6"
                >
                  {opt.ctaText}
                </Button>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Closing Contact Meta & Brand Mark directly from Page 8 */}
        <Reveal yOffset={16}>
          <div className="pt-8 sm:pt-10 border-t border-[#C5CCDC] grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-2 text-xs sm:text-sm text-[#6A7180] font-sans">
              <p>
                <span className="font-bold text-[#10172A] inline-block w-20">Website</span>
                <span>www.kreaitx.com</span>
              </p>
              <p>
                <span className="font-bold text-[#10172A] inline-block w-20">Email</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[#3047D5] hover:underline font-semibold"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <span className="font-bold text-[#10172A] inline-block w-20">Based in</span>
                <span>Khyber Pakhtunkhwa, Pakistan</span>
              </p>
              <p>
                <span className="font-bold text-[#10172A] inline-block w-20">Serving</span>
                <span>The United States and worldwide</span>
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end items-center">
              <p className="text-2xl sm:text-3xl font-display font-extrabold text-[#10172A] tracking-tight">
                We Design{" "}
                <span className="text-[#3047D5]">Growth.</span>
              </p>
            </div>
          </div>
        </Reveal>

      </Container>
    </section>
  );
};

"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Layers, Cpu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceItem } from "@/types";
import { servicesData } from "@/data/siteData";

export interface SolutionServiceSectionProps {
  service: ServiceItem;
  headline: {
    prefix: string;
    highlight: string;
  };
  theme: "light" | "dark";
}

export const SolutionServiceSection: React.FC<SolutionServiceSectionProps> = ({
  service,
  headline,
  theme
}) => {
  const isDark = theme === "dark";

  return (
    <section
      id={service.id}
      aria-labelledby={`${service.id}-heading`}
      className={`scroll-mt-24 relative py-16 sm:py-24 lg:py-28 border-b overflow-hidden transition-colors duration-300 ${
        isDark
          ? "bg-[#21113D] text-white border-white/10"
          : "bg-[#FFF9F0] text-[#211832] border-[#E9E0F2]"
      }`}
    >
      <Container size="default" className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div
          className={`relative rounded-3xl border p-5 sm:p-10 lg:p-12 xl:p-14 transition-all duration-300 shadow-card ${
            isDark
              ? "bg-[#180a30] border-[#FFD6A5]/20 shadow-2xl"
              : "bg-white border-[#E9E0F2]"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-start">
            
            {/* ---------------------------------------------------------- */}
            {/* LEFT COLUMN: NARRATIVE & STRATEGY (Cols 1-6)               */}
            {/* ---------------------------------------------------------- */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-5">
                
                {/* Eyebrow Label */}
                <Reveal delay={0.05} yOffset={10}>
                  <SectionLabel
                    number={service.number}
                    label={service.category}
                    theme={isDark ? "dark" : "light"}
                  />
                </Reveal>

                {/* Main Heading */}
                <Reveal delay={0.12} yOffset={16}>
                  <h2
                    id={`${service.id}-heading`}
                    className={`font-display text-[clamp(26px,3.5vw,46px)] font-bold tracking-tight leading-[1.14] ${
                      isDark ? "text-white" : "text-[#211832]"
                    }`}
                  >
                    {headline.prefix}{" "}
                    <span
                      className={`font-display font-bold not-italic bg-clip-text text-transparent ${
                        isDark
                          ? "bg-gradient-to-r from-white via-[#FFD6A5] to-[#FFD6A5]"
                          : "bg-gradient-to-r from-[#6A00F4] via-[#390080] to-[#6A00F4]"
                      }`}
                    >
                      {headline.highlight}
                    </span>
                    .
                  </h2>
                </Reveal>

                {/* Tagline Statement */}
                <Reveal delay={0.16} yOffset={12}>
                  <p
                    className={`text-base sm:text-lg font-semibold ${
                      isDark ? "text-[#FFD6A5]" : "text-[#6A00F4]"
                    }`}
                  >
                    {service.tagline}
                  </p>
                </Reveal>

                {/* Descriptive Narrative */}
                <Reveal delay={0.2} yOffset={14}>
                  <p
                    className={`text-base leading-relaxed font-sans font-normal ${
                      isDark ? "text-slate-200" : "text-[#625A70]"
                    }`}
                  >
                    {service.description}
                  </p>
                </Reveal>

                {/* Core Problem We Solve Box */}
                <Reveal delay={0.24} yOffset={14}>
                  <div
                    className={`rounded-2xl p-5 border transition-colors ${
                      isDark
                        ? "bg-[#21113D] border-[#FFD6A5]/20 shadow-subtle"
                        : "bg-[#FFF9F0] border-[#E9E0F2] shadow-subtle"
                    }`}
                  >
                    <p
                      className={`text-xs font-sans uppercase tracking-wider font-bold mb-1.5 flex items-center gap-2 ${
                        isDark ? "text-[#FFD6A5]" : "text-[#211832]"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-[#FFD6A5]" : "bg-[#6A00F4]"}`} aria-hidden="true" />
                      The Core Problem We Solve
                    </p>
                    <p
                      className={`text-sm leading-relaxed font-sans ${
                        isDark ? "text-slate-300" : "text-[#625A70]"
                      }`}
                    >
                      {service.problemSolved}
                    </p>
                  </div>
                </Reveal>

                {/* Connected Disciplines */}
                <Reveal delay={0.28} yOffset={12}>
                  <div className="pt-2">
                    <span
                      className={`text-xs font-sans uppercase tracking-wider font-bold block mb-2.5 ${
                        isDark ? "text-slate-300" : "text-[#625A70]"
                      }`}
                    >
                      Connected With
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.relatedCapabilities.map((rel) => {
                        const targetService = servicesData.find(
                          (s) =>
                            s.title.toLowerCase().includes(rel.toLowerCase()) ||
                            rel.toLowerCase().includes(s.title.toLowerCase())
                        );
                        const targetHref = targetService
                          ? `/solutions#${targetService.id}`
                          : "/solutions";

                        return (
                          <Link
                            key={rel}
                            href={targetHref}
                            className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                              isDark
                                ? "text-white bg-white/10 hover:bg-[#6A00F4] hover:text-white hover:border-[#6A00F4] border-white/15"
                                : "text-[#211832] bg-[#FFF9F0] hover:bg-[#6A00F4] hover:text-white hover:border-[#6A00F4] border-[#E9E0F2]"
                            }`}
                          >
                            + {rel}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Action Buttons */}
              <Reveal delay={0.32} yOffset={14}>
                <div
                  className={`pt-6 border-t flex flex-wrap items-center gap-3 ${
                    isDark ? "border-white/15" : "border-[#E9E0F2]"
                  }`}
                >
                  <Button
                    href={`/solutions/${service.id}`}
                    variant={isDark ? "cyan" : "primary"}
                    size="md"
                    withArrow
                    className="w-full sm:w-auto font-bold"
                  >
                    Explore Dedicated Service
                  </Button>
                  <Link
                    href={`/contact?service=${service.id}`}
                    className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-sans font-semibold transition-all duration-200 min-h-[46px] w-full sm:w-auto ${
                      isDark
                        ? "text-white hover:text-[#FFD6A5] bg-white/10 hover:bg-white/20 border border-white/15"
                        : "text-[#211832] hover:text-[#6A00F4] bg-[#FFF9F0] hover:bg-[#F3ECFF] border border-[#E9E0F2] shadow-xs"
                    }`}
                  >
                    Inquire for {service.title}
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* ---------------------------------------------------------- */}
            {/* RIGHT COLUMN: SPECIFICATIONS & DELIVERABLES (Cols 7-12)   */}
            {/* ---------------------------------------------------------- */}
            <div className="lg:col-span-6 w-full">
              <Reveal delay={0.22} yOffset={18}>
                <div
                  className={`rounded-2xl p-5 sm:p-8 lg:p-9 border shadow-sm flex flex-col justify-between space-y-8 ${
                    isDark
                      ? "bg-[#110722] border-white/15 text-white"
                      : "bg-[#FFF9F0] border-[#E9E0F2] text-[#211832]"
                  }`}
                >
                  {/* What KreaitX Delivers */}
                  <div>
                    <h3
                      className={`text-xs font-sans uppercase tracking-widest font-bold mb-4 flex items-center gap-2 ${
                        isDark ? "text-[#FFD6A5]" : "text-[#6A00F4]"
                      }`}
                    >
                      <Layers className={`h-4 w-4 ${isDark ? "text-[#FFD6A5]" : "text-[#6A00F4]"}`} aria-hidden="true" />
                      What KreaitX Delivers
                    </h3>

                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className={`flex items-start gap-3 text-sm font-medium ${
                            isDark ? "text-slate-200" : "text-[#211832]"
                          }`}
                        >
                          <CheckCircle2
                            className={`h-4 w-4 shrink-0 mt-0.5 ${isDark ? "text-[#FFD6A5]" : "text-[#6A00F4]"}`}
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Standard Workflow */}
                  <div
                    className={`pt-6 border-t ${
                      isDark ? "border-white/15" : "border-[#E9E0F2]"
                    }`}
                  >
                    <h3
                      className={`text-xs font-sans uppercase tracking-widest font-bold mb-3 flex items-center gap-2 ${
                        isDark ? "text-[#FFD6A5]" : "text-[#6A00F4]"
                      }`}
                    >
                      <Cpu className={`h-4 w-4 ${isDark ? "text-[#FFD6A5]" : "text-[#6A00F4]"}`} aria-hidden="true" />
                      Standard Workflow
                    </h3>
                    <ol
                      className={`space-y-2 text-xs sm:text-sm ${
                        isDark ? "text-slate-300" : "text-[#625A70]"
                      }`}
                    >
                      {service.workflow.map((step, sIdx) => (
                        <li key={step} className="flex items-center gap-2.5">
                          <span className={`font-mono text-xs font-bold ${isDark ? "text-[#FFD6A5]" : "text-[#6A00F4]"}`}>
                            0{sIdx + 1}.
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Card Bottom Metadata */}
                  <div
                    className={`pt-5 border-t flex items-center justify-between text-xs ${
                      isDark
                        ? "border-white/15 text-slate-300"
                        : "border-[#E9E0F2] text-[#625A70]"
                    }`}
                  >
                    <span>Single-source collaborative delivery</span>
                    <span
                      className={`font-display font-bold uppercase tracking-wider ${
                        isDark ? "text-[#FFD6A5]" : "text-[#6A00F4]"
                      }`}
                    >
                      {service.number} / 07
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
};

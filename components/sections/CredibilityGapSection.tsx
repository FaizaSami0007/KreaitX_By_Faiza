"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, EyeOff, MessageSquareX, TrendingDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { credibilityGapChallenge } from "@/data/siteData";

const challengeIcons = [EyeOff, MessageSquareX, TrendingDown];

export const CredibilityGapSection: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28 border-b border-[#C5CCDC] text-[#10172A] relative overflow-hidden">
      <Container size="default" className="relative z-10 max-w-[1320px]">
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3047D5]" aria-hidden="true" />
              <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5]">
                01 // The Challenge We Solve
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.5rem)] font-extrabold text-[#10172A] tracking-tight leading-[1.08]">
              The Credibility <span className="text-[#3047D5]">Gap</span>.
            </h2>

            <p className="mt-4 text-base sm:text-lg lg:text-[19px] text-[#3A4454] leading-relaxed font-sans font-normal">
              Most capable companies do excellent work, but their external presence does not reflect it. Their website looks like everyone else&apos;s. Their credentials are buried in PDF proposals. Their best client results are never filmed. We fix this.
            </p>
          </div>
        </Reveal>

        {/* 3-Column Challenge Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {credibilityGapChallenge.map((item, idx) => {
            const Icon = challengeIcons[idx] || EyeOff;
            return (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-xl bg-[#F7F8FC] p-6 sm:p-8 border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200 flex flex-col justify-between group shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#C5CCDC]">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3047D5]">
                        Gap 0{idx + 1}
                      </span>
                      <Icon className="h-4 w-4 text-[#6A7180] group-hover:text-[#3047D5] transition-colors" />
                    </div>

                    <h3 className="text-xl font-display font-bold text-[#10172A] tracking-tight group-hover:text-[#3047D5] transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-[#6A7180] leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#C5CCDC]/60 flex items-center gap-2 text-xs font-mono text-[#6A7180]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10172A]" />
                    <span>Cost of inaction: Competitor advantage</span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Centerpiece Callout Statement (Exact quote from PDF page 2) */}
        <Reveal yOffset={20}>
          <div className="mt-12 sm:mt-16 rounded-xl bg-[#10172A] text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-sm">
            <div className="relative z-10 max-w-3xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#4364EF] block mb-3">
                Core Principle
              </span>
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight leading-snug">
                &ldquo;More content will not close this gap. <br className="hidden sm:inline" />
                <span className="text-[#4364EF]">Better evidence will.</span>&rdquo;
              </blockquote>
              <p className="mt-4 text-sm sm:text-base text-[#C5CCDC] font-sans leading-relaxed">
                Producing endless blog posts, generic social graphics, and superficial videos only dilutes your positioning. High-value clients decide based on verifiable proof of past capability.
              </p>
            </div>
          </div>
        </Reveal>

        {/* The Solution Box: Proof First. Production Second */}
        <Reveal yOffset={20}>
          <div className="mt-12 sm:mt-16 rounded-xl bg-[#F7F8FC] border border-[#C5CCDC] p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] block">
                  The KreaitX Solution
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#10172A] tracking-tight">
                  Proof first. Production second.
                </h3>
                <p className="text-sm sm:text-base text-[#3A4454] leading-relaxed font-sans">
                  We start with evidence: what does your company actually do better than anyone else? What proof exists? We build the entire brand and marketing effort around that confirmed proof, rather than inventing claims.
                </p>
                <div className="pt-2">
                  <Link
                    href="/process"
                    className="inline-flex items-center text-sm font-bold text-[#3047D5] hover:text-[#10172A] transition-colors group"
                  >
                    <span>Explore our 3-stage proof methodology</span>
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* 4 Company Origin Facts (Exact from PDF Page 2) */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white border border-[#C5CCDC]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6A7180] block">
                    Founded
                  </span>
                  <span className="text-2xl font-display font-bold text-[#10172A] mt-1 block">
                    2025
                  </span>
                  <span className="text-xs text-[#6A7180] mt-0.5 block">
                    Brand films &amp; proof studio
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-white border border-[#C5CCDC]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6A7180] block">
                    Core Focus
                  </span>
                  <span className="text-lg font-display font-bold text-[#3047D5] mt-1 block leading-tight">
                    Films &amp; Proof
                  </span>
                  <span className="text-xs text-[#6A7180] mt-0.5 block">
                    Commercial positioning
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-white border border-[#C5CCDC]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6A7180] block">
                    Delivery Model
                  </span>
                  <span className="text-sm font-display font-bold text-[#10172A] mt-1 block leading-snug">
                    Core + Specialists
                  </span>
                  <span className="text-xs text-[#6A7180] mt-0.5 block">
                    Direct practitioner access
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-white border border-[#C5CCDC]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6A7180] block">
                    Clients
                  </span>
                  <span className="text-2xl font-display font-bold text-[#10172A] mt-1 block">
                    Worldwide
                  </span>
                  <span className="text-xs text-[#6A7180] mt-0.5 block">
                    PK × US × International
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};


"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { leadershipProfile, advisoryBoard } from "@/data/siteData";

export const LeadershipSection: React.FC = () => {
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
                  06 // Leadership &amp; Advisory
                </span>
              </div>
              <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.5rem)] font-extrabold text-[#10172A] tracking-tight leading-[1.08]">
                Practitioner-led. <br />
                <span className="text-[#3047D5]">Backed by international governance.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#6A7180] leading-relaxed font-sans font-normal">
                KreaitX is led by a filmmaker and creative technologist with nine years of experience, guided by a senior advisory board in Dubai, UAE.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/leadership"
                className="group inline-flex items-center text-sm font-sans font-bold text-[#10172A] hover:text-[#3047D5] transition-colors"
              >
                <span>View Leadership Page</span>
                <ArrowRight className="ml-1.5 h-4 w-4 text-[#3047D5] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Founder & CEO Feature Card */}
        <Reveal yOffset={20}>
          <div className="rounded-2xl bg-[#F7F8FC] border border-[#C5CCDC] p-6 sm:p-10 lg:p-12 mb-12 sm:mb-16 shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Authentic Photo */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-white border border-[#C5CCDC] p-3 shadow-xs overflow-hidden flex items-center justify-center">
                  <Image
                    src={leadershipProfile.image}
                    alt={`${leadershipProfile.name} — ${leadershipProfile.title}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs py-1.5 px-3 rounded-lg border border-[#C5CCDC] text-center">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#3047D5]">
                      9 Years Experience
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio & Verified Track Record */}
              <div className="lg:col-span-8 space-y-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] block mb-1">
                    Founder &amp; Chief Executive Officer
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#10172A] tracking-tight">
                    {leadershipProfile.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#3A4454] leading-relaxed font-sans font-normal">
                  {leadershipProfile.bio} Leads creative direction, client strategy, and production standards across all KreaitX engagements.
                </p>

                {/* Track Record List */}
                <div className="pt-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10172A] block mb-2.5">
                    Verified Production Track Record
                  </span>
                  <ul className="space-y-2">
                    {leadershipProfile.trackRecord.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6A7180] font-sans">
                        <CheckCircle2 className="h-4 w-4 text-[#3047D5] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* Advisory Board (Dubai, UAE) */}
        <div>
          <div className="max-w-xl mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] block mb-1">
              Advisory Board
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#10172A] tracking-tight">
              Dubai Advisory Board
            </h3>
            <p className="text-xs sm:text-sm text-[#6A7180] font-sans mt-1">
              Providing strategic, operational, and financial governance for international growth and enterprise delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisoryBoard.map((advisor) => (
              <div
                key={advisor.name}
                className="rounded-xl bg-white p-6 border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200 shadow-2xs group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#C5CCDC]">
                    <span className="text-[11px] font-mono text-[#6A7180] uppercase tracking-wider">
                      {advisor.location}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#3047D5]" />
                  </div>

                  <h4 className="text-lg font-display font-bold text-[#10172A] tracking-tight group-hover:text-[#3047D5] transition-colors">
                    {advisor.name}
                  </h4>

                  <span className="text-xs font-mono font-semibold text-[#3047D5] block mt-0.5">
                    {advisor.role}
                  </span>

                  <p className="mt-3 text-xs sm:text-sm text-[#6A7180] leading-relaxed font-sans">
                    {advisor.bio}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#C5CCDC]/60 text-[11px] font-mono text-[#6A7180]">
                  <span>Advisory &amp; Governance</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};


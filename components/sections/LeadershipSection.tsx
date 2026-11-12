"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { leadershipData } from "@/data/siteData";

export const LeadershipSection: React.FC = () => {
  const { founder, advisors } = leadershipData;

  return (
    <section id="leadership" className="bg-white py-20 sm:py-24 lg:py-28 border-b border-[#C5CCDC]">
      <Container size="default">
        
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#3047D5] mb-3">
              06 — LEADERSHIP
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10172A] tracking-tight leading-[1.12]">
              Experienced leadership,{" "}
              <span className="text-[#3047D5]">lean delivery.</span>
            </h2>
          </div>
        </Reveal>

        {/* Founder & CEO Profile */}
        <Reveal yOffset={20}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start pb-16 sm:pb-20 border-b border-[#C5CCDC]">
            {/* Real Portrait Photo */}
            <div className="md:col-span-4 lg:col-span-3 flex justify-center sm:justify-start">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-[#10172A] shadow-md bg-[#F7F8FC]">
                <Image
                  src={founder.image || "/team/mehboob-akbar.jpg"}
                  alt={founder.name}
                  width={2448}
                  height={3168}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Founder Biography & Verified Credentials */}
            <div className="md:col-span-8 lg:col-span-9 space-y-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#10172A]">
                  {founder.name}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#3047D5] mt-1">
                  {founder.role}
                </p>
              </div>

              <p className="text-base text-[#3A4454] leading-relaxed font-sans max-w-2xl">
                {founder.bio}
              </p>

              {/* Achievements Bullet List */}
              {founder.achievements && (
                <ul className="space-y-2.5 pt-2 max-w-2xl">
                  {founder.achievements.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#6A7180] font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3047D5] shrink-0 mt-2" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Reveal>

        {/* Board and Advisors (3 Columns with Top Royal Blue Rules) */}
        <Reveal yOffset={20}>
          <div className="pt-12 sm:pt-14 mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#6A7180] mb-8">
              BOARD AND ADVISORS
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {advisors.map((advisor) => (
                <div key={advisor.name} className="pt-4 relative flex flex-col">
                  <div className="w-full h-[3px] bg-[#3047D5] absolute top-0 left-0" aria-hidden="true" />
                  
                  <h4 className="text-lg font-display font-bold text-[#10172A] mt-3 mb-1">
                    {advisor.name}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#3047D5] mb-3">
                    {advisor.role}
                  </p>
                  <p className="text-sm text-[#6A7180] leading-relaxed font-sans font-normal">
                    {advisor.experience}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Next Step Action Bar */}
        <Reveal yOffset={16}>
          <div className="rounded-xl bg-[#F7F8FC] border border-[#C5CCDC] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#3047D5] mb-1">
                NEXT STEP
              </p>
              <p className="text-sm sm:text-base font-display font-bold text-[#10172A]">
                Speak directly with our founder.
              </p>
            </div>
            <Button
              href="/contact?type=founder-consultation"
              variant="primary"
              size="md"
              className="shrink-0 w-full sm:w-auto font-bold text-sm shadow-brand-button px-6"
            >
              Book a consultation
            </Button>
          </div>
        </Reveal>

      </Container>
    </section>
  );
};

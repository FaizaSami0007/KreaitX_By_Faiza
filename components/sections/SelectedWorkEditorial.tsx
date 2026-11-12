"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { profileRealWork, otherClients } from "@/data/siteData";

export const SelectedWorkEditorial: React.FC = () => {
  return (
    <section id="work" className="bg-white py-20 sm:py-24 lg:py-28 border-b border-[#C5CCDC]">
      <Container size="default">
        
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#3047D5] mb-3">
              04 — SELECTED WORK
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10172A] tracking-tight leading-[1.12]">
              Work across media, technology{" "}
              <span className="text-[#3047D5]">and public service.</span>
            </h2>
          </div>
        </Reveal>

        {/* Editorial Project List */}
        <Reveal yOffset={20}>
          <div className="border-t border-[#C5CCDC] divide-y divide-[#C5CCDC] mb-12 sm:mb-14">
            {profileRealWork.map((project) => (
              <div
                key={project.title}
                className="py-7 sm:py-9 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 items-start group hover:bg-[#F7F8FC]/60 transition-colors px-2 rounded-lg"
              >
                {/* Visual Category Label */}
                <div className="md:col-span-4">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#10172A]">
                    {project.title}
                  </h3>
                </div>

                {/* Project Description */}
                <div className="md:col-span-8 flex flex-col justify-between h-full">
                  <p className="text-base text-[#3A4454] font-sans leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Other Clients Strip */}
        <Reveal yOffset={16}>
          <div className="rounded-xl bg-[#F7F8FC] border border-[#C5CCDC] p-6 sm:p-7 mb-10 flex flex-col sm:flex-row items-baseline gap-3 sm:gap-6">
            <span className="text-sm font-display font-bold text-[#10172A] shrink-0">
              Other clients
            </span>
            <span className="text-sm text-[#6A7180] font-sans font-medium">
              {otherClients.join(", ")}
            </span>
          </div>
        </Reveal>

        {/* Next Step Action Bar */}
        <Reveal yOffset={16}>
          <div className="rounded-xl bg-white border border-[#C5CCDC] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#3047D5] mb-1">
                NEXT STEP
              </p>
              <p className="text-sm sm:text-base font-display font-bold text-[#10172A]">
                View our client case studies and technical outcomes.
              </p>
            </div>
            <Button
              href="/work"
              variant="primary"
              size="md"
              className="shrink-0 w-full sm:w-auto font-bold text-sm shadow-brand-button px-6"
            >
              Explore all case studies
            </Button>
          </div>
        </Reveal>

      </Container>
    </section>
  );
};

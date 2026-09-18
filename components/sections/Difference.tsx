"use client";

import React, { useState } from "react";
import { Users, Lightbulb, Target, Layers, Heart, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

// Clean icon for 05: Transparent Process
const TransparentProcessIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="4" width="12" height="12" rx="2" />
    <rect x="9" y="8" width="12" height="12" rx="2" />
  </svg>
);

interface Principle {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const principles: Principle[] = [
  {
    id: "01",
    number: "01",
    title: "One Connected Team",
    description: "Strategy, design and engineering working as one unified collective.",
    icon: Users,
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "02",
    number: "02",
    title: "Creative + Technical",
    description: "Designers who understand code. Engineers with an eye for refined visual aesthetics.",
    icon: Lightbulb,
    color: "from-indigo-500 to-cyan-500"
  },
  {
    id: "03",
    number: "03",
    title: "Business-Centered",
    description: "Every creative and digital solution is built around real, measurable commercial outcomes.",
    icon: Target,
    color: "from-purple-600 to-pink-500"
  },
  {
    id: "04",
    number: "04",
    title: "End-to-End Continuity",
    description: "From initial napkin idea to long-term digital growth, we stay committed with you.",
    icon: Layers,
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "05",
    number: "05",
    title: "Clear, Transparent Process",
    description: "You always know what's next, why it matters, and exactly what value it delivers.",
    icon: TransparentProcessIcon,
    color: "from-pink-500 to-rose-500"
  },
  {
    id: "06",
    number: "06",
    title: "Human Collaboration",
    description: "We work with people, not just cold project briefs — and the partnership shows in every result.",
    icon: Heart,
    color: "from-purple-600 to-indigo-600"
  }
];

export const Difference: React.FC = () => {
  return (
    <section
      id="difference"
      aria-labelledby="difference-heading"
      className="relative bg-white text-slate-900 py-24 sm:py-32 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Soft background ambient gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-gradient-to-tr from-purple-100/40 via-indigo-100/30 to-cyan-100/40 blur-[100px] pointer-events-none" />

      <Container size="default" className="relative z-10">
        {/* SECTION HEADER */}
        <Reveal yOffset={16}>
          <SectionHeading
            align="center"
            eyebrow="The KreaitX Difference"
            title={
              <>
                More than an agency. <br />
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  A connected partner.
                </span>
              </>
            }
            description="We bring strategy, creativity and technical engineering together to turn ideas into meaningful outcomes — as one team."
            className="mb-16 sm:mb-20"
          />
        </Reveal>

        {/* 6 PRINCIPLES CARDS GRID */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((principle) => {
            const IconComp = principle.icon;

            return (
              <StaggerItem key={principle.id}>
                <div className="group h-full flex flex-col justify-between p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-200 transition-all duration-300 relative overflow-hidden">
                  {/* Subtle top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header: Icon + Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300 shadow-subtle">
                        <IconComp className="h-6 w-6 stroke-[1.75]" />
                      </div>
                      <span className="font-display font-bold text-xl text-slate-300 group-hover:text-purple-600 transition-colors">
                        {principle.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-display font-bold text-slate-900 tracking-tight group-hover:text-purple-700 transition-colors">
                      {principle.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3.5 text-base text-slate-600 leading-relaxed font-sans font-normal">
                      {principle.description}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-purple-600">
                    <CheckCircle2 className="h-4 w-4 text-purple-500" />
                    <span>Guaranteed Working Principle</span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
};

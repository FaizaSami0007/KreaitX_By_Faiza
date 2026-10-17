"use client";

import React, { useState } from "react";
import { Users, Lightbulb, Target, Layers, Sparkles, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

// Clean icon for 05: Transparent Process (overlapping rectangles)
const TransparentProcessIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6 stroke-[1.5]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="4" width="12" height="12" rx="2" />
    <rect x="9" y="8" width="12" height="12" rx="2" />
  </svg>
);

const principles = [
  {
    id: "01",
    number: "01",
    title: "One Connected Team",
    description: "Strategy, design, cinema, and software engineering working as one accountable partner.",
    icon: Users,
    highlight: "Zero Agency Hand-offs"
  },
  {
    id: "02",
    number: "02",
    title: "Creative + Technical",
    description: "Designers who understand code. Engineers with a refined typographic and aesthetic eye.",
    icon: Lightbulb,
    highlight: "Dual Discipline"
  },
  {
    id: "03",
    number: "03",
    title: "Business-Centered",
    description: "Every visual asset, video sequence, and software module is anchored in commercial outcomes.",
    icon: Target,
    highlight: "Commercial Focus"
  },
  {
    id: "04",
    number: "04",
    title: "End-to-End Continuity",
    description: "From the initial discovery sprint to long-term digital growth, our senior team stays with you.",
    icon: Layers,
    highlight: "Full Lifecycle"
  },
  {
    id: "05",
    number: "05",
    title: "Transparent Process",
    description: "Clear two-week milestones, transparent deliverables, and zero agency black-box ambiguity.",
    icon: TransparentProcessIcon,
    highlight: "Predictable Cadence"
  },
  {
    id: "06",
    number: "06",
    title: "Human Collaboration",
    description: "Direct collaboration with senior practitioners. Zero account management layers or translation loss.",
    icon: Heart,
    highlight: "Direct Senior Access"
  }
];

export const Difference: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="difference"
      aria-labelledby="difference-heading"
      className="relative bg-white text-slate-900 py-20 sm:py-28 lg:py-32 border-b border-slate-200/80 overflow-hidden"
    >
      <Container size="default" className="relative z-10 w-full max-w-[1320px]">
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
            <SectionHeading
              eyebrow="Studio Philosophy"
              title={
                <>
                  How we operate.{" "}
                  <span className="font-serif italic font-normal bg-gradient-to-r from-[#003049] via-[#14213D] to-[#42C6D9] bg-clip-text text-transparent">
                    Why it matters
                  </span>
                  .
                </>
              }
              description="A disciplined creative technology approach engineered to eliminate agency ambiguity, align creative storytelling with code, and protect commercial outcomes."
            />

            <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-slate-500 bg-[#F7F8FA] px-4 py-2 rounded-full border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#42C6D9] animate-pulse" />
              <span>SIX GUIDING PRINCIPLES</span>
            </div>
          </div>
        </Reveal>

        {/* Unified, Single-DOM Grid (Responsive from 1 col on mobile to 2 cols on tablet and 3 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((item, index) => {
            const IconComp = item.icon;
            const isActive = activeId === item.id;
            const isDimmed = activeId !== null && !isActive;

            return (
              <Reveal key={item.id} delay={0.06 * index} yOffset={16}>
                <div
                  tabIndex={0}
                  onMouseEnter={() => setActiveId(item.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(item.id)}
                  onBlur={() => setActiveId(null)}
                  className={`group relative h-full rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9] ${
                    isActive
                      ? "bg-white border-[#42C6D9] shadow-card-hover -translate-y-1.5 ring-2 ring-[#42C6D9]/20"
                      : "bg-[#F7F8FA] border-slate-200/90 hover:border-slate-300 hover:bg-white shadow-subtle hover:-translate-y-1"
                  } ${isDimmed ? "opacity-75" : "opacity-100"}`}
                >
                  <div>
                    {/* Top Row: Number + Active Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-bold text-[#003049] px-2.5 py-0.5 rounded-full bg-white border border-slate-200 shadow-xs">
                          {item.number}
                        </span>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                          {item.highlight}
                        </span>
                      </div>

                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-[#003049] text-[#42C6D9] shadow-sm rotate-3"
                            : "bg-white text-slate-700 border border-slate-200/80 group-hover:border-[#42C6D9]/40 group-hover:text-[#003049]"
                        }`}
                      >
                        <IconComp className="h-5 w-5 stroke-[1.8]" />
                      </div>
                    </div>

                    {/* Principle Title */}
                    <h3
                      className={`text-xl sm:text-2xl font-display font-bold tracking-tight transition-colors duration-200 ${
                        isActive ? "text-[#003049]" : "text-slate-900 group-hover:text-[#003049]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-sans font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Micro Footer Indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>Working Standard</span>
                    <span className={`font-semibold transition-colors ${isActive ? "text-[#003049]" : "text-slate-400 group-hover:text-[#003049]"}`}>
                      KreaitX Core // 0{index + 1}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

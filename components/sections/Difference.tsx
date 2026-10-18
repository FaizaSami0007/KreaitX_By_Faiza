"use client";

import React from "react";
import { Users, Lightbulb, Target, Layers, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

// Clean icon for 05: Transparent Process (overlapping rectangles)
const TransparentProcessIcon: React.FC<{ className?: string }> = ({
  className = "h-5 w-5 stroke-[1.5]"
}) => (
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

// KreaitX Brand Color Themed Principles: Navy (#003049) & Cyan (#42C6D9)
const principles = [
  {
    id: "01",
    number: "01",
    title: "One Connected Team",
    description: "Strategy, design and engineering working as one.",
    icon: Users,
    badgeBg: "bg-[#003049]/5 border border-[#003049]/15 group-hover:bg-[#003049] group-hover:border-[#003049]",
    iconColor: "text-[#003049] group-hover:text-[#42C6D9]"
  },
  {
    id: "02",
    number: "02",
    title: "Creative + Technical",
    description: "Designers who understand code. Engineers with an eye for design.",
    icon: Lightbulb,
    badgeBg: "bg-[#42C6D9]/15 border border-[#42C6D9]/30 group-hover:bg-[#003049] group-hover:border-[#003049]",
    iconColor: "text-[#003049] group-hover:text-[#42C6D9]"
  },
  {
    id: "03",
    number: "03",
    title: "Business-Centered",
    description: "Every solution is built around real business outcomes.",
    icon: Target,
    badgeBg: "bg-[#003049]/5 border border-[#003049]/15 group-hover:bg-[#003049] group-hover:border-[#003049]",
    iconColor: "text-[#003049] group-hover:text-[#42C6D9]"
  },
  {
    id: "04",
    number: "04",
    title: "End-to-End Continuity",
    description: "From discovery to deployment, our senior team stays with you.",
    icon: Layers,
    badgeBg: "bg-[#42C6D9]/15 border border-[#42C6D9]/30 group-hover:bg-[#003049] group-hover:border-[#003049]",
    iconColor: "text-[#003049] group-hover:text-[#42C6D9]"
  },
  {
    id: "05",
    number: "05",
    title: "Transparent Process",
    description: "Clear two-week milestones, transparent deliverables, zero ambiguity.",
    icon: TransparentProcessIcon,
    badgeBg: "bg-[#003049]/5 border border-[#003049]/15 group-hover:bg-[#003049] group-hover:border-[#003049]",
    iconColor: "text-[#003049] group-hover:text-[#42C6D9]"
  },
  {
    id: "06",
    number: "06",
    title: "Human Collaboration",
    description: "Direct collaboration with senior practitioners. Zero account layers.",
    icon: Heart,
    badgeBg: "bg-[#42C6D9]/15 border border-[#42C6D9]/30 group-hover:bg-[#003049] group-hover:border-[#003049]",
    iconColor: "text-[#003049] group-hover:text-[#42C6D9]"
  }
];

// Central Connecting Diagram styled in KreaitX Prussian Navy (#003049) & Cyan (#42C6D9)
const ConnectingTimelineGraphic: React.FC = () => (
  <div
    className="w-full my-6 lg:my-10 overflow-hidden select-none pointer-events-none hidden md:block"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-h-[110px]"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Central horizontal line connecting left to right */}
      <line x1="220" y1="60" x2="980" y2="60" stroke="#CBD5E1" strokeWidth="1.5" />

      {/* LEFT CONVERGENCE (Col 1 & 4 meet at node) */}
      <path
        d="M 120 16 C 120 48, 165 60, 220 60"
        stroke="#003049"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M 120 104 C 120 72, 165 60, 220 60"
        stroke="#42C6D9"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Left node with cyan accent core */}
      <circle cx="220" cy="60" r="5" fill="#003049" />
      <circle cx="220" cy="60" r="2" fill="#42C6D9" />
      {/* Floating accent dots on left */}
      <circle cx="150" cy="30" r="2.5" fill="#003049" />
      <circle cx="150" cy="90" r="2.5" fill="#42C6D9" />

      {/* CENTER INTERSECTION (Col 2 & 5) */}
      <line
        x1="600"
        y1="26"
        x2="600"
        y2="94"
        stroke="#003049"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Center Cyan node */}
      <circle cx="600" cy="60" r="5" fill="#42C6D9" />
      <circle cx="600" cy="26" r="2.5" fill="#003049" />
      <circle cx="600" cy="94" r="2.5" fill="#42C6D9" />

      {/* RIGHT DIVERGENCE (Col 3 & 6 branch out from node) */}
      <circle cx="980" cy="60" r="5" fill="#003049" />
      <circle cx="980" cy="60" r="2" fill="#42C6D9" />
      <path
        d="M 980 60 C 1035 60, 1080 48, 1080 16"
        stroke="#003049"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M 980 60 C 1035 60, 1080 72, 1080 104"
        stroke="#42C6D9"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Floating accent dots on right */}
      <circle cx="1050" cy="30" r="2.5" fill="#003049" />
      <circle cx="1050" cy="90" r="2.5" fill="#42C6D9" />
    </svg>
  </div>
);

// Individual Principle Item with KreaitX Brand Colors
const PrincipleItem: React.FC<{
  item: (typeof principles)[0];
  index: number;
}> = ({ item, index }) => {
  const IconComp = item.icon;

  return (
    <Reveal delay={0.08 * index} yOffset={16}>
      <div className="group flex flex-col items-start text-left cursor-default">
        {/* Top Row: Underlined Serif Number + Circular Icon Badge in Brand Colors */}
        <div className="flex items-center gap-3.5 mb-3.5">
          <span className="font-serif text-lg sm:text-[21px] font-normal text-[#003049] tracking-tight pb-0.5 border-b-[1.5px] border-[#42C6D9] leading-none transition-colors group-hover:border-[#003049]">
            {item.number}
          </span>
          <div
            className={`w-9 sm:w-10 h-9 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-xs ${item.badgeBg}`}
          >
            <IconComp className={`h-4.5 w-4.5 sm:h-5 sm:w-5 transition-colors duration-300 ${item.iconColor}`} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg lg:text-[19px] font-display font-bold text-slate-900 tracking-tight mb-2 transition-colors duration-200 group-hover:text-[#003049]">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-[13px] sm:text-[14px] text-slate-600 leading-relaxed font-sans font-normal max-w-[320px]">
          {item.description}
        </p>
      </div>
    </Reveal>
  );
};

export const Difference: React.FC = () => {
  const topPrinciples = principles.slice(0, 3);
  const bottomPrinciples = principles.slice(3, 6);

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
              className="max-w-2xl"
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

            <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-[#003049] bg-[#F7F8FA] px-4 py-2 rounded-full border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#42C6D9] animate-pulse" />
              <span className="font-bold">SIX GUIDING PRINCIPLES</span>
            </div>
          </div>
        </Reveal>

        {/* Desktop & Tablet Layout (matching SS 1 reference with KreaitX Brand Palette) */}
        <div className="hidden md:block">
          {/* Top Row: 01, 02, 03 */}
          <div className="grid grid-cols-3 gap-8 lg:gap-14">
            {topPrinciples.map((item, idx) => (
              <PrincipleItem key={item.id} item={item} index={idx} />
            ))}
          </div>

          {/* Central Connecting Graphic Line in Navy & Cyan */}
          <ConnectingTimelineGraphic />

          {/* Bottom Row: 04, 05, 06 */}
          <div className="grid grid-cols-3 gap-8 lg:gap-14">
            {bottomPrinciples.map((item, idx) => (
              <PrincipleItem key={item.id} item={item} index={idx + 3} />
            ))}
          </div>
        </div>

        {/* Mobile Layout (< md): Clean Responsive Editorial Stack */}
        <div className="md:hidden space-y-10">
          {principles.map((item, idx) => (
            <div key={item.id} className="relative">
              <PrincipleItem item={item} index={idx} />
              {idx < principles.length - 1 && (
                <div className="pt-8 border-b border-slate-100" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

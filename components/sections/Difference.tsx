"use client";

import React, { useState } from "react";
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
    activeBadgeBg: "bg-[#003049]/10",
    activeIconColor: "text-[#003049]",
    inactiveBadgeBg: "bg-slate-100/60"
  },
  {
    id: "02",
    number: "02",
    title: "Creative + Technical",
    description: "Designers who understand code. Engineers with an eye for design.",
    icon: Lightbulb,
    activeBadgeBg: "bg-[#42C6D9]/20",
    activeIconColor: "text-[#003049]",
    inactiveBadgeBg: "bg-slate-100/60"
  },
  {
    id: "03",
    number: "03",
    title: "Business-Centered",
    description: "Every solution is built around real business outcomes.",
    icon: Target,
    activeBadgeBg: "bg-[#003049]/10",
    activeIconColor: "text-[#003049]",
    inactiveBadgeBg: "bg-slate-100/60"
  },
  {
    id: "04",
    number: "04",
    title: "End-to-End Continuity",
    description: "From discovery to deployment, our senior team stays with you.",
    icon: Layers,
    activeBadgeBg: "bg-[#42C6D9]/20",
    activeIconColor: "text-[#003049]",
    inactiveBadgeBg: "bg-slate-100/60"
  },
  {
    id: "05",
    number: "05",
    title: "Transparent Process",
    description: "Clear two-week milestones, transparent deliverables, zero ambiguity.",
    icon: TransparentProcessIcon,
    activeBadgeBg: "bg-[#003049]/10",
    activeIconColor: "text-[#003049]",
    inactiveBadgeBg: "bg-slate-100/60"
  },
  {
    id: "06",
    number: "06",
    title: "Human Collaboration",
    description: "Direct collaboration with senior practitioners. Zero account layers.",
    icon: Heart,
    activeBadgeBg: "bg-[#42C6D9]/20",
    activeIconColor: "text-[#003049]",
    inactiveBadgeBg: "bg-slate-100/60"
  }
];

// Helper to determine which of the 3 columns is currently active
const getColumn = (id: string): number => {
  if (id === "01" || id === "04") return 1;
  if (id === "02" || id === "05") return 2;
  if (id === "03" || id === "06") return 3;
  return 2;
};

// Central Connecting Diagram styled in KreaitX Prussian Navy (#003049) & Cyan (#42C6D9)
// Dynamically reacts to the active column (1 = Left, 2 = Center, 3 = Right)
const ConnectingTimelineGraphic: React.FC<{ activeColumn: number }> = ({ activeColumn }) => (
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

      {/* LEFT CONVERGENCE (Col 1: Items 01 & 04) */}
      <g className={`transition-opacity duration-300 ${activeColumn === 1 ? "opacity-100" : "opacity-35"}`}>
        <path
          d="M 120 16 C 120 48, 165 60, 220 60"
          stroke="#003049"
          strokeWidth={activeColumn === 1 ? "2.25" : "1.5"}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        <path
          d="M 120 104 C 120 72, 165 60, 220 60"
          stroke="#42C6D9"
          strokeWidth={activeColumn === 1 ? "2.25" : "1.5"}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        {/* Left node with cyan accent core */}
        <circle
          cx="220"
          cy="60"
          r={activeColumn === 1 ? "6.5" : "5"}
          fill="#003049"
          className="transition-all duration-300"
        />
        <circle
          cx="220"
          cy="60"
          r={activeColumn === 1 ? "3" : "2"}
          fill="#42C6D9"
          className="transition-all duration-300"
        />
        {/* Floating accent dots on left */}
        <circle
          cx="150"
          cy="30"
          r={activeColumn === 1 ? "3.5" : "2.5"}
          fill="#003049"
          className="transition-all duration-300"
        />
        <circle
          cx="150"
          cy="90"
          r={activeColumn === 1 ? "3.5" : "2.5"}
          fill="#42C6D9"
          className="transition-all duration-300"
        />
      </g>

      {/* CENTER INTERSECTION (Col 2: Items 02 & 05) */}
      <g className={`transition-opacity duration-300 ${activeColumn === 2 ? "opacity-100" : "opacity-35"}`}>
        <line
          x1="600"
          y1="26"
          x2="600"
          y2="94"
          stroke="#003049"
          strokeWidth={activeColumn === 2 ? "2.25" : "1.5"}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        {/* Center Cyan node */}
        <circle
          cx="600"
          cy="60"
          r={activeColumn === 2 ? "7" : "5"}
          fill="#42C6D9"
          className="transition-all duration-300"
        />
        <circle
          cx="600"
          cy="60"
          r={activeColumn === 2 ? "3" : "1.5"}
          fill="#003049"
          className="transition-all duration-300"
        />
        {/* Satellite dots pointing toward top and bottom principles */}
        <circle
          cx="600"
          cy="26"
          r={activeColumn === 2 ? "3.5" : "2.5"}
          fill="#003049"
          className="transition-all duration-300"
        />
        <circle
          cx="600"
          cy="94"
          r={activeColumn === 2 ? "3.5" : "2.5"}
          fill="#42C6D9"
          className="transition-all duration-300"
        />
      </g>

      {/* RIGHT DIVERGENCE (Col 3: Items 03 & 06) */}
      <g className={`transition-opacity duration-300 ${activeColumn === 3 ? "opacity-100" : "opacity-35"}`}>
        <circle
          cx="980"
          cy="60"
          r={activeColumn === 3 ? "6.5" : "5"}
          fill="#003049"
          className="transition-all duration-300"
        />
        <circle
          cx="980"
          cy="60"
          r={activeColumn === 3 ? "3" : "2"}
          fill="#42C6D9"
          className="transition-all duration-300"
        />
        <path
          d="M 980 60 C 1035 60, 1080 48, 1080 16"
          stroke="#003049"
          strokeWidth={activeColumn === 3 ? "2.25" : "1.5"}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        <path
          d="M 980 60 C 1035 60, 1080 72, 1080 104"
          stroke="#42C6D9"
          strokeWidth={activeColumn === 3 ? "2.25" : "1.5"}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
        {/* Floating accent dots on right */}
        <circle
          cx="1050"
          cy="30"
          r={activeColumn === 3 ? "3.5" : "2.5"}
          fill="#003049"
          className="transition-all duration-300"
        />
        <circle
          cx="1050"
          cy="90"
          r={activeColumn === 3 ? "3.5" : "2.5"}
          fill="#42C6D9"
          className="transition-all duration-300"
        />
      </g>
    </svg>
  </div>
);

// Individual Principle Item with Active Hover State matching Reference Screenshot
interface PrincipleItemProps {
  item: (typeof principles)[0];
  index: number;
  isActive: boolean;
  onActivate: () => void;
}

const PrincipleItem: React.FC<PrincipleItemProps> = ({
  item,
  index,
  isActive,
  onActivate
}) => {
  const IconComp = item.icon;

  return (
    <Reveal delay={0.08 * (index % 3)} yOffset={16}>
      <div
        role="button"
        tabIndex={0}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        onClick={onActivate}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onActivate();
          }
        }}
        aria-pressed={isActive}
        className={`group flex flex-col items-start text-left cursor-pointer transition-all duration-300 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9] rounded-2xl p-2 -m-2 ${
          isActive
            ? "opacity-100"
            : "opacity-40 hover:opacity-75"
        }`}
      >
        {/* Top Row: Underlined Serif Number + Circular Icon Badge in Brand Colors */}
        <div className="flex items-center gap-4 mb-4">
          <span
            className={`font-serif text-2xl font-normal tracking-tight pb-0.5 leading-none transition-all duration-300 ${
              isActive
                ? "text-[#003049] border-b-2 border-[#42C6D9]"
                : "text-slate-400 border-b border-slate-300/60"
            }`}
          >
            {item.number}
          </span>
          <div
            className={`rounded-full flex items-center justify-center transition-all duration-300 ${
              isActive
                ? `w-12 h-12 shadow-sm scale-110 border-2 border-[#003049] ring-2 ring-[#42C6D9]/40 ring-offset-2 ring-offset-white ${item.activeBadgeBg}`
                : `w-11 h-11 border border-slate-200/60 scale-100 ${item.inactiveBadgeBg}`
            }`}
          >
            <IconComp
              className={`h-5 w-5 transition-colors duration-300 ${
                isActive ? item.activeIconColor : "text-slate-400"
              }`}
            />
          </div>
        </div>

        {/* Title */}
        <h3
          className={`text-xl sm:text-2xl font-display font-bold tracking-tight mb-2.5 transition-colors duration-300 ${
            isActive
              ? "text-[#003049]"
              : "text-slate-400"
          }`}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm sm:text-[15px] leading-relaxed font-sans font-normal max-w-[340px] transition-colors duration-300 ${
            isActive
              ? "text-slate-700"
              : "text-slate-400"
          }`}
        >
          {item.description}
        </p>
      </div>
    </Reveal>
  );
};

export const Difference: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("02");
  const topPrinciples = principles.slice(0, 3);
  const bottomPrinciples = principles.slice(3, 6);
  const activeColumn = getColumn(activeId);

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
              <PrincipleItem
                key={item.id}
                item={item}
                index={idx}
                isActive={activeId === item.id}
                onActivate={() => setActiveId(item.id)}
              />
            ))}
          </div>

          {/* Central Connecting Graphic Line in Navy & Cyan, dynamically tracking active column */}
          <ConnectingTimelineGraphic activeColumn={activeColumn} />

          {/* Bottom Row: 04, 05, 06 */}
          <div className="grid grid-cols-3 gap-8 lg:gap-14">
            {bottomPrinciples.map((item, idx) => (
              <PrincipleItem
                key={item.id}
                item={item}
                index={idx + 3}
                isActive={activeId === item.id}
                onActivate={() => setActiveId(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Mobile Layout (< md): Clean Responsive Editorial Stack */}
        <div className="md:hidden space-y-10">
          {principles.map((item, idx) => (
            <div key={item.id} className="relative">
              <PrincipleItem
                item={item}
                index={idx}
                isActive={activeId === item.id}
                onActivate={() => setActiveId(item.id)}
              />
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


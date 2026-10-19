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
    column: 1 as const,
    title: "One Connected Team",
    description: "Strategy, design and engineering working as one.",
    icon: Users,
    defaultBadge: "bg-[#003049]/5 border border-[#003049]/15 text-[#003049]",
    hoverBadge: "bg-[#003049] text-[#42C6D9] ring-2 ring-[#42C6D9]/50 ring-offset-2 ring-offset-white shadow-md scale-105"
  },
  {
    id: "02",
    number: "02",
    column: 2 as const,
    title: "Creative + Technical",
    description: "Designers who understand code. Engineers with an eye for design.",
    icon: Lightbulb,
    defaultBadge: "bg-[#42C6D9]/15 border border-[#42C6D9]/30 text-[#003049]",
    hoverBadge: "bg-[#003049] text-[#42C6D9] ring-2 ring-[#42C6D9]/50 ring-offset-2 ring-offset-white shadow-md scale-105"
  },
  {
    id: "03",
    number: "03",
    column: 3 as const,
    title: "Business-Centered",
    description: "Every solution is built around real business outcomes.",
    icon: Target,
    defaultBadge: "bg-[#003049]/5 border border-[#003049]/15 text-[#003049]",
    hoverBadge: "bg-[#003049] text-[#42C6D9] ring-2 ring-[#42C6D9]/50 ring-offset-2 ring-offset-white shadow-md scale-105"
  },
  {
    id: "04",
    number: "04",
    column: 1 as const,
    title: "End-to-End Continuity",
    description: "From discovery to deployment, our senior team stays with you.",
    icon: Layers,
    defaultBadge: "bg-[#42C6D9]/15 border border-[#42C6D9]/30 text-[#003049]",
    hoverBadge: "bg-[#003049] text-[#42C6D9] ring-2 ring-[#42C6D9]/50 ring-offset-2 ring-offset-white shadow-md scale-105"
  },
  {
    id: "05",
    number: "05",
    column: 2 as const,
    title: "Transparent Process",
    description: "Clear two-week milestones, transparent deliverables, zero ambiguity.",
    icon: TransparentProcessIcon,
    defaultBadge: "bg-[#003049]/5 border border-[#003049]/15 text-[#003049]",
    hoverBadge: "bg-[#003049] text-[#42C6D9] ring-2 ring-[#42C6D9]/50 ring-offset-2 ring-offset-white shadow-md scale-105"
  },
  {
    id: "06",
    number: "06",
    column: 3 as const,
    title: "Human Collaboration",
    description: "Direct collaboration with senior practitioners. Zero account layers.",
    icon: Heart,
    defaultBadge: "bg-[#42C6D9]/15 border border-[#42C6D9]/30 text-[#003049]",
    hoverBadge: "bg-[#003049] text-[#42C6D9] ring-2 ring-[#42C6D9]/50 ring-offset-2 ring-offset-white shadow-md scale-105"
  }
];

const getColumn = (id: string): 1 | 2 | 3 => {
  if (id === "01" || id === "04") return 1;
  if (id === "03" || id === "06") return 3;
  return 2;
};

// Central Connecting Diagram styled in KreaitX Prussian Navy (#003049) & Cyan (#42C6D9)
const ConnectingTimelineGraphic: React.FC<{ activeColumn: 1 | 2 | 3 | null }> = ({ activeColumn }) => {
  const isCol1Active = activeColumn === 1;
  const isCol2Active = activeColumn === 2;
  const isCol3Active = activeColumn === 3;
  const hasActive = activeColumn !== null;

  return (
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
        <line
          x1="220"
          y1="60"
          x2="980"
          y2="60"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          className="transition-opacity duration-300"
        />

        {/* LEFT CONVERGENCE (Col 1: Items 01 & 04) */}
        <g
          className={`transition-opacity duration-300 ${
            !hasActive
              ? "opacity-80"
              : isCol1Active
              ? "opacity-100"
              : "opacity-35"
          }`}
        >
          <path
            d="M 120 16 C 120 48, 165 60, 220 60"
            stroke="#003049"
            strokeWidth={isCol1Active ? "2.5" : "1.75"}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
          <path
            d="M 120 104 C 120 72, 165 60, 220 60"
            stroke="#42C6D9"
            strokeWidth={isCol1Active ? "2.5" : "1.75"}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
          {/* Left node with cyan accent core */}
          <circle
            cx="220"
            cy="60"
            r={isCol1Active ? "6.5" : "5"}
            fill="#003049"
            className="transition-all duration-300"
          />
          <circle
            cx="220"
            cy="60"
            r={isCol1Active ? "3" : "2"}
            fill="#42C6D9"
            className="transition-all duration-300"
          />
          {/* Floating accent dots on left */}
          <circle
            cx="150"
            cy="30"
            r={isCol1Active ? "3.5" : "2.5"}
            fill="#003049"
            className="transition-all duration-300"
          />
          <circle
            cx="150"
            cy="90"
            r={isCol1Active ? "3.5" : "2.5"}
            fill="#42C6D9"
            className="transition-all duration-300"
          />
        </g>

        {/* CENTER INTERSECTION (Col 2: Items 02 & 05) */}
        <g
          className={`transition-opacity duration-300 ${
            !hasActive
              ? "opacity-80"
              : isCol2Active
              ? "opacity-100"
              : "opacity-35"
          }`}
        >
          <line
            x1="600"
            y1="26"
            x2="600"
            y2="94"
            stroke="#003049"
            strokeWidth={isCol2Active ? "2.5" : "1.75"}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
          {/* Center Cyan node */}
          <circle
            cx="600"
            cy="60"
            r={isCol2Active ? "7" : "5"}
            fill="#42C6D9"
            className="transition-all duration-300"
          />
          <circle
            cx="600"
            cy="26"
            r={isCol2Active ? "3.5" : "2.5"}
            fill="#003049"
            className="transition-all duration-300"
          />
          <circle
            cx="600"
            cy="94"
            r={isCol2Active ? "3.5" : "2.5"}
            fill="#42C6D9"
            className="transition-all duration-300"
          />
        </g>

        {/* RIGHT DIVERGENCE (Col 3: Items 03 & 06) */}
        <g
          className={`transition-opacity duration-300 ${
            !hasActive
              ? "opacity-80"
              : isCol3Active
              ? "opacity-100"
              : "opacity-35"
          }`}
        >
          <circle
            cx="980"
            cy="60"
            r={isCol3Active ? "6.5" : "5"}
            fill="#003049"
            className="transition-all duration-300"
          />
          <circle
            cx="980"
            cy="60"
            r={isCol3Active ? "3" : "2"}
            fill="#42C6D9"
            className="transition-all duration-300"
          />
          <path
            d="M 980 60 C 1035 60, 1080 48, 1080 16"
            stroke="#003049"
            strokeWidth={isCol3Active ? "2.5" : "1.75"}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
          <path
            d="M 980 60 C 1035 60, 1080 72, 1080 104"
            stroke="#42C6D9"
            strokeWidth={isCol3Active ? "2.5" : "1.75"}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
          {/* Floating accent dots on right */}
          <circle
            cx="1050"
            cy="30"
            r={isCol3Active ? "3.5" : "2.5"}
            fill="#003049"
            className="transition-all duration-300"
          />
          <circle
            cx="1050"
            cy="90"
            r={isCol3Active ? "3.5" : "2.5"}
            fill="#42C6D9"
            className="transition-all duration-300"
          />
        </g>
      </svg>
    </div>
  );
};

// Individual Principle Item
interface PrincipleItemProps {
  item: (typeof principles)[0];
  index: number;
  isHovered: boolean;
  hasActive: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const PrincipleItem: React.FC<PrincipleItemProps> = ({
  item,
  index,
  isHovered,
  hasActive,
  onHoverStart,
  onHoverEnd
}) => {
  const IconComp = item.icon;

  // Without hover: everything is 100% clear.
  // When an item is hovered: that item becomes darker, others are softly muted (NO blur).
  const isMuted = hasActive && !isHovered;

  return (
    <Reveal delay={0.08 * (index % 3)} yOffset={16}>
      <div
        role="button"
        tabIndex={0}
        onMouseEnter={onHoverStart}
        onFocus={onHoverStart}
        onMouseLeave={onHoverEnd}
        onBlur={onHoverEnd}
        onClick={() => {
          if (isHovered) {
            onHoverEnd();
          } else {
            onHoverStart();
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (isHovered) {
              onHoverEnd();
            } else {
              onHoverStart();
            }
          }
        }}
        className={`group flex flex-col items-start text-left cursor-pointer transition-opacity duration-300 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9] rounded-2xl p-2 -m-2 ${
          isMuted ? "opacity-40" : "opacity-100"
        }`}
      >
        {/* Top Row: Underlined Serif Number + Circular Icon Badge in Brand Colors */}
        <div className="flex items-center gap-3.5 mb-3.5">
          <span
            className={`font-mono text-sm sm:text-base font-bold tracking-tight pb-0.5 leading-none transition-all duration-300 ${
              isHovered
                ? "text-[#17324D] border-b-2 border-[#416779]"
                : isMuted
                ? "text-slate-400 border-b border-slate-300/60"
                : "text-[#17324D] border-b-[1.5px] border-[#416779]"
            }`}
          >
            {item.number}
          </span>
          <div
            className={`w-9 sm:w-10 h-9 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-xs ${
              isHovered
                ? item.hoverBadge
                : isMuted
                ? "bg-slate-100 text-slate-400 border border-slate-200"
                : item.defaultBadge
            }`}
          >
            <IconComp
              className={`h-4.5 w-4.5 sm:h-5 sm:w-5 transition-colors duration-300 ${
                isHovered
                  ? "text-[#42C6D9]"
                  : isMuted
                  ? "text-slate-400"
                  : "text-[#003049]"
              }`}
            />
          </div>
        </div>

        {/* Title */}
        <h3
          className={`text-base sm:text-lg lg:text-[19px] font-display font-bold tracking-tight mb-2 transition-colors duration-300 ${
            isHovered
              ? "text-[#003049]"
              : isMuted
              ? "text-slate-400"
              : "text-slate-900"
          }`}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className={`text-[13px] sm:text-[14px] leading-relaxed font-sans font-normal max-w-[320px] transition-colors duration-300 ${
            isHovered
              ? "text-slate-900 font-medium"
              : isMuted
              ? "text-slate-400"
              : "text-slate-600"
          }`}
        >
          {item.description}
        </p>
      </div>
    </Reveal>
  );
};

export const Difference: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const topPrinciples = principles.slice(0, 3);
  const bottomPrinciples = principles.slice(3, 6);
  const activeColumn = hoveredId ? getColumn(hoveredId) : null;
  const hasActive = hoveredId !== null;

  return (
    <section
      id="difference"
      aria-labelledby="difference-heading"
      className="relative bg-white text-slate-900 py-20 sm:py-28 lg:py-32 border-b border-slate-200/80 overflow-hidden"
    >
      <Container size="default" className="relative z-10 w-full max-w-[1320px]">
        {/* Section Header (Centered) */}
        <Reveal yOffset={16}>
          <div className="flex flex-col items-center text-center mx-auto max-w-3xl mb-14 sm:mb-20">
            <SectionHeading
              align="center"
              eyebrow="Studio Philosophy"
              title={
                <>
                  How we operate.{" "}
                  <span className="font-display font-bold text-[#416779] bg-gradient-to-r from-[#17324D] via-[#14213D] to-[#42C6D9] bg-clip-text text-transparent">
                    Why it matters
                  </span>
                  .
                </>
              }
              description="A disciplined creative technology approach engineered to eliminate agency ambiguity, align creative storytelling with code, and protect commercial outcomes."
            />

            <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono text-[#17324D] bg-[#F4F7FA] px-4 py-1.5 rounded-full border border-[#E2E8EF] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#42C6D9] animate-pulse" />
              <span className="font-bold tracking-wider">SIX GUIDING PRINCIPLES</span>
            </div>
          </div>
        </Reveal>

        {/* Desktop & Tablet Layout (matching SS 1 reference with KreaitX Brand Palette) */}
        <div
          className="hidden md:block"
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Top Row: 01, 02, 03 */}
          <div className="grid grid-cols-3 gap-8 lg:gap-14">
            {topPrinciples.map((item, idx) => (
              <PrincipleItem
                key={item.id}
                item={item}
                index={idx}
                isHovered={hoveredId === item.id}
                hasActive={hasActive}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
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
                isHovered={hoveredId === item.id}
                hasActive={hasActive}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </div>
        </div>

        {/* Mobile Layout (< md): Clean Responsive Editorial Stack */}
        <div
          className="md:hidden space-y-10"
          onMouseLeave={() => setHoveredId(null)}
        >
          {principles.map((item, idx) => (
            <div key={item.id} className="relative">
              <PrincipleItem
                item={item}
                index={idx}
                isHovered={hoveredId === item.id}
                hasActive={hasActive}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
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

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

// KreaitX Minimal Principles: Terracotta (#E76F51), Porcelain (#F7F5F0), Deep Warm Charcoal (#34312F)
const principles = [
  {
    id: "01",
    number: "01",
    column: 1 as const,
    title: "One Connected Team",
    description: "Strategy, design and engineering working as one.",
    icon: Users,
    defaultBadge: "bg-[#FBE9E3] border border-[#E5E1DA] text-[#E76F51]",
    hoverBadge: "bg-[#34312F] text-[#E76F51] ring-2 ring-[#E76F51]/30 shadow-sm"
  },
  {
    id: "02",
    number: "02",
    column: 2 as const,
    title: "Creative + Technical",
    description: "Designers who understand code. Engineers with an eye for design.",
    icon: Lightbulb,
    defaultBadge: "bg-[#FBE9E3] border border-[#E5E1DA] text-[#E76F51]",
    hoverBadge: "bg-[#34312F] text-[#E76F51] ring-2 ring-[#E76F51]/30 shadow-sm"
  },
  {
    id: "03",
    number: "03",
    column: 3 as const,
    title: "Business-Centered",
    description: "Every solution is built around real business outcomes.",
    icon: Target,
    defaultBadge: "bg-[#FBE9E3] border border-[#E5E1DA] text-[#E76F51]",
    hoverBadge: "bg-[#34312F] text-[#E76F51] ring-2 ring-[#E76F51]/30 shadow-sm"
  },
  {
    id: "04",
    number: "04",
    column: 1 as const,
    title: "End-to-End Continuity",
    description: "From discovery to deployment, our senior team stays with you.",
    icon: Layers,
    defaultBadge: "bg-[#FBE9E3] border border-[#E5E1DA] text-[#E76F51]",
    hoverBadge: "bg-[#34312F] text-[#E76F51] ring-2 ring-[#E76F51]/30 shadow-sm"
  },
  {
    id: "05",
    number: "05",
    column: 2 as const,
    title: "Transparent Process",
    description: "Clear two-week milestones, transparent deliverables, zero ambiguity.",
    icon: TransparentProcessIcon,
    defaultBadge: "bg-[#FBE9E3] border border-[#E5E1DA] text-[#E76F51]",
    hoverBadge: "bg-[#34312F] text-[#E76F51] ring-2 ring-[#E76F51]/30 shadow-sm"
  },
  {
    id: "06",
    number: "06",
    column: 3 as const,
    title: "Human Collaboration",
    description: "Direct collaboration with senior practitioners. Zero account layers.",
    icon: Heart,
    defaultBadge: "bg-[#FBE9E3] border border-[#E5E1DA] text-[#E76F51]",
    hoverBadge: "bg-[#34312F] text-[#E76F51] ring-2 ring-[#E76F51]/30 shadow-sm"
  }
];

const getColumn = (id: string): 1 | 2 | 3 => {
  if (id === "01" || id === "04") return 1;
  if (id === "03" || id === "06") return 3;
  return 2;
};

// Central Connecting Diagram styled in Minimal Portfolio palette
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
          stroke="#E5E1DA"
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
            stroke="#E76F51"
            strokeWidth={isCol1Active ? "2.5" : "1.5"}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
          <path
            d="M 120 104 C 120 72, 165 60, 220 60"
            stroke="#34312F"
            strokeWidth={isCol1Active ? "2.5" : "1.5"}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
          {/* Left node with neon accent core */}
          <circle
            cx="220"
            cy="60"
            r={isCol1Active ? "6.5" : "5"}
            fill="#34312F"
            className="transition-all duration-300"
          />
          <circle
            cx="220"
            cy="60"
            r={isCol1Active ? "3" : "2"}
            fill="#E76F51"
            className="transition-all duration-300"
          />
          {/* Floating accent dots on left */}
          <circle
            cx="150"
            cy="30"
            r={isCol1Active ? "3.5" : "2.5"}
            fill="#E76F51"
            className="transition-all duration-300"
          />
          <circle
            cx="150"
            cy="90"
            r={isCol1Active ? "3.5" : "2.5"}
            fill="#34312F"
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
            stroke="#E76F51"
            strokeWidth={isCol2Active ? "2.5" : "1.5"}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
          {/* Center node */}
          <circle
            cx="600"
            cy="60"
            r={isCol2Active ? "7" : "5"}
            fill="#E76F51"
            className="transition-all duration-300"
          />
          <circle
            cx="600"
            cy="26"
            r={isCol2Active ? "3.5" : "2.5"}
            fill="#34312F"
            className="transition-all duration-300"
          />
          <circle
            cx="600"
            cy="94"
            r={isCol2Active ? "3.5" : "2.5"}
            fill="#E76F51"
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
            fill="#34312F"
            className="transition-all duration-300"
          />
          <circle
            cx="980"
            cy="60"
            r={isCol3Active ? "3" : "2"}
            fill="#E76F51"
            className="transition-all duration-300"
          />
          <path
            d="M 980 60 C 1035 60, 1080 48, 1080 16"
            stroke="#E76F51"
            strokeWidth={isCol3Active ? "2.5" : "1.5"}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
          <path
            d="M 980 60 C 1035 60, 1080 72, 1080 104"
            stroke="#34312F"
            strokeWidth={isCol3Active ? "2.5" : "1.5"}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
          {/* Floating accent dots on right */}
          <circle
            cx="1050"
            cy="30"
            r={isCol3Active ? "3.5" : "2.5"}
            fill="#E76F51"
            className="transition-all duration-300"
          />
          <circle
            cx="1050"
            cy="90"
            r={isCol3Active ? "3.5" : "2.5"}
            fill="#34312F"
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
        className={`group flex flex-col items-start text-left cursor-pointer transition-opacity duration-300 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51] rounded-xl p-2 -m-2 ${
          isMuted ? "opacity-40" : "opacity-100"
        }`}
      >
        {/* Top Row: Underlined Serif Number + Circular Icon Badge in Brand Colors */}
        <div className="flex items-center gap-3.5 mb-3.5">
          <span
            className={`font-mono text-sm sm:text-base font-bold tracking-tight pb-0.5 leading-none transition-all duration-300 ${
              isHovered
                ? "text-[#E76F51] border-b-2 border-[#E76F51]"
                : isMuted
                ? "text-[#6B6560]/60 border-b border-[#E5E1DA]"
                : "text-[#34312F] border-b-[1.5px] border-[#E76F51]/40"
            }`}
          >
            {item.number}
          </span>
          <div
            className={`w-9 sm:w-10 h-9 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isHovered
                ? item.hoverBadge
                : isMuted
                ? "bg-white text-[#6B6560] border border-[#E5E1DA]"
                : item.defaultBadge
            }`}
          >
            <IconComp
              className={`h-4.5 w-4.5 sm:h-5 sm:w-5 transition-colors duration-300 ${
                isHovered
                  ? "text-[#E76F51]"
                  : isMuted
                  ? "text-[#6B6560]"
                  : "text-inherit"
              }`}
            />
          </div>
        </div>

        {/* Title */}
        <h3
          className={`text-base sm:text-lg lg:text-[19px] font-display font-bold tracking-tight mb-2 transition-colors duration-300 ${
            isHovered
              ? "text-[#E76F51]"
              : isMuted
              ? "text-[#6B6560]"
              : "text-[#34312F]"
          }`}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className={`text-[13px] sm:text-[14px] leading-relaxed font-sans font-normal max-w-[320px] transition-colors duration-300 ${
            isHovered
              ? "text-[#34312F] font-medium"
              : isMuted
              ? "text-[#6B6560]/70"
              : "text-[#6B6560]"
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
      className="relative bg-[#F7F5F0] text-[#34312F] py-20 sm:py-28 lg:py-32 border-b border-[#E5E1DA] overflow-hidden"
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
                  <span className="font-display font-bold text-[#E76F51]">
                    Why it matters
                  </span>
                  .
                </>
              }
              description="A disciplined creative technology approach engineered to eliminate agency ambiguity, align creative storytelling with code, and protect commercial outcomes."
            />

            <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono text-[#E76F51] bg-[#FBE9E3] px-4 py-1.5 rounded-md border border-[#E5E1DA]">
              <span className="w-2 h-2 rounded-full bg-[#E76F51]" />
              <span className="font-bold tracking-wider">SIX GUIDING PRINCIPLES</span>
            </div>
          </div>
        </Reveal>

        {/* Desktop & Tablet Layout */}
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

          {/* Central Connecting Graphic Line in Minimal Palette */}
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
                <div className="pt-8 border-b border-[#E5E1DA]" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

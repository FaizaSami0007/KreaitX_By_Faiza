"use client";

import React, { useState } from "react";
import { Users, Lightbulb, Target, Layers, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

// Clean minimal line icon for 05: Intersecting / Overlapping Transparent Process
const TransparentProcessIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
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

interface Principle {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeTheme: "gold" | "blue";
  col: "left" | "center" | "right";
  row: "top" | "bottom";
}

const principles: Principle[] = [
  {
    id: "01",
    number: "01",
    title: "One Connected Team",
    description: "Strategy, design and engineering working as one.",
    icon: Users,
    badgeTheme: "gold",
    col: "left",
    row: "top"
  },
  {
    id: "02",
    number: "02",
    title: "Creative + Technical",
    description: "Designers who understand code. Engineers with an eye for design.",
    icon: Lightbulb,
    badgeTheme: "blue",
    col: "center",
    row: "top"
  },
  {
    id: "03",
    number: "03",
    title: "Business-Centered",
    description: "Every solution is built around real business outcomes.",
    icon: Target,
    badgeTheme: "gold",
    col: "right",
    row: "top"
  },
  {
    id: "04",
    number: "04",
    title: "End-to-End Continuity",
    description: "From initial idea to long-term growth, we stay with you.",
    icon: Layers,
    badgeTheme: "blue",
    col: "left",
    row: "bottom"
  },
  {
    id: "05",
    number: "05",
    title: "Clear, Transparent Process",
    description: "You always know what's next, why it matters, and what it delivers.",
    icon: TransparentProcessIcon,
    badgeTheme: "gold",
    col: "center",
    row: "bottom"
  },
  {
    id: "06",
    number: "06",
    title: "Human Collaboration",
    description: "We work with people, not just projects — and it shows.",
    icon: Heart,
    badgeTheme: "blue",
    col: "right",
    row: "bottom"
  }
];

export const Difference: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="difference"
      aria-labelledby="difference-heading"
      className="relative bg-[#F4F1E8] text-[#182231] py-24 sm:py-32 lg:py-36 border-b border-[#DEDCD3] overflow-hidden select-none"
    >
      {/* Background Architectural Geometry - Top-Left & Top-Right Arcs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top-Left Arc */}
        <svg
          className="absolute -top-12 -left-12 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] opacity-40 text-[#B2AD7F]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle
            cx="0"
            cy="0"
            r="440"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="none"
            className="text-[#B2AD7F]/45"
          />
          <circle
            cx="0"
            cy="0"
            r="560"
            stroke="#14213D"
            strokeWidth="0.75"
            strokeOpacity="0.12"
          />
        </svg>

        {/* Top-Right Arc */}
        <svg
          className="absolute -top-12 -right-12 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] opacity-40 text-[#B2AD7F]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle
            cx="600"
            cy="0"
            r="440"
            stroke="currentColor"
            strokeWidth="1"
            className="text-[#B2AD7F]/45"
          />
          <circle
            cx="600"
            cy="0"
            r="560"
            stroke="#14213D"
            strokeWidth="0.75"
            strokeOpacity="0.12"
          />
        </svg>
      </div>

      <Container size="default" className="relative z-10 max-w-[1280px]">
        {/* ============================================================ */}
        {/* SECTION HEADER                                                */}
        {/* ============================================================ */}
        <div className="text-center max-w-[720px] mx-auto mb-20 sm:mb-24 lg:mb-28">
          {/* Eyebrow */}
          <Reveal delay={0.05} yOffset={10}>
            <div className="flex flex-col items-center justify-center">
              <span className="text-[11px] sm:text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#14213D]/65">
                THE KREAITX DIFFERENCE
              </span>
              <span className="w-10 h-[1.5px] bg-[#B2AD7F] mt-3.5" aria-hidden="true" />
            </div>
          </Reveal>

          {/* Main Headline */}
          <Reveal delay={0.12} yOffset={16}>
            <h2
              id="difference-heading"
              className="mt-6 text-[clamp(40px,5.6vw,76px)] font-normal text-[#14213D] tracking-[-0.035em] leading-[1.04]"
            >
              More than an agency. <br />
              <span className="font-serif-italic font-normal text-[#14213D]">
                A{" "}
              </span>
              <span className="font-serif-italic font-normal text-[#B2AD7F]">
                connected partner.
              </span>
            </h2>
          </Reveal>

          {/* Subheading Body */}
          <Reveal delay={0.18} yOffset={14}>
            <p className="mt-6 text-base sm:text-lg text-[#14213D]/75 leading-[1.68] font-normal max-w-[580px] mx-auto">
              We bring strategy, creativity and technical engineering together
              to turn ideas into meaningful outcomes — as one team.
            </p>
          </Reveal>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP CONNECTED VISUAL SYSTEM (>= lg)                      */}
        {/* ============================================================ */}
        <div className="hidden lg:block relative py-8">
          
          {/* TOP ROW: 01, 02, 03 */}
          <div className="grid grid-cols-3 gap-12 pb-14 items-start">
            {principles.filter((p) => p.row === "top").map((principle, index) => {
              const IconComp = principle.icon;
              const isHovered = hoveredId === principle.id;
              const isOtherHovered = hoveredId !== null && hoveredId !== principle.id;

              return (
                <div
                  key={principle.id}
                  onMouseEnter={() => setHoveredId(principle.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`flex flex-col transition-all duration-300 ${
                    principle.col === "left"
                      ? "items-start text-left pr-4"
                      : principle.col === "center"
                      ? "items-center text-center px-4"
                      : "items-start text-left pl-6"
                  } ${isOtherHovered ? "opacity-45" : "opacity-100"}`}
                >
                  {/* Top line: Number + Icon Badge */}
                  <div
                    className={`flex items-center gap-4 mb-4 ${
                      principle.col === "center" ? "justify-center" : "justify-start"
                    }`}
                  >
                    <div className="flex flex-col items-start">
                      <span className="font-serif text-lg font-normal text-[#14213D] leading-none">
                        {principle.number}
                      </span>
                      <span className="w-4 h-[1px] bg-[#B2AD7F] mt-1" />
                    </div>

                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        principle.badgeTheme === "gold"
                          ? "bg-[#FAF7F0] border border-[#B2AD7F]/30 text-[#B2AD7F]"
                          : "bg-[#EAF0F5] border border-[#14213D]/12 text-[#14213D]"
                      } ${isHovered ? "scale-110 shadow-sm border-[#B2AD7F]" : ""}`}
                    >
                      <IconComp className="h-6 w-6 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Title in Instrument Serif */}
                  <h3
                    className={`text-[25px] font-normal tracking-tight transition-colors duration-200 ${
                      isHovered ? "text-[#B2AD7F]" : "text-[#14213D]"
                    }`}
                  >
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[14.5px] text-[#14213D]/70 leading-relaxed font-normal max-w-[310px]">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* MIDDLE CONNECTED SVG PATHWAY (Full Width Coordinate Plane) */}
          <div className="relative w-full h-[64px] my-2" aria-hidden="true">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1200 64"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Horizontal Main Axis Line connecting the three nodes */}
              <line
                x1="200"
                y1="32"
                x2="1000"
                y2="32"
                stroke="#14213D"
                strokeWidth="1.2"
                strokeOpacity="0.25"
                className="transition-all duration-300"
              />

              {/* LEFT COLUMN CONNECTORS (01 Top-Left -> Left Node, 04 Bottom-Left -> Left Node) */}
              {/* Curve from 01 (above left x=80, y=-20) down-right to Left Node (x=240, y=32) */}
              <path
                d="M 120 -24 C 120 12, 170 32, 240 32"
                stroke="#B2AD7F"
                strokeWidth="1.2"
                strokeOpacity={hoveredId === "01" ? "1" : "0.55"}
                fill="none"
                className="transition-all duration-300"
              />
              {/* Curve from 04 (below left x=120, y=88) up-right to Left Node (x=240, y=32) */}
              <path
                d="M 120 88 C 120 52, 170 32, 240 32"
                stroke="#14213D"
                strokeWidth="1.2"
                strokeOpacity={hoveredId === "04" ? "0.9" : "0.35"}
                fill="none"
                className="transition-all duration-300"
              />
              {/* Satellite dot on 01 curve */}
              <circle cx="152" cy="-4" r="2.5" fill="#B2AD7F" />
              {/* Satellite dot on 04 curve */}
              <circle cx="152" cy="68" r="2.5" fill="#14213D" fillOpacity="0.4" />

              {/* CENTER COLUMN CONNECTORS (02 Top-Center -> Center Node, 05 Bottom-Center -> Center Node) */}
              {/* Vertical line from 02 (x=600, y=-24) straight down to Center Node (x=600, y=32) */}
              <line
                x1="600"
                y1="-24"
                x2="600"
                y2="32"
                stroke="#14213D"
                strokeWidth="1.2"
                strokeOpacity={hoveredId === "02" ? "0.9" : "0.35"}
                className="transition-all duration-300"
              />
              {/* Vertical line from 05 (x=600, y=88) straight up to Center Node (x=600, y=32) */}
              <line
                x1="600"
                y1="88"
                x2="600"
                y2="32"
                stroke="#B2AD7F"
                strokeWidth="1.2"
                strokeOpacity={hoveredId === "05" ? "1" : "0.55"}
                className="transition-all duration-300"
              />
              {/* Satellite dot on 02 line */}
              <circle cx="600" cy="-2" r="2.5" fill="#14213D" fillOpacity="0.4" />
              {/* Satellite dot on 05 line */}
              <circle cx="600" cy="66" r="2.5" fill="#B2AD7F" />

              {/* RIGHT COLUMN CONNECTORS (03 Top-Right -> Right Node, 06 Bottom-Right -> Right Node) */}
              {/* Curve from 03 (above right x=1080, y=-24) down-left to Right Node (x=960, y=32) */}
              <path
                d="M 1080 -24 C 1080 12, 1030 32, 960 32"
                stroke="#B2AD7F"
                strokeWidth="1.2"
                strokeOpacity={hoveredId === "03" ? "1" : "0.55"}
                fill="none"
                className="transition-all duration-300"
              />
              {/* Curve from 06 (below right x=1080, y=88) up-left to Right Node (x=960, y=32) */}
              <path
                d="M 1080 88 C 1080 52, 1030 32, 960 32"
                stroke="#14213D"
                strokeWidth="1.2"
                strokeOpacity={hoveredId === "06" ? "0.9" : "0.35"}
                fill="none"
                className="transition-all duration-300"
              />
              {/* Satellite dot on 03 curve */}
              <circle cx="1048" cy="-4" r="2.5" fill="#B2AD7F" />
              {/* Satellite dot on 06 curve */}
              <circle cx="1048" cy="68" r="2.5" fill="#14213D" fillOpacity="0.4" />

              {/* THREE MAIN JUNCTION NODES ON HORIZONTAL AXIS */}
              {/* Left Node */}
              <circle
                cx="240"
                cy="32"
                r={hoveredId === "01" || hoveredId === "04" ? "6" : "4.5"}
                fill="#14213D"
                className="transition-all duration-300"
              />
              {/* Center Node */}
              <circle
                cx="600"
                cy="32"
                r={hoveredId === "02" || hoveredId === "05" ? "6" : "4.5"}
                fill="#B2AD7F"
                className="transition-all duration-300"
              />
              {/* Right Node */}
              <circle
                cx="960"
                cy="32"
                r={hoveredId === "03" || hoveredId === "06" ? "6" : "4.5"}
                fill="#14213D"
                className="transition-all duration-300"
              />
            </svg>
          </div>

          {/* BOTTOM ROW: 04, 05, 06 */}
          <div className="grid grid-cols-3 gap-12 pt-14 items-start">
            {principles.filter((p) => p.row === "bottom").map((principle) => {
              const IconComp = principle.icon;
              const isHovered = hoveredId === principle.id;
              const isOtherHovered = hoveredId !== null && hoveredId !== principle.id;

              return (
                <div
                  key={principle.id}
                  onMouseEnter={() => setHoveredId(principle.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`flex flex-col transition-all duration-300 ${
                    principle.col === "left"
                      ? "items-start text-left pr-4"
                      : principle.col === "center"
                      ? "items-center text-center px-4"
                      : "items-start text-left pl-6"
                  } ${isOtherHovered ? "opacity-45" : "opacity-100"}`}
                >
                  {/* Top line: Number + Icon Badge */}
                  <div
                    className={`flex items-center gap-4 mb-4 ${
                      principle.col === "center" ? "justify-center" : "justify-start"
                    }`}
                  >
                    <div className="flex flex-col items-start">
                      <span className="font-serif text-lg font-normal text-[#14213D] leading-none">
                        {principle.number}
                      </span>
                      <span className="w-4 h-[1px] bg-[#B2AD7F] mt-1" />
                    </div>

                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        principle.badgeTheme === "gold"
                          ? "bg-[#FAF7F0] border border-[#B2AD7F]/30 text-[#B2AD7F]"
                          : "bg-[#EAF0F5] border border-[#14213D]/12 text-[#14213D]"
                      } ${isHovered ? "scale-110 shadow-sm border-[#B2AD7F]" : ""}`}
                    >
                      <IconComp className="h-6 w-6 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Title in Instrument Serif */}
                  <h3
                    className={`text-[25px] font-normal tracking-tight transition-colors duration-200 ${
                      isHovered ? "text-[#B2AD7F]" : "text-[#14213D]"
                    }`}
                  >
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[14.5px] text-[#14213D]/70 leading-relaxed font-normal max-w-[310px]">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* ============================================================ */}
        {/* MOBILE & TABLET CONNECTED VERTICAL SYSTEM (< lg)             */}
        {/* ============================================================ */}
        <div className="block lg:hidden relative pl-6 sm:pl-10">
          {/* Continuous vertical timeline line */}
          <div
            className="absolute left-[23px] sm:left-[39px] top-6 bottom-6 w-[1.5px] bg-[#B2AD7F]/40"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-14">
            {principles.map((principle, idx) => {
              const IconComp = principle.icon;

              return (
                <Reveal key={principle.id} delay={0.06 * idx} yOffset={16}>
                  <div className="relative flex items-start gap-4 sm:gap-6">
                    {/* Icon Badge acting as vertical node */}
                    <div
                      className={`relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center ${
                        principle.badgeTheme === "gold"
                          ? "bg-[#FAF7F0] border border-[#B2AD7F]/30 text-[#B2AD7F]"
                          : "bg-[#EAF0F5] border border-[#14213D]/15 text-[#14213D]"
                      } shadow-sm`}
                    >
                      <IconComp className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.5]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      {/* Number Eyebrow with underline */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-serif text-base font-normal text-[#14213D]">
                          {principle.number}
                        </span>
                        <span className="w-3 h-[1px] bg-[#B2AD7F]" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-normal text-[#14213D] tracking-tight">
                        {principle.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-1.5 text-sm text-[#14213D]/70 leading-relaxed font-normal">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </Container>
    </section>
  );
};

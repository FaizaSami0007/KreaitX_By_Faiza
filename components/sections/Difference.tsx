"use client";

import React from "react";
import { Users, Lightbulb, Target, Layers, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

// Clean Process Icon for 05: Transparent Process (overlapping rounded rectangles)
const ProcessIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="4" y="4" width="11" height="11" rx="2" />
    <rect x="9" y="9" width="11" height="11" rx="2" />
  </svg>
);

const topRowPrinciples = [
  {
    id: "01",
    number: "01",
    title: "One Connected Team",
    description: "Strategy, design and engineering working as one.",
    icon: Users
  },
  {
    id: "02",
    number: "02",
    title: "Creative + Technical",
    description: "Designers who understand code. Engineers with an eye for design.",
    icon: Lightbulb
  },
  {
    id: "03",
    number: "03",
    title: "Business-Centered",
    description: "Every solution is built around real business outcomes.",
    icon: Target
  }
];

const bottomRowPrinciples = [
  {
    id: "04",
    number: "04",
    title: "End-to-End Continuity",
    description: "From initial idea to long-term growth, we stay with you.",
    icon: Layers
  },
  {
    id: "05",
    number: "05",
    title: "Clear, Transparent Process",
    description: "You always know what's next, why it matters, and what it delivers.",
    icon: ProcessIcon
  },
  {
    id: "06",
    number: "06",
    title: "Human Collaboration",
    description: "We work with people, not just projects — and it shows.",
    icon: Heart
  }
];

export const Difference: React.FC = () => {
  return (
    <section
      id="difference"
      aria-labelledby="difference-heading"
      className="relative bg-[#FAFAF8] text-slate-900 py-24 sm:py-32 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Subtle concentric decorative arcs in the background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-40">
        <svg
          className="absolute -top-24 -left-24 w-[700px] h-[700px] text-slate-200/50"
          viewBox="0 0 700 700"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle cx="350" cy="350" r="340" strokeDasharray="4 4" />
          <circle cx="350" cy="350" r="260" />
          <circle cx="350" cy="350" r="180" strokeDasharray="6 6" />
        </svg>

        <svg
          className="absolute -top-24 -right-24 w-[700px] h-[700px] text-slate-200/50"
          viewBox="0 0 700 700"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle cx="350" cy="350" r="340" strokeDasharray="4 4" />
          <circle cx="350" cy="350" r="260" />
          <circle cx="350" cy="350" r="180" strokeDasharray="6 6" />
        </svg>
      </div>

      <Container size="default" className="relative z-10">
        {/* SECTION HEADER */}
        <Reveal yOffset={16}>
          <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24 flex flex-col items-center">
            {/* Eyebrow */}
            <span className="text-[11px] sm:text-xs font-sans font-bold tracking-[0.25em] uppercase text-slate-500">
              THE KREAITX DIFFERENCE
            </span>
            <div className="w-8 h-[2px] bg-[#B2AD7F] mt-2 mb-8" aria-hidden="true" />

            {/* Display Title */}
            <h2
              id="difference-heading"
              className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-950 tracking-tight leading-[1.08]"
            >
              More than an <br className="hidden sm:inline" />
              agency. <br />
              <span className="font-serif italic font-normal text-[#B2AD7F]">
                A connected partner.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 font-sans font-normal leading-relaxed max-w-xl">
              We bring strategy, creativity and technical engineering together to turn ideas into meaningful outcomes — as one team.
            </p>
          </div>
        </Reveal>

        {/* 6 PRINCIPLES IN 2 ROWS (3 TOP, 3 BOTTOM) WITH CENTRAL CONNECTOR */}
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          
          {/* TOP ROW: 01, 02, 03 */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 text-left">
            {topRowPrinciples.map((item) => {
              const IconComp = item.icon;
              return (
                <StaggerItem key={item.id} className="flex flex-col items-start">
                  {/* Number with underline + Circular Icon Badge */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-mono font-semibold text-slate-600 pb-0.5 border-b border-slate-400">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-slate-100/90 border border-slate-200/80 flex items-center justify-center text-slate-700 shadow-sm transition-transform duration-300 hover:scale-105">
                      <IconComp className="h-4 w-4 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-[22px] font-display font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm sm:text-[15px] text-slate-600 leading-relaxed font-sans font-normal">
                    {item.description}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* CENTRAL CONNECTING DIAGRAM / DIVIDER */}
          <Reveal yOffset={10} className="hidden md:block w-full py-4">
            <div className="relative flex items-center justify-center w-full">
              <svg
                viewBox="0 0 900 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-12 text-slate-300"
              >
                {/* Left Branching Curve */}
                <path
                  d="M 50 10 Q 100 24 160 24"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M 50 38 Q 100 24 160 24"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />

                {/* Main Horizontal Central Line */}
                <line
                  x1="160"
                  y1="24"
                  x2="740"
                  y2="24"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />

                {/* Right Branching Curve */}
                <path
                  d="M 740 24 Q 800 24 850 10"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M 740 24 Q 800 24 850 38"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />

                {/* Node Circles & Indicator Dots */}
                <circle cx="80" cy="14" r="2" fill="#B2AD7F" />
                <circle cx="80" cy="34" r="2" fill="#64748B" />
                
                <circle cx="160" cy="24" r="3.5" fill="#1E293B" />
                
                <line x1="450" y1="14" x2="450" y2="34" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="450" cy="14" r="2" fill="#64748B" />
                <circle cx="450" cy="24" r="3.5" fill="#B2AD7F" />
                <circle cx="450" cy="34" r="2" fill="#64748B" />

                <circle cx="740" cy="24" r="3.5" fill="#1E293B" />

                <circle cx="820" cy="14" r="2" fill="#B2AD7F" />
                <circle cx="820" cy="34" r="2" fill="#64748B" />
              </svg>
            </div>
          </Reveal>

          {/* BOTTOM ROW: 04, 05, 06 */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 text-left">
            {bottomRowPrinciples.map((item) => {
              const IconComp = item.icon;
              return (
                <StaggerItem key={item.id} className="flex flex-col items-start">
                  {/* Number with underline + Circular Icon Badge */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-mono font-semibold text-slate-600 pb-0.5 border-b border-slate-400">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-slate-100/90 border border-slate-200/80 flex items-center justify-center text-slate-700 shadow-sm transition-transform duration-300 hover:scale-105">
                      <IconComp className="h-4 w-4 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-[22px] font-display font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm sm:text-[15px] text-slate-600 leading-relaxed font-sans font-normal">
                    {item.description}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </Container>
    </section>
  );
};


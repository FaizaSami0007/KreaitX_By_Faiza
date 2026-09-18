"use client";

import React from "react";
import { Users, Lightbulb, Target, Layers, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

// Clean icon for 05: Transparent Process (overlapping rectangles)
const TransparentProcessIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
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
    <rect x="3" y="4" width="12" height="12" rx="2" />
    <rect x="9" y="8" width="12" height="12" rx="2" />
  </svg>
);

const topPrinciples = [
  {
    id: "01",
    number: "01",
    title: "One Connected Team",
    description: "Strategy, design and engineering working as one.",
    icon: Users,
  },
  {
    id: "02",
    number: "02",
    title: "Creative + Technical",
    description: "Designers who understand code. Engineers with an eye for design.",
    icon: Lightbulb,
  },
  {
    id: "03",
    number: "03",
    title: "Business-Centered",
    description: "Every solution is built around real business outcomes.",
    icon: Target,
  }
];

const bottomPrinciples = [
  {
    id: "04",
    number: "04",
    title: "End-to-End Continuity",
    description: "From initial idea to long-term growth, we stay with you.",
    icon: Layers,
  },
  {
    id: "05",
    number: "05",
    title: "Clear, Transparent Process",
    description: "You always know what's next, why it matters, and what it delivers.",
    icon: TransparentProcessIcon,
  },
  {
    id: "06",
    number: "06",
    title: "Human Collaboration",
    description: "We work with people, not just projects — and it shows.",
    icon: Heart,
  }
];

export const Difference: React.FC = () => {
  return (
    <section
      id="difference"
      aria-labelledby="difference-heading"
      className="relative bg-white text-slate-900 py-24 sm:py-32 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Background delicate arc vectors for editorial depth */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-40 overflow-hidden">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-slate-200"
        >
          <circle cx="720" cy="180" r="540" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="720" cy="180" r="720" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <Container size="default" className="relative z-10">
        {/* SECTION HEADER */}
        <Reveal yOffset={16}>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 sm:mb-24">
            {/* Eyebrow */}
            <div className="flex flex-col items-center gap-2 mb-6">
              <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-[0.25em] text-slate-500">
                THE KREAITX DIFFERENCE
              </span>
              <span className="w-10 h-[1.5px] bg-slate-300" aria-hidden="true" />
            </div>

            {/* Display Headline */}
            <h2
              id="difference-heading"
              className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-slate-950 tracking-tight leading-[1.06]"
            >
              More than an <br />
              agency. <br />
              <span className="font-serif italic font-normal bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                A connected partner.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 font-sans font-normal leading-relaxed max-w-lg">
              We bring strategy, creativity and technical engineering together to turn ideas into meaningful outcomes — as one team.
            </p>
          </div>
        </Reveal>

        {/* 2-ROW PRINCIPLES GRID WITH CENTRAL CONNECTOR */}
        <div className="max-w-5xl mx-auto">
          
          {/* ROW 1: Principles 01 - 03 */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 text-left">
            {topPrinciples.map((item) => {
              const IconComp = item.icon;
              return (
                <StaggerItem key={item.id}>
                  <div className="flex flex-col items-start">
                    {/* Number + Circular Icon */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="inline-flex flex-col items-start">
                        <span className="font-serif italic font-normal text-sm sm:text-base text-slate-800 tracking-wide">
                          {item.number}
                        </span>
                        <span className="w-3.5 h-[1.5px] bg-slate-300 mt-0.5" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 shadow-sm group-hover:border-purple-300 transition-colors">
                        <IconComp className="h-4 w-4 stroke-[1.75]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-[22px] font-sans font-bold text-slate-950 tracking-tight mb-2.5">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 font-sans font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* CENTRAL CONNECTOR GRAPHIC */}
          <Reveal delay={0.2} yOffset={0} className="hidden md:block my-12 lg:my-16">
            <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center">
              <svg
                viewBox="0 0 1000 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-16 text-slate-300"
              >
                {/* Horizontal main connecting line */}
                <line x1="160" y1="40" x2="840" y2="40" stroke="currentColor" strokeWidth="1.2" className="text-slate-300" />
                
                {/* Left Branching Curves */}
                <path d="M 120 12 C 140 18, 170 38, 200 40" stroke="currentColor" strokeWidth="1.2" />
                <path d="M 120 68 C 140 62, 170 42, 200 40" stroke="currentColor" strokeWidth="1.2" />
                
                {/* Left Satellite Dots */}
                <circle cx="140" cy="18" r="2.5" className="fill-slate-400 stroke-none" />
                <circle cx="140" cy="62" r="2.5" className="fill-slate-400 stroke-none" />
                
                {/* Left Junction Node */}
                <circle cx="200" cy="40" r="4.5" className="fill-slate-900 stroke-white stroke-[1.5]" />

                {/* Center Vertical Axis & Nodes */}
                <line x1="500" y1="14" x2="500" y2="66" stroke="currentColor" strokeWidth="1.2" className="text-slate-300" />
                <circle cx="500" cy="18" r="2.5" className="fill-slate-400 stroke-none" />
                <circle cx="500" cy="40" r="5" className="fill-purple-600 stroke-white stroke-2 shadow-sm" />
                <circle cx="500" cy="62" r="2.5" className="fill-slate-400 stroke-none" />

                {/* Right Branching Curves */}
                <path d="M 880 12 C 860 18, 830 38, 800 40" stroke="currentColor" strokeWidth="1.2" />
                <path d="M 880 68 C 860 62, 830 42, 800 40" stroke="currentColor" strokeWidth="1.2" />
                
                {/* Right Satellite Dots */}
                <circle cx="860" cy="18" r="2.5" className="fill-slate-400 stroke-none" />
                <circle cx="860" cy="62" r="2.5" className="fill-slate-400 stroke-none" />

                {/* Right Junction Node */}
                <circle cx="800" cy="40" r="4.5" className="fill-slate-900 stroke-white stroke-[1.5]" />
              </svg>
            </div>
          </Reveal>

          {/* ROW 2: Principles 04 - 06 */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 text-left">
            {bottomPrinciples.map((item) => {
              const IconComp = item.icon;
              return (
                <StaggerItem key={item.id}>
                  <div className="flex flex-col items-start">
                    {/* Number + Circular Icon */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="inline-flex flex-col items-start">
                        <span className="font-serif italic font-normal text-sm sm:text-base text-slate-800 tracking-wide">
                          {item.number}
                        </span>
                        <span className="w-3.5 h-[1.5px] bg-slate-300 mt-0.5" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 shadow-sm group-hover:border-purple-300 transition-colors">
                        <IconComp className="h-4 w-4 stroke-[1.75]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-[22px] font-sans font-bold text-slate-950 tracking-tight mb-2.5">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 font-sans font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </Container>
    </section>
  );
};


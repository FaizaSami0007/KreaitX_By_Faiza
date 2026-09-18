"use client";

import React from "react";
import { Users, Lightbulb, Target, Layers, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

// Clean icon for 05: Transparent Process
const TransparentProcessIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
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
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-tr from-purple-100/30 via-indigo-100/20 to-cyan-100/30 blur-[120px] pointer-events-none" />

      <Container size="default" className="relative z-10">
        {/* SECTION HEADER */}
        <Reveal yOffset={16}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 sm:mb-24">
            {/* Eyebrow with delicate rule */}
            <div className="flex flex-col items-center gap-2.5 mb-6">
              <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-[0.24em] text-slate-500">
                THE KREAITX DIFFERENCE
              </span>
              <span className="w-12 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" aria-hidden="true" />
            </div>

            {/* Display Headline */}
            <h2
              id="difference-heading"
              className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-slate-950 tracking-tight leading-[1.08]"
            >
              More than an <br />
              agency. <br />
              <span className="font-serif italic font-normal bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                A connected partner.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 font-sans font-normal leading-relaxed max-w-xl">
              We bring strategy, creativity and technical engineering together to turn ideas into meaningful outcomes — as one team.
            </p>
          </div>
        </Reveal>

        {/* 2-ROW PRINCIPLES GRID WITH CENTRAL CONNECTOR */}
        <div className="max-w-6xl mx-auto">
          
          {/* ROW 1: Principles 01 - 03 */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {topPrinciples.map((item) => {
              const IconComp = item.icon;
              return (
                <StaggerItem key={item.id}>
                  <div className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-white/70 border border-slate-200/60 shadow-subtle hover:shadow-card hover:border-purple-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                    {/* Number + Icon */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex flex-col items-center">
                        <span className="font-sans font-bold text-xs text-slate-700 tracking-wider">
                          {item.number}
                        </span>
                        <span className="w-4 h-[1.5px] bg-purple-500/70 mt-0.5" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <IconComp className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight group-hover:text-purple-700 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans font-normal leading-relaxed max-w-xs">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* CENTRAL CONNECTOR GRAPHIC */}
          <Reveal delay={0.2} yOffset={0} className="hidden md:block my-12 lg:my-16">
            <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center">
              {/* Left Branch Curves */}
              <svg
                viewBox="0 0 1000 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-12 text-slate-300 stroke-current"
              >
                {/* Horizontal main connecting line */}
                <line x1="80" y1="30" x2="920" y2="30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="text-slate-300" />
                <line x1="180" y1="30" x2="820" y2="30" stroke="url(#gradient-line)" strokeWidth="2" />

                {/* Left Branching Curves */}
                <path d="M 40 8 C 80 12, 120 28, 180 30" stroke="currentColor" strokeWidth="1.2" className="text-slate-300" />
                <path d="M 40 52 C 80 48, 120 32, 180 30" stroke="currentColor" strokeWidth="1.2" className="text-slate-300" />
                <circle cx="50" cy="10" r="3" className="fill-purple-400/80 stroke-none" />
                <circle cx="50" cy="50" r="3" className="fill-indigo-400/80 stroke-none" />
                <circle cx="180" cy="30" r="5" className="fill-slate-950 stroke-white stroke-2" />

                {/* Center Node */}
                <line x1="500" y1="12" x2="500" y2="48" stroke="currentColor" strokeWidth="1.2" className="text-slate-300" />
                <circle cx="500" cy="14" r="2.5" className="fill-purple-500 stroke-none" />
                <circle cx="500" cy="30" r="6" className="fill-purple-600 stroke-white stroke-2 shadow-sm" />
                <circle cx="500" cy="46" r="2.5" className="fill-indigo-500 stroke-none" />

                {/* Right Branching Curves */}
                <path d="M 960 8 C 920 12, 880 28, 820 30" stroke="currentColor" strokeWidth="1.2" className="text-slate-300" />
                <path d="M 960 52 C 920 48, 880 32, 820 30" stroke="currentColor" strokeWidth="1.2" className="text-slate-300" />
                <circle cx="950" cy="10" r="3" className="fill-cyan-400/80 stroke-none" />
                <circle cx="950" cy="50" r="3" className="fill-purple-400/80 stroke-none" />
                <circle cx="820" cy="30" r="5" className="fill-slate-950 stroke-white stroke-2" />

                <defs>
                  <linearGradient id="gradient-line" x1="180" y1="30" x2="820" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9333ea" />
                    <stop offset="0.5" stopColor="#6366f1" />
                    <stop offset="1" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </Reveal>

          {/* ROW 2: Principles 04 - 06 */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {bottomPrinciples.map((item) => {
              const IconComp = item.icon;
              return (
                <StaggerItem key={item.id}>
                  <div className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-white/70 border border-slate-200/60 shadow-subtle hover:shadow-card hover:border-purple-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                    {/* Number + Icon */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex flex-col items-center">
                        <span className="font-sans font-bold text-xs text-slate-700 tracking-wider">
                          {item.number}
                        </span>
                        <span className="w-4 h-[1.5px] bg-purple-500/70 mt-0.5" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <IconComp className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight group-hover:text-purple-700 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans font-normal leading-relaxed max-w-xs">
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


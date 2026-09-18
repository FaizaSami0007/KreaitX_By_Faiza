"use client";

import React, { useState } from "react";
import { Users, Lightbulb, Target, Layers, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
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

export const Difference: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const topPrinciples = [
    {
      id: "01",
      number: "01",
      title: "One Connected Team",
      description: "Strategy, design and engineering working as one.",
      icon: Users,
      group: "left"
    },
    {
      id: "02",
      number: "02",
      title: "Creative + Technical",
      description: "Designers who understand code. Engineers with an eye for design.",
      icon: Lightbulb,
      group: "center"
    },
    {
      id: "03",
      number: "03",
      title: "Business-Centered",
      description: "Every solution is built around real business outcomes.",
      icon: Target,
      group: "right"
    }
  ];

  const bottomPrinciples = [
    {
      id: "04",
      number: "04",
      title: "End-to-End Continuity",
      description: "From initial idea to long-term growth, we stay with you.",
      icon: Layers,
      group: "left"
    },
    {
      id: "05",
      number: "05",
      title: "Clear, Transparent Process",
      description: "You always know what's next, why it matters, and what it delivers.",
      icon: TransparentProcessIcon,
      group: "center"
    },
    {
      id: "06",
      number: "06",
      title: "Human Collaboration",
      description: "We work with people, not just projects — and it shows.",
      icon: Heart,
      group: "right"
    }
  ];

  return (
    <section
      id="difference"
      aria-labelledby="difference-heading"
      className="relative bg-white text-slate-900 py-24 sm:py-32 lg:py-36 border-b border-slate-200/80 overflow-hidden select-none"
    >
      {/* Background delicate arc circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute -top-12 -left-12 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] opacity-40 text-purple-300"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="0" cy="0" r="440" stroke="currentColor" strokeWidth="1" className="text-purple-300/60" />
          <circle cx="0" cy="0" r="560" stroke="#0f172a" strokeWidth="0.75" strokeOpacity="0.08" />
        </svg>
        <svg
          className="absolute -top-12 -right-12 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] opacity-40 text-purple-300"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="600" cy="0" r="440" stroke="currentColor" strokeWidth="1" className="text-purple-300/60" />
          <circle cx="600" cy="0" r="560" stroke="#0f172a" strokeWidth="0.75" strokeOpacity="0.08" />
        </svg>
      </div>

      <Container size="default" className="relative z-10 max-w-[1280px]">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-20 sm:mb-24 lg:mb-28">
          <Reveal delay={0.05} yOffset={10}>
            <div className="flex flex-col items-center justify-center">
              <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] text-slate-500">
                THE KREAITX DIFFERENCE
              </span>
              <span className="w-10 h-[1.5px] bg-gradient-to-r from-purple-500 to-indigo-500 mt-3.5" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal delay={0.12} yOffset={16}>
            <h2
              id="difference-heading"
              className="mt-6 text-[clamp(40px,5.6vw,76px)] font-display font-bold text-slate-950 tracking-[-0.035em] leading-[1.04]"
            >
              More than an agency. <br />
              <span className="font-serif italic font-normal bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                A connected partner.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.18} yOffset={14}>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-[1.68] font-sans font-normal max-w-[580px] mx-auto">
              We bring strategy, creativity and technical engineering together to turn ideas into meaningful outcomes — as one team.
            </p>
          </Reveal>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP CONNECTED 2-ROW GRID (Hidden on mobile)               */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden lg:block relative py-8">
          {/* Top Row: 01, 02, 03 */}
          <div className="grid grid-cols-3 gap-12 pb-14 items-start">
            {topPrinciples.map((item, index) => {
              const IconComp = item.icon;
              const isActive = activeId === item.id;
              const isDimmed = activeId !== null && !isActive;
              const alignClass = index === 0 ? "items-start text-left pr-4" : index === 1 ? "items-center text-center px-4" : "items-start text-left pl-6";
              const headerJustify = index === 1 ? "justify-center" : "justify-start";

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  onMouseLeave={() => setActiveId(null)}
                  className={`flex flex-col transition-all duration-300 cursor-pointer ${alignClass} ${
                    isDimmed ? "opacity-35" : "opacity-100"
                  }`}
                >
                  <div className={`flex items-center gap-4 mb-4 ${headerJustify}`}>
                    <div className="flex flex-col items-start">
                      <span className={`font-serif text-lg leading-none transition-colors duration-200 ${isActive ? "text-purple-700 font-semibold" : "text-slate-900 font-normal"}`}>
                        {item.number}
                      </span>
                      <span className={`h-[1.5px] transition-all duration-300 mt-1 ${isActive ? "w-5 bg-purple-500" : "w-3.5 bg-slate-300"}`} />
                    </div>
                    {/* Soft, light, delicate active ring badge (no harsh dark background) */}
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-white border-2 border-purple-400 ring-4 ring-purple-100/90 text-purple-700 shadow-sm scale-105"
                          : "bg-slate-50 border border-slate-200/80 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <IconComp className="h-6 w-6 stroke-[1.5]" />
                    </div>
                  </div>
                  <h3
                    className={`text-[25px] font-sans tracking-tight transition-colors duration-200 ${
                      isActive
                        ? "font-bold text-purple-700"
                        : "font-bold text-slate-950"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed font-sans max-w-[310px] text-slate-600 font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* EXACT CENTRAL CONNECTING VECTOR (Interactive with Active Nodes) */}
          <div className="relative w-full h-[64px] my-2" aria-hidden="true">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1200 64" fill="none" preserveAspectRatio="none">
              {/* Central horizontal base line */}
              <line x1="200" y1="32" x2="1000" y2="32" stroke="#94a3b8" strokeWidth="1.2" strokeOpacity="0.35" />

              {/* Left Branching Curves (Active on 01 or 04) */}
              <path
                d="M 120 -24 C 120 12, 170 32, 240 32"
                stroke="#9333ea"
                strokeWidth={activeId === "01" || activeId === "04" ? "1.8" : "1.2"}
                strokeOpacity={activeId === "01" || activeId === "04" ? "0.9" : "0.5"}
                fill="none"
                className="transition-all duration-300"
              />
              <path
                d="M 120 88 C 120 52, 170 32, 240 32"
                stroke="#64748B"
                strokeWidth={activeId === "01" || activeId === "04" ? "1.8" : "1.2"}
                strokeOpacity={activeId === "01" || activeId === "04" ? "0.7" : "0.35"}
                fill="none"
                className="transition-all duration-300"
              />
              <circle cx="152" cy="-4" r={activeId === "01" ? "3.5" : "2.5"} fill="#9333ea" className="transition-all duration-300" />
              <circle cx="152" cy="68" r={activeId === "04" ? "3.5" : "2.5"} fill="#64748B" fillOpacity="0.5" className="transition-all duration-300" />

              {/* Center Vertical Axis & Nodes (Active on 02 or 05) */}
              <line
                x1="600"
                y1="-24"
                x2="600"
                y2="32"
                stroke="#64748B"
                strokeWidth={activeId === "02" || activeId === "05" ? "1.8" : "1.2"}
                strokeOpacity={activeId === "02" || activeId === "05" ? "0.7" : "0.35"}
                className="transition-all duration-300"
              />
              <line
                x1="600"
                y1="88"
                x2="600"
                y2="32"
                stroke="#9333ea"
                strokeWidth={activeId === "02" || activeId === "05" ? "1.8" : "1.2"}
                strokeOpacity={activeId === "02" || activeId === "05" ? "0.9" : "0.5"}
                className="transition-all duration-300"
              />
              <circle cx="600" cy="-2" r={activeId === "02" ? "3.5" : "2.5"} fill="#64748B" fillOpacity="0.5" className="transition-all duration-300" />
              <circle cx="600" cy="66" r={activeId === "05" ? "3.5" : "2.5"} fill="#9333ea" className="transition-all duration-300" />

              {/* Right Branching Curves (Active on 03 or 06) */}
              <path
                d="M 1080 -24 C 1080 12, 1030 32, 960 32"
                stroke="#9333ea"
                strokeWidth={activeId === "03" || activeId === "06" ? "1.8" : "1.2"}
                strokeOpacity={activeId === "03" || activeId === "06" ? "0.9" : "0.5"}
                fill="none"
                className="transition-all duration-300"
              />
              <path
                d="M 1080 88 C 1080 52, 1030 32, 960 32"
                stroke="#64748B"
                strokeWidth={activeId === "03" || activeId === "06" ? "1.8" : "1.2"}
                strokeOpacity={activeId === "03" || activeId === "06" ? "0.7" : "0.35"}
                fill="none"
                className="transition-all duration-300"
              />
              <circle cx="1048" cy="-4" r={activeId === "03" ? "3.5" : "2.5"} fill="#9333ea" className="transition-all duration-300" />
              <circle cx="1048" cy="68" r={activeId === "06" ? "3.5" : "2.5"} fill="#64748B" fillOpacity="0.5" className="transition-all duration-300" />

              {/* Main Junction Nodes on the horizontal line */}
              <circle
                cx="240"
                cy="32"
                r={activeId === "01" || activeId === "04" ? "5.5" : "4.5"}
                fill={activeId === "01" || activeId === "04" ? "#9333ea" : "#0f172a"}
                className="transition-all duration-300"
              />
              <circle
                cx="600"
                cy="32"
                r={activeId === "02" || activeId === "05" ? "5.5" : "4.5"}
                fill={activeId === "02" || activeId === "05" ? "#9333ea" : "#9333ea"}
                className="transition-all duration-300"
              />
              <circle
                cx="960"
                cy="32"
                r={activeId === "03" || activeId === "06" ? "5.5" : "4.5"}
                fill={activeId === "03" || activeId === "06" ? "#9333ea" : "#0f172a"}
                className="transition-all duration-300"
              />
            </svg>
          </div>

          {/* Bottom Row: 04, 05, 06 */}
          <div className="grid grid-cols-3 gap-12 pt-14 items-start">
            {bottomPrinciples.map((item, index) => {
              const IconComp = item.icon;
              const isActive = activeId === item.id;
              const isDimmed = activeId !== null && !isActive;
              const alignClass = index === 0 ? "items-start text-left pr-4" : index === 1 ? "items-center text-center px-4" : "items-start text-left pl-6";
              const headerJustify = index === 1 ? "justify-center" : "justify-start";

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  onMouseLeave={() => setActiveId(null)}
                  className={`flex flex-col transition-all duration-300 cursor-pointer ${alignClass} ${
                    isDimmed ? "opacity-35" : "opacity-100"
                  }`}
                >
                  <div className={`flex items-center gap-4 mb-4 ${headerJustify}`}>
                    <div className="flex flex-col items-start">
                      <span className={`font-serif text-lg leading-none transition-colors duration-200 ${isActive ? "text-purple-700 font-semibold" : "text-slate-900 font-normal"}`}>
                        {item.number}
                      </span>
                      <span className={`h-[1.5px] transition-all duration-300 mt-1 ${isActive ? "w-5 bg-purple-500" : "w-3.5 bg-slate-300"}`} />
                    </div>
                    {/* Soft, light, delicate active ring badge (no harsh dark background) */}
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-white border-2 border-purple-400 ring-4 ring-purple-100/90 text-purple-700 shadow-sm scale-105"
                          : "bg-slate-50 border border-slate-200/80 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <IconComp className="h-6 w-6 stroke-[1.5]" />
                    </div>
                  </div>
                  <h3
                    className={`text-[25px] font-sans tracking-tight transition-colors duration-200 ${
                      isActive
                        ? "font-bold text-purple-700"
                        : "font-bold text-slate-950"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed font-sans max-w-[310px] text-slate-600 font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE CONNECTED TIMELINE (Visible on < lg)                   */}
        {/* ------------------------------------------------------------- */}
        <div className="block lg:hidden relative pl-6 sm:pl-10">
          <div className="absolute left-[23px] sm:left-[39px] top-6 bottom-6 w-[1.5px] bg-gradient-to-b from-purple-500 via-indigo-400 to-pink-400 opacity-40" aria-hidden="true" />
          
          <div className="space-y-12 sm:space-y-14">
            {[...topPrinciples, ...bottomPrinciples].map((item) => {
              const IconComp = item.icon;
              const isActive = activeId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                  className="relative flex items-start gap-4 sm:gap-6 cursor-pointer"
                >
                  <div
                    className={`relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isActive
                        ? "bg-white border-2 border-purple-400 ring-4 ring-purple-100 text-purple-700 shadow-sm"
                        : "bg-slate-50 border border-slate-200 text-slate-600"
                    }`}
                  >
                    <IconComp className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.5]" />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`font-serif text-base transition-colors ${isActive ? "text-purple-700 font-semibold" : "text-slate-900 font-normal"}`}>
                        {item.number}
                      </span>
                      <span className={`w-3 h-[1px] ${isActive ? "bg-purple-500" : "bg-slate-300"}`} />
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-sans font-bold tracking-tight transition-colors ${isActive ? "text-purple-700" : "text-slate-950"}`}>
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed font-sans font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </Container>
    </section>
  );
};

"use client";

import React from "react";
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
            
            {/* 01: One Connected Team */}
            <div className="flex flex-col transition-all duration-300 items-start text-left pr-4">
              <div className="flex items-center gap-4 mb-4 justify-start">
                <div className="flex flex-col items-start">
                  <span className="font-serif text-lg font-normal text-slate-900 leading-none">01</span>
                  <span className="w-4 h-[1px] bg-purple-500 mt-1" />
                </div>
                <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 bg-purple-50 border border-purple-200/80 text-purple-600 shadow-sm hover:scale-105">
                  <Users className="h-6 w-6 stroke-[1.5]" />
                </div>
              </div>
              <h3 className="text-[25px] font-sans font-bold tracking-tight text-slate-950">
                One Connected Team
              </h3>
              <p className="mt-2 text-[14.5px] text-slate-600 leading-relaxed font-sans font-normal max-w-[310px]">
                Strategy, design and engineering working as one.
              </p>
            </div>

            {/* 02: Creative + Technical (Centered) */}
            <div className="flex flex-col transition-all duration-300 items-center text-center px-4">
              <div className="flex items-center gap-4 mb-4 justify-center">
                <div className="flex flex-col items-start">
                  <span className="font-serif text-lg font-normal text-slate-900 leading-none">02</span>
                  <span className="w-4 h-[1px] bg-purple-500 mt-1" />
                </div>
                <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 bg-indigo-50 border border-indigo-200/80 text-indigo-600 shadow-sm hover:scale-105">
                  <Lightbulb className="h-6 w-6 stroke-[1.5]" />
                </div>
              </div>
              <h3 className="text-[25px] font-sans font-bold tracking-tight text-slate-950">
                Creative + Technical
              </h3>
              <p className="mt-2 text-[14.5px] text-slate-600 leading-relaxed font-sans font-normal max-w-[310px]">
                Designers who understand code. Engineers with an eye for design.
              </p>
            </div>

            {/* 03: Business-Centered */}
            <div className="flex flex-col transition-all duration-300 items-start text-left pl-6">
              <div className="flex items-center gap-4 mb-4 justify-start">
                <div className="flex flex-col items-start">
                  <span className="font-serif text-lg font-normal text-slate-900 leading-none">03</span>
                  <span className="w-4 h-[1px] bg-purple-500 mt-1" />
                </div>
                <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 bg-cyan-50 border border-cyan-200/80 text-cyan-600 shadow-sm hover:scale-105">
                  <Target className="h-6 w-6 stroke-[1.5]" />
                </div>
              </div>
              <h3 className="text-[25px] font-sans font-bold tracking-tight text-slate-950">
                Business-Centered
              </h3>
              <p className="mt-2 text-[14.5px] text-slate-600 leading-relaxed font-sans font-normal max-w-[310px]">
                Every solution is built around real business outcomes.
              </p>
            </div>

          </div>

          {/* EXACT CENTRAL CONNECTING VECTOR (from Vercel design) */}
          <div className="relative w-full h-[64px] my-2" aria-hidden="true">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1200 64" fill="none" preserveAspectRatio="none">
              {/* Central horizontal line */}
              <line x1="200" y1="32" x2="1000" y2="32" stroke="#94a3b8" strokeWidth="1.2" strokeOpacity="0.4" />

              {/* Left Branching Curves */}
              <path d="M 120 -24 C 120 12, 170 32, 240 32" stroke="#9333ea" strokeWidth="1.2" strokeOpacity="0.65" fill="none" />
              <path d="M 120 88 C 120 52, 170 32, 240 32" stroke="#64748B" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
              <circle cx="152" cy="-4" r="2.5" fill="#9333ea" />
              <circle cx="152" cy="68" r="2.5" fill="#64748B" fillOpacity="0.5" />

              {/* Center Vertical Axis & Nodes */}
              <line x1="600" y1="-24" x2="600" y2="32" stroke="#64748B" strokeWidth="1.2" strokeOpacity="0.4" />
              <line x1="600" y1="88" x2="600" y2="32" stroke="#9333ea" strokeWidth="1.2" strokeOpacity="0.65" />
              <circle cx="600" cy="-2" r="2.5" fill="#64748B" fillOpacity="0.5" />
              <circle cx="600" cy="66" r="2.5" fill="#9333ea" />

              {/* Right Branching Curves */}
              <path d="M 1080 -24 C 1080 12, 1030 32, 960 32" stroke="#9333ea" strokeWidth="1.2" strokeOpacity="0.65" fill="none" />
              <path d="M 1080 88 C 1080 52, 1030 32, 960 32" stroke="#64748B" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
              <circle cx="1048" cy="-4" r="2.5" fill="#9333ea" />
              <circle cx="1048" cy="68" r="2.5" fill="#64748B" fillOpacity="0.5" />

              {/* Main Node Dots on the horizontal line */}
              <circle cx="240" cy="32" r="4.5" fill="#0f172a" />
              <circle cx="600" cy="32" r="4.5" fill="#9333ea" />
              <circle cx="960" cy="32" r="4.5" fill="#0f172a" />
            </svg>
          </div>

          {/* Bottom Row: 04, 05, 06 */}
          <div className="grid grid-cols-3 gap-12 pt-14 items-start">
            
            {/* 04: End-to-End Continuity */}
            <div className="flex flex-col transition-all duration-300 items-start text-left pr-4">
              <div className="flex items-center gap-4 mb-4 justify-start">
                <div className="flex flex-col items-start">
                  <span className="font-serif text-lg font-normal text-slate-900 leading-none">04</span>
                  <span className="w-4 h-[1px] bg-purple-500 mt-1" />
                </div>
                <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 bg-indigo-50 border border-indigo-200/80 text-indigo-600 shadow-sm hover:scale-105">
                  <Layers className="h-6 w-6 stroke-[1.5]" />
                </div>
              </div>
              <h3 className="text-[25px] font-sans font-bold tracking-tight text-slate-950">
                End-to-End Continuity
              </h3>
              <p className="mt-2 text-[14.5px] text-slate-600 leading-relaxed font-sans font-normal max-w-[310px]">
                From initial idea to long-term growth, we stay with you.
              </p>
            </div>

            {/* 05: Clear, Transparent Process (Centered) */}
            <div className="flex flex-col transition-all duration-300 items-center text-center px-4">
              <div className="flex items-center gap-4 mb-4 justify-center">
                <div className="flex flex-col items-start">
                  <span className="font-serif text-lg font-normal text-slate-900 leading-none">05</span>
                  <span className="w-4 h-[1px] bg-purple-500 mt-1" />
                </div>
                <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 bg-purple-50 border border-purple-200/80 text-purple-600 shadow-sm hover:scale-105">
                  <TransparentProcessIcon className="h-6 w-6 stroke-[1.5]" />
                </div>
              </div>
              <h3 className="text-[25px] font-sans font-bold tracking-tight text-slate-950">
                Clear, Transparent Process
              </h3>
              <p className="mt-2 text-[14.5px] text-slate-600 leading-relaxed font-sans font-normal max-w-[310px]">
                You always know what&apos;s next, why it matters, and what it delivers.
              </p>
            </div>

            {/* 06: Human Collaboration */}
            <div className="flex flex-col transition-all duration-300 items-start text-left pl-6">
              <div className="flex items-center gap-4 mb-4 justify-start">
                <div className="flex flex-col items-start">
                  <span className="font-serif text-lg font-normal text-slate-900 leading-none">06</span>
                  <span className="w-4 h-[1px] bg-purple-500 mt-1" />
                </div>
                <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 bg-pink-50 border border-pink-200/80 text-pink-600 shadow-sm hover:scale-105">
                  <Heart className="h-6 w-6 stroke-[1.5]" />
                </div>
              </div>
              <h3 className="text-[25px] font-sans font-bold tracking-tight text-slate-950">
                Human Collaboration
              </h3>
              <p className="mt-2 text-[14.5px] text-slate-600 leading-relaxed font-sans font-normal max-w-[310px]">
                We work with people, not just projects — and it shows.
              </p>
            </div>

          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE CONNECTED TIMELINE (Visible on < lg)                   */}
        {/* ------------------------------------------------------------- */}
        <div className="block lg:hidden relative pl-6 sm:pl-10">
          <div className="absolute left-[23px] sm:left-[39px] top-6 bottom-6 w-[1.5px] bg-gradient-to-b from-purple-500 via-indigo-400 to-pink-400 opacity-40" aria-hidden="true" />
          
          <div className="space-y-12 sm:space-y-14">
            {/* 01 */}
            <div className="relative flex items-start gap-4 sm:gap-6">
              <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-purple-50 border border-purple-200 text-purple-600 shadow-sm">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.5]" />
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-serif text-base font-normal text-slate-900">01</span>
                  <span className="w-3 h-[1px] bg-purple-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-950 tracking-tight">
                  One Connected Team
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed font-sans font-normal">
                  Strategy, design and engineering working as one.
                </p>
              </div>
            </div>

            {/* 02 */}
            <div className="relative flex items-start gap-4 sm:gap-6">
              <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-indigo-50 border border-indigo-200 text-indigo-600 shadow-sm">
                <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.5]" />
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-serif text-base font-normal text-slate-900">02</span>
                  <span className="w-3 h-[1px] bg-purple-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-950 tracking-tight">
                  Creative + Technical
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed font-sans font-normal">
                  Designers who understand code. Engineers with an eye for design.
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className="relative flex items-start gap-4 sm:gap-6">
              <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-cyan-50 border border-cyan-200 text-cyan-600 shadow-sm">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.5]" />
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-serif text-base font-normal text-slate-900">03</span>
                  <span className="w-3 h-[1px] bg-purple-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-950 tracking-tight">
                  Business-Centered
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed font-sans font-normal">
                  Every solution is built around real business outcomes.
                </p>
              </div>
            </div>

            {/* 04 */}
            <div className="relative flex items-start gap-4 sm:gap-6">
              <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-indigo-50 border border-indigo-200 text-indigo-600 shadow-sm">
                <Layers className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.5]" />
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-serif text-base font-normal text-slate-900">04</span>
                  <span className="w-3 h-[1px] bg-purple-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-950 tracking-tight">
                  End-to-End Continuity
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed font-sans font-normal">
                  From initial idea to long-term growth, we stay with you.
                </p>
              </div>
            </div>

            {/* 05 */}
            <div className="relative flex items-start gap-4 sm:gap-6">
              <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-purple-50 border border-purple-200 text-purple-600 shadow-sm">
                <TransparentProcessIcon className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.5]" />
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-serif text-base font-normal text-slate-900">05</span>
                  <span className="w-3 h-[1px] bg-purple-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-950 tracking-tight">
                  Clear, Transparent Process
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed font-sans font-normal">
                  You always know what&apos;s next, why it matters, and what it delivers.
                </p>
              </div>
            </div>

            {/* 06 */}
            <div className="relative flex items-start gap-4 sm:gap-6">
              <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-pink-50 border border-pink-200 text-pink-600 shadow-sm">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.5]" />
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-serif text-base font-normal text-slate-900">06</span>
                  <span className="w-3 h-[1px] bg-purple-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-slate-950 tracking-tight">
                  Human Collaboration
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed font-sans font-normal">
                  We work with people, not just projects — and it shows.
                </p>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

"use client";

import React from "react";

/**
 * 1. SOLUTIONS HERO BACKGROUND
 * Theme: Interconnected Capabilities & Digital Architecture
 */
export function SolutionsHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Subtle Architectural Grid */}
      <div 
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226, 232, 240, 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px"
        }}
      />

      {/* 2. Soft Ambient Gradient Flares */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-400/20 via-indigo-400/15 to-transparent blur-[100px] animate-blob-1" />
      <div className="absolute -top-20 -right-20 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-cyan-400/20 via-purple-400/15 to-transparent blur-[110px] animate-blob-2" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] rounded-full bg-gradient-to-t from-pink-300/15 via-purple-300/10 to-transparent blur-[90px]" />

      {/* 3. Interconnected SVG Constellation Network */}
      <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="solGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="solGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Curved connecting architecture lines */}
        <path
          d="M -50,180 Q 300,80 650,220 T 1400,120"
          fill="none"
          stroke="url(#solGrad1)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <path
          d="M 100,550 Q 500,380 900,500 T 1500,420"
          fill="none"
          stroke="url(#solGrad2)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />
        <path
          d="M 200,100 C 400,280 800,150 1100,320"
          fill="none"
          stroke="url(#solGrad1)"
          strokeWidth="1"
        />

        {/* Node points */}
        <circle cx="200" cy="100" r="4" fill="#9333ea" opacity="0.6" />
        <circle cx="200" cy="100" r="12" fill="#9333ea" opacity="0.1" />

        <circle cx="650" cy="220" r="5" fill="#6366f1" opacity="0.7" />
        <circle cx="650" cy="220" r="16" fill="#6366f1" opacity="0.15" />

        <circle cx="1100" cy="320" r="4" fill="#06b6d4" opacity="0.6" />
        <circle cx="1100" cy="320" r="14" fill="#06b6d4" opacity="0.1" />

        <circle cx="900" cy="500" r="4.5" fill="#a855f7" opacity="0.6" />
        <circle cx="900" cy="500" r="15" fill="#a855f7" opacity="0.12" />
      </svg>

      {/* 4. Floating Capability Micro-Pills (Decorative background accents) */}
      <div className="hidden lg:block absolute top-24 left-12 px-3 py-1.5 rounded-full bg-white/80 border border-purple-200/70 shadow-sm backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-purple-700/80">
        ✦ Branding Architecture
      </div>
      <div className="hidden lg:block absolute top-36 right-16 px-3 py-1.5 rounded-full bg-white/80 border border-cyan-200/70 shadow-sm backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-cyan-700/80">
        ✦ Digital Solutions
      </div>
      <div className="hidden lg:block absolute bottom-28 left-20 px-3 py-1.5 rounded-full bg-white/80 border border-indigo-200/70 shadow-sm backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-indigo-700/80">
        ✦ Growth Marketing
      </div>
      <div className="hidden lg:block absolute bottom-32 right-24 px-3 py-1.5 rounded-full bg-white/80 border border-pink-200/70 shadow-sm backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-pink-700/80">
        ✦ Motion &amp; Filming
      </div>

      {/* 5. Smooth bottom fade to content */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 2. PROCESS HERO BACKGROUND
 * Theme: Structured 6-Stage Continuous Workflow Wave
 */
export function ProcessHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Fine Technical Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px"
        }}
      />

      {/* 2. Radiant Workflow Light Cones */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-gradient-to-b from-purple-400/20 via-cyan-400/15 to-transparent blur-[100px]" />
      <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-indigo-400/15 to-transparent blur-[90px]" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-full bg-gradient-to-l from-purple-400/15 to-transparent blur-[90px]" />

      {/* 3. Continuous 6-Stage Waveform SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-70" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="processWave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.5" />
            <stop offset="35%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Harmonic Workflow Curves */}
        <path
          d="M -100,280 C 200,120 400,420 700,240 C 1000,60 1200,380 1600,200"
          fill="none"
          stroke="url(#processWave)"
          strokeWidth="2"
        />
        <path
          d="M -100,320 C 200,160 400,460 700,280 C 1000,100 1200,420 1600,240"
          fill="none"
          stroke="url(#processWave)"
          strokeWidth="1"
          strokeDasharray="5 7"
          opacity="0.6"
        />

        {/* Milestone Rings along the trajectory */}
        <g transform="translate(180, 160)">
          <circle cx="0" cy="0" r="14" fill="#9333ea" opacity="0.08" />
          <circle cx="0" cy="0" r="5" fill="#9333ea" opacity="0.6" />
        </g>
        <g transform="translate(480, 360)">
          <circle cx="0" cy="0" r="14" fill="#6366f1" opacity="0.08" />
          <circle cx="0" cy="0" r="5" fill="#6366f1" opacity="0.6" />
        </g>
        <g transform="translate(820, 170)">
          <circle cx="0" cy="0" r="16" fill="#06b6d4" opacity="0.1" />
          <circle cx="0" cy="0" r="6" fill="#06b6d4" opacity="0.7" />
        </g>
        <g transform="translate(1180, 320)">
          <circle cx="0" cy="0" r="14" fill="#8b5cf6" opacity="0.08" />
          <circle cx="0" cy="0" r="5" fill="#8b5cf6" opacity="0.6" />
        </g>
      </svg>

      {/* 4. Sequential Step Badges */}
      <div className="hidden lg:flex absolute top-20 left-16 items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
        <span>01 DISCOVER</span>
        <span className="text-purple-500">→</span>
        <span>06 SCALE</span>
      </div>
      <div className="hidden lg:flex absolute bottom-24 right-16 items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[10px] font-bold text-purple-700 uppercase tracking-widest">
        <span>Continuous Delivery Loop</span>
      </div>

      {/* 5. Smooth bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 3. ABOUT HERO BACKGROUND
 * Theme: Peshawar Heritage, Studio Philosophy & Geometric Craftsmanship
 */
export function AboutHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Subtle Compass Grid */}
      <div 
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(203, 213, 225, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(203, 213, 225, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px"
        }}
      />

      {/* 2. Studio Warm Ambient Lighting */}
      <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-400/20 via-indigo-300/15 to-transparent blur-[100px] animate-blob-1" />
      <div className="absolute top-12 right-10 w-[480px] h-[480px] rounded-full bg-gradient-to-bl from-pink-400/15 via-purple-400/15 to-cyan-300/10 blur-[100px] animate-blob-2" />
      <div className="absolute bottom-12 left-10 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-cyan-400/15 via-indigo-300/10 to-transparent blur-[90px]" />

      {/* 3. Geometric Studio Compass & Heritage Vector Arcs */}
      <svg className="absolute inset-0 w-full h-full opacity-55" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Elegant concentric harmonic circles */}
        <circle cx="50%" cy="40%" r="260" fill="none" stroke="url(#aboutGrad)" strokeWidth="1" strokeDasharray="3 6" />
        <circle cx="50%" cy="40%" r="380" fill="none" stroke="url(#aboutGrad)" strokeWidth="1" opacity="0.6" />
        <circle cx="50%" cy="40%" r="520" fill="none" stroke="url(#aboutGrad)" strokeWidth="1" strokeDasharray="8 12" opacity="0.4" />

        {/* Studio Alignment Crosshairs */}
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#aboutGrad)" strokeWidth="0.75" strokeDasharray="4 8" opacity="0.3" />
        <line x1="0" y1="40%" x2="100%" y2="40%" stroke="url(#aboutGrad)" strokeWidth="0.75" strokeDasharray="4 8" opacity="0.3" />
      </svg>

      {/* 4. Studio Coordinates & Heritage Watermark Badges */}
      <div className="hidden lg:flex absolute top-24 left-16 flex-col gap-1 p-3 rounded-2xl bg-white/80 border border-slate-200/80 backdrop-blur-sm shadow-sm text-left">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">STUDIO HQ</span>
        <span className="text-xs font-mono font-semibold text-slate-800">34.0151° N, 71.5249° E</span>
        <span className="text-[10px] text-purple-600 font-medium">Peshawar, Khyber Pakhtunkhwa</span>
      </div>

      <div className="hidden lg:flex absolute bottom-28 right-16 items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200/80 backdrop-blur-sm shadow-sm text-xs font-semibold text-slate-700">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
        <span>Crafting for Global Caliber</span>
      </div>

      {/* 5. Smooth bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 4. INSIGHTS HERO BACKGROUND
 * Theme: Strategic Perspectives, Ray Projections & Editorial Matrix
 */
export function InsightsHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Fine Editorial Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            radial-gradient(#94a3b8 1px, transparent 1px),
            linear-gradient(to right, rgba(241, 245, 249, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px, 96px 96px"
        }}
      />

      {/* 2. Luminous Radiant Light Beams */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full bg-gradient-to-b from-purple-400/20 via-pink-400/15 to-transparent blur-[95px]" />
      <div className="absolute top-20 -left-16 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-400/20 to-transparent blur-[85px]" />
      <div className="absolute top-20 -right-16 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-indigo-400/20 to-transparent blur-[85px]" />

      {/* 3. Editorial Perspective Ray Vectors */}
      <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rayGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Perspective Fan Lines originating from top center */}
        <line x1="50%" y1="0%" x2="10%" y2="100%" stroke="url(#rayGrad)" strokeWidth="1" strokeDasharray="4 6" />
        <line x1="50%" y1="0%" x2="25%" y2="100%" stroke="url(#rayGrad)" strokeWidth="0.75" />
        <line x1="50%" y1="0%" x2="40%" y2="100%" stroke="url(#rayGrad)" strokeWidth="0.75" />
        <line x1="50%" y1="0%" x2="60%" y2="100%" stroke="url(#rayGrad)" strokeWidth="0.75" />
        <line x1="50%" y1="0%" x2="75%" y2="100%" stroke="url(#rayGrad)" strokeWidth="0.75" />
        <line x1="50%" y1="0%" x2="90%" y2="100%" stroke="url(#rayGrad)" strokeWidth="1" strokeDasharray="4 6" />
      </svg>

      {/* 4. Editorial Micro Badges */}
      <div className="hidden lg:flex absolute top-24 left-16 items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-purple-200/80 shadow-sm backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-purple-700">
        <span>Volume 01</span>
        <span className="text-slate-300">•</span>
        <span>Essays &amp; Field Notes</span>
      </div>

      <div className="hidden lg:flex absolute bottom-28 right-16 items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-slate-600">
        <span>Updated Bi-Weekly</span>
      </div>

      {/* 5. Smooth bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

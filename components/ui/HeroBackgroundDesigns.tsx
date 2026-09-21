"use client";

import React from "react";
import { Sparkles, Layers, Cpu, Compass, BookOpen, GitBranch } from "lucide-react";

/**
 * 1. SOLUTIONS HERO BACKGROUND
 * Unique Design: Digital Solutions Constellation & Interconnected Architectural Nexus
 * Color Theme: Purple (#9333EA) × Indigo (#6366F1) × Cyan (#06B6D4) on Pure White (#FFFFFF)
 */
export function SolutionsHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Base Subtle Isometric Grid */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226, 232, 240, 0.7) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.7) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px"
        }}
      />

      {/* 2. Soft Ambient Fluid Gradient Orbs (Home Page Color Palette) */}
      <div className="absolute -top-24 -left-20 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-purple-500/18 via-indigo-500/14 to-transparent blur-[110px] animate-blob-1" />
      <div className="absolute -top-20 -right-20 w-[580px] h-[580px] rounded-full bg-gradient-to-bl from-cyan-400/20 via-purple-400/15 to-transparent blur-[120px] animate-blob-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-r from-pink-400/10 via-purple-400/10 to-cyan-300/10 blur-[100px]" />

      {/* 3. Unique Solutions SVG Constellation Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-70" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="solHubGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="solHubGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Dynamic spline connecting lines */}
        <path d="M -20,160 C 250,80 500,280 800,140 C 1100,0 1350,220 1600,100" fill="none" stroke="url(#solHubGrad1)" strokeWidth="1.5" strokeDasharray="4 6" />
        <path d="M 50,560 C 350,380 700,580 1050,420 C 1350,260 1500,480 1700,380" fill="none" stroke="url(#solHubGrad2)" strokeWidth="1.5" strokeDasharray="6 8" />
        <path d="M 220,120 Q 550,320 880,180 T 1380,300" fill="none" stroke="url(#solHubGrad1)" strokeWidth="1" opacity="0.6" />

        {/* Orbital nodes */}
        <circle cx="220" cy="120" r="4.5" fill="#9333ea" />
        <circle cx="220" cy="120" r="14" fill="#9333ea" opacity="0.12" />

        <circle cx="800" cy="140" r="5" fill="#6366f1" />
        <circle cx="800" cy="140" r="16" fill="#6366f1" opacity="0.15" />

        <circle cx="1380" cy="300" r="4" fill="#06b6d4" />
        <circle cx="1380" cy="300" r="13" fill="#06b6d4" opacity="0.12" />

        <circle cx="1050" cy="420" r="4.5" fill="#ec4899" />
        <circle cx="1050" cy="420" r="15" fill="#ec4899" opacity="0.12" />
      </svg>

      {/* 4. Elegant Glass Micro-Cards for Solutions */}
      <div className="hidden xl:flex absolute top-24 left-12 items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-purple-200/80 shadow-sm backdrop-blur-md text-[11px] font-bold tracking-wider text-purple-800">
        <Layers className="h-3 w-3 text-purple-600" />
        <span>MODULAR CAPABILITIES</span>
      </div>
      <div className="hidden xl:flex absolute top-36 right-14 items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-cyan-200/80 shadow-sm backdrop-blur-md text-[11px] font-bold tracking-wider text-cyan-800">
        <Cpu className="h-3 w-3 text-cyan-600" />
        <span>SCALABLE ARCHITECTURE</span>
      </div>

      {/* 5. Smooth bottom blend */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 2. PROCESS HERO BACKGROUND
 * Unique Design: 6-Stage Harmonic Waveform & Milestone Progression Track
 * Color Theme: Purple (#9333EA) × Indigo (#6366F1) × Cyan (#06B6D4) on Pure White (#FFFFFF)
 */
export function ProcessHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Technical Precision Dot Field */}
      <div 
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px"
        }}
      />

      {/* 2. Radiant Workflow Gradient Light (Purple & Cyan Accents) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[480px] rounded-full bg-gradient-to-b from-purple-400/18 via-indigo-400/14 to-transparent blur-[100px]" />
      <div className="absolute top-1/4 -left-16 w-[440px] h-[440px] rounded-full bg-gradient-to-r from-cyan-400/16 via-purple-300/10 to-transparent blur-[90px]" />
      <div className="absolute top-1/4 -right-16 w-[440px] h-[440px] rounded-full bg-gradient-to-l from-pink-400/14 via-indigo-300/10 to-transparent blur-[90px]" />

      {/* 3. Unique Continuous 6-Stage Waveform Trajectory */}
      <svg className="absolute inset-0 w-full h-full opacity-75" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="procWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.6" />
            <stop offset="30%" stopColor="#6366f1" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Primary harmonic wave */}
        <path d="M -50,260 C 250,140 450,380 750,220 C 1050,60 1250,340 1650,180" fill="none" stroke="url(#procWaveGrad)" strokeWidth="2.5" />
        {/* Echo guide wave */}
        <path d="M -50,300 C 250,180 450,420 750,260 C 1050,100 1250,380 1650,220" fill="none" stroke="url(#procWaveGrad)" strokeWidth="1" strokeDasharray="6 6" opacity="0.5" />

        {/* 6 Progression Step Halos */}
        <g transform="translate(180, 165)">
          <circle cx="0" cy="0" r="16" fill="#9333ea" opacity="0.08" />
          <circle cx="0" cy="0" r="5" fill="#9333ea" />
        </g>
        <g transform="translate(490, 340)">
          <circle cx="0" cy="0" r="16" fill="#6366f1" opacity="0.08" />
          <circle cx="0" cy="0" r="5" fill="#6366f1" />
        </g>
        <g transform="translate(750, 220)">
          <circle cx="0" cy="0" r="18" fill="#a855f7" opacity="0.1" />
          <circle cx="0" cy="0" r="6" fill="#a855f7" />
        </g>
        <g transform="translate(1080, 100)">
          <circle cx="0" cy="0" r="18" fill="#06b6d4" opacity="0.1" />
          <circle cx="0" cy="0" r="6" fill="#06b6d4" />
        </g>
        <g transform="translate(1380, 290)">
          <circle cx="0" cy="0" r="16" fill="#3b82f6" opacity="0.08" />
          <circle cx="0" cy="0" r="5" fill="#3b82f6" />
        </g>
      </svg>

      {/* 4. Elegant Process Workflow Badges */}
      <div className="hidden xl:flex absolute top-24 left-14 items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-sm backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-slate-700">
        <GitBranch className="h-3 w-3 text-purple-600" />
        <span>STAGE 01 → 06 DIRECT EXECUTION</span>
      </div>

      {/* 5. Smooth bottom blend */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 3. ABOUT HERO BACKGROUND
 * Unique Design: Architectural Compass, Studio Alignment & Heritage Geometry
 * Color Theme: Purple (#9333EA) × Indigo (#6366F1) × Cyan (#06B6D4) on Pure White (#FFFFFF)
 */
export function AboutHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Studio Architectural Grid */}
      <div 
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(203, 213, 225, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(203, 213, 225, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      {/* 2. Studio Warm Ambient Lighting Orbs */}
      <div className="absolute -top-20 left-1/4 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-purple-500/18 via-indigo-400/12 to-transparent blur-[100px] animate-blob-1" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-pink-400/16 via-purple-400/12 to-cyan-300/10 blur-[100px] animate-blob-2" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-cyan-400/16 via-indigo-300/10 to-transparent blur-[95px]" />

      {/* 3. Concentric Studio Compass Vectors */}
      <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="abtCompassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Harmonic circles centered behind headline */}
        <circle cx="50%" cy="42%" r="220" fill="none" stroke="url(#abtCompassGrad)" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="50%" cy="42%" r="340" fill="none" stroke="url(#abtCompassGrad)" strokeWidth="1" opacity="0.5" />
        <circle cx="50%" cy="42%" r="480" fill="none" stroke="url(#abtCompassGrad)" strokeWidth="1" strokeDasharray="8 12" opacity="0.35" />

        {/* Alignment Crosshairs */}
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#abtCompassGrad)" strokeWidth="0.75" strokeDasharray="4 8" opacity="0.25" />
        <line x1="0" y1="42%" x2="100%" y2="42%" stroke="url(#abtCompassGrad)" strokeWidth="0.75" strokeDasharray="4 8" opacity="0.25" />
      </svg>

      {/* 4. Peshawar Studio HQ Heritage Badge */}
      <div className="hidden xl:flex absolute top-24 left-14 flex-col gap-1 p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 backdrop-blur-md shadow-sm text-left">
        <div className="flex items-center gap-1.5">
          <Compass className="h-3.5 w-3.5 text-purple-600" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">STUDIO ORIGIN</span>
        </div>
        <span className="text-xs font-mono font-bold text-slate-800">34.0151° N, 71.5249° E</span>
        <span className="text-[10px] text-purple-600 font-medium">Peshawar, Khyber Pakhtunkhwa</span>
      </div>

      {/* 5. Smooth bottom blend */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 4. INSIGHTS HERO BACKGROUND
 * Unique Design: Perspective Fan Projections & Editorial Grid Matrix
 * Color Theme: Purple (#9333EA) × Indigo (#6366F1) × Cyan (#06B6D4) on Pure White (#FFFFFF)
 */
export function InsightsHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Editorial Fine Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `
            radial-gradient(#94a3b8 1px, transparent 1px),
            linear-gradient(to right, rgba(241, 245, 249, 0.9) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px, 96px 96px"
        }}
      />

      {/* 2. Luminous Radiant Light Beams (Home Page Theme Colors) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[620px] h-[520px] rounded-full bg-gradient-to-b from-purple-400/20 via-pink-400/14 to-transparent blur-[95px]" />
      <div className="absolute top-16 -left-16 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-cyan-400/18 to-transparent blur-[85px]" />
      <div className="absolute top-16 -right-16 w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-indigo-400/18 to-transparent blur-[85px]" />

      {/* 3. Unique Perspective Fan Lines originating from top center */}
      <svg className="absolute inset-0 w-full h-full opacity-65" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="insRayGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Radiant perspective rays */}
        <line x1="50%" y1="0%" x2="8%" y2="100%" stroke="url(#insRayGrad)" strokeWidth="1" strokeDasharray="4 6" />
        <line x1="50%" y1="0%" x2="22%" y2="100%" stroke="url(#insRayGrad)" strokeWidth="0.75" />
        <line x1="50%" y1="0%" x2="38%" y2="100%" stroke="url(#insRayGrad)" strokeWidth="0.75" />
        <line x1="50%" y1="0%" x2="62%" y2="100%" stroke="url(#insRayGrad)" strokeWidth="0.75" />
        <line x1="50%" y1="0%" x2="78%" y2="100%" stroke="url(#insRayGrad)" strokeWidth="0.75" />
        <line x1="50%" y1="0%" x2="92%" y2="100%" stroke="url(#insRayGrad)" strokeWidth="1" strokeDasharray="4 6" />
      </svg>

      {/* 4. Editorial Micro Badge */}
      <div className="hidden xl:flex absolute top-24 left-14 items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-purple-200/80 shadow-sm backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-purple-700">
        <BookOpen className="h-3.5 w-3.5 text-purple-600" />
        <span>PERSPECTIVES × FIELD ESSAYS</span>
      </div>

      {/* 5. Smooth bottom blend */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

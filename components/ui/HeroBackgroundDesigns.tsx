"use client";

import React from "react";
import Image from "next/image";

/**
 * 1. SOLUTIONS HERO BACKGROUND
 * Decent, minimal pure white canvas with subtle top-right fluid silk ribbon
 * and signature home hero ambient gradient glows (Purple × Indigo × Cyan).
 */
export function SolutionsHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Subtle Silk Ribbon Corner Accent (Home Hero Theme) */}
      <div className="absolute top-0 right-0 w-[55%] h-[75%] min-w-[360px] opacity-45 overflow-hidden">
        <Image
          src="/images/hero-custom-silk-bg.jpg"
          alt="KreaitX Subtle Fluid Silk Ribbon Accent"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover object-right-top select-none"
          quality={90}
        />
        {/* Soft gradient masks to blend cleanly into pure white */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-white" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
      </div>

      {/* 2. Minimal Ambient Fluid Gradient Aura Blobs */}
      <div className="absolute -top-16 -left-16 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-purple-500/15 via-indigo-500/10 to-transparent blur-[110px] animate-blob-1" />
      <div className="absolute top-1/4 right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-cyan-400/15 via-purple-500/10 to-transparent blur-[100px] animate-blob-2" />

      {/* 3. Seamless bottom transition */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 2. PROCESS HERO BACKGROUND
 * Decent, minimal pure white canvas with subtle top-left fluid silk wave
 * and signature home hero ambient gradient glows.
 */
export function ProcessHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Subtle Silk Ribbon Left-Edge Accent */}
      <div className="absolute top-0 left-0 w-[50%] h-[70%] min-w-[320px] opacity-40 overflow-hidden">
        <Image
          src="/images/hero-custom-silk-bg.jpg"
          alt="KreaitX Subtle Process Silk Ribbon Accent"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-left-top select-none"
          quality={90}
        />
        {/* Soft gradient masks to melt into pure white */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-white" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
      </div>

      {/* 2. Minimal Ambient Fluid Gradient Aura Blobs */}
      <div className="absolute top-10 right-10 w-[460px] h-[460px] rounded-full bg-gradient-to-bl from-purple-500/16 via-pink-400/10 to-cyan-400/12 blur-[110px] animate-blob-1" />
      <div className="absolute -bottom-10 left-1/4 w-[400px] h-[350px] rounded-full bg-gradient-to-t from-cyan-400/14 via-indigo-500/10 to-transparent blur-[95px] animate-blob-2" />

      {/* 3. Seamless bottom transition */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 3. ABOUT HERO BACKGROUND
 * Decent, minimal pure white canvas with subtle top-right studio silk touch
 * and warm signature purple-cyan ambient radiance.
 */
export function AboutHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Subtle Silk Ribbon Corner Accent */}
      <div className="absolute top-0 right-0 w-[52%] h-[72%] min-w-[340px] opacity-40 overflow-hidden">
        <Image
          src="/images/ideas-corner-silk-bg.jpg"
          alt="KreaitX Subtle About Silk Ribbon Accent"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 52vw"
          className="object-cover object-right-top select-none"
          quality={90}
        />
        {/* Soft gradient masks to blend cleanly into pure white */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/50 to-white" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
      </div>

      {/* 2. Minimal Ambient Fluid Gradient Aura Blobs */}
      <div className="absolute -top-12 left-12 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-purple-500/16 via-indigo-500/12 to-transparent blur-[115px] animate-blob-1" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[350px] rounded-full bg-gradient-to-tl from-cyan-400/15 via-purple-400/10 to-transparent blur-[100px] animate-blob-2" />

      {/* 3. Seamless bottom transition */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 4. INSIGHTS HERO BACKGROUND
 * Decent, minimal pure white canvas with radiant top-center spotlight aura
 * and signature home hero color theme.
 */
export function InsightsHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Subtle Silk Ribbon Center-Top Radiant Wave */}
      <div className="absolute top-0 right-0 w-[48%] h-[68%] min-w-[320px] opacity-35 overflow-hidden">
        <Image
          src="/images/hero-custom-silk-bg.jpg"
          alt="KreaitX Subtle Insights Silk Ribbon Accent"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 48vw"
          className="object-cover object-right-top select-none"
          quality={90}
        />
        {/* Soft gradient masks */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/50 to-white" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
      </div>

      {/* 2. Minimal Ambient Fluid Gradient Aura Blobs */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] h-[450px] rounded-full bg-gradient-to-b from-purple-500/18 via-indigo-500/12 to-cyan-400/10 blur-[110px] animate-blob-1" />
      <div className="absolute top-1/3 left-10 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-cyan-400/15 via-indigo-400/10 to-transparent blur-[95px] animate-blob-2" />

      {/* 3. Seamless bottom transition */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 5. WORK HERO BACKGROUND
 * Decent, minimal pure white canvas with subtle top-right portfolio silk touch
 * and home hero ambient gradient radiance.
 */
export function WorkHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      <div className="absolute top-0 right-0 w-[50%] h-[70%] min-w-[340px] opacity-40 overflow-hidden">
        <Image
          src="/images/ideas-corner-silk-bg.jpg"
          alt="KreaitX Subtle Work Silk Ribbon Accent"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-right-top select-none"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/50 to-white" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
      </div>

      <div className="absolute -top-16 left-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-purple-500/15 via-indigo-500/10 to-transparent blur-[110px] animate-blob-1" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[350px] rounded-full bg-gradient-to-tl from-cyan-400/15 via-purple-400/10 to-transparent blur-[95px] animate-blob-2" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 6. CONTACT HERO BACKGROUND
 * Decent, minimal pure white canvas with subtle top-center collaboration radiance.
 */
export function ContactHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      <div className="absolute top-0 right-0 w-[52%] h-[72%] min-w-[340px] opacity-40 overflow-hidden">
        <Image
          src="/images/hero-custom-silk-bg.jpg"
          alt="KreaitX Subtle Contact Silk Ribbon Accent"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 52vw"
          className="object-cover object-right-top select-none"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/50 to-white" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
      </div>

      <div className="absolute -top-20 left-12 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-purple-500/16 via-pink-400/10 to-transparent blur-[115px] animate-blob-1" />
      <div className="absolute top-1/3 right-12 w-[380px] h-[380px] rounded-full bg-gradient-to-bl from-cyan-400/15 via-indigo-500/10 to-transparent blur-[95px] animate-blob-2" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

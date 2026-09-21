"use client";

import React from "react";
import Image from "next/image";

/**
 * 1. SOLUTIONS HERO BACKGROUND
 * Minimalist luxury: Soft diagonal ambient aura in purple, indigo, and cyan on pure white.
 */
export function SolutionsHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Organic Fluid Ambient Glows */}
      <div className="absolute -top-28 -left-20 w-[580px] h-[580px] rounded-full bg-gradient-to-br from-purple-500/20 via-indigo-500/15 to-transparent blur-[110px] animate-blob-1" />
      <div className="absolute top-10 -right-20 w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-cyan-400/22 via-sky-400/15 to-transparent blur-[110px] animate-blob-2" />
      <div className="absolute -bottom-16 left-1/3 w-[550px] h-[400px] rounded-full bg-gradient-to-tr from-pink-400/15 via-purple-400/10 to-transparent blur-[100px] animate-blob-3" />

      {/* 2. Soft Minimalist Corner Silk Accent (Home Page Theme) */}
      <div className="absolute top-0 right-0 w-[480px] h-[340px] opacity-40">
        <Image
          src="/images/ideas-corner-silk-bg.jpg"
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover object-right-top select-none"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent pointer-events-none" />
      </div>

      {/* 3. Smooth bottom blend into content */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 2. PROCESS HERO BACKGROUND
 * Minimalist luxury: Sweeping horizontal cyan-to-violet workflow ambient light on pure white.
 */
export function ProcessHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Organic Flowing Light Bands */}
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[750px] h-[450px] rounded-full bg-gradient-to-b from-purple-500/20 via-indigo-500/15 to-transparent blur-[110px] animate-blob-1" />
      <div className="absolute top-20 -left-24 w-[480px] h-[480px] rounded-full bg-gradient-to-r from-cyan-400/22 via-indigo-400/12 to-transparent blur-[100px] animate-blob-2" />
      <div className="absolute top-20 -right-24 w-[480px] h-[480px] rounded-full bg-gradient-to-l from-purple-400/18 via-pink-400/12 to-transparent blur-[100px] animate-blob-3" />

      {/* 2. Soft Minimalist Corner Accent */}
      <div className="absolute top-0 left-0 w-[420px] h-[300px] opacity-35 scale-x-[-1]">
        <Image
          src="/images/ideas-corner-silk-bg.jpg"
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover object-right-top select-none"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent pointer-events-none" />
      </div>

      {/* 3. Smooth bottom blend into content */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 3. ABOUT HERO BACKGROUND
 * Minimalist luxury: Warm studio radiant halo in purple, pink, and cyan on pure white.
 */
export function AboutHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Studio Radiant Warm Halos */}
      <div className="absolute -top-24 left-1/4 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-purple-500/22 via-pink-500/15 to-transparent blur-[110px] animate-blob-1" />
      <div className="absolute top-12 right-12 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-indigo-500/18 via-purple-400/14 to-cyan-300/10 blur-[100px] animate-blob-2" />
      <div className="absolute -bottom-10 left-10 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-cyan-400/18 via-indigo-300/12 to-transparent blur-[95px] animate-blob-3" />

      {/* 2. Smooth Minimalist Ambient Silk Ribbon Accent */}
      <div className="absolute top-0 right-1/4 w-[380px] h-[260px] opacity-30">
        <Image
          src="/images/ideas-corner-silk-bg.jpg"
          alt=""
          fill
          priority
          sizes="40vw"
          className="object-cover object-top select-none"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none" />
      </div>

      {/* 3. Smooth bottom blend into content */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 4. INSIGHTS HERO BACKGROUND
 * Minimalist luxury: Luminous prismatic radiant spotlight in lavender and cyan on pure white.
 */
export function InsightsHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Luminous Radiant Light Beams */}
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[650px] h-[520px] rounded-full bg-gradient-to-b from-purple-500/22 via-indigo-400/16 to-pink-400/10 blur-[100px] animate-blob-1" />
      <div className="absolute top-16 -left-16 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-cyan-400/20 via-sky-400/14 to-transparent blur-[90px] animate-blob-2" />
      <div className="absolute top-16 -right-16 w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-pink-400/18 via-purple-400/12 to-transparent blur-[90px] animate-blob-3" />

      {/* 2. Soft Ambient Corner Accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[280px] opacity-35">
        <Image
          src="/images/ideas-corner-silk-bg.jpg"
          alt=""
          fill
          priority
          sizes="40vw"
          className="object-cover object-right-top select-none"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none" />
      </div>

      {/* 3. Smooth bottom blend into content */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

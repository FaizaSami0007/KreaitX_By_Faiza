"use client";

import React from "react";
import Image from "next/image";

/**
 * 1. SOLUTIONS HERO BACKGROUND
 * Minimalist luxury: Soft diagonal ambient aura in brand Navy & Electric Cyan on pure white.
 */
export function SolutionsHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Organic Fluid Ambient Glows */}
      <div className="absolute -top-28 -left-20 w-[580px] h-[580px] rounded-full bg-gradient-to-br from-[#003049]/15 via-[#14213D]/10 to-transparent blur-[110px] animate-blob-1" />
      <div className="absolute top-10 -right-20 w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-[#42C6D9]/20 via-[#42C6D9]/10 to-transparent blur-[110px] animate-blob-2" />
      <div className="absolute -bottom-16 left-1/3 w-[550px] h-[400px] rounded-full bg-gradient-to-tr from-[#003049]/10 via-[#42C6D9]/10 to-transparent blur-[100px] animate-blob-3" />

      {/* 2. Soft Minimalist Corner Silk Accent (Home Page Theme) */}
      <div className="absolute top-0 right-0 w-[480px] h-[340px] opacity-40">
        <Image
          src="/images/solutions-hero-custom-bg.jpg"
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
 * Minimalist luxury: Sweeping horizontal navy-to-cyan workflow ambient light on pure white.
 */
export function ProcessHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Organic Flowing Light Bands */}
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[750px] h-[450px] rounded-full bg-gradient-to-b from-[#003049]/15 via-[#14213D]/10 to-transparent blur-[110px] animate-blob-1" />
      <div className="absolute top-20 -left-24 w-[480px] h-[480px] rounded-full bg-gradient-to-r from-[#42C6D9]/20 via-[#003049]/10 to-transparent blur-[100px] animate-blob-2" />
      <div className="absolute top-20 -right-24 w-[480px] h-[480px] rounded-full bg-gradient-to-l from-[#003049]/12 via-[#42C6D9]/10 to-transparent blur-[100px] animate-blob-3" />

      {/* 2. Soft Minimalist Corner Accent */}
      <div className="absolute top-0 left-0 w-[420px] h-[300px] opacity-35 scale-x-[-1]">
        <Image
          src="/images/process-hero-custom-bg.jpg"
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
 * Minimalist luxury: Warm studio radiant halo in brand Navy & Electric Cyan on pure white.
 */
export function AboutHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Studio Radiant Halos */}
      <div className="absolute -top-24 left-1/4 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-[#003049]/15 via-[#42C6D9]/12 to-transparent blur-[110px] animate-blob-1" />
      <div className="absolute top-12 right-12 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#14213D]/12 via-[#42C6D9]/15 to-transparent blur-[100px] animate-blob-2" />
      <div className="absolute -bottom-10 left-10 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-[#42C6D9]/15 via-[#003049]/10 to-transparent blur-[95px] animate-blob-3" />

      {/* 2. Smooth Minimalist Ambient Silk Ribbon Accent */}
      <div className="absolute top-0 right-1/4 w-[380px] h-[260px] opacity-30">
        <Image
          src="/images/about-hero-custom-bg.jpg"
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
 * Minimalist luxury: Luminous radiant spotlight in navy and cyan on pure white.
 */
export function InsightsHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* 1. Luminous Radiant Light Beams */}
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[650px] h-[520px] rounded-full bg-gradient-to-b from-[#003049]/15 via-[#14213D]/12 to-[#42C6D9]/10 blur-[100px] animate-blob-1" />
      <div className="absolute top-16 -left-16 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#42C6D9]/20 via-[#42C6D9]/10 to-transparent blur-[90px] animate-blob-2" />
      <div className="absolute top-16 -right-16 w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-[#003049]/12 via-[#42C6D9]/10 to-transparent blur-[90px] animate-blob-3" />

      {/* 2. Soft Ambient Corner Accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[280px] opacity-35">
        <Image
          src="/images/insights-hero-custom-bg.jpg"
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


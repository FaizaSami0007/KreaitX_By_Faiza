"use client";

import React from "react";
import Image from "next/image";

/**
 * 1. SOLUTIONS HERO BACKGROUND
 * Theme: Home Page 3D Silk Ribbon Color Theme in Decent Solutions Form
 */
export function SolutionsHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* Home Page 3D Silk Ribbon Artwork with Exact Color Theme */}
      <div className="relative w-full h-full min-h-[680px] lg:min-h-[760px]">
        <Image
          src="/images/hero-custom-silk-bg.jpg"
          alt="KreaitX Connected Capabilities & Digital Solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top sm:object-center select-none"
          quality={95}
        />
      </div>

      {/* Subtle Architectural Grid Overlay for Decent Structure */}
      <div 
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226, 232, 240, 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px"
        }}
      />

      {/* Soft Bottom Blend to Seamlessly Transition into Content */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 2. PROCESS HERO BACKGROUND
 * Theme: Home Page 3D Silk Ribbon Color Theme in Decent Process Form
 */
export function ProcessHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* Home Page 3D Silk Ribbon Artwork with Exact Color Theme */}
      <div className="relative w-full h-full min-h-[680px] lg:min-h-[760px]">
        <Image
          src="/images/hero-custom-silk-bg.jpg"
          alt="KreaitX Disciplined Creative Technology Methodology"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top sm:object-center select-none"
          quality={95}
        />
      </div>

      {/* Subtle Technical Dot Matrix for Decent Engineering Alignment */}
      <div 
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
      />

      {/* Soft Bottom Blend */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 3. ABOUT HERO BACKGROUND
 * Theme: Home Page 3D Silk Ribbon Color Theme in Decent Studio Heritage Form
 */
export function AboutHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* Home Page 3D Silk Ribbon Artwork with Exact Color Theme */}
      <div className="relative w-full h-full min-h-[680px] lg:min-h-[760px]">
        <Image
          src="/images/hero-custom-silk-bg.jpg"
          alt="KreaitX Studio Story, Philosophy & Peshawar Craftsmanship"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top sm:object-center select-none"
          quality={95}
        />
      </div>

      {/* Subtle Alignment Grid */}
      <div 
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(203, 213, 225, 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(203, 213, 225, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px"
        }}
      />

      {/* Soft Bottom Blend */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

/**
 * 4. INSIGHTS HERO BACKGROUND
 * Theme: Home Page 3D Silk Ribbon Color Theme in Decent Perspectives Form
 */
export function InsightsHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-white" aria-hidden="true">
      {/* Home Page 3D Silk Ribbon Artwork with Exact Color Theme */}
      <div className="relative w-full h-full min-h-[680px] lg:min-h-[760px]">
        <Image
          src="/images/hero-custom-silk-bg.jpg"
          alt="Insights for what's next — Ideas, Perspectives, Stories"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top sm:object-center select-none"
          quality={95}
        />
      </div>

      {/* Subtle Editorial Texture */}
      <div 
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
          backgroundSize: "28px 28px"
        }}
      />

      {/* Soft Bottom Blend */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

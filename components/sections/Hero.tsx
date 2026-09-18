"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const Hero: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && videoModalOpen) {
        setVideoModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [videoModalOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (videoModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [videoModalOpen]);

  return (
    <section className="relative overflow-hidden bg-white text-slate-900 pt-16 pb-24 sm:pt-20 sm:pb-32">
      {/* ------------------------------------------------------------- */}
      {/* AUTHENTIC SOFTY FLOWING 3D SILK GRADIENT RIBBON BACKDROP      */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute top-0 left-0 right-0 h-[1050px] pointer-events-none select-none overflow-hidden z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/71-home-light-1-background-10.png"
            alt="Softy Solutions Fluid Silk Ribbon"
            fill
            priority
            sizes="100vw"
            className="object-contain object-top lg:object-cover select-none opacity-95"
          />
        </div>
      </div>

      <Container size="default" className="relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* 1. TOP EYEBROW BADGE */}
          <Reveal delay={0.05} yOffset={12}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-sm backdrop-blur-md mb-8 hover:border-purple-300 transition-colors">
              <span className="text-[11px] sm:text-xs font-sans font-bold tracking-[0.2em] text-slate-800 uppercase">
                IDEAS <span className="text-purple-600 font-normal">×</span> TECHNOLOGY <span className="text-purple-600 font-normal">×</span> IMPACT
              </span>
            </div>
          </Reveal>

          {/* 2. MAIN DISPLAY HEADLINE */}
          <Reveal delay={0.12} yOffset={18}>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold text-slate-950 tracking-tight leading-[1.05]">
              We Create{" "}
              <span className="font-serif italic font-normal bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Digital
              </span>{" "}
              Realities
            </h1>
          </Reveal>

          {/* 3. SUPPORTING COPY */}
          <Reveal delay={0.2} yOffset={16}>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 font-sans font-normal leading-relaxed max-w-2xl mx-auto">
              A creative technology agency helping brands design, build and grow in a digital-first world.
            </p>
          </Reveal>

          {/* 4. DUAL PILL ACTION BUTTONS */}
          <Reveal delay={0.28} yOffset={16}>
            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {/* Primary Gradient Pill Button */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center font-sans font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-700 hover:to-indigo-700 rounded-full px-8 py-3.5 min-h-[50px] w-full sm:w-auto text-sm sm:text-base shadow-button hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowRight className="ml-2.5 h-4 w-4 text-white/90 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>

              {/* Secondary White/Glass Pill Button for Watch Showreel */}
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="group inline-flex items-center justify-center font-sans font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-full px-7 py-3.5 min-h-[50px] w-full sm:w-auto text-sm sm:text-base shadow-subtle transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
              >
                <span className="flex items-center justify-center h-5 w-5 rounded-full bg-purple-100 text-purple-700 mr-2.5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
                </span>
                <span>Watch Showreel</span>
              </button>
            </div>
          </Reveal>

          {/* 5. THREE PILLAR FEATURE CARDS */}
          <Reveal delay={0.34} yOffset={20} className="w-full mt-12 sm:mt-14 max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm backdrop-blur-md hover:border-purple-300 hover:shadow-md transition-all duration-200 text-left">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-900 block mb-1">
                  STRATEGY &amp; BRAND
                </span>
                <span className="text-xs text-slate-500 font-medium block">
                  Identity &amp; Positioning
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm backdrop-blur-md hover:border-purple-300 hover:shadow-md transition-all duration-200 text-left">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-900 block mb-1">
                  CINEMATIC MEDIA
                </span>
                <span className="text-xs text-slate-500 font-medium block">
                  Production &amp; Motion
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm backdrop-blur-md hover:border-purple-300 hover:shadow-md transition-all duration-200 text-left">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-900 block mb-1">
                  DIGITAL ENGINEERING
                </span>
                <span className="text-xs text-slate-500 font-medium block">
                  Web &amp; Custom Platforms
                </span>
              </div>
            </div>

            {/* Micro Location / Reach Label */}
            <div className="mt-5 text-center">
              <span className="text-[11px] font-sans font-bold tracking-[0.16em] uppercase text-slate-500">
                BASED IN PESHAWAR <span className="text-purple-600 font-bold mx-1.5">•</span> WORKING GLOBALLY
              </span>
            </div>
          </Reveal>

        </div>
      </Container>

      {/* Showreel Interactive Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="KreaitX Showreel Video Modal"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl bg-white p-6 border border-slate-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="text-xs font-sans uppercase tracking-wider text-purple-600 font-bold">
                KreaitX Agency Showreel // 2025
              </span>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="text-slate-500 hover:text-slate-900 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Close Showreel"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 aspect-video w-full rounded-2xl bg-slate-950 flex flex-col items-center justify-center p-6 sm:p-8 text-center border border-slate-800 relative overflow-hidden">
              <Image
                src="/images/digital-marketing-asset.jpg"
                alt="Showreel Preview"
                fill
                className="object-cover opacity-35"
              />
              <div className="relative z-10 space-y-3 max-w-md">
                <div className="h-14 w-14 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-button">
                  <Play className="h-6 w-6 fill-current ml-0.5" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                  Creative × Technology Showreel
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Highlighting commercial cinematography, digital product engineering, and brand systems for ambitious global businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

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
          
          {/* 1. TOP DUAL-PILL EYEBROW BADGE */}
          <Reveal delay={0.05} yOffset={12}>
            <div className="inline-flex items-center gap-2.5 p-1 pr-4 rounded-full bg-white/90 border border-slate-200/90 shadow-sm backdrop-blur-md mb-8 hover:border-purple-300 transition-colors">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 text-white text-[11px] font-sans font-bold tracking-wider uppercase">
                <Sparkles className="h-3 w-3 text-purple-400" />
                <span>NEXT-GEN</span>
              </span>
              <span className="text-xs font-sans font-semibold text-slate-700">
                Creative Technology &amp; Digital Solutions
              </span>
            </div>
          </Reveal>

          {/* 2. MAIN DISPLAY HEADLINE */}
          <Reveal delay={0.12} yOffset={18}>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[78px] font-bold text-slate-950 tracking-tight leading-[1.05]">
              We Create. <br />
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Digital Realities.
              </span>
            </h1>
          </Reveal>

          {/* 3. SUPPORTING COPY */}
          <Reveal delay={0.2} yOffset={16}>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 font-sans font-normal leading-relaxed max-w-2xl mx-auto">
              KreaitX combines creative strategy, commercial media and software engineering to turn your ideas into a market-ready reality — in record time.
            </p>
          </Reveal>

          {/* 4. CLIENT PROOF / AVATAR STACK */}
          <Reveal delay={0.25} yOffset={14}>
            <div className="mt-7 flex items-center justify-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-700">
                  KS
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-700">
                  AM
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-cyan-100 flex items-center justify-center text-xs font-bold text-cyan-700">
                  FK
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-pink-100 flex items-center justify-center text-xs font-bold text-pink-700">
                  SL
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-900 flex items-center justify-center text-[10px] font-bold text-white">
                  +99
                </div>
              </div>
              <span className="text-xs sm:text-sm font-sans font-semibold text-slate-600">
                100+ Ambitious Clients Worldwide
              </span>
            </div>
          </Reveal>

          {/* 5. DUAL PILL ACTION BUTTONS */}
          <Reveal delay={0.3} yOffset={16}>
            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {/* Primary Gradient Pill Button */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center font-sans font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-700 hover:to-indigo-700 rounded-full px-8 py-3.5 min-h-[50px] w-full sm:w-auto text-sm sm:text-base shadow-button hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="ml-2.5 h-4 w-4 text-white/90 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>

              {/* Secondary White Pill Button with Thin Border */}
              <Link
                href="/process"
                className="group inline-flex items-center justify-center font-sans font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-full px-7 py-3.5 min-h-[50px] w-full sm:w-auto text-sm sm:text-base shadow-subtle transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>See Our Process</span>
                <ArrowRight className="ml-2 h-4 w-4 text-slate-500 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          {/* 6. ROUNDED HERO VIDEO / VISUAL SHOWCASE CONTAINER */}
          <Reveal delay={0.38} yOffset={24} className="w-full mt-14 sm:mt-18">
            <div className="relative mx-auto max-w-4xl rounded-[28px] sm:rounded-[36px] overflow-hidden border-4 sm:border-8 border-white/90 shadow-2xl bg-white group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 overflow-hidden">
                <Image
                  src="/images/digital-marketing-asset.jpg"
                  alt="KreaitX Digital Product & Commercial Video Collaboration"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gentle Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/20" />

                {/* Interactive Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setVideoModalOpen(true)}
                    className="group/btn flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white text-slate-900 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-500 cursor-pointer"
                    aria-label="Play KreaitX Showreel"
                  >
                    <Play className="h-6 w-6 sm:h-7 sm:w-7 fill-current ml-1 text-slate-900 transition-transform group-hover/btn:scale-110" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 7. TRUST BAR: LOGO TICKER */}
          <Reveal delay={0.45} yOffset={16} className="w-full mt-16 sm:mt-20">
            <div className="flex flex-col items-center">
              <p className="text-sm font-sans font-medium text-slate-500 mb-6">
                More than 100+ companies trust us worldwide
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-lg sm:text-xl">
                  <span className="h-4 w-4 rounded-full bg-purple-600" />
                  <span>Aura</span>
                </div>
                <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-lg sm:text-xl">
                  <span className="h-4 w-4 rounded-md bg-indigo-600" />
                  <span>Pera</span>
                </div>
                <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-lg sm:text-xl">
                  <span className="h-4 w-4 rounded-full border-2 border-cyan-500" />
                  <span>Unicoin</span>
                </div>
                <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-lg sm:text-xl">
                  <span className="h-4 w-4 rounded-sm bg-pink-500" />
                  <span>Heline</span>
                </div>
                <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-lg sm:text-xl">
                  <span className="h-4 w-4 rounded-full bg-purple-700" />
                  <span>Flikbox</span>
                </div>
              </div>
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

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { GradientDecoration } from "@/components/ui/GradientDecoration";

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
    <section className="relative overflow-hidden bg-white text-slate-900 min-h-[88dvh] flex items-center justify-center py-20 sm:py-24 lg:py-28">
      {/* Softy Solutions Animated Fluid Gradient Blobs */}
      <GradientDecoration variant="hero" />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-grid-softy opacity-70 pointer-events-none" />

      <Container size="default" className="relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Badge */}
          <Reveal delay={0.05} yOffset={12}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-cyan-500/10 border border-purple-200/80 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-6 shadow-subtle">
              <Sparkles className="h-3.5 w-3.5 text-purple-600 animate-pulse" />
              <span>IDEAS × TECHNOLOGY × IMPACT</span>
            </div>
          </Reveal>

          {/* Main Headline (Space Grotesk Display Typography) */}
          <Reveal delay={0.12} yOffset={18}>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight leading-[1.06] text-slate-950">
              We Create{" "}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Digital Realities
              </span>
            </h1>
          </Reveal>

          {/* Sub-headline */}
          <Reveal delay={0.2} yOffset={16}>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 font-sans font-normal leading-relaxed max-w-2xl mx-auto">
              A creative technology agency helping brands design, build and grow in a digital-first world.
            </p>
          </Reveal>

          {/* Action Buttons (Dual Pill CTAs) */}
          <Reveal delay={0.28} yOffset={16}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {/* Primary Button */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center font-sans font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-700 hover:to-indigo-700 rounded-full px-8 py-3.5 min-h-[52px] w-full sm:w-auto text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 shadow-button hover:shadow-glow active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowRight className="ml-2.5 h-4 w-4 text-white/90 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>

              {/* Secondary Button: Watch Showreel */}
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="group inline-flex items-center justify-center font-sans font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-purple-300 rounded-full px-7 py-3.5 min-h-[52px] w-full sm:w-auto text-sm sm:text-base shadow-subtle transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
              >
                <span className="mr-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-700 transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-3 w-3 fill-current ml-0.5" />
                </span>
                <span>Watch Showreel</span>
              </button>
            </div>
          </Reveal>

          {/* Bottom Row: 3 Rounded Softy Feature Cards */}
          <Reveal delay={0.35} yOffset={16} className="w-full">
            <div className="mt-14 sm:mt-18 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto items-center text-center">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-200 transition-all duration-300 group">
                <div className="text-xs font-sans uppercase tracking-wider text-purple-600 font-bold">
                  Strategy &amp; Brand
                </div>
                <div className="text-sm text-slate-700 mt-1 font-medium">
                  Identity &amp; Positioning
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-indigo-200 transition-all duration-300 group">
                <div className="text-xs font-sans uppercase tracking-wider text-indigo-600 font-bold">
                  Cinematic Media
                </div>
                <div className="text-sm text-slate-700 mt-1 font-medium">
                  Production &amp; Motion
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-cyan-200 transition-all duration-300 group">
                <div className="text-xs font-sans uppercase tracking-wider text-cyan-600 font-bold">
                  Digital Engineering
                </div>
                <div className="text-sm text-slate-700 mt-1 font-medium">
                  Web &amp; Custom Platforms
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              <span>Based in Peshawar</span>
              <span className="text-purple-500">•</span>
              <span>Working Globally</span>
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
                src="/images/hero-bg.png"
                alt="Showreel Preview"
                fill
                className="object-cover opacity-30"
              />
              <div className="relative z-10 space-y-3 max-w-md">
                <div className="h-14 w-14 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-button">
                  <Play className="h-6 w-6 fill-current ml-0.5" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                  Creative × Technology Showreel
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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

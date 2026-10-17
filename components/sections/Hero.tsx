"use client";

import React, { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

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
    <section className="relative bg-[#F7F8FA] text-slate-900 pt-20 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36 border-b border-slate-200/80">
      <Container size="default" className="relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* 1. TOP EYEBROW BADGE */}
          <Reveal delay={0.05} yOffset={12}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-slate-200/90 shadow-subtle backdrop-blur-md mb-8 hover:border-[#42C6D9]/50 transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-[#42C6D9] animate-pulse" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#003049] uppercase">
                IDEAS <span className="text-[#42C6D9] font-normal mx-0.5">×</span> TECHNOLOGY <span className="text-[#42C6D9] font-normal mx-0.5">×</span> IMPACT
              </span>
            </div>
          </Reveal>

          {/* 2. MAIN DISPLAY HEADLINE */}
          <Reveal delay={0.12} yOffset={18}>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-slate-950 tracking-tight leading-[1.06]">
              We turn ambitious ideas into{" "}
              <span className="font-serif italic font-normal bg-gradient-to-r from-[#003049] via-[#14213D] to-[#42C6D9] bg-clip-text text-transparent">
                digital experiences
              </span>
              .
            </h1>
          </Reveal>

          {/* 3. SUPPORTING COPY */}
          <Reveal delay={0.2} yOffset={16}>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 font-sans font-normal leading-relaxed max-w-2xl mx-auto">
              A creative technology studio helping ambitious brands design, build, and scale in a digital-first world.
            </p>
          </Reveal>

          {/* 4. CONVERSION CTAs (Primary Start a Project + Secondary Explore Our Work + Showreel Trigger) */}
          <Reveal delay={0.28} yOffset={16}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* Primary Navy Pill Button */}
              <Button
                href="/contact"
                variant="navy"
                size="lg"
                withArrow
                onClick={() =>
                  trackEvent("service_cta_click", {
                    cta_location: "homepage_hero",
                    cta_text: "Start a Project"
                  })
                }
                className="w-full sm:w-auto shadow-brand-button min-h-[50px] font-semibold"
              >
                Start a Project
              </Button>

              {/* Secondary Porcelain Pill Button */}
              <Button
                href="/work"
                variant="secondary"
                size="lg"
                withArrow
                className="w-full sm:w-auto min-h-[50px] font-semibold border-slate-300"
              >
                Explore Our Work
              </Button>

              {/* Watch Showreel Trigger */}
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="group inline-flex items-center justify-center font-sans font-semibold text-slate-700 hover:text-[#003049] bg-white hover:bg-[#F7F8FA] border border-slate-200/90 hover:border-slate-300 rounded-full px-5 py-3 min-h-[50px] w-full sm:w-auto text-sm sm:text-base shadow-subtle transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9]"
                aria-label="Watch KreaitX Agency Showreel"
              >
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-[#003049] text-[#42C6D9] mr-2.5 transition-transform duration-200 group-hover:scale-105">
                  <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
                </span>
                <span>Watch Showreel</span>
              </button>
            </div>
          </Reveal>

          {/* 5. THREE PILLAR FEATURE MATRIX */}
          <Reveal delay={0.34} yOffset={20} className="w-full mt-12 sm:mt-16 max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:border-[#003049]/40 hover:shadow-card transition-all duration-300 text-left">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#003049] block mb-1">
                  STRATEGY &amp; BRAND
                </span>
                <span className="text-xs text-slate-600 font-medium block">
                  Identity &amp; Positioning
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:border-[#003049]/40 hover:shadow-card transition-all duration-300 text-left">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#003049] block mb-1">
                  CINEMATIC MEDIA
                </span>
                <span className="text-xs text-slate-600 font-medium block">
                  Production &amp; Motion
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:border-[#003049]/40 hover:shadow-card transition-all duration-300 text-left">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#003049] block mb-1">
                  DIGITAL ENGINEERING
                </span>
                <span className="text-xs text-slate-600 font-medium block">
                  Web &amp; Custom Platforms
                </span>
              </div>
            </div>

            {/* Micro Location / Reach Label */}
            <div className="mt-6 text-center">
              <span className="text-[11px] font-mono font-bold tracking-[0.16em] uppercase text-slate-600">
                BASED IN PESHAWAR <span className="text-[#003049] font-bold mx-1.5">•</span> WORKING GLOBALLY
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
              <span className="text-xs font-mono uppercase tracking-wider text-[#003049] font-bold">
                KreaitX Agency Showreel // 2025
              </span>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="text-slate-500 hover:text-slate-900 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-[#F7F8FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9] transition-colors"
                aria-label="Close Showreel"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 aspect-video w-full rounded-2xl bg-gradient-to-br from-[#003049] via-[#14213D] to-[#0B0F19] flex flex-col items-center justify-center p-6 sm:p-8 text-center border border-slate-800 relative overflow-hidden">
              <div className="relative z-10 space-y-3 max-w-md">
                <div className="h-14 w-14 mx-auto rounded-full bg-white/10 text-[#42C6D9] flex items-center justify-center border border-white/20">
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

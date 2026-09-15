"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";
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
    <section className="relative overflow-hidden bg-[#14213D] text-[#F5F6F2] min-h-[85dvh] flex items-center justify-center py-16 sm:py-20 lg:py-24">
      {/* Dynamic User Background Image with Adaptive Aspect Handling */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="KreaitX Hero Background Flow"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none"
        />
        {/* Soft atmospheric gradient overlays for perfect centered readability */}
        <div className="absolute inset-0 bg-[#14213D]/70 via-[#14213D]/50 to-[#14213D]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14213D] via-transparent to-[#14213D]/50" />
      </div>

      <Container size="narrow" className="relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <Reveal delay={0.05} yOffset={12}>
            <div className="flex items-center justify-center gap-2.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5F6F2]/80 mb-4 sm:mb-6">
              <span>IDEAS</span>
              <span className="text-[#B7B98A]">×</span>
              <span>TECHNOLOGY</span>
              <span className="text-[#B7B98A]">×</span>
              <span>IMPACT</span>
            </div>
          </Reveal>

          {/* Main Headline (Fluid clamp typography with centered editorial styling) */}
          <Reveal delay={0.12} yOffset={18}>
            <h1 className="text-[clamp(28px,6vw,56px)] font-semibold tracking-[-0.04em] leading-[1.08] text-[#F5F6F2]">
              We Create <br className="hidden sm:inline" />
              <span className="font-serif-italic font-normal text-[#B7B98A] tracking-tight">
                Digital
              </span>{" "}
              <span className="font-serif font-normal text-[#F5F6F2]">
                Realities
              </span>
            </h1>
          </Reveal>

          {/* Sub-headline */}
          <Reveal delay={0.2} yOffset={16}>
            <p className="mt-4 sm:mt-6 text-[clamp(14px,1.5vw,18px)] text-[#F5F6F2]/80 font-normal leading-relaxed max-w-lg mx-auto">
              A creative technology agency helping brands design, build and grow in a digital-first world.
            </p>
          </Reveal>

          {/* Action Buttons (Fluid stacking for mobile) */}
          <Reveal delay={0.28} yOffset={16}>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary Button */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center font-semibold text-[#14213D] bg-[#F5F6F2] hover:bg-white rounded-full px-6 sm:px-7 py-3 min-h-[48px] w-full sm:w-auto text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-lg active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Secondary Button: Watch Showreel */}
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="group inline-flex items-center justify-center font-medium text-[#F5F6F2] bg-white/10 hover:bg-white/15 border border-[#F5F6F2]/20 hover:border-[#F5F6F2]/40 rounded-full px-5 sm:px-6 py-3 min-h-[48px] w-full sm:w-auto text-xs sm:text-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
              >
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#B7B98A] text-[#14213D] transition-transform duration-200 group-hover:scale-110">
                  <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
                </span>
                <span>Watch Showreel</span>
              </button>
            </div>
          </Reveal>

          {/* Bottom Row: Authentic Core Capability Pillars */}
          <Reveal delay={0.35} yOffset={16} className="w-full">
            <div className="mt-10 sm:mt-14 pt-6 border-t border-[#F5F6F2]/15 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 max-w-2xl mx-auto items-center text-center">
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-[#F5F6F2]/10">
                <div className="text-xs font-mono uppercase tracking-wider text-[#B7B98A] font-bold">
                  Strategy &amp; Brand
                </div>
                <div className="text-xs text-[#F5F6F2]/80 mt-1 font-medium">
                  Identity &amp; Positioning
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-[#F5F6F2]/10">
                <div className="text-xs font-mono uppercase tracking-wider text-[#B7B98A] font-bold">
                  Cinematic Media
                </div>
                <div className="text-xs text-[#F5F6F2]/80 mt-1 font-medium">
                  Production &amp; Motion
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-[#F5F6F2]/10">
                <div className="text-xs font-mono uppercase tracking-wider text-[#B7B98A] font-bold">
                  Digital Engineering
                </div>
                <div className="text-xs text-[#F5F6F2]/80 mt-1 font-medium">
                  Web &amp; Custom Platforms
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 flex items-center justify-center gap-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F5F6F2]/75">
              <span>Based in Peshawar</span>
              <span className="text-[#B7B98A]">•</span>
              <span>Working Globally</span>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Showreel Interactive Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="KreaitX Showreel Video Modal"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-[#14213D] p-5 sm:p-6 border border-[#F5F6F2]/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#F5F6F2]/10">
              <span className="text-xs font-mono uppercase tracking-wider text-[#B7B98A]">
                KreaitX Agency Showreel // 2025
              </span>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="text-[#F5F6F2] hover:text-[#B7B98A] p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close Showreel"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 aspect-video w-full rounded-xl bg-[#0E172B] flex flex-col items-center justify-center p-6 sm:p-8 text-center border border-[#F5F6F2]/10 relative overflow-hidden">
              <Image
                src="/images/hero-bg.png"
                alt="Showreel Preview"
                fill
                className="object-cover opacity-40"
              />
              <div className="relative z-10 space-y-3 max-w-md">
                <div className="h-12 sm:h-14 w-12 sm:w-14 mx-auto rounded-full bg-[#B7B98A] text-[#14213D] flex items-center justify-center shadow-lg">
                  <Play className="h-5 sm:h-6 w-5 sm:h-6 fill-current ml-0.5" />
                </div>
                <h3 className="text-base sm:text-xl font-semibold text-[#F5F6F2]">
                  Creative × Technology Showreel
                </h3>
                <p className="text-xs text-[#F5F6F2]/80 leading-relaxed">
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


import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, HelpCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { processStages } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Our Process — Disciplined Creative Technology",
  description: "Explore KreaitX's six-stage methodology from discovery to sustainable digital growth. Clear milestones, structured client collaboration, and transparent outputs."
};

export default function ProcessPage() {
  return (
    <>
      {/* Process Page Hero with Unique Uncrowded Silk Background (Exact Work Color Theme) */}
      <section className="relative overflow-hidden bg-white text-slate-900 min-h-[680px] lg:min-h-[760px] flex items-center justify-center py-20 lg:py-28 border-b border-slate-200/80">
        {/* Unique Process Hero Background Design - Exact Work Color Theme, Uncrowded & Airy */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-white">
          {/* 1. Atmospheric Ambient Color Blooms (Exact Work Hero Palette) */}
          <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/22 via-indigo-500/16 to-transparent blur-[110px] animate-blob-1" />
          <div className="absolute top-10 -right-20 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-cyan-400/22 via-purple-400/15 to-transparent blur-[115px] animate-blob-2" />
          <div className="absolute -bottom-20 left-10 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-pink-400/18 via-purple-400/12 to-cyan-300/10 blur-[100px] animate-blob-3" />

          {/* 2. Bespoke 3D Fluid Silk Ribbon Wave Vectors (Top & Side Margins) */}
          <svg className="absolute inset-0 w-full h-full opacity-80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="procSilk1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.45" />
                <stop offset="35%" stopColor="#6366f1" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="procSilk2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.35" />
              </linearGradient>
              <filter id="procGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Top Sweeping Flowing Silk Ribbon Layer */}
            <path
              d="M -100,60 C 300,10 600,160 1000,40 C 1300,-50 1600,120 1900,30"
              fill="none"
              stroke="url(#procSilk1)"
              strokeWidth="4"
              filter="url(#procGlow)"
            />
            <path
              d="M -100,90 C 320,40 580,190 980,70 C 1280,-20 1580,150 1900,60"
              fill="none"
              stroke="url(#procSilk2)"
              strokeWidth="2"
              opacity="0.7"
            />

            {/* Bottom-Right Sweeping Accent Ribbon Layer */}
            <path
              d="M 200,750 C 600,620 1000,720 1400,560 C 1650,450 1800,600 2000,520"
              fill="none"
              stroke="url(#procSilk1)"
              strokeWidth="3.5"
              filter="url(#procGlow)"
            />
            <path
              d="M 250,780 C 630,650 980,750 1380,590 C 1630,480 1780,630 2000,550"
              fill="none"
              stroke="url(#procSilk2)"
              strokeWidth="1.5"
              opacity="0.6"
            />
          </svg>

          {/* 3. Luminous Center Breathing Zone (100% uncrowded text readability) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,white_45%,transparent_85%)] pointer-events-none" />

          {/* 4. Seamless bottom fade into next section */}
          <div className="absolute inset-x-0 bottom-0 h-28 sm:h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        </div>

        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-700 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 mb-6 backdrop-blur-md shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-purple-600 animate-pulse" />
                <span>Methodology &amp; Standards</span>
              </span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-bold text-slate-950 tracking-tight leading-[1.05]">
                Clear milestones.{" "}
                <span className="font-serif italic font-normal bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Zero ambiguity
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-sans font-normal max-w-2xl">
                We believe exceptional work happens when clients understand exactly what comes next. Our six-stage process bridges strategic rigor, creative exploration, and production reliability.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="primary" size="md" withArrow className="w-full sm:w-auto min-h-[48px]">
                  Start a Project
                </Button>
                <a
                  href="#process-breakdown"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5"
                >
                  Explore 6 Stages ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Six Stage Detailed Deep Dive */}
      <section id="process-breakdown" className="bg-slate-50/50 py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default">
          <div className="space-y-12 sm:space-y-16">
            {processStages.map((stage, idx) => (
              <div
                key={stage.number}
                className="rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-200 transition-all duration-300 p-8 sm:p-12 lg:p-14"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                  {/* Left Column: Stage Identity & Narrative */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 px-3.5 py-1 rounded-full shadow-button">
                        Stage {stage.number}
                      </span>
                      <span className="text-xs font-sans uppercase text-slate-500 tracking-wider font-semibold">
                        Phase 0{idx + 1} of 06
                      </span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                      {stage.title}
                    </h2>

                    <p className="text-base font-semibold text-purple-700">
                      {stage.tagline}
                    </p>

                    <p className="text-base text-slate-600 leading-relaxed font-sans font-normal pt-2">
                      {stage.description}
                    </p>

                    <div className="pt-4">
                      <span className="text-xs font-sans uppercase tracking-wider text-slate-500 font-bold block mb-2.5">
                        Key Phase Milestones
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {stage.milestones.map((ms) => (
                          <span
                            key={ms}
                            className="px-3.5 py-1.5 rounded-full bg-purple-50/70 border border-purple-100 text-xs font-medium text-purple-800"
                          >
                            {ms}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Collaboration Matrix */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/60">
                    {/* What client provides */}
                    <div className="rounded-2xl bg-white p-6 border border-slate-200/80 shadow-subtle flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-sans uppercase tracking-wider text-slate-500 font-bold block mb-2">
                          01 • What You Provide
                        </span>
                        <p className="text-sm text-slate-700 leading-relaxed font-sans">
                          {stage.clientInput}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                        Input &amp; Review Touchpoint
                      </div>
                    </div>

                    {/* What KreaitX delivers */}
                    <div className="rounded-2xl bg-white p-6 border border-slate-200/80 shadow-subtle flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-sans uppercase tracking-wider text-purple-700 font-bold block mb-2">
                          02 • What KreaitX Delivers
                        </span>
                        <p className="text-sm text-slate-900 leading-relaxed font-medium">
                          {stage.kreaitxOutput}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-purple-700 font-semibold">
                        Verified Output Document
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Uncertainty Reduction Section */}
      <section className="bg-white py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mb-16">
              <SectionHeading
                eyebrow="Collaboration Standards"
                title={
                  <>
                    How we make working together{" "}
                    <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                      calm and predictable
                    </span>.
                  </>
                }
                description="We eliminate traditional agency friction through structured communication, weekly check-ins, and direct access to craft leads."
              />
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="rounded-3xl bg-slate-50 p-8 border border-slate-200/80 shadow-subtle hover:shadow-card hover:bg-white hover:border-purple-200 transition-all duration-300 h-full">
                <span className="h-12 w-12 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center mb-6 font-display text-base font-bold shadow-button">
                  01
                </span>
                <h3 className="text-2xl font-display font-bold text-slate-900 tracking-tight mb-2.5">
                  No Middleman Lag
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-sans font-normal">
                  You communicate directly with the designers, directors, and developers doing the work, eliminating telephone-game misunderstandings.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-3xl bg-slate-50 p-8 border border-slate-200/80 shadow-subtle hover:shadow-card hover:bg-white hover:border-purple-200 transition-all duration-300 h-full">
                <span className="h-12 w-12 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center mb-6 font-display text-base font-bold shadow-button">
                  02
                </span>
                <h3 className="text-2xl font-display font-bold text-slate-900 tracking-tight mb-2.5">
                  Weekly Async &amp; Sync Loops
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-sans font-normal">
                  Clear weekly loom summaries and milestone reviews give your internal stakeholders full visibility without excessive meeting fatigue.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-3xl bg-slate-50 p-8 border border-slate-200/80 shadow-subtle hover:shadow-card hover:bg-white hover:border-purple-200 transition-all duration-300 h-full">
                <span className="h-12 w-12 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center mb-6 font-display text-base font-bold shadow-button">
                  03
                </span>
                <h3 className="text-2xl font-display font-bold text-slate-900 tracking-tight mb-2.5">
                  Fixed Milestones, Clear Scopes
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-sans font-normal">
                  Every deliverable is clearly scoped before kick-off. No surprise invoices, hidden tech debt, or unexpected scope creep.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* Conversion CTA */}
      <CTASection />
    </>
  );
}

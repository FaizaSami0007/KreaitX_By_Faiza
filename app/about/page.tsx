import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About KreaitX — Creative Technology Studio",
  description: "Learn why KreaitX was founded to unite creative storytelling, marketing strategy, and software engineering under one roof in Peshawar, Pakistan."
};

const values = [
  {
    title: "Connected Over Isolated",
    description: "We reject the idea that branding, filming, and coding belong in disconnected silos. The strongest digital experiences are conceived, directed, and engineered together."
  },
  {
    title: "Human Craft in the Age of Noise",
    description: "While others rely on automated templates and superficial shortcuts, we prioritize typographic hierarchy, deep user empathy, and thoughtful architectural restraint."
  },
  {
    title: "Business Impact Over Vanity Metrics",
    description: "A visually stunning website or video that doesn't convert users or clarify value is not a victory. Everything we build is judged by its contribution to client growth."
  },
  {
    title: "Peshawar Craftsmanship, Global Caliber",
    description: "We are proud to build and scale from Peshawar, Khyber Pakhtunkhwa — proving that world-class creative technology and disciplined execution flourish anywhere talent and dedication meet."
  }
];

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <>
      {/* About Page Hero with Narrow 3D Silk Strings (Exact Color Theme) */}
      <section className="relative overflow-hidden bg-white text-slate-900 min-h-[680px] lg:min-h-[760px] flex items-center justify-center py-20 lg:py-28 border-b border-slate-200/80">
        {/* Narrow Silk String Wave Background */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-white">
          {/* 1. Atmospheric Ambient Color Glows (Exact Color Palette) */}
          <div className="absolute -top-28 left-1/4 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-purple-500/20 via-indigo-500/15 to-transparent blur-[110px] animate-blob-1" />
          <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-cyan-400/22 via-purple-400/15 to-transparent blur-[115px] animate-blob-2" />
          <div className="absolute -bottom-16 left-12 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-pink-400/16 via-purple-400/12 to-cyan-300/10 blur-[100px] animate-blob-3" />

          {/* 2. Narrow Harmonic String Waves (Delicate, Slender Multi-Strand Curves) */}
          <svg className="absolute inset-0 w-full h-full opacity-90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="abtNarrowStr1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.85" />
                <stop offset="35%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
              </linearGradient>

              <linearGradient id="abtNarrowStr2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.85" />
                <stop offset="40%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="80%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.85" />
              </linearGradient>

              <linearGradient id="abtNarrowStr3" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.75" />
              </linearGradient>
            </defs>

            {/* Top-Right Narrow Flowing Harmonic Strings */}
            <path d="M 200,-50 C 600,120 1000,-20 1400,100 C 1650,180 1800,80 2000,120" fill="none" stroke="url(#abtNarrowStr1)" strokeWidth="2.5" />
            <path d="M 220,-35 C 610,135 1010,-5 1410,115 C 1660,195 1810,95 2000,135" fill="none" stroke="url(#abtNarrowStr2)" strokeWidth="1.8" />
            <path d="M 240,-20 C 620,150 1020,10 1420,130 C 1670,210 1820,110 2000,150" fill="none" stroke="url(#abtNarrowStr1)" strokeWidth="1.2" />
            <path d="M 260,-5 C 630,165 1030,25 1430,145 C 1680,225 1830,125 2000,165" fill="none" stroke="url(#abtNarrowStr3)" strokeWidth="1" strokeDasharray="6 4" opacity="0.8" />
            <path d="M 280,10 C 640,180 1040,40 1440,160 C 1690,240 1840,140 2000,180" fill="none" stroke="url(#abtNarrowStr2)" strokeWidth="0.8" />

            {/* Bottom-Left Narrow Sweeping Harmonic Strings */}
            <path d="M -100,680 C 300,540 700,720 1100,580 C 1400,480 1700,620 2000,520" fill="none" stroke="url(#abtNarrowStr1)" strokeWidth="2.5" />
            <path d="M -80,700 C 310,560 710,740 1110,600 C 1410,500 1710,640 2000,540" fill="none" stroke="url(#abtNarrowStr2)" strokeWidth="1.8" />
            <path d="M -60,720 C 320,580 720,760 1120,620 C 1420,520 1720,660 2000,560" fill="none" stroke="url(#abtNarrowStr3)" strokeWidth="1.2" />
            <path d="M -40,740 C 330,600 730,780 1130,640 C 1430,540 1730,680 2000,580" fill="none" stroke="url(#abtNarrowStr1)" strokeWidth="1" strokeDasharray="6 4" opacity="0.8" />
            <path d="M -20,760 C 340,620 740,800 1140,660 C 1440,560 1740,700 2000,600" fill="none" stroke="url(#abtNarrowStr2)" strokeWidth="0.8" />
          </svg>

          {/* 3. Luminous Center Breathing Zone */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,white_50%,transparent_85%)] pointer-events-none" />

          {/* 4. Seamless bottom fade into next section */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        </div>

        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-700 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 mb-6 backdrop-blur-md shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-purple-600 animate-pulse" />
                <span>Studio Story &amp; Philosophy</span>
              </span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-bold text-slate-950 tracking-tight leading-[1.05]">
                Where creative vision meets{" "}
                <span className="font-serif italic font-normal bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  technical reality
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-sans font-normal max-w-2xl">
                KreaitX was founded with a singular conviction: businesses deserve a unified partner capable of shaping their brand narrative, filming their visual story, and engineering their digital infrastructure.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="primary" size="md" withArrow className="w-full sm:w-auto min-h-[48px]">
                  Start a Project
                </Button>
                <a
                  href="#studio-story"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5"
                >
                  Discover Our Story ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* The Story & Origin */}
      <section id="studio-story" className="bg-white py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-purple-600 mb-3 block">
                01 — THE ORIGIN
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Creative + IT: <br />
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  The genesis of KreaitX.
                </span>
              </h2>

              <div className="mt-8 p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 shadow-card">
                <div className="text-xs font-sans uppercase tracking-wider text-slate-500 font-bold">
                  Headquarters &amp; Origins
                </div>
                <div className="text-xl font-display font-bold text-slate-900">
                  {siteConfig.location.formatted}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Collaborating with forward-thinking local enterprises and international clients seeking unified creative and digital solutions.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal">
              <p>
                The name <strong className="text-slate-900 font-bold">KreaitX</strong> is a deliberate fusion of <strong className="text-purple-700 font-bold">Creative</strong> and <strong className="text-indigo-700 font-bold">IT</strong>. For years, businesses have been forced to choose between creative agencies that lack engineering depth and technical software houses that treat design and marketing as an afterthought.
              </p>
              <p>
                When brand designers, cinematographers, and developers work in separate silos, the customer experience fragments. Strategy gets diluted, timelines drag out, and the end product feels disconnected.
              </p>
              <p>
                KreaitX bridges this divide. We assemble multidisciplinary teams under one roof in Peshawar to deliver seamless brand identity, cinematic video production, performance marketing, and bespoke web platforms.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Studio Values */}
      <section className="bg-slate-50/50 py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mb-16">
              <SectionHeading
                eyebrow="Our Philosophy"
                title={
                  <>
                    Values that govern{" "}
                    <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                      how we work
                    </span>.
                  </>
                }
                description="We guide every client engagement with disciplined principles designed to prioritize authenticity, craft, and tangible commercial success."
              />
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <StaggerItem key={v.title}>
                <div className="group rounded-3xl bg-white p-8 sm:p-10 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-200 h-full flex flex-col justify-between transition-all duration-300">
                  <div>
                    <span className="font-display text-sm font-bold text-purple-700 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 inline-block mb-4">
                      Principle 0{i + 1}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-slate-900 tracking-tight mb-3 group-hover:text-purple-700 transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed font-sans font-normal">
                      {v.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Conversion CTA */}
      <CTASection />
    </>
  );
}

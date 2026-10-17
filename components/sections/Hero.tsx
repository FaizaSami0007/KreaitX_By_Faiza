"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, X, Layers, Film, Code2, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

const craftPillars = [
  {
    id: "branding",
    title: "Brand Systems & Identity",
    category: "Identity & Verbal Architecture",
    icon: Compass,
    description: "Positioning narratives, typographic architecture, comprehensive design systems, and cohesive multi-touchpoint brand identities.",
    deliverables: ["Visual Identity & Logo Systems", "Brand Positioning & Voice Guidelines", "Design Tokens & Design Systems", "Stationery & Packaging Standards"]
  },
  {
    id: "production",
    title: "Cinematic Filming & Production",
    category: "Visual Storytelling",
    icon: Film,
    description: "Commercial cinematography, product showcase films, sound design, and color grading that command authority.",
    deliverables: ["Commercials & Brand Films", "Executive & Product Showcases", "Studio Cinematography & Audio Mixing", "Master Post-Production & Color Grading"]
  },
  {
    id: "animation",
    title: "2D Motion & Dynamic Animation",
    category: "Visual Explanation",
    icon: Layers,
    description: "Clarifying complex ideas through custom vector animation, UI motion design, and dynamic digital assets.",
    deliverables: ["Product Explainer Animations", "Custom Motion Design Systems", "Interactive UI Micro-Animations", "Social Narrative Motion Assets"]
  },
  {
    id: "engineering",
    title: "High-Performance Digital Platforms",
    category: "Software & Web Engineering",
    icon: Code2,
    description: "Production-grade Next.js web applications, headless architectures, accessible interfaces, and scalable digital solutions.",
    deliverables: ["Bespoke Web Platform Engineering", "Sub-second Next.js Architecture", "WCAG 2.1 AA Accessibility Standards", "Custom Full-Stack Solutions"]
  }
];

export const Hero: React.FC = () => {
  const [craftModalOpen, setCraftModalOpen] = useState(false);
  const [activeCraftTab, setActiveCraftTab] = useState(0);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && craftModalOpen) {
        setCraftModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [craftModalOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (craftModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [craftModalOpen]);

  return (
    <section className="relative bg-[#003049] text-white pt-20 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36 border-b border-[#14213D] overflow-hidden">
      {/* Background Soft Ambient Radial Glows (No background images) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#42C6D9]/15 via-[#14213D]/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#42C6D9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#14213D]/60 rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* 1. TOP EYEBROW BADGE */}
          <Reveal delay={0.05} yOffset={12}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 shadow-subtle backdrop-blur-md mb-8 hover:border-[#42C6D9]/50 transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-[#42C6D9] animate-pulse" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#42C6D9] uppercase">
                IDEAS <span className="text-white/60 font-normal mx-0.5">×</span> TECHNOLOGY <span className="text-white/60 font-normal mx-0.5">×</span> IMPACT
              </span>
            </div>
          </Reveal>

          {/* 2. MAIN DISPLAY HEADLINE */}
          <Reveal delay={0.12} yOffset={18}>
            <h1 className="font-display text-[clamp(2.5rem,5.8vw,4.75rem)] font-bold text-white tracking-tight leading-[1.05]">
              Creative vision.{" "}
              <span className="font-serif italic font-normal bg-gradient-to-r from-white via-cyan-100 to-[#42C6D9] bg-clip-text text-transparent">
                Engineered for impact
              </span>
              .
            </h1>
          </Reveal>

          {/* 3. SUPPORTING COPY */}
          <Reveal delay={0.2} yOffset={16}>
            <p className="mt-6 text-lg sm:text-xl text-slate-200 font-sans font-normal leading-relaxed max-w-2xl mx-auto">
              KreaitX connects brand strategy, creative production, and digital engineering to help ambitious businesses build stronger, high-conversion digital experiences.
            </p>
          </Reveal>

          {/* 4. CONVERSION CTAs */}
          <Reveal delay={0.28} yOffset={16}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* Primary Cyan Pill Button */}
              <Button
                href="/contact"
                variant="cyan"
                size="lg"
                withArrow
                onClick={() =>
                  trackEvent("service_cta_click", {
                    cta_location: "homepage_hero",
                    cta_text: "Start a Project"
                  })
                }
                className="w-full sm:w-auto font-bold shadow-brand-button min-h-[50px]"
              >
                Start a Project
              </Button>

              {/* Secondary Dark Pill Button */}
              <Button
                href="/work"
                variant="dark"
                size="lg"
                withArrow
                className="w-full sm:w-auto min-h-[50px] font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40"
              >
                Explore Selected Work
              </Button>

              {/* Studio Craft Interactive Tour Trigger */}
              <button
                type="button"
                onClick={() => setCraftModalOpen(true)}
                className="group inline-flex items-center justify-center font-sans font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#42C6D9]/50 rounded-full px-5 py-3 min-h-[50px] w-full sm:w-auto text-sm sm:text-base shadow-subtle transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9]"
                aria-label="Explore KreaitX Studio Capabilities"
              >
                <Sparkles className="h-4 w-4 text-[#42C6D9] mr-2 transition-transform duration-200 group-hover:rotate-12" />
                <span>Explore Studio Craft</span>
              </button>
            </div>
          </Reveal>

          {/* 5. THREE PILLAR FEATURE MATRIX */}
          <Reveal delay={0.34} yOffset={20} className="w-full mt-12 sm:mt-16 max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              <div className="p-5 rounded-2xl bg-[#14213D] border border-white/10 shadow-card hover:border-[#42C6D9]/50 hover:bg-[#14213D]/90 transition-all duration-300 text-left">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#42C6D9] block mb-1">
                  STRATEGY &amp; BRAND
                </span>
                <span className="text-xs text-slate-200 font-medium block">
                  Identity &amp; Verbal Systems
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#14213D] border border-white/10 shadow-card hover:border-[#42C6D9]/50 hover:bg-[#14213D]/90 transition-all duration-300 text-left">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#42C6D9] block mb-1">
                  CINEMATIC MEDIA
                </span>
                <span className="text-xs text-slate-200 font-medium block">
                  Filming &amp; 2D Motion
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#14213D] border border-white/10 shadow-card hover:border-[#42C6D9]/50 hover:bg-[#14213D]/90 transition-all duration-300 text-left">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#42C6D9] block mb-1">
                  DIGITAL ENGINEERING
                </span>
                <span className="text-xs text-slate-200 font-medium block">
                  Web &amp; Custom Platforms
                </span>
              </div>
            </div>

            {/* Micro Location / Reach Label */}
            <div className="mt-6 text-center">
              <span className="text-[11px] font-mono font-bold tracking-[0.16em] uppercase text-slate-300">
                BASED IN PESHAWAR, KP <span className="text-[#42C6D9] font-bold mx-1.5">•</span> WORKING GLOBALLY
              </span>
            </div>
          </Reveal>

        </div>
      </Container>

      {/* Studio Craft Interactive Overview Modal */}
      {craftModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="KreaitX Studio Craft Overview"
          onClick={() => setCraftModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-2xl text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#42C6D9]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#003049] font-bold">
                  KreaitX Studio Capabilities &amp; Craft
                </span>
              </div>
              <button
                type="button"
                onClick={() => setCraftModalOpen(false)}
                className="text-slate-500 hover:text-slate-900 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-[#F7F8FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9] transition-colors"
                aria-label="Close Studio Craft Modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Pillar Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-5">
              {craftPillars.map((p, idx) => {
                const Icon = p.icon;
                const isActive = activeCraftTab === idx;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveCraftTab(idx)}
                    className={`p-3 rounded-2xl text-left border transition-all duration-200 flex flex-col gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9] ${
                      isActive
                        ? "bg-[#003049] text-white border-[#003049] shadow-sm"
                        : "bg-[#F7F8FA] text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? "text-[#42C6D9]" : "text-slate-500"}`} />
                    <span className="text-xs font-semibold leading-tight">{p.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Pillar Content Box */}
            <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/80 space-y-4">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#003049]">
                  {craftPillars[activeCraftTab].category}
                </span>
                <h3 className="text-xl font-display font-bold text-slate-950 mt-1">
                  {craftPillars[activeCraftTab].title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed font-sans">
                  {craftPillars[activeCraftTab].description}
                </p>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2.5">
                  Core Studio Deliverables
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {craftPillars[activeCraftTab].deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#42C6D9] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-sans">
                Explore comprehensive technical workflows and deliverables.
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  href="/solutions"
                  variant="secondary"
                  size="sm"
                  withArrow
                  className="w-full sm:w-auto"
                  onClick={() => setCraftModalOpen(false)}
                >
                  All Solutions
                </Button>
                <Button
                  href="/contact"
                  variant="primary"
                  size="sm"
                  withArrow
                  className="w-full sm:w-auto"
                  onClick={() => setCraftModalOpen(false)}
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

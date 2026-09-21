"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ArrowUpRight, Filter, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { projectCaseStudies } from "@/data/siteData";

const categories = ["All Projects", "Healthcare & MedTech", "Luxury Retail & Design", "Financial Technology"];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projectCaseStudies
      : projectCaseStudies.filter((p) => p.industry.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(p.industry.toLowerCase()));

  return (
    <>
      {/* Work Page Hero with Custom 3D Silk Artwork */}
      <section className="relative overflow-hidden bg-white text-slate-900 min-h-[680px] lg:min-h-[760px] flex items-center justify-center py-20 lg:py-28 border-b border-slate-200/80">
        {/* Custom 3D Silk & Portfolio Frame Artwork */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/images/work-hero-custom-bg.jpg"
            alt="KreaitX Portfolio Case Studies & Real Projects"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top sm:object-center select-none"
            quality={95}
          />
          {/* Seamless bottom fade into next section */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        </div>

        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-700 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 mb-6 backdrop-blur-md shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-purple-600 animate-pulse" />
                <span>Portfolio × Selected Case Studies</span>
              </span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-bold text-slate-950 tracking-tight leading-[1.05]">
                Real projects.{" "}
                <span className="font-serif italic font-normal bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Real business context
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-sans font-normal max-w-2xl">
                Every project we undertake is grounded in a real commercial problem. Explore how we align brand strategy, cinematic media, and high-performance engineering to deliver measurable impact.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="primary" size="md" withArrow className="w-full sm:w-auto min-h-[48px]">
                  Start a Project
                </Button>
                <a
                  href="#projects-feed"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5"
                >
                  Browse Case Studies ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Filter Bar */}
      <section id="projects-feed" className="bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-4 sticky top-[65px] z-30 shadow-subtle">
        <Container size="default">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-slate-400 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-semibold transition-all cursor-pointer shrink-0 ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-button"
                      : "bg-slate-100 text-slate-700 hover:bg-purple-50 hover:text-purple-700 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-xs font-sans font-semibold text-slate-500 shrink-0 hidden md:block">
              Showing {filteredProjects.length} Case Studies
            </span>
          </div>
        </Container>
      </section>

      {/* Projects Deep Dive */}
      <section className="bg-slate-50/50 py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default">
          <div className="space-y-16 sm:space-y-24">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                id={project.id}
                className="scroll-mt-32 rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-200 transition-all duration-300 overflow-hidden"
              >
                {/* Case Study Header Banner */}
                <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 text-white p-8 sm:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-mono backdrop-blur-sm border border-white/20">
                          Case Study 0{idx + 1}
                        </span>
                        <span className="text-xs text-cyan-400 uppercase font-bold tracking-wider">
                          {project.industry}
                        </span>
                        <span className="text-xs text-slate-400">• {project.year}</span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                        {project.title}
                      </h2>
                    </div>

                    <div className="shrink-0 text-left md:text-right">
                      <span className="text-xs font-sans uppercase tracking-wider text-purple-300 font-bold block mb-1">
                        Client Partner
                      </span>
                      <span className="text-lg font-display font-bold text-white">
                        {project.client}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Case Study Content Grid */}
                <div className="p-8 sm:p-12 lg:p-14">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                    {/* Left: Challenge, Strategy, Execution */}
                    <div className="lg:col-span-7 space-y-8">
                      <div>
                        <h3 className="text-xs font-sans uppercase tracking-wider text-purple-700 font-bold mb-2">
                          Project Summary
                        </h3>
                        <p className="text-lg text-slate-800 font-sans font-normal leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      <div className="space-y-6 pt-6 border-t border-slate-100">
                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60">
                          <h4 className="text-xs font-sans uppercase tracking-wider text-slate-900 font-bold mb-2">
                            The Challenge
                          </h4>
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                            {project.challenge}
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100">
                          <h4 className="text-xs font-sans uppercase tracking-wider text-purple-900 font-bold mb-2">
                            The Strategy
                          </h4>
                          <p className="text-sm sm:text-base text-purple-950 leading-relaxed font-sans">
                            {project.strategy}
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60">
                          <h4 className="text-xs font-sans uppercase tracking-wider text-slate-900 font-bold mb-2">
                            The Execution
                          </h4>
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                            {project.execution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Deliverables, Results & Impact Box */}
                    <div className="lg:col-span-5 space-y-6">
                      {/* Measured Impact Card */}
                      <div className="rounded-3xl bg-gradient-to-br from-purple-50 via-indigo-50 to-cyan-50 p-7 sm:p-8 border border-purple-200/80 shadow-card">
                        <span className="text-xs font-sans uppercase tracking-wider text-purple-700 font-bold block mb-2">
                          Measured Business Impact
                        </span>
                        <p className="text-xl sm:text-2xl font-display font-bold text-slate-900 leading-relaxed">
                          {project.impact}
                        </p>
                      </div>

                      {/* Deliverables List */}
                      <div className="rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/80 shadow-card">
                        <span className="text-xs font-sans uppercase tracking-wider text-slate-900 font-bold block mb-4">
                          Delivered Assets &amp; Systems
                        </span>
                        <ul className="space-y-3">
                          {project.deliverables.map((del) => (
                            <li
                              key={del}
                              className="flex items-center gap-2.5 text-sm font-medium text-slate-800"
                            >
                              <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Services badges */}
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <span className="text-xs font-sans uppercase tracking-wider text-slate-500 font-bold block mb-2.5">
                          Capabilities Involved
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.services.map((s) => (
                            <span
                              key={s}
                              className="text-xs font-medium text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-subtle"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Conversion CTA */}
      <CTASection />
    </>
  );
}

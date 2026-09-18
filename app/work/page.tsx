"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ArrowUpRight, Filter } from "lucide-react";
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
      {/* Cinematic Work Page Hero with User-Provided Art */}
      <section className="relative overflow-hidden bg-[#14213D] text-[#F5F6F2] min-h-[75vh] flex items-center justify-center py-20 lg:py-28 border-b border-[#F5F6F2]/10">
        {/* User-Provided Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/work-hero-bg.png"
            alt="Ideas Shoot Create Deliver × Filming Editing Design Animation Marketing"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center select-none"
          />
          {/* Atmospheric gradient overlay for text readability */}
          <div className="absolute inset-0 bg-[#14213D]/70 via-[#14213D]/50 to-[#14213D]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14213D] via-transparent to-[#14213D]/60" />
        </div>

        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#B7B98A] px-4 py-1.5 rounded-full bg-white/10 border border-[#F5F6F2]/15 mb-6 inline-block backdrop-blur-md">
                Portfolio × Selected Case Studies
              </span>
              <h1 className="text-[clamp(28px,5vw,56px)] font-semibold text-[#F5F6F2] tracking-[-0.04em] leading-[1.08]">
                Real projects.{" "}
                <span className="font-serif-italic font-normal text-[#B7B98A]">
                  Real business context
                </span>.
              </h1>
              <p className="mt-6 text-[clamp(14px,1.5vw,18px)] text-[#F5F6F2]/80 leading-relaxed font-normal max-w-2xl">
                Every project we undertake is grounded in a real commercial problem. Explore how we align brand strategy, cinematic media, and high-performance engineering to deliver measurable impact.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="white" size="md" withArrow className="w-full sm:w-auto min-h-[48px]">
                  Start a Project
                </Button>
                <a
                  href="#projects-feed"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-xs sm:text-sm font-medium text-[#F5F6F2] bg-white/10 hover:bg-white/20 border border-[#F5F6F2]/20 backdrop-blur-md transition-all duration-200 w-full sm:w-auto"
                >
                  Browse Case Studies ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Filter Bar */}
      <section id="projects-feed" className="bg-[#FAF8F2] border-b border-[#DEDCD3] py-5 sticky top-[65px] z-30 shadow-xs">
        <Container size="default">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-[#14213D]/60 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer shrink-0 ${
                    selectedCategory === cat
                      ? "bg-[#14213D] text-[#F4F1E8] shadow-xs"
                      : "bg-[#F4F1E8] text-[#14213D] hover:bg-white border border-[#DEDCD3]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-xs font-mono text-[#667085] shrink-0 hidden md:block">
              Showing {filteredProjects.length} Case Studies
            </span>
          </div>
        </Container>
      </section>

      {/* Projects Deep Dive */}
      <section className="bg-[#F4F1E8] py-20 sm:py-28">
        <Container size="default">
          <div className="space-y-16 sm:space-y-24">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                id={project.id}
                className="scroll-mt-32 rounded-2xl bg-[#FAF8F2] border border-[#DEDCD3] overflow-hidden"
              >
                {/* Case Study Header Banner */}
                <div className="bg-[#14213D] text-[#F4F1E8] p-8 sm:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#B2AD7F]/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-md bg-white/10 text-[#F4F1E8] text-xs font-mono">
                          Case Study 0{idx + 1}
                        </span>
                        <span className="text-xs text-[#B2AD7F] uppercase font-semibold tracking-wider">
                          {project.industry}
                        </span>
                        <span className="text-xs text-[#F4F1E8]/50">• {project.year}</span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-normal text-[#F4F1E8] tracking-tight">
                        {project.title}
                      </h2>
                    </div>

                    <div className="shrink-0 text-left md:text-right">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#B2AD7F] block mb-1">
                        Client Partner
                      </span>
                      <span className="text-base font-medium text-[#F4F1E8]">
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
                        <h3 className="text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold mb-2">
                          Project Summary
                        </h3>
                        <p className="text-base sm:text-lg text-[#182231] font-normal leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      <div className="space-y-6 pt-6 border-t border-[#DEDCD3]">
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold mb-2">
                            The Challenge
                          </h4>
                          <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold mb-2">
                            The Strategy
                          </h4>
                          <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                            {project.strategy}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold mb-2">
                            The Execution
                          </h4>
                          <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                            {project.execution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Deliverables, Results & Impact Box */}
                    <div className="lg:col-span-5 space-y-6">
                      {/* Measured Impact Card */}
                      <div className="rounded-xl bg-[#F4F1E8] p-6 sm:p-8 border border-[#DEDCD3]">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold block mb-2">
                          Measured Business Impact
                        </span>
                        <p className="text-base sm:text-lg font-medium text-[#14213D] leading-relaxed">
                          {project.impact}
                        </p>
                      </div>

                      {/* Deliverables List */}
                      <div className="rounded-xl bg-white p-6 sm:p-8 border border-[#DEDCD3]">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold block mb-4">
                          Delivered Assets &amp; Systems
                        </span>
                        <ul className="space-y-3">
                          {project.deliverables.map((del) => (
                            <li
                              key={del}
                              className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#182231]"
                            >
                              <CheckCircle2 className="h-4 w-4 text-[#B2AD7F] shrink-0" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Services badges */}
                      <div className="p-4 rounded-xl bg-[#F4F1E8] border border-[#DEDCD3]">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#667085] block mb-2">
                          Capabilities Involved
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.services.map((s) => (
                            <span
                              key={s}
                              className="text-xs font-medium text-[#14213D] bg-white border border-[#DEDCD3] px-2.5 py-1 rounded-md"
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

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Filter } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { projectCaseStudies } from "@/data/siteData";

const categories = ["All Projects", "Healthcare & MedTech", "Luxury Retail & Design", "Financial Technology"];

export const WorkClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projectCaseStudies
      : projectCaseStudies.filter((p) => p.industry.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(p.industry.toLowerCase()));

  return (
    <>
      {/* Work Page Hero — Pure White Canvas */}
      <section className="relative bg-white text-[#111111] py-20 lg:py-28 border-b border-[#E8DFD8] overflow-hidden">
        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#EC5D17] px-3.5 py-1.5 rounded-md bg-[#FCEDE6] border border-[#E8DFD8] mb-6 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#EC5D17]" />
                <span>Portfolio × Selected Case Studies</span>
              </span>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold text-[#111111] tracking-tight leading-[1.08]">
                Real projects.{" "}
                <span className="font-display font-bold text-[#EC5D17]">
                  Real business context
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#666666] leading-relaxed font-sans font-normal max-w-2xl">
                Every project we undertake is grounded in a real commercial problem. Explore how we align brand strategy, cinematic media, and high-performance engineering to deliver measurable impact.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="primary" size="md" withArrow className="w-full sm:w-auto min-h-[48px] font-bold">
                  Start a Project
                </Button>
                <a
                  href="#projects-feed"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-lg text-sm font-semibold text-[#111111] bg-white hover:bg-[#FCEDE6] hover:text-[#EC5D17] border border-[#E8DFD8] transition-all duration-200 w-full sm:w-auto shadow-xs"
                >
                  Browse Case Studies ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Filter Bar */}
      <section id="projects-feed" className="bg-[#FCEDE6] border-b border-[#E8DFD8] py-4 sticky top-[65px] z-30 shadow-xs">
        <Container size="default">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-[#666666] hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-md text-xs sm:text-sm font-sans font-semibold transition-all cursor-pointer shrink-0 min-h-[40px] ${
                    selectedCategory === cat
                      ? "bg-[#111111] text-white shadow-sm"
                      : "bg-white text-[#111111] hover:bg-white hover:text-[#EC5D17] border border-[#E8DFD8]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-xs font-sans font-semibold text-[#666666] shrink-0 hidden md:block">
              Showing {filteredProjects.length} Case Studies
            </span>
          </div>
        </Container>
      </section>

      {/* Projects Deep Dive */}
      <section className="bg-white py-20 sm:py-28 border-b border-[#E8DFD8]">
        <Container size="default">
          <div className="space-y-16 sm:space-y-24">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                id={project.id}
                className="scroll-mt-32 rounded-xl bg-white border border-[#E8DFD8] shadow-sm transition-all duration-200 overflow-hidden"
              >
                {/* Case Study Header Banner */}
                <div className="bg-[#333333] text-white p-6 sm:p-10 lg:p-12 border-b border-white/10 relative overflow-hidden">
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-md bg-white/10 text-[#EC5D17] text-xs font-mono border border-white/15">
                          Case Study 0{idx + 1}
                        </span>
                        <span className="text-xs text-[#EC5D17] uppercase font-bold tracking-wider">
                          {project.industry}
                        </span>
                        <span className="text-xs text-white/50">• {project.year}</span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                        {project.title}
                      </h2>
                    </div>

                    <div className="shrink-0 flex flex-col md:items-end justify-between gap-3">
                      <div>
                        <span className="text-xs font-sans uppercase tracking-wider text-[#EC5D17] font-bold block mb-1">
                          Client Partner
                        </span>
                        <span className="text-lg font-display font-bold text-white">
                          {project.client}
                        </span>
                      </div>
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-sans font-semibold text-white bg-white/10 hover:bg-[#EC5D17] border border-white/20 transition-all duration-200"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Case Study Content Grid */}
                <div className="p-8 sm:p-12 lg:p-14">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                    {/* Left: Challenge, Strategy, Execution */}
                    <div className="lg:col-span-7 space-y-8">
                      <div>
                        <h3 className="text-xs font-sans uppercase tracking-wider text-[#EC5D17] font-bold mb-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EC5D17]" />
                          Project Summary
                        </h3>
                        <p className="text-lg text-[#111111] font-sans font-normal leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      <div className="space-y-6 pt-6 border-t border-[#E8DFD8]">
                        <div className="p-5 rounded-lg bg-[#FCEDE6]/50 border border-[#E8DFD8]">
                          <h4 className="text-xs font-sans uppercase tracking-wider text-[#111111] font-bold mb-2">
                            The Challenge
                          </h4>
                          <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-sans">
                            {project.challenge}
                          </p>
                        </div>

                        <div className="p-5 rounded-lg bg-[#FCEDE6] border border-[#E8DFD8]">
                          <h4 className="text-xs font-sans uppercase tracking-wider text-[#EC5D17] font-bold mb-2">
                            The Strategy
                          </h4>
                          <p className="text-sm sm:text-base text-[#111111] leading-relaxed font-sans">
                            {project.strategy}
                          </p>
                        </div>

                        <div className="p-5 rounded-lg bg-[#FCEDE6]/50 border border-[#E8DFD8]">
                          <h4 className="text-xs font-sans uppercase tracking-wider text-[#111111] font-bold mb-2">
                            The Execution
                          </h4>
                          <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-sans">
                            {project.execution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Deliverables, Results & Impact Box */}
                    <div className="lg:col-span-5 space-y-6">
                      {/* Measured Impact Card */}
                      <div className="rounded-xl bg-[#333333] text-white p-7 sm:p-8 border border-white/10 shadow-sm">
                        <span className="text-xs font-sans uppercase tracking-wider text-[#EC5D17] font-bold block mb-2">
                          Measured Business Impact
                        </span>
                        <p className="text-xl sm:text-2xl font-display font-bold text-white leading-relaxed">
                          {project.impact}
                        </p>
                      </div>

                      {/* Deliverables List */}
                      <div className="rounded-xl bg-white p-7 sm:p-8 border border-[#E8DFD8] shadow-xs">
                        <span className="text-xs font-sans uppercase tracking-wider text-[#111111] font-bold block mb-4">
                          Delivered Assets &amp; Systems
                        </span>
                        <ul className="space-y-3">
                          {project.deliverables.map((del) => (
                            <li
                              key={del}
                              className="flex items-center gap-2.5 text-sm font-medium text-[#111111]"
                            >
                              <CheckCircle2 className="h-4 w-4 text-[#EC5D17] shrink-0" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Services badges */}
                      <div className="p-5 rounded-lg bg-[#FCEDE6]/40 border border-[#E8DFD8]">
                        <span className="text-xs font-sans uppercase tracking-wider text-[#666666] font-bold block mb-2.5">
                          Capabilities Involved
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.services.map((s) => {
                            const serviceSlugMap: Record<string, string> = {
                              "Branding": "branding",
                              "Digital Solutions": "digital-solutions",
                              "Filming & Production": "filming-production",
                              "UI/UX Design": "digital-solutions",
                              "Graphic Design": "graphic-design",
                              "Social Media": "social-media-management",
                              "2D Animation": "2d-animation",
                              "Digital Marketing": "digital-marketing"
                            };
                            const slug = serviceSlugMap[s];
                            return slug ? (
                              <Link
                                key={s}
                                href={`/solutions/${slug}`}
                                className="text-xs font-medium text-[#111111] bg-white hover:bg-[#111111] hover:text-[#EC5D17] border border-[#E8DFD8] px-3 py-1 rounded-md shadow-2xs transition-colors duration-150"
                              >
                                {s}
                              </Link>
                            ) : (
                              <span
                                key={s}
                                className="text-xs font-medium text-[#666666] bg-white border border-[#E8DFD8] px-3 py-1 rounded-md shadow-2xs"
                              >
                                {s}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      {/* Read Full Case Study Button */}
                      <div className="pt-2">
                        <Link
                          href={`/work/${project.slug}`}
                          className="w-full group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-sans font-semibold text-white bg-[#111111] hover:bg-[#EC5D17] shadow-sm transition-colors duration-200"
                        >
                          <span>Explore Dedicated Case Study</span>
                          <ArrowRight className="h-4 w-4 text-[#EC5D17] group-hover:text-white transition-colors duration-200" />
                        </Link>
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
};

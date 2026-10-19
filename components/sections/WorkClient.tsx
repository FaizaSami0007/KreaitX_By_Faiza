"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Filter, Sparkles } from "lucide-react";
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
      {/* Work Page Hero — Dark Plum & Cream Soda Brand Theme */}
      <section className="relative bg-[#21113D] text-white py-20 lg:py-28 border-b border-white/10 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#6A00F4]/25 via-[#390080]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#6A00F4]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FFD6A5]/15 rounded-full blur-3xl pointer-events-none" />

        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FFD6A5] px-4 py-1.5 rounded-full bg-[#390080]/60 border border-[#FFD6A5]/30 backdrop-blur-md shadow-subtle mb-6 hover:border-[#FFD6A5]/50 transition-colors">
                <Sparkles className="h-3.5 w-3.5 text-[#FFD6A5] animate-pulse" />
                <span>Portfolio × Selected Case Studies</span>
              </span>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold text-white tracking-tight leading-[1.08]">
                Real projects.{" "}
                <span className="font-display font-bold not-italic bg-gradient-to-r from-white via-[#FFD6A5] to-[#FFD6A5] bg-clip-text text-transparent">
                  Real business context
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#F3ECFF]/85 leading-relaxed font-sans font-normal max-w-2xl">
                Every project we undertake is grounded in a real commercial problem. Explore how we align brand strategy, cinematic media, and high-performance engineering to deliver measurable impact.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="cyan" size="md" withArrow className="w-full sm:w-auto min-h-[48px] font-bold shadow-lg">
                  Start a Project
                </Button>
                <a
                  href="#projects-feed"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#FFD6A5]/50 shadow-sm transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5"
                >
                  Browse Case Studies ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Filter Bar */}
      <section id="projects-feed" className="bg-[#FFF9F0] border-b border-[#E9E0F2] py-4 sticky top-[65px] z-30 shadow-xs">
        <Container size="default">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-[#625A70] hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-semibold transition-all cursor-pointer shrink-0 min-h-[40px] ${
                    selectedCategory === cat
                      ? "bg-[#6A00F4] text-white shadow-brand-button"
                      : "bg-white text-[#211832] hover:bg-[#F3ECFF] hover:text-[#6A00F4] border border-[#E9E0F2]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-xs font-sans font-semibold text-[#625A70] shrink-0 hidden md:block">
              Showing {filteredProjects.length} Case Studies
            </span>
          </div>
        </Container>
      </section>

      {/* Projects Deep Dive */}
      <section className="bg-[#FFF9F0] py-20 sm:py-28 border-b border-[#E9E0F2]">
        <Container size="default">
          <div className="space-y-16 sm:space-y-24">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                id={project.id}
                className="scroll-mt-32 rounded-3xl bg-white border border-[#E9E0F2] shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                {/* Case Study Header Banner */}
                <div className="bg-[#21113D] text-white p-5 sm:p-10 lg:p-12 border-b border-white/10 relative overflow-hidden">
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3.5 py-1 rounded-full bg-white/10 text-[#FFD6A5] text-xs font-mono backdrop-blur-sm border border-white/15">
                          Case Study 0{idx + 1}
                        </span>
                        <span className="text-xs text-[#FFD6A5] uppercase font-bold tracking-wider">
                          {project.industry}
                        </span>
                        <span className="text-xs text-slate-300">• {project.year}</span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                        {project.title}
                      </h2>
                    </div>

                    <div className="shrink-0 flex flex-col md:items-end justify-between gap-3">
                      <div>
                        <span className="text-xs font-sans uppercase tracking-wider text-[#FFD6A5] font-bold block mb-1">
                          Client Partner
                        </span>
                        <span className="text-lg font-display font-bold text-white">
                          {project.client}
                        </span>
                      </div>
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight className="h-3.5 w-3.5 text-[#FFD6A5]" />
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
                        <h3 className="text-xs font-sans uppercase tracking-wider text-[#6A00F4] font-bold mb-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6A00F4]" />
                          Project Summary
                        </h3>
                        <p className="text-lg text-[#211832] font-sans font-normal leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      <div className="space-y-6 pt-6 border-t border-[#E9E0F2]">
                        <div className="p-5 rounded-2xl bg-[#FFF9F0] border border-[#E9E0F2]">
                          <h4 className="text-xs font-sans uppercase tracking-wider text-[#211832] font-bold mb-2">
                            The Challenge
                          </h4>
                          <p className="text-sm sm:text-base text-[#625A70] leading-relaxed font-sans">
                            {project.challenge}
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-[#F3ECFF] border border-[#E9E0F2]">
                          <h4 className="text-xs font-sans uppercase tracking-wider text-[#6A00F4] font-bold mb-2">
                            The Strategy
                          </h4>
                          <p className="text-sm sm:text-base text-[#211832] leading-relaxed font-sans">
                            {project.strategy}
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-[#FFF9F0] border border-[#E9E0F2]">
                          <h4 className="text-xs font-sans uppercase tracking-wider text-[#211832] font-bold mb-2">
                            The Execution
                          </h4>
                          <p className="text-sm sm:text-base text-[#625A70] leading-relaxed font-sans">
                            {project.execution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Deliverables, Results & Impact Box */}
                    <div className="lg:col-span-5 space-y-6">
                      {/* Measured Impact Card */}
                      <div className="rounded-3xl bg-[#21113D] text-white p-7 sm:p-8 border border-[#FFD6A5]/25 shadow-card">
                        <span className="text-xs font-sans uppercase tracking-wider text-[#FFD6A5] font-bold block mb-2">
                          Measured Business Impact
                        </span>
                        <p className="text-xl sm:text-2xl font-display font-bold text-white leading-relaxed">
                          {project.impact}
                        </p>
                      </div>

                      {/* Deliverables List */}
                      <div className="rounded-3xl bg-white p-7 sm:p-8 border border-[#E9E0F2] shadow-card">
                        <span className="text-xs font-sans uppercase tracking-wider text-[#211832] font-bold block mb-4">
                          Delivered Assets &amp; Systems
                        </span>
                        <ul className="space-y-3">
                          {project.deliverables.map((del) => (
                            <li
                              key={del}
                              className="flex items-center gap-2.5 text-sm font-medium text-[#211832]"
                            >
                              <CheckCircle2 className="h-4 w-4 text-[#6A00F4] shrink-0" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Services badges */}
                      <div className="p-5 rounded-2xl bg-[#FFF9F0] border border-[#E9E0F2]">
                        <span className="text-xs font-sans uppercase tracking-wider text-[#625A70] font-bold block mb-2.5">
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
                                className="text-xs font-medium text-[#211832] bg-white hover:bg-[#6A00F4] hover:text-white border border-[#E9E0F2] hover:border-[#6A00F4] px-3 py-1 rounded-full shadow-subtle transition-all duration-200"
                              >
                                {s}
                              </Link>
                            ) : (
                              <span
                                key={s}
                                className="text-xs font-medium text-[#625A70] bg-white border border-[#E9E0F2] px-3 py-1 rounded-full shadow-subtle"
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
                          className="w-full group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-sans font-semibold text-white bg-[#6A00F4] hover:bg-[#390080] shadow-brand-button transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <span>Explore Dedicated Case Study</span>
                          <ArrowRight className="h-4 w-4 text-[#FFD6A5] transition-transform duration-200 group-hover:translate-x-1" />
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

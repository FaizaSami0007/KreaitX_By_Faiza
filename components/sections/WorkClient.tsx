"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Filter } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { projectCaseStudies, clientRoster } from "@/data/siteData";

const categories = [
  "All Projects",
  "Documentary & Streaming",
  "AI & Technology",
  "Government & Public Service",
  "Crisis & Relief"
];

export const WorkClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projectCaseStudies
      : projectCaseStudies.filter((p) => {
          const ind = p.industry.toLowerCase();
          const cat = selectedCategory.toLowerCase();
          if (cat.includes("documentary") && ind.includes("documentary")) return true;
          if (cat.includes("ai") && (ind.includes("ai") || ind.includes("climate"))) return true;
          if (cat.includes("government") && (ind.includes("government") || ind.includes("public"))) return true;
          if (cat.includes("crisis") && ind.includes("crisis")) return true;
          return ind.includes(cat);
        });

  return (
    <>
      {/* Work Page Hero — Pure White Canvas */}
      <section className="relative bg-white text-[#10172A] py-20 lg:py-28 border-b border-[#C5CCDC] overflow-hidden">
        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#3047D5] px-3.5 py-1.5 rounded-md bg-[#F7F8FC] border border-[#C5CCDC] mb-6 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#3047D5]" />
                <span>Portfolio × Selected Case Studies</span>
              </span>
              <h1 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-[#10172A] tracking-tight leading-[1.08]">
                Real projects.{" "}
                <span className="font-display font-bold text-[#3047D5]">
                  Real business context
                </span>.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#6A7180] leading-relaxed font-sans font-normal max-w-2xl">
                Every project we undertake is grounded in a real commercial problem. Explore how we align brand strategy, cinematic media, and high-performance engineering to deliver measurable impact.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="primary" size="md" withArrow className="w-full sm:w-auto min-h-[48px] font-bold shadow-brand-button">
                  Start a Project
                </Button>
                <a
                  href="#projects-feed"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-lg text-sm font-semibold text-[#10172A] bg-white hover:bg-[#F7F8FC] hover:text-[#3047D5] border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200 w-full sm:w-auto shadow-xs"
                >
                  Browse Case Studies ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Filter Bar */}
      <section id="projects-feed" className="bg-[#F7F8FC] border-b border-[#C5CCDC] py-4 sticky top-[65px] z-30 shadow-xs">
        <Container size="default">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-[#6A7180] hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-md text-xs sm:text-sm font-sans font-semibold transition-all cursor-pointer shrink-0 min-h-[40px] ${selectedCategory === cat
                      ? "bg-[#3047D5] text-white shadow-brand-button"
                      : "bg-white text-[#3A4454] hover:bg-white hover:text-[#3047D5] border border-[#C5CCDC]"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-xs font-sans font-semibold text-[#6A7180] shrink-0 hidden md:block">
              Showing {filteredProjects.length} Case Studies
            </span>
          </div>
        </Container>
      </section>

      {/* Projects Deep Dive */}
      <section className="bg-white py-20 sm:py-28 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="space-y-16 sm:space-y-24">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                id={project.id}
                className="scroll-mt-32 rounded-xl bg-white border border-[#C5CCDC] shadow-sm transition-all duration-200 overflow-hidden"
              >
                {/* Case Study Header Banner — Clean Light Surface */}
                <div className="bg-[#F7F8FC] text-[#10172A] p-6 sm:p-8 lg:p-10 border-b border-[#C5CCDC] relative overflow-hidden">
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2.5">
                        <span className="px-3 py-1 rounded-md bg-white text-[#3047D5] text-xs font-mono font-bold border border-[#C5CCDC]">
                          Case Study 0{idx + 1}
                        </span>
                        <span className="text-xs text-[#3047D5] uppercase font-bold tracking-wider font-mono">
                          {project.industry}
                        </span>
                        <span className="text-xs text-[#6A7180] font-mono">• {project.year}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#10172A] tracking-tight">
                        {project.title}
                      </h2>
                    </div>

                    <div className="shrink-0 flex flex-col md:items-end justify-between gap-3">
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-[#6A7180] font-bold block mb-1">
                          Client Partner
                        </span>
                        <span className="text-base sm:text-lg font-display font-bold text-[#10172A]">
                          {project.client}
                        </span>
                      </div>
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-sans font-semibold text-[#10172A] bg-white hover:bg-[#3047D5] hover:text-white border border-[#C5CCDC] hover:border-[#3047D5] shadow-2xs transition-all duration-200 group/link"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight className="h-3.5 w-3.5 text-[#3047D5] group-hover/link:text-white" />
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
                        <h3 className="text-xs font-sans uppercase tracking-wider text-[#3047D5] font-bold mb-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3047D5]" />
                          Project Summary
                        </h3>
                        <p className="text-lg text-[#10172A] font-sans font-normal leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      <div className="space-y-6 pt-6 border-t border-[#C5CCDC]">
                        <div className="p-5 rounded-lg bg-[#F7F8FC] border border-[#C5CCDC]">
                          <h4 className="text-xs font-sans uppercase tracking-wider text-[#10172A] font-bold mb-2">
                            The Challenge
                          </h4>
                          <p className="text-sm sm:text-base text-[#6A7180] leading-relaxed font-sans">
                            {project.challenge}
                          </p>
                        </div>

                        <div className="p-5 rounded-lg bg-[#F7F8FC] border border-[#3047D5]/30">
                          <h4 className="text-xs font-sans uppercase tracking-wider text-[#3047D5] font-bold mb-2">
                            The Strategy
                          </h4>
                          <p className="text-sm sm:text-base text-[#10172A] leading-relaxed font-sans">
                            {project.strategy}
                          </p>
                        </div>

                        <div className="p-5 rounded-lg bg-[#F7F8FC] border border-[#C5CCDC]">
                          <h4 className="text-xs font-sans uppercase tracking-wider text-[#10172A] font-bold mb-2">
                            The Execution
                          </h4>
                          <p className="text-sm sm:text-base text-[#6A7180] leading-relaxed font-sans">
                            {project.execution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Deliverables, Results & Impact Box */}
                    <div className="lg:col-span-5 space-y-6">
                      {/* Measured Impact Card — Clean Light Accent Surface */}
                      <div className="rounded-xl bg-[#F7F8FC] text-[#10172A] p-6 sm:p-7 border border-[#3047D5]/30 shadow-2xs">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#3047D5] font-bold block mb-2">
                          Measured Business Impact
                        </span>
                        <p className="text-lg sm:text-xl font-display font-bold text-[#10172A] leading-relaxed">
                          {project.impact}
                        </p>
                      </div>

                      {/* Deliverables List */}
                      <div className="rounded-xl bg-white p-6 sm:p-7 border border-[#C5CCDC] shadow-2xs">
                        <span className="text-xs font-sans uppercase tracking-wider text-[#10172A] font-bold block mb-4">
                          Delivered Assets &amp; Systems
                        </span>
                        <ul className="space-y-3">
                          {project.deliverables.map((del) => (
                            <li
                              key={del}
                              className="flex items-center gap-2.5 text-sm font-medium text-[#3A4454]"
                            >
                              <CheckCircle2 className="h-4 w-4 text-[#3047D5] shrink-0" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Services badges */}
                      <div className="p-5 rounded-lg bg-[#F7F8FC] border border-[#C5CCDC]">
                        <span className="text-xs font-sans uppercase tracking-wider text-[#6A7180] font-bold block mb-2.5">
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
                                className="text-xs font-medium text-[#10172A] bg-white hover:text-[#3047D5] hover:border-[#3047D5] border border-[#C5CCDC] px-3 py-1 rounded-md shadow-2xs transition-colors duration-150"
                              >
                                {s}
                              </Link>
                            ) : (
                              <span
                                key={s}
                                className="text-xs font-medium text-[#6A7180] bg-white border border-[#C5CCDC] px-3 py-1 rounded-md shadow-2xs"
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
                          className="w-full group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-sans font-bold text-white bg-[#3047D5] hover:bg-[#2538B8] shadow-brand-button transition-all duration-200"
                        >
                          <span>Explore Dedicated Case Study</span>
                          <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
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

      {/* Client Roster & Institutional References (Page 5 of PDF) */}
      <section className="bg-[#F7F8FC] py-16 sm:py-20 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] block mb-2">
              Verified Client References
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#10172A] tracking-tight">
              Trusted by Ambitious Brands &amp; Public Institutions
            </h3>
            <p className="mt-2 text-sm text-[#6A7180] font-sans">
              Selected clients, enterprise partners, and public sector organizations that have collaborated with KreaitX:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientRoster.map((client) => (
              <div
                key={client}
                className="p-5 rounded-xl bg-white border border-[#C5CCDC] shadow-2xs flex flex-col items-center justify-center text-center min-h-[90px] hover:border-[#3047D5] transition-colors"
              >
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10172A] block">
                  {client}
                </span>
                <span className="text-[10px] text-[#6A7180] mt-1 font-mono">
                  Verified Client
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Conversion CTA */}
      <CTASection />
    </>
  );
};

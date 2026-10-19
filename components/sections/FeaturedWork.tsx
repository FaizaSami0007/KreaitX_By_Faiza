import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { projectCaseStudies } from "@/data/siteData";

export const FeaturedWork: React.FC = () => {
  return (
    <section id="work" className="relative overflow-hidden bg-[#F7F8FA] py-20 sm:py-28 lg:py-32 border-b border-slate-200/80">
      {/* Background Soft Glows (No background images) */}
      <div className="absolute top-1/4 -right-32 h-80 w-80 rounded-full bg-[#42C6D9]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 h-80 w-80 rounded-full bg-slate-300/30 blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10 max-w-[1320px]">
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
            <SectionHeading
              eyebrow="Selected Portfolio Benchmarks"
              title={
                <>
                  Crafted with precision.{" "}
                  <span className="font-serif italic font-normal bg-gradient-to-r from-[#003049] via-[#14213D] to-[#42C6D9] bg-clip-text text-transparent">
                    Engineered for outcomes
                  </span>
                  .
                </>
              }
              description="A selective look at how we combine brand strategy, commercial filming, and bespoke digital platforms to solve tangible commercial challenges."
            />

            <div className="shrink-0">
              <Button href="/work" variant="secondary" size="md" withArrow>
                View All Case Studies
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Styled Case Studies */}
        <div className="space-y-10 sm:space-y-12">
          {projectCaseStudies.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <Reveal key={project.id} yOffset={24}>
                <article className="group rounded-3xl bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-[#42C6D9]/50 transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Project Narrative */}
                    <div
                      className={`lg:col-span-7 p-5 sm:p-8 lg:p-12 flex flex-col justify-between ${
                        isReversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div>
                        {/* Meta Tags */}
                        <div className="flex flex-wrap items-center gap-2.5 mb-5 sm:mb-6">
                          <span className="px-3.5 py-1 rounded-full bg-[#F7F8FA] text-[#003049] border border-slate-200 text-xs font-mono font-semibold uppercase tracking-wider">
                            {project.industry}
                          </span>
                          <span className="text-xs font-mono text-slate-500 font-medium px-3 py-1 rounded-full bg-slate-100">
                            {project.year}
                          </span>
                          <span className="text-xs font-mono text-slate-500 font-medium px-3 py-1 rounded-full bg-[#F7F8FA] border border-slate-200">
                            Studio Benchmark
                          </span>
                        </div>

                        {/* Title & Summary */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 tracking-tight group-hover:text-[#003049] transition-colors">
                          <Link href={`/work/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h3>

                        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal">
                          {project.summary}
                        </p>

                        {/* Challenge & Strategic Impact Cards */}
                        <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block mb-1">
                              The Challenge
                            </span>
                            <span className="text-xs text-slate-600 leading-relaxed block">
                              {project.challenge}
                            </span>
                          </div>
                          <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-[#42C6D9]/30">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#003049] block mb-1">
                              Strategic Outcome
                            </span>
                            <span className="text-xs text-[#003049] font-medium leading-relaxed block">
                              {project.impact}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Services & Link */}
                      <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.services.map((s) => (
                            <span
                              key={s}
                              className="text-xs font-medium text-slate-700 bg-[#F7F8FA] border border-slate-200/70 px-3 py-1 rounded-full"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center text-sm font-semibold text-[#003049] hover:text-[#14213D] transition-colors group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9]"
                        >
                          <span>Explore Case Study</span>
                          <ArrowRight className="ml-1.5 h-4 w-4 text-[#42C6D9] transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Case Study Blueprint Side */}
                    <div
                      className={`lg:col-span-5 bg-[#14213D] p-5 sm:p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden text-white border-t lg:border-t-0 ${
                        isReversed ? "lg:order-1 lg:border-r border-white/10" : "lg:order-2 lg:border-l border-white/10"
                      }`}
                    >
                      <div className="relative z-10 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-mono backdrop-blur-sm border border-white/20">
                          <Sparkles className="h-3 w-3 text-[#42C6D9]" />
                          <span>Case Study Blueprint // 0{index + 1}</span>
                        </div>

                        <div className="space-y-3.5">
                          <p className="text-xs font-mono uppercase tracking-widest text-[#42C6D9] font-bold">
                            Key Deliverables &amp; Craft
                          </p>
                          <ul className="space-y-3">
                            {project.deliverables.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-slate-200"
                              >
                                <CheckCircle2 className="h-4 w-4 text-[#42C6D9] shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                          <span>Focus: <strong className="text-white">{project.client}</strong></span>
                          <span className="font-semibold text-[#42C6D9]">Strategic Architecture</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

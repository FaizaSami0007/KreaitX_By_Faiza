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
    <section id="work" className="relative overflow-hidden bg-[#F7F5F0] py-20 sm:py-24 lg:py-28 border-b border-[#E5E1DA]">
      <Container size="default" className="relative z-10 max-w-[1320px]">
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">
            <SectionHeading
              eyebrow="Selected Portfolio Benchmarks"
              title={
                <>
                  Crafted with precision.{" "}
                  <span className="font-display font-bold text-[#FF5A1F]">
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
        <div className="space-y-8 sm:space-y-10">
          {projectCaseStudies.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <Reveal key={project.id} yOffset={24}>
                <article className="group rounded-2xl bg-white border border-[#E5E1DA] shadow-subtle hover:border-[#111111] hover:shadow-card transition-all duration-200 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Project Narrative */}
                    <div
                      className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                        isReversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div>
                        {/* Meta Tags */}
                        <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-5">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#FFF0E8] text-[#FF5A1F] border border-[#FF5A1F]/20 text-xs font-mono font-semibold uppercase tracking-wider">
                            {project.industry}
                          </span>
                          <span className="text-xs font-mono text-[#66635F] font-medium px-2.5 py-0.5 rounded-md bg-[#F7F5F0] border border-[#E5E1DA]">
                            {project.year}
                          </span>
                          <span className="text-xs font-mono text-[#66635F] font-medium px-2.5 py-0.5 rounded-md bg-[#F7F5F0] border border-[#E5E1DA]">
                            Benchmark 0{index + 1}
                          </span>
                        </div>

                        {/* Title & Summary */}
                        <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-display font-bold text-[#111111] tracking-tight group-hover:text-[#FF5A1F] transition-colors">
                          <Link href={`/work/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h3>

                        <p className="mt-3.5 text-base sm:text-lg text-[#66635F] leading-relaxed font-sans font-normal">
                          {project.summary}
                        </p>

                        {/* Challenge & Strategic Impact Cards */}
                        <div className="mt-6 pt-5 border-t border-[#E5E1DA] grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div className="p-3.5 rounded-lg bg-[#F7F5F0] border border-[#E5E1DA]">
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#111111] block mb-1">
                              The Challenge
                            </span>
                            <span className="text-xs text-[#66635F] leading-relaxed block">
                              {project.challenge}
                            </span>
                          </div>
                          <div className="p-3.5 rounded-lg bg-[#FFF0E8] border border-[#FF5A1F]/20">
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF5A1F] block mb-1">
                              Strategic Outcome
                            </span>
                            <span className="text-xs text-[#111111] font-medium leading-relaxed block">
                              {project.impact}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Services & Link */}
                      <div className="mt-7 pt-5 border-t border-[#E5E1DA] flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.services.map((s) => (
                            <span
                              key={s}
                              className="text-xs font-medium text-[#66635F] bg-[#F7F5F0] border border-[#E5E1DA] px-2.5 py-0.5 rounded-md"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center text-sm font-semibold text-[#111111] hover:text-[#FF5A1F] transition-colors group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
                        >
                          <span>Explore Case Study</span>
                          <ArrowRight className="ml-1.5 h-4 w-4 text-[#FF5A1F] transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Case Study Blueprint Side */}
                    <div
                      className={`lg:col-span-5 bg-[#111111] p-6 sm:p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden text-white border-t lg:border-t-0 ${
                        isReversed ? "lg:order-1 lg:border-r border-white/10" : "lg:order-2 lg:border-l border-white/10"
                      }`}
                    >
                      <div className="relative z-10 space-y-5">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-white text-xs font-mono border border-white/15">
                          <Sparkles className="h-3 w-3 text-[#FF5A1F]" />
                          <span>Case Study Blueprint // 0{index + 1}</span>
                        </div>

                        <div className="space-y-3">
                          <p className="text-xs font-mono uppercase tracking-wider text-[#FF5A1F] font-bold">
                            Key Deliverables &amp; Craft
                          </p>
                          <ul className="space-y-2.5">
                            {project.deliverables.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-2.5 text-sm font-medium text-slate-200"
                              >
                                <CheckCircle2 className="h-4 w-4 text-[#FF5A1F] shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#A19E98]">
                          <span>Client: <strong className="text-white">{project.client}</strong></span>
                          <span className="font-medium text-[#FF5A1F]">Verified Outcome</span>
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

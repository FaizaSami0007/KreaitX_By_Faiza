import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { projectCaseStudies } from "@/data/siteData";

export const FeaturedWork: React.FC = () => {
  return (
    <section id="work" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28 border-b border-[#E8DFD8]">
      <Container size="default" className="relative z-10 max-w-[1320px]">
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">
            <SectionHeading
              eyebrow="Selected Portfolio Benchmarks"
              title={
                <>
                  Crafted with precision.{" "}
                  <span className="font-display font-bold text-[#EC5D17]">
                    Engineered for outcomes
                  </span>
                  .
                </>
              }
              description="A selective look at how we combine brand strategy, commercial filming, and bespoke digital platforms to solve tangible commercial challenges."
            />

            <div className="shrink-0">
              <Button href="/work" variant="primary" size="md" withArrow className="font-bold">
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
                <article className="group rounded-xl bg-white border border-[#E8DFD8] shadow-xs hover:border-[#EC5D17] transition-all duration-200 overflow-hidden">
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
                          <span className="px-2.5 py-0.5 rounded-md bg-[#FCEDE6] text-[#EC5D17] border border-[#EC5D17]/20 text-xs font-mono font-semibold uppercase tracking-wider">
                            {project.industry}
                          </span>
                          <span className="text-xs font-mono text-[#666666] font-medium px-2.5 py-0.5 rounded-md bg-[#FCEDE6] border border-[#E8DFD8]">
                            {project.year}
                          </span>
                          <span className="text-xs font-mono text-[#666666] font-medium px-2.5 py-0.5 rounded-md bg-[#FCEDE6] border border-[#E8DFD8]">
                            Benchmark 0{index + 1}
                          </span>
                        </div>

                        {/* Title & Summary */}
                        <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-display font-bold text-[#111111] tracking-tight group-hover:text-[#EC5D17] transition-colors">
                          <Link href={`/work/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h3>

                        <p className="mt-3.5 text-base sm:text-lg text-[#666666] leading-relaxed font-sans font-normal">
                          {project.summary}
                        </p>

                        {/* Challenge & Strategic Impact Cards */}
                        <div className="mt-6 pt-5 border-t border-[#E8DFD8] grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div className="p-3.5 rounded-lg bg-[#FCEDE6]/50 border border-[#E8DFD8]">
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#111111] block mb-1">
                              The Challenge
                            </span>
                            <span className="text-xs text-[#666666] leading-relaxed block">
                              {project.challenge}
                            </span>
                          </div>
                          <div className="p-3.5 rounded-lg bg-[#FCEDE6] border border-[#EC5D17]/20">
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#EC5D17] block mb-1">
                              Strategic Outcome
                            </span>
                            <span className="text-xs text-[#111111] font-semibold leading-relaxed block">
                              {project.impact}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Services & Link */}
                      <div className="mt-7 pt-5 border-t border-[#E8DFD8] flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.services.map((s) => (
                            <span
                              key={s}
                              className="text-xs font-medium text-[#666666] bg-[#FCEDE6] border border-[#E8DFD8] px-2.5 py-0.5 rounded-md"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center text-sm font-bold text-[#111111] hover:text-[#EC5D17] transition-colors group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5D17]"
                        >
                          <span>Explore Case Study</span>
                          <ArrowRight className="ml-1.5 h-4 w-4 text-[#EC5D17] transition-transform group/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Case Study Blueprint Side */}
                    <div
                      className={`lg:col-span-5 bg-[#FCEDE6] p-6 sm:p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden text-[#111111] border-t lg:border-t-0 ${
                        isReversed ? "lg:order-1 lg:border-r border-[#E8DFD8]" : "lg:order-2 lg:border-l border-[#E8DFD8]"
                      }`}
                    >
                      <div className="relative z-10 space-y-5">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white text-[#111111] text-xs font-mono border border-[#E8DFD8]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EC5D17]" />
                          <span>Case Study Blueprint // 0{index + 1}</span>
                        </div>

                        <div className="space-y-3">
                          <p className="text-xs font-mono uppercase tracking-wider text-[#EC5D17] font-bold">
                            Key Deliverables &amp; Craft
                          </p>
                          <ul className="space-y-2.5">
                            {project.deliverables.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-2.5 text-sm font-medium text-[#111111]"
                              >
                                <CheckCircle2 className="h-4 w-4 text-[#EC5D17] shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-[#EC5D17]/20 flex items-center justify-between text-xs text-[#666666]">
                          <span>Client: <strong className="text-[#111111]">{project.client}</strong></span>
                          <span className="font-bold text-[#EC5D17]">Verified Outcome</span>
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

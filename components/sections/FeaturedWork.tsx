import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { projectCaseStudies } from "@/data/siteData";

export const FeaturedWork: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32 border-b border-slate-200/80">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 -right-32 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
            <SectionHeading
              eyebrow="Featured Case Studies"
              title={
                <>
                  Real projects.{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    Measurable impact
                  </span>
                  .
                </>
              }
              description="A selective look at how we combine branding, commercial filming, and digital product engineering to solve tangible business challenges."
            />

            <div className="shrink-0">
              <Button href="/work" variant="secondary" size="md" withArrow>
                View All Case Studies
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Softy-Styled Case Studies */}
        <div className="space-y-12 sm:space-y-16">
          {projectCaseStudies.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <Reveal key={project.id} yOffset={24}>
                <article className="group rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-200 transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Project Narrative */}
                    <div
                      className={`lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between ${
                        isReversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div>
                        {/* Meta Tags */}
                        <div className="flex flex-wrap items-center gap-2.5 mb-6">
                          <span className="px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200/80 text-xs font-semibold uppercase tracking-wider">
                            {project.industry}
                          </span>
                          <span className="text-xs text-slate-500 font-medium px-3 py-1 rounded-full bg-slate-100">
                            {project.year}
                          </span>
                        </div>

                        {/* Title & Summary */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 tracking-tight group-hover:text-purple-700 transition-colors">
                          {project.title}
                        </h3>

                        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal">
                          {project.summary}
                        </p>

                        {/* Challenge & Impact Cards */}
                        <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-1">
                              The Challenge
                            </span>
                            <span className="text-xs text-slate-600 leading-relaxed block">
                              {project.challenge}
                            </span>
                          </div>
                          <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                            <span className="text-xs font-bold uppercase tracking-wider text-purple-900 block mb-1">
                              The Impact
                            </span>
                            <span className="text-xs text-purple-800 font-medium leading-relaxed block">
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
                              className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-full"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/work#${project.id}`}
                          className="inline-flex items-center text-sm font-semibold text-purple-700 hover:text-purple-800 transition-colors group/link"
                        >
                          <span>Explore Case Study</span>
                          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Case Study Visual Side */}
                    <div
                      className={`lg:col-span-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 p-8 sm:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden text-white ${
                        isReversed ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      {/* Ambient light glow */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

                      <div className="relative z-10 space-y-6">
                        <div className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-mono backdrop-blur-sm border border-white/20">
                          Case Study Blueprint // 0{index + 1}
                        </div>

                        <div className="space-y-3.5">
                          <p className="text-xs font-sans uppercase tracking-widest text-cyan-400 font-bold">
                            Key Deliverables &amp; Craft
                          </p>
                          <ul className="space-y-3">
                            {project.deliverables.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-slate-200"
                              >
                                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-400">
                          <span>Client: <strong className="text-white">{project.client}</strong></span>
                          <span className="font-semibold text-purple-300">Verified Result</span>
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

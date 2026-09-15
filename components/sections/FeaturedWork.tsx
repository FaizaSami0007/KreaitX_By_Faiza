import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { projectCaseStudies } from "@/data/siteData";

export const FeaturedWork: React.FC = () => {
  return (
    <section className="bg-[#F5F6F2] py-20 sm:py-28 lg:py-32 border-b border-[#14213D]/10">
      <Container size="default">
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
            <SectionHeading
              eyebrow="Case Studies"
              title={
                <>
                  Real projects.{" "}
                  <span className="font-serif-italic font-normal">Real context</span>.
                </>
              }
              description="A selective look at how we combine branding, filming, and digital engineering to solve tangible business challenges."
            />

            <div className="shrink-0">
              <Button href="/work" variant="secondary" size="md" withArrow>
                View All Case Studies
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Editorial Case Studies (Alternating Layout) */}
        <div className="space-y-12 sm:space-y-16">
          {projectCaseStudies.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <Reveal key={project.id} yOffset={24}>
                <article className="rounded-2xl sm:rounded-3xl bg-white border border-[#14213D]/10 overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Editorial Project Overview */}
                    <div
                      className={`lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between ${
                        isReversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div>
                        {/* Meta Tags */}
                        <div className="flex flex-wrap items-center gap-2 mb-6">
                          <span className="px-3 py-1 rounded-full bg-[#F5F6F2] border border-[#14213D]/10 text-xs font-semibold text-[#14213D]">
                            {project.industry}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            {project.year}
                          </span>
                        </div>

                        {/* Title & Summary */}
                        <h3 className="text-2xl sm:text-3xl font-semibold text-[#14213D] tracking-tight">
                          {project.title}
                        </h3>

                        <p className="mt-4 text-base text-slate-600 leading-relaxed">
                          {project.summary}
                        </p>

                        {/* Strategy / Challenge Snapshot */}
                        <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#14213D]">
                              The Challenge:{" "}
                            </span>
                            <span className="text-xs text-slate-600">
                              {project.challenge}
                            </span>
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#14213D]">
                              The Impact:{" "}
                            </span>
                            <span className="text-xs text-slate-700 font-medium">
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
                              className="text-[11px] font-medium text-[#14213D] bg-[#F5F6F2] px-2.5 py-1 rounded border border-[#14213D]/8"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/work#${project.id}`}
                          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#0E172B] transition-colors"
                        >
                          <span>Explore Case Study</span>
                          <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Case Study Visual Representation */}
                    <div
                      className={`lg:col-span-6 bg-[#14213D] p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden ${
                        isReversed ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      {/* Architectural Blueprint Grid */}
                      <div className="absolute inset-0 bg-hero-grid opacity-30" />

                      <div className="relative z-10 space-y-6">
                        <div className="inline-block px-3 py-1 rounded bg-white/10 text-[#F5F6F2] text-xs font-mono">
                          Case Study Blueprint // 0{index + 1}
                        </div>

                        <div className="space-y-3">
                          <p className="text-xs font-mono uppercase tracking-wider text-[#B7B98A]">
                            Key Deliverables &amp; Craft
                          </p>
                          <ul className="space-y-2.5">
                            {project.deliverables.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-2.5 text-sm font-medium text-[#F5F6F2]"
                              >
                                <CheckCircle2 className="h-4 w-4 text-[#B7B98A] shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#F5F6F2]/60">
                          <span>Client: {project.client}</span>
                          <span className="font-mono text-[#B7B98A]">Verified Result</span>
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

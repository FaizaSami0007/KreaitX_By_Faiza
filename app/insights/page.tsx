import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, CheckCircle2, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { InsightsHeroBg } from "@/components/ui/HeroBackgroundDesigns";
import { CTASection } from "@/components/sections/CTASection";
import { insightsArticles } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Insights & Perspectives — KreaitX",
  description: "Practical essays and strategic analysis on creative technology, brand longevity, modern engineering, and human-centered design."
};

export default function InsightsPage() {
  return (
    <>
      {/* Insights Page Hero with Decent Background Design */}
      <section className="relative overflow-hidden bg-white text-slate-900 min-h-[640px] lg:min-h-[720px] flex items-center justify-center py-20 lg:py-28 border-b border-slate-200/80">
        {/* Bespoke Insights Hero Background */}
        <InsightsHeroBg />

        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-700 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 mb-6 backdrop-blur-md shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-purple-600 animate-pulse" />
                <span>Perspectives × Field Notes</span>
              </span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-bold text-slate-950 tracking-tight leading-[1.05]">
                Insights for{" "}
                <span className="font-serif italic font-normal bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  what&apos;s next
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-sans font-normal max-w-2xl">
                Ideas, strategies and field-tested stories at the intersection of brand creativity, modern software engineering, and real-world commercial impact.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="primary" size="md" withArrow className="w-full sm:w-auto min-h-[48px]">
                  Start a Project
                </Button>
                <a
                  href="#articles-stream"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5"
                >
                  Read Perspectives ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Articles Stream */}
      <section id="articles-stream" className="bg-slate-50/50 py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default">
          <div className="space-y-16 sm:space-y-20">
            {insightsArticles.map((article, idx) => (
              <article
                key={article.id}
                id={article.slug}
                className="scroll-mt-28 rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-200 transition-all duration-300 p-8 sm:p-12 lg:p-14"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200/80 text-xs font-semibold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {article.publishDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Clock className="h-3.5 w-3.5 text-purple-600" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="mt-8 space-y-6">
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                    {article.title}
                  </h2>

                  <p className="text-lg text-slate-700 font-sans font-normal leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Key Takeaways Box */}
                  <div className="rounded-2xl bg-slate-50 p-6 sm:p-8 border border-slate-200/60 my-8">
                    <span className="text-xs font-sans uppercase tracking-wider text-purple-700 font-bold block mb-3">
                      Executive Summary &amp; Core Takeaways
                    </span>
                    <ul className="space-y-2.5">
                      {article.keyTakeaways.map((takeaway) => (
                        <li
                          key={takeaway}
                          className="flex items-start gap-2.5 text-sm text-slate-800 font-medium"
                        >
                          <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Essay Paragraphs */}
                  <div className="space-y-4 pt-2 text-base text-slate-600 leading-relaxed font-sans font-normal max-w-none">
                    {article.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
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

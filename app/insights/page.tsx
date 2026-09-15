import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { insightsArticles } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Insights & Perspectives — KreaitX",
  description: "Practical essays and strategic analysis on creative technology, brand longevity, modern engineering, and human-centered design."
};

export default function InsightsPage() {
  return (
    <>
      {/* Cinematic Insights Page Hero with User-Provided Art */}
      <section className="relative overflow-hidden bg-[#14213D] text-[#F5F6F2] min-h-[75vh] flex items-center justify-center py-20 lg:py-28 border-b border-[#F5F6F2]/10">
        {/* User-Provided Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/insights-hero-bg.png"
            alt="Insights for what's next — Ideas, Perspectives, Stories, Knowledge for a Brighter Tomorrow"
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
                Perspectives × Field Notes
              </span>
              <h1 className="text-[clamp(28px,5vw,56px)] font-semibold text-[#F5F6F2] tracking-[-0.04em] leading-[1.08]">
                Insights for{" "}
                <span className="font-serif-italic font-normal text-[#B7B98A]">
                  what&apos;s next
                </span>.
              </h1>
              <p className="mt-6 text-[clamp(14px,1.5vw,18px)] text-[#F5F6F2]/80 leading-relaxed font-normal max-w-2xl">
                Ideas, strategies and field-tested stories at the intersection of brand creativity, modern software engineering, and real-world commercial impact.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="white" size="md" withArrow className="w-full sm:w-auto min-h-[48px]">
                  Start a Project
                </Button>
                <a
                  href="#articles-stream"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-xs sm:text-sm font-medium text-[#F5F6F2] bg-white/10 hover:bg-white/20 border border-[#F5F6F2]/20 backdrop-blur-md transition-all duration-200 w-full sm:w-auto"
                >
                  Read Perspectives ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Articles Stream */}
      <section id="articles-stream" className="bg-[#F5F6F2] py-20 sm:py-28 border-b border-[#14213D]/10">
        <Container size="default">
          <div className="space-y-16 sm:space-y-20">
            {insightsArticles.map((article, idx) => (
              <article
                key={article.id}
                id={article.slug}
                className="scroll-mt-28 rounded-2xl sm:rounded-3xl bg-white border border-[#14213D]/10 p-8 sm:p-12 lg:p-14 shadow-subtle"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#14213D] text-[#F5F6F2] text-xs font-semibold">
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {article.publishDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="mt-8 space-y-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#14213D] tracking-tight leading-tight">
                    {article.title}
                  </h2>

                  <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Key Takeaways Box */}
                  <div className="rounded-2xl bg-[#F5F6F2] p-6 sm:p-8 border border-[#14213D]/10 my-8">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold block mb-3">
                      Executive Summary &amp; Core Takeaways
                    </span>
                    <ul className="space-y-2.5">
                      {article.keyTakeaways.map((takeaway) => (
                        <li
                          key={takeaway}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2 className="h-4 w-4 text-[#B7B98A] shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Essay Paragraphs */}
                  <div className="space-y-4 pt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-none">
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

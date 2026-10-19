"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle2, Sparkles, Filter, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { insightsArticles, siteConfig } from "@/data/siteData";

const categories = ["All Perspectives", "Creative Strategy", "UX & Design", "Technology"];

export const InsightsClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Perspectives");

  const filteredArticles =
    selectedCategory === "All Perspectives"
      ? insightsArticles
      : insightsArticles.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "KreaitX Insights & Perspectives",
    description: "Practical essays and strategic analysis on creative technology, brand longevity, modern engineering, and human-centered design.",
    url: `${siteConfig.url}/insights`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url
    },
    blogPost: insightsArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.excerpt,
      url: `${siteConfig.url}/insights/${article.slug}`,
      datePublished: "2025-01-01"
    }))
  };

  return (
    <>
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Insights Page Hero — Prussian Navy Brand Theme */}
      <section className="relative bg-[#17324D] text-white py-20 lg:py-28 border-b border-[#14213D] overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#416779]/20 via-[#14213D]/40 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#416779]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#14213D]/60 rounded-full blur-3xl pointer-events-none" />

        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#DCEEF2] px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-subtle mb-6 hover:border-[#DCEEF2]/50 transition-colors">
                <Sparkles className="h-3.5 w-3.5 text-[#DCEEF2] animate-pulse" />
                <span>Perspectives × Field Notes</span>
              </span>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold text-white tracking-tight leading-[1.08]">
                Insights for{" "}
                <span className="font-display font-bold not-italic bg-gradient-to-r from-white via-cyan-100 to-[#DCEEF2] bg-clip-text text-transparent">
                  what&apos;s next
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed font-sans font-normal max-w-2xl">
                Ideas, strategies and field-tested perspectives at the intersection of brand creativity, modern software engineering, and real-world commercial impact.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="cyan" size="md" withArrow className="w-full sm:w-auto min-h-[48px] font-bold shadow-lg">
                  Start a Project
                </Button>
                <a
                  href="#articles-feed"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 shadow-sm transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5"
                >
                  Read Perspectives ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Filter Bar */}
      <section id="articles-feed" className="bg-white border-b border-[#E2E8EF] py-4 sticky top-[65px] z-30 shadow-sm">
        <Container size="default">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-[#596A7B] hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={selectedCategory === cat}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-semibold transition-all cursor-pointer shrink-0 min-h-[40px] ${
                    selectedCategory === cat
                      ? "bg-[#17324D] text-white shadow-brand-button"
                      : "bg-[#F4F7FA] text-[#25313D] hover:bg-[#EDF2F6] hover:text-[#17324D] border border-[#E2E8EF]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-xs font-sans font-semibold text-[#596A7B] shrink-0 hidden md:block">
              Showing {filteredArticles.length} Essays
            </span>
          </div>
        </Container>
      </section>

      {/* Articles Stream */}
      <section className="bg-slate-50/50 py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto">
              <BookOpen className="h-10 w-10 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-display font-bold text-slate-900 mb-2">
                No essays found
              </h3>
              <p className="text-sm text-slate-600 mb-6 font-sans">
                We couldn&apos;t find any articles under the &ldquo;{selectedCategory}&rdquo; category.
              </p>
              <button
                type="button"
                onClick={() => setSelectedCategory("All Perspectives")}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#003049] min-h-[40px]"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="space-y-12 sm:space-y-16">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  id={article.slug}
                  className="scroll-mt-32 rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 p-5 sm:p-10 lg:p-12 overflow-hidden"
                >
                  {/* Meta Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className="px-3.5 py-1 rounded-full bg-[#003049]/5 text-[#003049] border border-[#003049]/15 text-xs font-semibold uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {article.publishDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Clock className="h-3.5 w-3.5 text-[#42C6D9]" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Article Body */}
                  <div className="mt-8 space-y-6">
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                      <Link
                        href={`/insights/${article.slug}`}
                        className="hover:text-[#003049] transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-lg text-slate-700 font-sans font-normal leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Key Takeaways Box */}
                    <div className="rounded-2xl bg-[#F7F8FA] p-6 sm:p-8 border border-slate-200/70 my-8">
                      <span className="text-xs font-sans uppercase tracking-wider text-[#003049] font-bold block mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#42C6D9]" />
                        Executive Summary &amp; Core Takeaways
                      </span>
                      <ul className="space-y-2.5">
                        {article.keyTakeaways.map((takeaway) => (
                          <li
                            key={takeaway}
                            className="flex items-start gap-2.5 text-sm text-slate-800 font-medium"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#003049] shrink-0 mt-0.5" />
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Excerpt preview & Read Full Article Button */}
                    <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <span className="text-xs text-slate-400 font-sans">
                        Full analysis available with structured takeaways
                      </span>
                      <Link
                        href={`/insights/${article.slug}`}
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-sans font-semibold text-white bg-[#003049] hover:bg-[#14213D] shadow-brand-button transition-all duration-200"
                      >
                        <span>Read Full Essay</span>
                        <ArrowRight className="h-4 w-4 text-[#42C6D9] transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Conversion CTA */}
      <CTASection />
    </>
  );
};

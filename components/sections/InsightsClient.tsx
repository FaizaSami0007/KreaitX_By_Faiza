"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle2, Filter, BookOpen } from "lucide-react";
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

      {/* Insights Page Hero — Porcelain #F7F5F0 Canvas */}
      <section className="relative bg-[#F7F5F0] text-[#34312F] py-20 lg:py-28 border-b border-[#E5E1DA] overflow-hidden">
        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#EC5D17] px-3.5 py-1.5 rounded-md bg-[#FFF0E8] border border-[#E5E1DA] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#EC5D17]" />
                <span>Perspectives × Field Notes</span>
              </span>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold text-[#34312F] tracking-tight leading-[1.08]">
                Insights for{" "}
                <span className="font-display font-bold text-[#EC5D17]">
                  what&apos;s next
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#6B6560] leading-relaxed font-sans font-normal max-w-2xl">
                Ideas, strategies and field-tested perspectives at the intersection of brand creativity, modern software engineering, and real-world commercial impact.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="cyan" size="md" withArrow className="w-full sm:w-auto min-h-[48px] font-bold">
                  Start a Project
                </Button>
                <a
                  href="#articles-feed"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-lg text-sm font-semibold text-[#34312F] bg-white hover:bg-[#F7F5F0] hover:text-[#EC5D17] border border-[#E5E1DA] transition-all duration-200 w-full sm:w-auto shadow-xs"
                >
                  Read Perspectives ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Filter Bar */}
      <section id="articles-feed" className="bg-[#F7F5F0] border-b border-[#E5E1DA] py-4 sticky top-[65px] z-30 shadow-xs">
        <Container size="default">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-[#6B6560] hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={selectedCategory === cat}
                  className={`px-4 py-2 rounded-md text-xs sm:text-sm font-sans font-semibold transition-all cursor-pointer shrink-0 min-h-[40px] ${
                    selectedCategory === cat
                      ? "bg-[#34312F] text-white shadow-sm"
                      : "bg-white text-[#34312F] hover:border-[#34312F]/30 border border-[#E5E1DA]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-xs font-sans font-semibold text-[#6B6560] shrink-0 hidden md:block">
              Showing {filteredArticles.length} Essays
            </span>
          </div>
        </Container>
      </section>

      {/* Articles Stream */}
      <section className="bg-[#F7F5F0] py-20 sm:py-28 border-b border-[#E5E1DA]">
        <Container size="default">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl border border-[#E5E1DA] p-8 max-w-lg mx-auto">
              <BookOpen className="h-10 w-10 text-[#6B6560] mx-auto mb-4" />
              <h3 className="text-lg font-display font-bold text-[#34312F] mb-2">
                No essays found
              </h3>
              <p className="text-sm text-[#6B6560] mb-6 font-sans">
                We couldn&apos;t find any articles under the &ldquo;{selectedCategory}&rdquo; category.
              </p>
              <button
                type="button"
                onClick={() => setSelectedCategory("All Perspectives")}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#34312F] hover:bg-[#EC5D17] min-h-[40px] transition-colors"
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
                  className="scroll-mt-32 rounded-xl bg-white border border-[#E5E1DA] shadow-xs hover:border-[#EC5D17] transition-all duration-200 p-6 sm:p-10 lg:p-12 overflow-hidden"
                >
                  {/* Meta Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E1DA]">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-md bg-[#FFF0E8] text-[#EC5D17] border border-[#E5E1DA] text-xs font-semibold uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs text-[#6B6560] font-medium">
                        {article.publishDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#6B6560] font-medium">
                      <Clock className="h-3.5 w-3.5 text-[#EC5D17]" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Article Body */}
                  <div className="mt-8 space-y-6">
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#34312F] tracking-tight leading-tight">
                      <Link
                        href={`/insights/${article.slug}`}
                        className="hover:text-[#EC5D17] transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-lg text-[#6B6560] font-sans font-normal leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Key Takeaways Box */}
                    <div className="rounded-xl bg-[#F7F5F0] p-6 sm:p-8 border border-[#E5E1DA] my-8">
                      <span className="text-xs font-sans uppercase tracking-wider text-[#EC5D17] font-bold block mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#EC5D17]" />
                        Executive Summary &amp; Core Takeaways
                      </span>
                      <ul className="space-y-2.5">
                        {article.keyTakeaways.map((takeaway) => (
                          <li
                            key={takeaway}
                            className="flex items-start gap-2.5 text-sm text-[#34312F] font-medium"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#EC5D17] shrink-0 mt-0.5" />
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Excerpt preview & Read Full Article Button */}
                    <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <span className="text-xs text-[#6B6560] font-sans">
                        Full analysis available with structured takeaways
                      </span>
                      <Link
                        href={`/insights/${article.slug}`}
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-sans font-semibold text-white bg-[#34312F] hover:bg-[#EC5D17] transition-colors duration-200"
                      >
                        <span>Read Full Essay</span>
                        <ArrowRight className="h-4 w-4 text-[#EC5D17] group-hover:text-white transition-colors duration-200" />
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

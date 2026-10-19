import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Calendar,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { insightsArticles, siteConfig } from "@/data/siteData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Pre-render all 3 verified essay routes
export async function generateStaticParams() {
  return insightsArticles.map((article) => ({
    slug: article.slug
  }));
}

// Generate tailored SEO metadata for each essay
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found — KreaitX",
      description: "The requested KreaitX insight essay does not exist."
    };
  }

  const title = `${article.title} — KreaitX Insights`;
  const description = article.excerpt;
  const url = `${siteConfig.url}/insights/${article.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: siteConfig.name,
      publishedTime: "2025-01-01"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const articleIndex = insightsArticles.findIndex((a) => a.slug === slug);

  if (articleIndex === -1) {
    notFound();
  }

  const article = insightsArticles[articleIndex];

  // Pagination: Previous and Next article
  const prevArticle =
    articleIndex > 0
      ? insightsArticles[articleIndex - 1]
      : insightsArticles[insightsArticles.length - 1];
  const nextArticle =
    articleIndex < insightsArticles.length - 1
      ? insightsArticles[articleIndex + 1]
      : insightsArticles[0];

  // Structured Data Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: "2025-01-01",
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/insights/${article.slug}`
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: `${siteConfig.url}/insights`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteConfig.url}/insights/${article.slug}`
      }
    ]
  };

  return (
    <>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-[#FFF9F0] border-b border-[#E9E0F2] py-3.5 text-xs font-sans text-[#625A70]">
        <Container size="default">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-[#6A00F4] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#625A70]/60" />
            <Link href="/insights" className="hover:text-[#6A00F4] transition-colors">
              Insights
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#625A70]/60" />
            <span className="text-[#211832] font-semibold truncate max-w-xs sm:max-w-md">
              {article.title}
            </span>
          </nav>
        </Container>
      </div>

      {/* Article Header Hero */}
      <section className="relative overflow-hidden bg-[#21113D] text-white py-16 sm:py-20 lg:py-24 border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#6A00F4]/20 via-[#390080]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FFD6A5]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#6A00F4]/20 rounded-full blur-3xl pointer-events-none" />

        <Container size="default" className="relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <Reveal yOffset={12}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFD6A5] border border-white/15 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                  {article.category}
                </span>
                <span className="text-xs font-sans text-slate-300 font-medium flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-[#FFD6A5]" />
                  {article.publishDate}
                </span>
                <span className="text-xs font-sans text-slate-300 font-medium flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#FFD6A5]" />
                  {article.readTime}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08} yOffset={16}>
              <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.12]">
                {article.title}
              </h1>
            </Reveal>

            <Reveal delay={0.14} yOffset={14}>
              <p className="text-lg sm:text-xl text-[#F3ECFF] leading-relaxed font-sans font-normal">
                {article.excerpt}
              </p>
            </Reveal>

            {/* Author / Studio attribution bar */}
            <Reveal delay={0.2} yOffset={12}>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 text-[#FFD6A5] flex items-center justify-center font-display font-bold text-xs">
                    KX
                  </div>
                  <div>
                    <span className="font-semibold text-white block">KreaitX Editorial</span>
                    <span className="text-slate-300">Creative Technology &amp; Digital Growth</span>
                  </div>
                </div>
                <div className="hidden sm:block text-slate-400">
                  Published in Peshawar, Pakistan
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Article Long-Form Body */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E9E0F2]">
        <Container size="default">
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Key Takeaways Callout Box */}
            <div className="rounded-3xl bg-[#FFF9F0] border border-[#E9E0F2] p-7 sm:p-9 shadow-subtle">
              <span className="text-xs font-sans uppercase tracking-wider text-[#6A00F4] font-bold block mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6A00F4]" />
                Executive Summary &amp; Core Takeaways
              </span>
              <ul className="space-y-3.5">
                {article.keyTakeaways.map((takeaway) => (
                  <li
                    key={takeaway}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#211832] font-medium"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#6A00F4] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Content Paragraphs */}
            <div className="prose prose-slate max-w-none space-y-6 text-base sm:text-lg text-[#625A70] leading-relaxed font-sans font-normal">
              {article.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="leading-[1.75]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* In-Article Cross Link to Solutions */}
            <div className="pt-8 border-t border-[#E9E0F2]">
              <div className="p-6 rounded-2xl bg-[#21113D] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-display font-bold text-white mb-1">
                    Ready to engineer these principles into your business?
                  </h3>
                  <p className="text-xs text-[#F3ECFF] font-sans">
                    Explore our integrated services across branding, video production, and web platforms.
                  </p>
                </div>
                <Button
                  href="/solutions"
                  variant="primary"
                  size="sm"
                  withArrow
                  className="shrink-0"
                >
                  Explore Solutions
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Pagination Switcher */}
      <section className="bg-[#FFF9F0] py-12 sm:py-16 border-b border-[#E9E0F2]">
        <Container size="default">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href={`/insights/${prevArticle.slug}`}
              className="group flex items-center gap-3 text-left w-full sm:w-auto p-4 rounded-2xl bg-white hover:bg-[#F3ECFF]/30 border border-[#E9E0F2] transition-all duration-200 shadow-subtle"
            >
              <div className="w-9 h-9 rounded-full bg-[#F3ECFF] text-[#6A00F4] group-hover:bg-[#6A00F4] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#625A70] block">
                  Previous Essay
                </span>
                <span className="text-xs sm:text-sm font-display font-bold text-[#211832] group-hover:text-[#6A00F4] transition-colors truncate max-w-[200px] block">
                  {prevArticle.title}
                </span>
              </div>
            </Link>

            <Link
              href="/insights"
              className="px-5 py-2.5 rounded-full text-xs font-sans font-semibold text-[#625A70] hover:text-[#211832] bg-white hover:bg-[#F3ECFF] border border-[#E9E0F2] shadow-subtle transition-all"
            >
              All Essays
            </Link>

            <Link
              href={`/insights/${nextArticle.slug}`}
              className="group flex items-center gap-3 text-right w-full sm:w-auto justify-end p-4 rounded-2xl bg-white hover:bg-[#F3ECFF]/30 border border-[#E9E0F2] transition-all duration-200 shadow-subtle"
            >
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#625A70] block">
                  Next Essay
                </span>
                <span className="text-xs sm:text-sm font-display font-bold text-[#211832] group-hover:text-[#6A00F4] transition-colors truncate max-w-[200px] block">
                  {nextArticle.title}
                </span>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#F3ECFF] text-[#6A00F4] group-hover:bg-[#6A00F4] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* Conversion CTA */}
      <CTASection />
    </>
  );
}

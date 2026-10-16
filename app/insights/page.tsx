import type { Metadata } from "next";
import { InsightsClient } from "@/components/sections/InsightsClient";
import { siteConfig, insightsArticles } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Insights & Perspectives — KreaitX",
  description: "Practical essays and strategic analysis on creative technology, brand longevity, modern engineering, and human-centered design.",
  alternates: {
    canonical: `${siteConfig.url}/insights`
  },
  openGraph: {
    title: "Insights & Perspectives — KreaitX",
    description: "Practical essays and strategic analysis on creative technology, brand longevity, modern engineering, and human-centered design.",
    url: `${siteConfig.url}/insights`,
    type: "website",
    siteName: siteConfig.name
  }
};

export default function InsightsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "KreaitX Insights & Perspectives",
    description: "Practical essays and strategic analysis on creative technology, brand longevity, and human-centered engineering.",
    url: `${siteConfig.url}/insights`,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: insightsArticles.map((article, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: article.title,
        url: `${siteConfig.url}/insights/${article.slug}`,
        description: article.excerpt
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InsightsClient />
    </>
  );
}

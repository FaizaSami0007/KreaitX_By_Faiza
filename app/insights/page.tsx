import type { Metadata } from "next";
import { InsightsClient } from "@/components/sections/InsightsClient";
import { siteConfig } from "@/data/siteData";

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
  return <InsightsClient />;
}

import type { Metadata } from "next";
import { WorkClient } from "@/components/sections/WorkClient";
import { siteConfig, projectCaseStudies } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies — KreaitX",
  description: "Explore real projects and verified business impact delivered by KreaitX across Healthcare, Luxury Retail, and Financial Technology.",
  alternates: {
    canonical: `${siteConfig.url}/work`
  },
  openGraph: {
    title: "Selected Work & Case Studies — KreaitX",
    description: "Explore real projects and verified business impact delivered by KreaitX across Healthcare, Luxury Retail, and Financial Technology.",
    url: `${siteConfig.url}/work`,
    type: "website",
    siteName: siteConfig.name
  }
};

export default function WorkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "KreaitX Selected Work & Case Studies",
    description: "Verified client case studies and outcomes delivered across Healthcare, Luxury Retail, and Financial Technology.",
    url: `${siteConfig.url}/work`,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projectCaseStudies.map((project, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: project.title,
        url: `${siteConfig.url}/work/${project.slug}`,
        description: project.summary
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkClient />
    </>
  );
}

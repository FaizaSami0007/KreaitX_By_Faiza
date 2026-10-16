import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ContactClient } from "@/components/sections/ContactClient";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Start a Conversation — Contact KreaitX",
  description: "Discuss your upcoming brand, cinematic production, or digital engineering initiative with the senior team at KreaitX in Peshawar, Pakistan.",
  alternates: {
    canonical: `${siteConfig.url}/contact`
  },
  openGraph: {
    title: "Start a Conversation — Contact KreaitX",
    description: "Discuss your upcoming brand, cinematic production, or digital engineering initiative with the senior team at KreaitX in Peshawar, Pakistan.",
    url: `${siteConfig.url}/contact`,
    type: "website",
    siteName: siteConfig.name
  }
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact KreaitX",
    description: "Start a project inquiry or schedule a consultation with the KreaitX studio team.",
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.legalName,
      alternateName: siteConfig.name,
      url: siteConfig.url,
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.contact.email,
        contactType: "customer service",
        availableLanguage: ["English", "Urdu"]
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <ContactClient />
      </Suspense>
    </>
  );
}

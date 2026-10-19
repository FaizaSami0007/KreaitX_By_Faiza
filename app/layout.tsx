import type { Metadata, Viewport } from "next";
import { Manrope, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { siteConfig } from "@/data/siteData";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"]
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"]
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
  fallback: ["Georgia", "serif"]
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "creative technology",
    "branding agency",
    "digital solutions",
    "Peshawar creative agency",
    "commercial filming",
    "2D animation",
    "web development Pakistan",
    "digital marketing",
    "social media management",
    "UX design"
  ],
  authors: [{ name: "KreaitX Creative Technology" }],
  creator: "KreaitX",
  publisher: "KreaitX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    creator: "@kreaitx"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#organization`
      }
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      description: siteConfig.description,
      url: siteConfig.url,
      logo: `${siteConfig.url}/favicon.ico`,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressRegion: "Khyber Pakhtunkhwa",
        addressCountry: siteConfig.location.country
      },
      priceRange: "$$",
      email: siteConfig.contact.email,
      sameAs: [
        siteConfig.social.linkedin,
        siteConfig.social.instagram,
        siteConfig.social.x,
        siteConfig.social.github
      ]
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${inter.variable} ${instrumentSerif.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Auto-unregister stale service workers and clear cache storage from other local projects */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.getRegistrations().then(function(regs) {
                    for (var r of regs) { r.unregister(); }
                  });
                }
                if ('caches' in window) {
                  caches.keys().then(function(names) {
                    for (var n of names) { caches.delete(n); }
                  });
                }
              }
            `
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="flex min-h-screen flex-col bg-white font-sans text-slate-900 antialiased selection:bg-[#003049] selection:text-white"
      >
        <GoogleAnalytics />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

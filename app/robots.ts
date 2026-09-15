import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteData";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"]
    },
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}

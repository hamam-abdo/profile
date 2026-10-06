import type { MetadataRoute } from "next";
import { SITE, isIndexable } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isIndexable
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" }, // preview deployments only
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}

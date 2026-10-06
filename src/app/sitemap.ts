import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Single-page site: the home page is the only public URL. Same form as the
// canonical Next.js emits for "/" (origin, no trailing slash).
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE.url, changeFrequency: "monthly", priority: 1 }];
}

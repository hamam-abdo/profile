/*
 * The site origin, read once from NEXT_PUBLIC_SITE_URL (.env.production /
 * .env.development) by metadata, sitemap, robots and JSON-LD. A missing
 * value fails the build instead of shipping wrong canonical URLs.
 */
const url = process.env.NEXT_PUBLIC_SITE_URL;
if (!url) throw new Error("NEXT_PUBLIC_SITE_URL is not set");

export const SITE = {
  url: url.replace(/\/$/, ""),
  name: "Hamam Sadek",
};

/* Only the production deployment may be indexed. Vercel previews set
   VERCEL_ENV="preview"; local/off-Vercel builds have no VERCEL_ENV. */
export const isIndexable =
  !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production";

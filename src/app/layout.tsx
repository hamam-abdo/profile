import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { colors } from "@/constants/tokens";
import { SITE, isIndexable } from "@/lib/site";

// Geist woff2 subset to Latin + arrows (~35 KB each instead of ~67 KB).
// display "optional": if the font isn't ready in the first ~100ms (slow
// first visit), that view keeps the metric-matched fallback instead of
// swapping — swap shifted the hero (CLS 0.196) and re-laid out the page.
// Re-subset if the copy ever needs other scripts (e.g. Arabic).
const geistSans = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "optional",
});
const geistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "optional",
  // next/font's default fallback is metric-adjusted Arial, which isn't
  // monospace — code would lose its shape whenever "optional" keeps the
  // fallback. Fall back to the system mono stack instead.
  adjustFontFallback: false,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Hamam Sadek | Front-End Developer",
    template: "%s | Hamam Sadek",
  },
  applicationName: SITE.name,
  // Mirrors the hero: the claim plus both proofs (Orderly, client work)
  description:
    "Front-End Developer shipping web apps end to end with Next.js, React and TypeScript. Solo-built Orderly, a multi-tenant SaaS, and a client website + admin CMS.",
  keywords: [
    "Hamam Sadek",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Full-Stack Developer",
    "Web Developer",
    "Portfolio",
    "Tailwind CSS",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    url: "/",
    title: "Hamam Sadek | Front-End Developer",
    description:
      "Front-End Developer building production web apps end to end, from interface to database. Live projects: Orderly SaaS and a client site with admin CMS.",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamam Sadek | Front-End Developer",
    description:
      "Front-End Developer building production web apps end to end, from interface to database. Live projects: Orderly SaaS and a client site with admin CMS.",
  },
  // Previews are noindex; canonical is set per page (see app/page.tsx)
  robots: { index: isIndexable, follow: isIndexable },
};

export const viewport: Viewport = {
  themeColor: colors.canvas,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className="antialiased"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}

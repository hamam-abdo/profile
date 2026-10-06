import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { colors } from "@/constants/tokens";
import { SITE, isIndexable } from "@/lib/site";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Hamam Sadek | Front-End Developer",
    template: "%s | Hamam Sadek",
  },
  description:
    "Front-End Developer (Next.js, React, TypeScript) shipping full-stack web apps with PostgreSQL and Prisma. Solo-built Orderly, a multi-tenant restaurant SaaS.",
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
  authors: [{ name: "Hamam Sadek" }],
  creator: "Hamam Sadek",
  openGraph: {
    type: "website",
    url: "/",
    title: "Hamam Sadek | Front-End Developer",
    description:
      "Front-End Developer: Next.js, React, TypeScript. Production web apps end to end, up to backend and database. See live projects.",
    siteName: "Hamam Sadek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamam Sadek | Front-End Developer",
    description:
      "Front-End Developer: Next.js, React, TypeScript. Full-stack with PostgreSQL, Prisma and Supabase.",
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

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

const siteUrl = "https://hamam-sadek.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hamam Sadek — Front-End Developer",
    template: "%s | Hamam Sadek",
  },
  description:
    "Portfolio of Hamam Sadek, a Front-End Developer specializing in React, Next.js and Tailwind CSS — building fast, accessible and beautiful web interfaces.",
  keywords: [
    "Hamam Sadek",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Portfolio",
    "Tailwind CSS",
  ],
  authors: [{ name: "Hamam Sadek" }],
  creator: "Hamam Sadek",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Hamam Sadek — Front-End Developer",
    description:
      "Front-End Developer specializing in React, Next.js and Tailwind CSS. Explore my projects and skills.",
    siteName: "Hamam Sadek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamam Sadek — Front-End Developer",
    description:
      "Front-End Developer specializing in React, Next.js and Tailwind CSS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}

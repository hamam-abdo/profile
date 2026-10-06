import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Engagements from "@/components/Engagements";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { experience, profile, projects, socialLinks } from "@/constants";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/* Person JSON-LD — only facts that are visible on this page. */
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: SITE.url,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  knowsAbout: profile.stack,
  sameAs: socialLinks.map((l) => l.url),
  subjectOf: [
    ...projects
      .filter((p) => p.tier === "main")
      .map((p) => ({ "@type": "CreativeWork", name: p.title, url: p.live })),
    ...experience.map((job) => ({
      "@type": "CreativeWork",
      name: `${job.company} website`,
      url: job.url,
    })),
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <Header />
      <main id="main" className="container">
        <Hero />
        <Experience />
        <Projects />
        <Engagements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

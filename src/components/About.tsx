import { profile, stats } from "@/constants";
import Reveal from "./Reveal";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="container scroll-mt-24 py-20 sm:py-28">
      <Reveal>
        <h2 className="section-title">About Me</h2>
        <div className="mb-10 h-1 w-20 rounded-full bg-about-gradient" />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <p className="text-lg leading-relaxed text-gray-300">
            {profile.bio}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-accent" /> {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <FaEnvelope className="text-accent" /> {profile.email}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Let&apos;s talk
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              My Resume
            </a>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal className="md:col-span-2" delay={150}>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-line bg-card/60 p-5 text-center transition-colors hover:border-accent/60 md:flex md:items-center md:justify-between md:text-left"
              >
                <span className="block text-3xl font-extrabold text-gradient sm:text-4xl">
                  {s.value}
                </span>
                <span className="mt-1 block text-sm text-gray-400 md:mt-0">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

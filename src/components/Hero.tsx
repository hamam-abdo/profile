"use client";
import { Typewriter } from "react-simple-typewriter";
import { profile, socialLinks } from "@/constants";
import { FaArrowDown } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

export default function Hero() {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden pt-24"
    >
      {/* faint grain texture layer (kept from original brand feel) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] animate-grained"
        style={{ backgroundImage: "url('/h.png')" }}
      />

      <div className="container grid items-center gap-12 md:grid-cols-2">
        {/* Left: text */}
        <div className="animate-fade-down text-center md:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-card/50 px-4 py-1.5 text-sm text-gray-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Available for work
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </h1>

          <h2 className="mt-3 min-h-10 text-xl font-semibold text-gray-200 sm:text-3xl">
            <span className="text-accent-2">{"<"}</span>
            <Typewriter
              words={profile.roles}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={45}
              delaySpeed={1800}
            />
            <span className="text-accent-2">{" />"}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-gray-400 md:mx-0">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <HiOutlineDownload size={18} />
              Download CV
            </a>
          </div>

          {/* social row */}
          <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-gray-300 transition-all hover:-translate-y-1 hover:border-accent hover:text-accent"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: animated avatar */}
        <div className="flex justify-center md:justify-end">
          <div className="relative h-64 w-64 sm:h-80 sm:w-80">
            {/* rotating gradient ring */}
            <div
              className="absolute inset-0 animate-spin-slow rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #0ea5ea, #0bd1d1, transparent, #0ea5ea)",
                padding: "3px",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)",
              }}
            />
            {/* glow */}
            <div className="absolute inset-4 rounded-full bg-accent/20 blur-2xl" />
            {/* avatar core */}
            <div className="absolute inset-3 grid animate-float place-items-center rounded-full border border-line bg-linear-to-br from-card to-ink">
              <span className="text-7xl font-black text-gradient sm:text-8xl">
                {initials}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-400 sm:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="grid h-9 w-5 justify-center rounded-full border border-line pt-1.5">
          <span
            className="h-1.5 w-1.5 rounded-full bg-accent"
            style={{ animation: "scrollDot 1.8s ease-in-out infinite" }}
          />
        </span>
        <FaArrowDown className="animate-bounce text-accent" size={12} />
      </a>
    </section>
  );
}

"use client";
import { useState } from "react";
import { projects, earlierWork } from "@/constants";
import Image from "next/image";
import { FaPlayCircle, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./Reveal";

const categories = ["All Projects", "Next.js", "React"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="container scroll-mt-24 py-20 sm:py-28">
      <Reveal className="text-center">
        <h2 className="section-title">My Latest Projects</h2>
        <p className="mx-auto max-w-xl text-gray-400">
          A selection of things I&apos;ve designed and built — from landing
          pages to full-stack apps.
        </p>
      </Reveal>

      {/* Filter buttons */}
      <Reveal className="mt-10 flex flex-wrap justify-center gap-3" delay={100}>
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 sm:text-base ${
              selectedCategory === cat
                ? "border-transparent bg-about-gradient text-[#04121b]"
                : "border-line text-gray-300 hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </Reveal>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 3) * 100}>
            <article className="group h-full overflow-hidden rounded-2xl border border-line bg-card/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[0_20px_40px_-20px_rgba(14,165,234,0.45)]">
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.imge}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="project-img"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/10 to-transparent opacity-80" />
                <span className="absolute left-3 top-3 rounded-full border border-line bg-ink/80 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col p-5">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {project.tech && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((t: string, i: number) => (
                      <span
                        key={i}
                        className="rounded-md border border-line bg-ink/60 px-2.5 py-1 text-xs font-medium text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex items-center gap-5 border-t border-line/60 pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-2"
                  >
                    <FaExternalLinkAlt size={13} />
                    Live Demo
                  </a>
                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                    >
                      <FaPlayCircle size={15} />
                      Watch Video
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Earlier work — compact, so the featured projects stay the focus */}
      {selectedCategory === "All Projects" && (
        <Reveal className="mt-16" delay={100}>
          <div className="rounded-2xl border border-line bg-card/40 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white">Earlier Work</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-400">
              Corporate sites and landing pages built with HTML, CSS and
              JavaScript — all fully responsive and cross-browser tested.
            </p>

            <ul className="mt-6 flex flex-wrap gap-3">
              {earlierWork.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-line bg-ink/60 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    {item.title}
                    <span className="text-xs text-gray-500">{item.tech}</span>
                    <FaExternalLinkAlt size={10} className="opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}
    </section>
  );
}

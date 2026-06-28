import { projects } from "@/constants";
import Image from "next/image";
import Reveal from "./Reveal";
import { FaPlayCircle, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

export default function FeaturedProject() {
  const project = projects.find((p) => p.featured);
  if (!project) return null;

  return (
    <section id="featured" className="container scroll-mt-24 py-20 sm:py-28">
      <Reveal className="text-center">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
          ★ Latest Project
        </span>
        <h2 className="section-title">{project.title}</h2>
      </Reveal>

      <Reveal
        delay={120}
        className="mt-10 grid items-center gap-8 rounded-3xl border border-line bg-card/40 p-5 sm:p-8 lg:grid-cols-2"
      >
        {/* Screenshot */}
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block h-64 w-full overflow-hidden rounded-2xl border border-line sm:h-80 lg:h-96"
        >
          <Image
            src={project.imge}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="project-img"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent" />
        </a>

        {/* Details */}
        <div>
          {project.tech && (
            <div className="mb-4 flex flex-wrap gap-2">
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

          <p className="mb-6 text-base leading-relaxed text-gray-300 sm:text-lg">
            {project.description}
          </p>

          {project.highlights && (
            <ul className="mb-8 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-300"
                >
                  <FaCheckCircle className="mt-0.5 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FaExternalLinkAlt size={14} />
              Visit Live Site
            </a>
            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <FaPlayCircle size={16} />
                Watch Demo
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

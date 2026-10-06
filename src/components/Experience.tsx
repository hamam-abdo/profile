import { experience } from "@/constants";
import { HiArrowUpRight } from "react-icons/hi2";
import BrowserFrame from "./BrowserFrame";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Stack from "./Stack";

/* Client work: what was built on the left; the live site, its grouped stack
   and links on the right, so both columns end at about the same height. */
export default function Experience() {
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="scroll-mt-20 pt-24 sm:pt-32">
      <SectionHeading
        title="Client work"
        intro="Production website and admin CMS, built end to end from database to deployment."
        component="ClientWork"
      />

      <ol className="space-y-16">
        {experience.map((job) => (
          <Reveal
            as="li"
            key={job.company}
            className="grid gap-8 lg:grid-cols-12 lg:gap-12"
          >
            <article className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wide text-muted uppercase">
                {job.period}
              </p>
              <h3 className="mt-2 text-xl font-bold tracking-display">
                {job.company}
              </h3>
              <p className="text-muted">{job.role}</p>

              <ul className="mt-5 space-y-3 text-sm text-muted sm:text-base">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="relative ps-4 before:absolute before:inset-s-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-muted"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>

            <div className="lg:col-span-7">
              {job.imge && (
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open the ${job.company} live site`}
                  className="group block rounded-lg"
                >
                  <BrowserFrame
                    src={job.imge}
                    alt={`${job.company} public website homepage`}
                    url={job.url}
                    shot={job.shot}
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                </a>
              )}
              <div className="mt-5">
                <Stack tech={job.tech} groups={job.stackGroups} />
              </div>

              <ul className="mt-4 flex flex-wrap items-center divide-x divide-line">
                {job.links.map((l, i) => (
                  <li key={l.url} className="px-4 first:ps-0">
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex min-h-11 items-center gap-1.5 text-sm font-medium underline-offset-4 transition-colors hover:underline ${
                        i === 0 ? "text-fg" : "text-muted hover:text-fg"
                      }`}
                    >
                      {l.label}
                      <HiArrowUpRight aria-hidden="true" className="size-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

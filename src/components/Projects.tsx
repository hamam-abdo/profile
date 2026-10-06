import { projects } from "@/constants";
import { HiArrowUpRight, HiOutlinePlayCircle } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import BrowserFrame from "./BrowserFrame";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Stack from "./Stack";
import DotList from "./DotList";

type Project = (typeof projects)[number];

const slug = (p: Project) => p.title.toLowerCase().replace(/\s+/g, "-");

/* Plain text links with small icons, separated by hairlines. Live site
   is the one in colour; code and demo stay quiet. */
function ProjectLinks({ project }: { project: Project }) {
  const github = "github" in project ? project.github : undefined;
  const links = [
    { label: "Live site", url: project.live, Icon: HiArrowUpRight, main: true },
    { label: "Code", url: github, Icon: FaGithub, main: false },
    { label: "Video", url: project.video, Icon: HiOutlinePlayCircle, main: false },
  ].filter((l) => Boolean(l.url));

  return (
    <ul className="flex flex-wrap items-center divide-x divide-line">
      {links.map(({ label, url, Icon, main }) => (
        <li key={label} className="px-4 first:ps-0">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex min-h-11 items-center gap-1.5 text-sm font-medium underline-offset-4 transition-colors hover:underline ${
              main ? "text-fg" : "text-muted hover:text-fg"
            }`}
          >
            {!main && <Icon aria-hidden="true" className="size-4" />}
            {label}
            {main && <Icon aria-hidden="true" className="size-3.5" />}
          </a>
        </li>
      ))}
    </ul>
  );
}

/* The screenshot is a link to the live app; hovering pans the page. */
function Shot({ project, sizes }: { project: Project; sizes: string }) {
  return (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open the ${project.title} live site`}
      className="group block rounded-lg"
    >
      <BrowserFrame
        src={project.imge}
        alt={`${project.title}: ${"subtitle" in project ? project.subtitle : project.description}`}
        url={project.live}
        shot={"shot" in project ? project.shot : undefined}
        sizes={sizes}
      />
    </a>
  );
}

export default function Projects() {
  const main = projects.filter((p) => p.tier === "main");
  const more = projects.filter((p) => p.tier === "more");
  const featured = main.find((p) => p.featured);
  const rest = main.filter((p) => p !== featured);
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="scroll-mt-20 pt-24 sm:pt-32">
      <SectionHeading
        title="Projects"
        intro="Every project is deployed. Open it, use it, then read how it's built."
        component="Projects"
      />

      {/* Featured — screenshot beside the details and highlights */}
      {featured && (
        <Reveal
          as="article"
          className="relative grid gap-8 lg:grid-cols-12 lg:gap-12"
        >
          <span id={slug(featured)} className="absolute -top-24" />
          <div className="lg:col-span-7">
            <Shot
              project={featured}
              sizes="(max-width: 1024px) 100vw, 700px"
            />
          </div>

          <div className="lg:col-span-5">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-bold tracking-display sm:text-xl">
                {featured.title}
              </h3>
              {"label" in featured && featured.label && (
                <span className="pill">{featured.label}</span>
              )}
            </div>
            <p className="mt-1 text-lg text-muted">{featured.subtitle}</p>
            <p className="mt-4 text-muted">{featured.description}</p>

            {"highlights" in featured && featured.highlights && (
              <ul className="mt-5 space-y-3 text-muted">
                {featured.highlights.map((h) => (
                  <li
                    key={h}
                    className="relative ps-4 before:absolute before:start-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-muted"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="lg:col-span-12">
            <Stack
              tech={featured.tech}
              groups={"stackGroups" in featured ? featured.stackGroups : undefined}
              wide
            />
            <div className="mt-4">
              <ProjectLinks project={featured} />
            </div>
          </div>
        </Reveal>
      )}

      {/* The rest — equal-weight cards */}
      {rest.length > 0 && (
        <ol className="mt-20 grid gap-x-8 gap-y-14 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 80}
              className="relative grid gap-5 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-8 lg:flex lg:flex-col lg:gap-0"
            >
              <span id={slug(p)} className="absolute -top-24" />
              <Shot
                project={p}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 380px"
              />
              <div className="flex flex-1 flex-col">
                <h3 className="text-lg font-bold tracking-display lg:mt-5">
                  {p.title}
                </h3>
                {"subtitle" in p && <p className="text-muted">{p.subtitle}</p>}
                <p className="mt-3 text-muted">{p.description}</p>
                <div className="mt-4">
                  <Stack tech={p.tech} />
                </div>
                <div className="mt-auto pt-3">
                  <ProjectLinks project={p} />
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      )}

      {/* Earlier work — rows: name, what it is, stack, link */}
      {more.length > 0 && (
        <Reveal className="relative mt-20">
          <span id="more-work" className="absolute -top-24" />
          <h3 className="text-lg font-semibold">
            More work{" "}
            <span className="font-normal text-muted">
              · {more.length} earlier projects
            </span>
          </h3>

          <ul className="mt-4 divide-y divide-line border-y border-line">
            {more.map((p) => (
              <li key={p.title}>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} live site`}
                  className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-4 lg:grid-cols-[12rem_1fr_14rem_auto]"
                >
                  <span className="font-semibold group-hover:underline underline-offset-4">
                    {p.title}
                  </span>
                  <span className="order-3 col-span-2 text-muted lg:order-0 lg:col-span-1">
                    {p.description}
                  </span>
                  <span className="order-4 col-span-2 font-mono text-xs text-muted lg:order-0 lg:col-span-1">
                    <DotList items={p.tech} />
                  </span>
                  <HiArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </section>
  );
}

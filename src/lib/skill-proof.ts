import { experience, projects } from "@/constants";

export type Proof = { name: string; href: string };
export type SkillProof = {
  /** Client work and main projects, each linked on the page */
  work: Proof[];
  /** How many of the earlier corporate sites / OrderEasy also use it */
  earlier: number;
};

/* Names a skill or tech can go by: "PostgreSQL (Neon)" → ["postgresql",
   "neon"], "Next.js 16" → ["next.js"], "HTML5" → ["html"]. */
function aliases(raw: string): string[] {
  const lower = raw.toLowerCase();
  const inner = [...lower.matchAll(/\(([^)]*)\)/g)].flatMap((m) =>
    m[1].split(",")
  );
  return [lower.replace(/\([^)]*\)/g, ""), ...inner]
    .flatMap((a) => a.split("/"))
    .map((a) =>
      a
        .replace(/\s+v?\d+(\.\d+)*\+?$/, "") // trailing version: "16", "v4"
        .replace(/^([a-z]+)\d$/, "$1") // html5 → html, css3 → css
        .trim()
    )
    .filter((a) => a.length > 1);
}

const words = (s: string) => ` ${s} `;

/* Same tool when an alias matches exactly, or (for names longer than six
   characters) one appears as whole words inside the other —
   "neon postgresql" contains "postgresql". Short names must match exactly
   so "css" doesn't claim "Tailwind CSS" and "github" doesn't claim
   "GitHub Actions". */
function sameTool(a: string, b: string) {
  return aliases(a).some((x) =>
    aliases(b).some(
      (y) =>
        x === y ||
        (x.length > 6 && words(y).includes(words(x))) ||
        (y.length > 6 && words(x).includes(words(y)))
    )
  );
}

const slug = (title: string) => title.toLowerCase().replace(/\s+/g, "-");

/* Where a skill was actually used, from the same data the page renders.
   Strongest work first (client work, then main projects in CV order);
   earlier sites are only counted, so they never crowd out real proof. */
export function proofFor(skill: string): SkillProof {
  const uses = (tech: string[]) => tech.some((t) => sameTool(skill, t));
  return {
    work: [
      ...experience
        .filter((job) => uses(job.tech))
        .map((job) => ({ name: job.company, href: "#experience" })),
      ...projects
        .filter((p) => p.tier === "main" && uses(p.tech))
        .map((p) => ({ name: p.title, href: `#${slug(p.title)}` })),
    ],
    earlier: projects.filter((p) => p.tier === "more" && uses(p.tech)).length,
  };
}

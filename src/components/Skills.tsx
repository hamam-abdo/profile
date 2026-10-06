import { cvSkills, education, languages } from "@/constants";
import { proofFor, type SkillProof } from "@/lib/skill-proof";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/* Proof links are small text, so each one gets an invisible 44px-tall hit
   area (the ::after box) without changing the line's layout. */
const hit =
  "relative after:absolute after:-inset-x-1 after:-inset-y-[15px] after:content-['']";

function ProofLinks({ proof }: { proof: SkillProof }) {
  return (
    <span className="flex flex-wrap items-baseline gap-x-1.5 text-xs text-muted">
      <span>Used in</span>
      {proof.work.map((p, i) => (
        <span key={p.name}>
          <a
            href={p.href}
            className={`${hit} text-fg underline decoration-line-strong underline-offset-2 hover:decoration-fg`}
          >
            {p.name}
          </a>
          {(i < proof.work.length - 1 || proof.earlier > 0) && ","}
        </span>
      ))}
      {proof.earlier > 0 && (
        <a
          href="#more-work"
          className={`${hit} text-fg underline decoration-line-strong underline-offset-2 hover:decoration-fg`}
        >
          {proof.earlier} earlier {proof.earlier === 1 ? "site" : "sites"}
        </a>
      )}
    </span>
  );
}

/* "Next.js (App Router, …)" → name "Next.js", detail "App Router, …" */
function splitName(name: string) {
  const m = name.match(/^(.*?)\s*\((.*)\)$/);
  return m ? { main: m[1], detail: m[2] } : { main: name, detail: "" };
}

/* Skills with proof: each tool that a listed project uses links to that
   project, so the list reads as evidence, not keywords. Tools with no
   project behind them are listed plainly underneath: still from the CV,
   just not claimed as shipped work. */
export default function Skills() {
  if (cvSkills.length === 0) return null;

  return (
    <section id="skills" className="scroll-mt-20 pt-24 sm:pt-32">
      <SectionHeading
        title="Skills"
        intro="Where a tool shows up in shipped work, it links to it."
        component="Skills"
      />

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cvSkills.map((g, i) => {
          const rows = g.items.map((name) => ({ name, proof: proofFor(name) }));
          const shown = (r: { proof: SkillProof }) =>
            r.proof.work.length > 0 || r.proof.earlier > 0;
          const used = rows.filter(shown);
          const other = rows.filter((r) => !shown(r));

          return (
            <Reveal
              as="li"
              key={g.group}
              delay={(i % 3) * 80}
              className="flex flex-col rounded-lg border border-line bg-surface p-5 sm:p-6"
            >
              <h3 className="font-semibold">{g.group}</h3>

              {used.length > 0 && (
                <dl className="mt-4 divide-y divide-line">
                  {used.map((r) => (
                    <div key={r.name} className="py-2.5">
                      <dt className="text-sm font-medium">
                        {splitName(r.name).main}
                        {splitName(r.name).detail && (
                          <span className="ms-1.5 text-xs font-normal text-muted">
                            {splitName(r.name).detail}
                          </span>
                        )}
                      </dt>
                      <dd className="mt-0.5">
                        <ProofLinks proof={r.proof} />
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {other.length > 0 && (
                <p className="mt-4 text-sm text-muted">
                  {used.length > 0 && (
                    <span className="text-xs font-semibold tracking-wide uppercase">
                      Also ·{" "}
                    </span>
                  )}
                  {other.map((r) => r.name).join(", ")}
                </p>
              )}
            </Reveal>
          );
        })}
      </ul>

      <Reveal className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-line bg-surface p-5 sm:p-6">
          <h3 className="font-semibold">Training & education</h3>
          <ul className="mt-4 space-y-4">
            {education.map((e) => (
              <li
                key={e.title}
                className="grid gap-x-4 sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <p className="font-medium">{e.title}</p>
                  <p className="text-sm text-muted">
                    {e.org}
                    {e.detail && ` · ${e.detail}`}
                  </p>
                  {e.certificate && (
                    <a
                      href={e.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link inline-flex min-h-11 items-center text-sm"
                    >
                      Certificate
                    </a>
                  )}
                </div>
                <p className="row-start-1 font-mono text-xs text-muted sm:col-start-2 sm:pt-1">
                  {e.period}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-line bg-surface p-5 sm:p-6">
          <h3 className="font-semibold">Spoken languages</h3>
          <ul className="mt-4 space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between gap-4">
                <span className="font-medium">{l.name}</span>
                <span className="text-sm text-muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

import { engagements } from "@/constants";
import { HiArrowRight } from "react-icons/hi2";
import DotList from "./DotList";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/* What a client can hire me to build. Open columns, no boxes — each item
   points at the shipped work that proves it. */
export default function Engagements() {
  if (engagements.length === 0) return null;

  return (
    <section id="engagements" className="scroll-mt-20 pt-24 sm:pt-32">
      <SectionHeading
        title="Engagements"
        intro="What I can build for you. Each one is something I've already shipped."
        component="Engagements"
      />

      <ul className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {engagements.map((e, i) => (
          <Reveal
            as="li"
            key={e.title}
            delay={(i % 3) * 80}
            className="flex flex-col border-t border-line-strong pt-5"
          >
            <h3 className="text-lg font-semibold">{e.title}</h3>
            <p className="mt-2 text-muted">{e.summary}</p>
            <p className="mt-3 font-mono text-xs text-muted">
              <DotList items={e.tags} />
            </p>
            <p className="mt-auto flex flex-wrap items-center gap-x-4 pt-2 text-sm text-muted">
              Proof:
              {e.proofs.map((p) => (
                <a key={p.href} href={p.href} className="action">
                  {p.name}
                  <HiArrowRight size={12} aria-hidden="true" />
                </a>
              ))}
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

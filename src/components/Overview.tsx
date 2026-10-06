import { experience, profile, projects, yearsExperience } from "@/constants";

/* The profile as a TypeScript object — every value is read from
   constants, so the card can't say anything the CV doesn't. Lines appear
   once, in reading order; there is no typing loop. On narrow screens a long
   line wraps with a hanging indent, the way an editor soft-wraps. */
function CodeCard({ footer }: { footer?: React.ReactNode }) {
  const { role, stack, city, availability } = profile;
  const shipped = [
    projects.find((p) => p.featured)?.title,
    experience[0]?.company,
  ].filter(Boolean) as string[];

  const str = (v: string) => (
    <span className="whitespace-nowrap text-teal">&quot;{v}&quot;</span>
  );
  const list = (vs: string[]) => (
    <>
      [
      {vs.map((v, i) => (
        <span key={v}>
          {str(v)}
          {i < vs.length - 1 && ", "}
        </span>
      ))}
      ]
    </>
  );

  const lines = [
    <>
      <span className="text-code-keyword">export const</span> developer ={" "}
      {"{"}
    </>,
    <>
      {"  "}name: {str(profile.name)},
    </>,
    <>
      {"  "}role: {str(role)},
    </>,
    <>
      {"  "}stack: {list(stack)},
    </>,
    <>
      {"  "}shipped: {list(shipped)},
    </>,
    <>
      {"  "}based: {str(city)},
    </>,
    <>
      {"  "}remote:{" "}
      <span className="text-code-keyword">
        {String(/remote/i.test(availability))}
      </span>
      ,
    </>,
    <>{"};"}</>,
  ];

  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-surface">
      <figcaption className="flex items-center gap-3 border-b border-line px-4 py-2.5">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </span>
        <span className="font-mono text-2xs text-muted">src/developer.ts</span>
      </figcaption>
      <pre className="p-4 font-mono text-xs leading-6 sm:p-5 sm:text-sm sm:leading-7">
        <code>
          {lines.map((line, i) => (
            <span
              key={i}
              className="code-line grid grid-cols-[1.75rem_1fr]"
              style={{ animationDelay: `${100 + i * 60}ms` }}
            >
              <span aria-hidden="true" className="select-none text-line-strong">
                {i + 1}
              </span>
              <span className="ps-[4ch] -indent-[4ch] break-words whitespace-pre-wrap">
                {line}
              </span>
            </span>
          ))}
        </code>
      </pre>
      {footer}
    </figure>
  );
}

/* Right side of the hero: the code card with three counted facts as its
   footer — one object, not four loose boxes. Counted, not typed. */
export default function Overview() {
  const facts = [
    { value: yearsExperience, label: "Years" },
    { value: projects.length, label: "Live projects" },
    {
      value: experience.length,
      label: experience.length === 1 ? "Client build" : "Client builds",
    },
  ].filter((f) => f.value > 0);

  return (
    <CodeCard
      footer={
        <dl
          className="grid divide-x divide-line border-t border-line"
          style={{ gridTemplateColumns: `repeat(${facts.length}, minmax(0, 1fr))` }}
        >
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col-reverse items-center justify-end px-3 py-4 text-center sm:px-5">
              <dt className="mt-1 text-xs leading-snug text-balance text-muted">{f.label}</dt>
              <dd className="text-2xl font-bold tracking-display">{f.value}</dd>
            </div>
          ))}
        </dl>
      }
    />
  );
}

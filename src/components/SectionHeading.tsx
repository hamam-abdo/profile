/* Section heading: title, optional one-line intro, and the component name
   as a quiet front-end aside (hidden from assistive tech). */
export default function SectionHeading({
  title,
  intro,
  component,
}: {
  title: string;
  intro?: string;
  component: string;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-2 border-b border-line pb-6 sm:mb-12">
      <div className="max-w-2xl">
        <h2 className="text-xl font-bold tracking-display text-balance sm:text-2xl">
          {title}
        </h2>
        {intro && <p className="mt-3 text-lg text-pretty text-muted">{intro}</p>}
      </div>
      <span aria-hidden="true" className="font-mono text-xs text-muted">
        {`<${component} />`}
      </span>
    </div>
  );
}

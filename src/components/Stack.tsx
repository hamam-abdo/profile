import DotList from "./DotList";

type Group = { label: string; items: string[] };

const wideCols: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

/* A project's stack. With groups it reads as a small key/value table
   (role → tools); without, as one quiet line. No chips: a dozen equal
   boxes is noise. */
export default function Stack({
  tech,
  groups,
  wide = false,
}: {
  tech: string[];
  groups?: Group[];
  /** Spread groups across one row on large screens */
  wide?: boolean;
}) {
  if (groups && groups.length > 0) {
    return (
      <dl
        className={`grid gap-x-8 gap-y-3 border-t border-line pt-4 sm:grid-cols-2 ${
          wide ? wideCols[groups.length] ?? "" : ""
        }`}
      >
        {groups.map((g) => (
          <div key={g.label}>
            <dt className="text-xs font-semibold tracking-wide text-muted uppercase">
              {g.label}
            </dt>
            <dd className="mt-1 text-sm">
              <DotList items={g.items} />
            </dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <p className="font-mono text-xs leading-relaxed text-muted">
      <span className="sr-only">Stack: </span>
      <DotList items={tech} />
    </p>
  );
}

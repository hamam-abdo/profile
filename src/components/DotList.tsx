/* "Next.js · React · Tailwind CSS" as one text node: spaces inside a name
   are non-breaking and each "·" is glued to the item after it, so a line
   never splits a name or ends on a dangling "·". One node instead of a
   span per item keeps the DOM (and hydration) small. */
export default function DotList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const text = items
    .map((item) => item.replace(/ /g, "\u00a0"))
    .join(" \u00b7\u00a0");
  return className ? <span className={className}>{text}</span> : <>{text}</>;
}

import { Fragment } from "react";

/* "Next.js · React · Tailwind CSS" that never breaks inside a name and
   never leaves a "·" dangling at the end of a line: each item is
   unbreakable and carries its separator in front; lines break only at
   the plain space between items. */
export default function DotList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <span className={className}>
      {items.map((item, i) => (
        <Fragment key={item}>
          {i > 0 && " "}
          <span className="whitespace-nowrap">
            {i > 0 && "· "}
            {item}
          </span>
        </Fragment>
      ))}
    </span>
  );
}

"use client";
import { useEffect, useState } from "react";

/* The section currently in the middle of the viewport, as "#id".
   Returns "" while the hero (#top) is in view. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            setActive(e.target.id === "top" ? "" : `#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    ["top", ...ids].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/* Only the nav targets that actually rendered (e.g. no experience data →
   no "Client work" link). null until mounted. */
export function usePresentSections(paths: string[]) {
  const [present, setPresent] = useState<string[] | null>(null);
  useEffect(() => {
    setPresent(paths.filter((p) => document.querySelector(p)));
  }, [paths]);
  return present;
}

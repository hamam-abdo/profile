import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Unused since the scroll entrance was removed; kept so call sites compile. */
  delay?: number;
  as?: keyof HTMLElementTagNameMap;
};

/* Plain server-rendered wrapper. The scroll-entrance version was a client
   component with an IntersectionObserver per instance (20 on the page); its
   hydration and re-renders were the largest piece of Total Blocking Time on
   mobile, so the entrance was dropped (see CLAUDE.md, 2026-10-07). */
export default function Reveal({ children, className, as = "div" }: RevealProps) {
  const Tag = as as "div";
  return <Tag className={className}>{children}</Tag>;
}

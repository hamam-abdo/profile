"use client";
import { useState, useEffect, useRef } from "react";
import { navLinks, profile } from "@/constants";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { useActiveSection, usePresentSections } from "@/hooks/use-active-section";

const sectionPaths = navLinks.filter((l) => l.path.startsWith("#")).map((l) => l.path);
const sectionIds = sectionPaths.map((p) => p.slice(1));

/* Fixed top bar: section links with the current one marked, resume as the
   one button. Collapses to a menu below lg. */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection(sectionIds);
  const present = usePresentSections(sectionPaths);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escape closes the menu and returns focus to its toggle
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const links = navLinks.filter(
    (l) => !l.path.startsWith("#") || !present || present.includes(l.path)
  );

  return (
    <>
      {/* First tab stop: lets keyboard users jump past the nav */}
      <a
        href="#main"
        className="fixed top-2 left-2 z-[60] -translate-y-20 rounded-md bg-fg px-4 py-3 text-sm font-semibold text-canvas focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
          scrolled || isOpen
            ? "border-line bg-canvas/90 backdrop-blur-md"
            : "border-transparent"
        }`}
      >
        <nav className="container flex h-16 items-center justify-between">
          <a href="#top" className="flex min-h-11 items-center font-semibold">
            {profile.name}
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) =>
              link.path.startsWith("#") ? (
                <li key={link.path}>
                  <a
                    href={link.path}
                    aria-current={active === link.path ? "true" : undefined}
                    className={`inline-flex min-h-11 items-center px-3 text-sm font-medium transition-colors ${
                      active === link.path ? "text-fg underline underline-offset-[6px]" : "text-muted hover:text-fg"
                    }`}
                  >
                    {link.title}
                  </a>
                </li>
              ) : (
                <li key={link.path} className="ms-3">
                  <Button asChild variant="outline">
                    <a href={link.path} target={link.target} rel={link.rel}>
                      {link.title}
                    </a>
                  </Button>
                </li>
              )
            )}
          </ul>

          <Button
            ref={toggleRef}
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setIsOpen((p) => !p)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="lg:hidden [&_svg:not([class*='size-'])]:size-5"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </Button>
        </nav>

        {isOpen && (
          <div id="mobile-menu" className="menu-panel border-t border-line lg:hidden">
            <ul className="container flex flex-col py-2">
              {links.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    target={link.target}
                    rel={link.rel}
                    onClick={() => setIsOpen(false)}
                    aria-current={active === link.path ? "true" : undefined}
                    className={`flex min-h-12 items-center text-base font-medium ${
                      active === link.path ? "text-fg underline underline-offset-4" : "text-muted"
                    }`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

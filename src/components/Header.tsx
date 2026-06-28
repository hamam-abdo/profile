"use client";
import { useState, useEffect } from "react";
import { navLinks, profile } from "@/constants";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const ids = navLinks
      .filter((l) => l.path.startsWith("#"))
      .map((l) => l.path.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-line/60 bg-ink/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-white"
        >
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => {
            const isResume = !link.path.startsWith("#");
            if (isResume)
              return (
                <li key={i} className="ml-2">
                  <a
                    href={link.path}
                    target={link.target}
                    rel={link.rel}
                    className="btn-primary px-5! py-2! text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              );
            return (
              <li key={i}>
                <a
                  href={link.path}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === link.path
                      ? "text-accent"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((p) => !p)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-white md:hidden"
        >
          {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line/60 bg-ink/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="container flex flex-col gap-1 py-4">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.path}
                target={link.target}
                rel={link.rel}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  active === link.path
                    ? "bg-card text-accent"
                    : "text-gray-300 hover:bg-card hover:text-white"
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

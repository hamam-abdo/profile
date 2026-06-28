import { profile, navLinks, socialLinks } from "@/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line/60 bg-ink/60">
      <div className="container flex flex-col items-center gap-6 py-10 text-center">
        <a href="#home" className="text-2xl font-bold text-white">
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
          {navLinks
            .filter((l) => l.path.startsWith("#"))
            .map((link, i) => (
              <li key={i}>
                <a href={link.path} className="transition-colors hover:text-accent">
                  {link.title}
                </a>
              </li>
            ))}
        </ul>

        <div className="flex gap-3">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-gray-300 transition-all hover:-translate-y-1 hover:border-accent hover:text-accent"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

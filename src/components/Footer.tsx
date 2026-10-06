import { profile } from "@/constants";

export default function Footer() {
  return (
    <footer className="container mt-24 flex flex-col gap-1 border-t border-line py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:mt-32">
      <p>
        Built by {profile.name} with Next.js, React, TypeScript and Tailwind
        CSS.
      </p>
      <div className="flex flex-wrap gap-x-6">
        <a
          href={profile.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="link inline-flex min-h-11 items-center"
        >
          Resume (PDF)
        </a>
        <a href="#top" className="link inline-flex min-h-11 items-center">
          Back to top
        </a>
      </div>
    </footer>
  );
}

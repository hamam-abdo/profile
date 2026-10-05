# Hamam Sadek portfolio

## Position (required — the design rules depend on this)
- **What it is:** Portfolio of Hamam Sadek — front-end developer (2 years)
  who ships production web apps end to end with Next.js, React and
  TypeScript, up to backend and database. Proof: a production site + admin
  CMS delivered for a client (Zerodroid Labs), and Orderly, a multi-tenant
  restaurant SaaS built solo.
- **Who reads it, and what they're deciding:**
  - a tech recruiter or hiring manager deciding whether to interview him
    for a front-end / full-stack role
  - a freelance client deciding whether to trust him to build their app
  They decide in under a minute, from live projects they can click, not
  from skill lists.
- **Must NOT look like:** a generic developer portfolio template (skill
  bars, icon grids, "Hi, I'm…"), an over-animated Dribbble showcase, or a
  plain CV page.
- **Language/direction:** English
- **Production URL:** https://hamam-sadek.vercel.app


## Stack
<!-- Claude: if any field below is still a placeholder, fill it from the code
     and show the user before doing other work. -->
- Framework: Next.js 16 (App Router, TypeScript), React 19 — single page
  (`src/app/page.tsx`) composed of section components in `src/components/`
- Styling: Tailwind CSS v4, CSS-first config (`@theme` tokens, keyframes and
  utility classes in `src/app/globals.css`, via `@tailwindcss/postcss`);
  Geist / Geist Mono as local fonts (`src/app/fonts/`); icons from
  `react-icons`
- Data: `src/constants/index.jsx` — `profile`, `stats`, `navLinks`,
  `skillGroups`, `projects`, `socialLinks`. Section headings and some copy
  are still hardcoded in `src/components/*.tsx`; SEO metadata lives in
  `src/app/layout.tsx` and `src/app/opengraph-image.tsx`
- Brand assets: `public/` — project screenshots (`Orderly.png`, `Zawwaqa.png`
  …), skill logos (`html.png`, `ts.png`, `next.svg` …), grain texture
  `h.png`, CV `Hamam_Sadek_CV.pdf`; favicon `src/app/favicon.ico`. Accent
  colours `#0ea5ea` / `#0bd1d1` on ink `#0a0a0f` (globals.css `@theme`). No
  logo or photo — the hero uses initials
- i18n: next-intl (for any multi-language site — don't pick another library)

## Content source
- `public/Hamam_Sadek_CV.pdf` is the single source of truth for all site
  content. Nothing on the site may claim something the CV doesn't.
- Every CV link points to `/Hamam_Sadek_CV.pdf`, never Google Drive.
- No phone number or military status on the site — email only.
- Exception: keep the Facebook link in contact/social even though the CV
  doesn't list it.
- When the CV is replaced, re-sync the content from it before any other work.

## Rules
- For any UI/visual work, use the `design-system` skill.
- After UI work is done, run the `design-reviewer` agent and fix what it finds
  before reporting completion.
- When a design decision is approved (colours, fonts, layout rule, git tag),
  append it to "Design decisions" with the date.
- For SEO, metadata, sitemap, robots or launch work, use the `seo` skill.
  Before reporting any new or changed page as done, run its audit on a
  production build and fix what fails.

## Design decisions (append as they're made)
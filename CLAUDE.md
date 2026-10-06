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
  …, `Zerodroid.png` = public homepage only), CV `Hamam_Sadek_CV.pdf`
  (old skill logos and grain `h.png` are no longer used). UI is
  mono — `#e6e9ef` on ink `#0a0a0f`; the only hues are teal `#0bd1d1` /
  violet `#c4b5fd` inside the hero code card (globals.css `@theme`, mirrored
  in `src/constants/tokens.ts`). No logo or photo — favicon is "HS" from
  `src/app/icon.tsx`
- i18n: next-intl (for any multi-language site — don't pick another library)
  - UI components: shadcn/ui in `components/ui/`, one component per file

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
- Talk to me in Egyptian Arabic. Keep code, file names, commit messages and
  technical terms in English.

## Design decisions (append as they're made)
- 2026-10-06 — Full redesign (tag `design-v1` = previous design). Dark,
  full-width single page: Hero (claim + `developer.ts` code card with counted
  facts) → Client work → Projects → Engagements → Skills → Contact.
- 2026-10-06 — Colour: mono identity (`#e6e9ef` on `#0a0a0f`, muted
  `#94a3b8`); replaced cyan `#0ea5ea` (user: too loud). Colour appears only
  in the code card. Green/red only for form status.
- 2026-10-06 — Type: Geist + Geist Mono only; Space Grotesk dropped.
- 2026-10-06 — UI primitives from shadcn/ui in `src/components/ui/`; focus
  ring on keyboard only; inputs show a single 2px edge on focus.
- 2026-10-06 — Stacks: neutral chips never; grouped key/value for featured
  work, one mono text line for cards. Skills link each tool to the project
  that uses it (`src/lib/skill-proof.ts`).
- 2026-10-06 — Motion exception: project screenshots pan through the page on
  mouse hover in 1.2s (rule says 200–400ms). It shows the whole screen, runs
  once per hover, and is off on touch and with reduced motion.
- 2026-10-06 — Copy: no dash or underscore punctuation in visible text
  (—, " - ", _); user reads them as AI-written. Exception the user chose:
  date ranges keep the en dash (Sep 2026 – Oct 2026). Hyphens inside words
  are fine.

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

## Stack
<!-- Claude: if any field below is still a placeholder, fill it from the code
     and show the user before doing other work. -->
- Framework: Next.js (TypeScript)
- Styling: <TODO>
- Data: <TODO — the files that hold profile, projects, experience, skills>
- Brand assets: <TODO>
- i18n: next-intl (for any multi-language site — don't pick another library)

## Content source
- `public/Hamam_Sadek_CV.pdf` is the single source of truth for all site
  content. Nothing on the site may claim something the CV doesn't.
- Every CV link points to `/Hamam_Sadek_CV.pdf`, never Google Drive.
- No phone number or military status on the site — email only.
- When the CV is replaced, re-sync the content from it before any other work.

## Rules
- For any UI/visual work, use the `design-system` skill.
- After UI work is done, run the `design-reviewer` agent and fix what it finds
  before reporting completion.
- When a design decision is approved (colours, fonts, layout rule, git tag),
  append it to "Design decisions" with the date.

## Design decisions (append as they're made)
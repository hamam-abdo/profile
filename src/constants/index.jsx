/*
 * All content here must match public/Hamam_Sadek_CV.pdf — nothing on the
 * site may claim something the CV doesn't.
 */

/* Personal info ------------------------------------------------- */
export const profile = {
  name: "Hamam Sadek",
  role: "Front-End Developer",
  stack: ["Next.js", "React", "TypeScript"],
  tagline:
    "I build fast, responsive web apps with Next.js, React 19, TypeScript and Tailwind CSS, extending into full-stack delivery with PostgreSQL, Prisma, Drizzle and Supabase.",
  bio: "I'm a Front-End Developer with 2 years of experience building fast, responsive web apps with Next.js, React 19, TypeScript and Tailwind CSS, extending into full-stack delivery with PostgreSQL, Prisma, Drizzle and Supabase. I solo-built Orderly, a multi-tenant restaurant SaaS with real-time orders, role-based dashboards, an offline-first PWA, AI menu tools and Arabic/English RTL, and delivered a production website with an admin CMS for a security research company.",
  email: "hamamabdo002@gmail.com",
  cv: "/Hamam_Sadek_CV.pdf",
  city: "Cairo, Egypt",
  availability: "Open to Remote",
  // Paste your Formspree endpoint here (https://formspree.io) to receive
  // messages directly in your inbox. Leave empty to fall back to mailto.
  formEndpoint: "https://formspree.io/f/meebkzkl",
};

/* Years is stated in the CV summary; the other two hero numbers are
   counted from `projects` and `experience` in Hero.tsx. */
export const yearsExperience = 2;

export const navLinks = [
  { path: "#experience", title: "Client work" },
  { path: "#projects", title: "Projects" },
  { path: "#engagements", title: "Engagements" },
  { path: "#skills", title: "Skills" },
  { path: "#contact", title: "Contact" },
  {
    title: "Resume",
    path: "/Hamam_Sadek_CV.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

/* Experience ------------------------------------------------------ */
export const experience = [
  {
    role: "Full-Stack Developer (Freelance)",
    company: "Zerodroid Labs",
    url: "https://www.zerodroid.io/",
    // Public homepage only — never the admin CMS. Remove this line if the
    // client asks not to show it; the section works without an image.
    imge: "/Zerodroid.png",
    shot: [1440, 900],
    period: "Sep 2026 – Oct 2026",
    links: [
      { label: "zerodroid.io", url: "https://www.zerodroid.io/" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/zerodroidlabs/",
      },
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Drizzle ORM",
      "Neon PostgreSQL",
      "Auth.js",
      "Zod",
      "Resend",
      "UploadThing",
      "GitHub Actions",
    ],
    // Same tools as `tech`, grouped by role for display
    stackGroups: [
      { label: "Front-end", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4"] },
      { label: "Back-end & data", items: ["Drizzle ORM", "Neon PostgreSQL", "Auth.js", "Zod"] },
      { label: "Services & CI", items: ["Resend", "UploadThing", "GitHub Actions"] },
    ],
    points: [
      "Built the production website and a separate admin CMS for an offensive security research company, end to end from database to deployment.",
      "Public site: advisories database, research articles with tag filtering, publications, and team profiles, with dynamic OG images, JSON-LD, sitemap, and RSS.",
      "Admin dashboard with Markdown editor, Shiki syntax highlighting, and image uploads; GitHub OAuth with owner/member roles checked inside every Server Action, plus an audit log.",
      "Instant publishing without redeploys via tag-based cache revalidation; contact form secured with Zod, rate limiting, and a honeypot; CI running lint, type-check, build, and gitleaks secret scanning.",
    ],
  },
];

/*
 * What a client can hire me to build. Each engagement is backed by work
 * in the CV; `proofs` link to the project(s) that show it.
 * Wording is condensed from the CV bullets, not new claims.
 */
export const engagements = [
  {
    title: "Multi-tenant SaaS",
    summary:
      "Role-based dashboards with server-side permission checks and strict per-tenant data isolation.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Zustand"],
    proofs: [{ name: "Orderly", href: "#orderly" }],
  },
  {
    title: "Website + admin CMS",
    summary:
      "A public site with instant publishing from an admin dashboard, with no redeploys.",
    tags: ["Next.js", "Drizzle ORM", "Auth.js", "Zod"],
    proofs: [{ name: "Zerodroid Labs", href: "#experience" }],
  },
  {
    title: "E-commerce store",
    summary:
      "Catalog, product details, cart and checkout, with auth, protected routes and persisted cart state.",
    tags: ["Next.js", "Supabase Auth", "Redux Toolkit"],
    proofs: [
      { name: "Exclusive", href: "#exclusive" },
      { name: "XStore", href: "#xstore" },
    ],
  },
  {
    title: "Search & discovery",
    summary:
      "SSR, SEO-friendly pages with multi-criteria filters synced to the URL and map browsing.",
    tags: ["Next.js", "Supabase", "Google Maps API"],
    proofs: [{ name: "Zawwaqa", href: "#zawwaqa" }],
  },
  {
    title: "Offline-first & real-time",
    summary:
      "A PWA that keeps working when the connection drops, with live order sync.",
    tags: ["Serwist", "Dexie / IndexedDB", "Pusher"],
    proofs: [{ name: "Orderly", href: "#orderly" }],
  },
  {
    title: "Arabic / English RTL",
    summary:
      "Full bilingual interfaces with RTL layout and AI-assisted Arabic↔English translation.",
    tags: ["next-intl", "RTL", "Gemini API"],
    proofs: [{ name: "Orderly", href: "#orderly" }],
  },
];

/* Education, training & languages -------------------------------- */
export const education = [
  {
    title: "Front-End Bootcamp",
    org: "Huma-volve",
    detail: "1 week: code review, Git workflow, Postman, Figma-to-code",
    period: "Sep 2026",
    certificate:
      "https://drive.google.com/file/d/1Uk4Unx9ayOi3izcLYnGVMDwxUh1k2K8I/view?usp=sharing",
  },
  {
    title: "Bachelor of Management Information Systems",
    org: "Higher Institute of Advanced Studies",
    period: "2024",
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
];

/* Full skills list exactly as grouped in the CV ------------------- */
export const cvSkills = [
  {
    group: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    group: "Frameworks & UI",
    items: [
      "React 19",
      "Next.js (App Router, Server Components, Server Actions, SSR/SSG/ISR)",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "Accessibility (a11y)",
      "RTL/Arabic localization",
    ],
  },
  {
    group: "State & Data",
    items: [
      "Zustand",
      "Redux Toolkit",
      "Context API",
      "SWR",
      "REST APIs",
      "Axios",
    ],
  },
  {
    group: "Backend & Database",
    items: [
      "Prisma",
      "Drizzle ORM",
      "PostgreSQL (Neon)",
      "Supabase",
      "Auth.js (OAuth)",
      "JWT",
      "Zod",
      "Route Handlers",
      "webhooks",
      "cron jobs",
      "Resend",
    ],
  },
  {
    group: "Real-Time, Offline & AI",
    items: [
      "Pusher/WebSockets",
      "PWA & Service Workers (Serwist)",
      "IndexedDB (Dexie)",
      "Gemini API",
    ],
  },
  {
    group: "Tools",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions (CI)",
      "Figma",
      "Postman",
      "Vercel",
      "Netlify",
      "Chrome DevTools",
      "ESLint",
      "AI-assisted development (Claude, Copilot, v0)",
    ],
  },
];

/*
 * Order follows the CV. `tier: "main"` are the four CV projects, shown as
 * numbered case files; `tier: "more"` are OrderEasy and the 7 corporate
 * sites (the CV's "More"), shown as rows in a table.
 *
 * The 7 corporate sites carry only "Responsive corporate site." — the CV
 * says nothing more about them, so the site doesn't either.
 *
 * The first `featured: true` project gets the full-width case file with its
 * `highlights`. The rest of the main tier share one equal-weight grid.
 */
export const projects = [
  {
    title: "Orderly",
    subtitle: "Multi-Tenant Restaurant POS & QR Ordering SaaS",
    description:
      "A complete, production-ready SaaS I built solo: QR menu ordering for guests plus role-based dashboards for Admin, Cashier, Kitchen and Waiter with server-side permission checks.",
    category: "Next.js",
    tier: "main",
    featured: true,
    label: "Solo-built SaaS",
    highlights: [
      "Multi-tenant data model of 20+ Prisma entities (orders, shifts, cash drawer, inventory, subscription billing) with strict per-tenant isolation",
      "Real-time order sync with Pusher",
      "Offline-first PWA (Serwist + Dexie/IndexedDB) that keeps menus and carts usable when the connection drops",
      "AI menu tools (Gemini): dish descriptions, Arabic↔English translation, paper-menu photo to database items",
      "Full Arabic/English RTL, thermal receipt printing, Unsplash image search",
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL (Neon)",
      "Tailwind CSS",
      "Zustand",
      "Pusher",
      "next-intl (RTL)",
      "Serwist (PWA)",
      "Dexie (IndexedDB)",
      "Gemini API",
      "Unsplash API",
    ],
    // Same tools as `tech`, grouped by role for display
    stackGroups: [
      { label: "Front-end", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Zustand", "next-intl (RTL)"] },
      { label: "Back-end & data", items: ["Prisma", "PostgreSQL (Neon)"] },
      { label: "Real-time & offline", items: ["Pusher", "Serwist (PWA)", "Dexie (IndexedDB)"] },
      { label: "AI & APIs", items: ["Gemini API", "Unsplash API"] },
    ],
    live: "https://orderly-wine.vercel.app/en-US",
    video:
      "https://www.linkedin.com/posts/hamam-sadek_saas-foodtech-restauranttech-ugcPost-7476627452656685056-YW5r/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_-P4ABudhGpTsxX5uc96YG_vhpRd9UZro",
    imge: "/Orderly.png",
    shot: [1400, 3128], // screenshot size — drives the hover pan
  },
  {
    title: "Zawwaqa",
    subtitle: "Restaurant Discovery Platform",
    description:
      "SSR, SEO-friendly pages with multi-criteria search and filtering (URL-synced state), Google Maps browsing, and Supabase-backed reviews and ratings.",
    category: "Next.js",
    tier: "main",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Google Maps API",
    ],
    live: "https://zawwaqa.vercel.app/",
    github: "https://github.com/hamam-abdo/zawwaqa",
    video:
      "https://www.linkedin.com/posts/hamam-sadek_aeyaewaffaepaeqaer-zawwaqa-foodreview-activity-7401197240314224640-v8Fh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_-P4ABudhGpTsxX5uc96YG_vhpRd9UZro",
    imge: "/Zawwaqa.png",
    shot: [1400, 781], // screenshot size — drives the hover pan
  },
  {
    title: "Exclusive",
    subtitle: "Full-Stack E-commerce Store",
    description:
      "Full shopping flow (catalog, product details, cart, checkout) on a mobile-first layout, with Supabase Auth, protected routes, and persisted cart state.",
    category: "Next.js",
    tier: "main",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase Auth", "REST APIs"],
    live: "https://exclusive-mauve.vercel.app/",
    github: "https://github.com/hamam-abdo/Exclusive",
    video:
      "https://www.linkedin.com/posts/hamam-abdulrahman-b1467b25b_nextjs-supabase-ecommerce-activity-7267551794224848897-OUtH?utm_source=share&utm_medium=member_desktop",
    imge: "/Exclusive.png",
    shot: [1400, 4372], // screenshot size — drives the hover pan
  },
  {
    title: "XStore",
    subtitle: "E-commerce SPA",
    description:
      "SPA with client-side routing and a Redux Toolkit store for cart, filters, and user state; faster loads via code splitting and lazy-loaded routes.",
    category: "React",
    tier: "main",
    tech: ["Vite", "React", "Redux Toolkit", "Axios", "Tailwind CSS"],
    live: "https://xstore-app-three.vercel.app/",
    github: "https://github.com/hamam-abdo/xstore-app",
    video:
      "https://www.linkedin.com/posts/hamam-abdulrahman-b1467b25b_html-tailwind-react-activity-7203860224745652225-DL6s?utm_source=share&utm_medium=member_desktop",
    imge: "/XStore.png",
    shot: [1400, 4441], // screenshot size — drives the hover pan
  },
  {
    title: "OrderEasy",
    description: "A restaurant ordering app built with React and Firebase, with an admin panel.",
    category: "React",
    tier: "more",
    tech: ["React", "Firebase"],
    live: "https://test-834f5.web.app/",
    video:
      "https://www.linkedin.com/posts/hamam-abdulrahman-b1467b25b_technology-development-programming-activity-7226992840717815808-8p8t?utm_source=share&utm_medium=member_desktop",
    imge: "/Order.png",
  },
  {
    title: "Primary",
    description:
      "Responsive corporate site.",
    category: "HTML & CSS",
    tier: "more",
    tech: ["HTML", "CSS"],
    live: "https://hamam-abdo.github.io/Primary/",
    imge: "/Primary.png",
  },
  {
    title: "DGcom",
    description:
      "Responsive corporate site.",
    category: "HTML & CSS",
    tier: "more",
    tech: ["HTML", "CSS"],
    live: "https://hamam-abdo.github.io/DGcom/",
    imge: "/DGcom.png",
  },
  {
    title: "Pioneer",
    description:
      "Responsive corporate site.",
    category: "HTML & CSS",
    tier: "more",
    tech: ["HTML", "CSS"],
    live: "https://hamam-abdo.github.io/Pioneer/",
    imge: "/Pioneer.png",
  },
  {
    title: "Special Design",
    description:
      "Responsive corporate site.",
    category: "JavaScript",
    tier: "more",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://hamam-abdo.github.io/Special-Design/",
    imge: "/Special.png",
  },
  {
    title: "BigTech",
    description:
      "Responsive corporate site.",
    category: "JavaScript",
    tier: "more",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://hamam-abdo.github.io/BigTech/",
    imge: "/BigTech.png",
  },
  {
    title: "Artelligence",
    description:
      "Responsive corporate site.",
    category: "JavaScript",
    tier: "more",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://hamam-abdo.github.io/Artelligence/",
    imge: "/Artelligence.png",
  },
  {
    title: "Techwix",
    description:
      "Responsive corporate site.",
    category: "JavaScript",
    tier: "more",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://hamam-abdo.github.io/Techwix/",
    imge: "/Techwix.png",
  },
];

export const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61584238953915",
  },
  {
    name: "GitHub",
    url: "https://github.com/hamam-abdo",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hamam-sadek/",
  },
];

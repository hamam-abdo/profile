import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SiSupabase, SiGit, SiGithub } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

/*
 * All content here must match public/Hamam_Sadek_CV.pdf — nothing on the
 * site may claim something the CV doesn't.
 */

/* Personal info ------------------------------------------------- */
export const profile = {
  name: "Hamam Sadek",
  roles: [
    "Front-End Developer",
    "Next.js / React / TypeScript",
    "Full-Stack Developer",
  ],
  tagline:
    "I build fast, responsive web apps with Next.js, React 19, TypeScript and Tailwind CSS — extending into full-stack delivery with PostgreSQL, Prisma, Drizzle and Supabase.",
  bio: "I'm a Front-End Developer with 2 years of experience building fast, responsive web apps with Next.js, React 19, TypeScript and Tailwind CSS, extending into full-stack delivery with PostgreSQL, Prisma, Drizzle and Supabase. I solo-built Orderly, a multi-tenant restaurant SaaS with real-time orders, role-based dashboards, an offline-first PWA, AI menu tools and Arabic/English RTL, and delivered a production website with an admin CMS for a security research company.",
  email: "hamamabdo002@gmail.com",
  cv: "/Hamam_Sadek_CV.pdf",
  location: "Cairo, Egypt — Open to Remote",
  // Paste your Formspree endpoint here (https://formspree.io) to receive
  // messages directly in your inbox. Leave empty to fall back to mailto.
  formEndpoint: "https://formspree.io/f/meebkzkl",
};

export const stats = [
  { value: "2", label: "Years Experience" },
  { value: "12", label: "Projects" },
  { value: "1", label: "Client Production Site" },
];

export const navLinks = [
  { path: "#home", title: "Home" },
  { path: "#about", title: "About" },
  { path: "#skills", title: "Skills" },
  { path: "#projects", title: "Projects" },
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
    points: [
      "Built the production website and a separate admin CMS for an offensive security research company, end to end from database to deployment.",
      "Public site: advisories database, research articles with tag filtering, publications, and team profiles, with dynamic OG images, JSON-LD, sitemap, and RSS.",
      "Admin dashboard with Markdown editor, Shiki syntax highlighting, and image uploads; GitHub OAuth with owner/member roles checked inside every Server Action, plus an audit log.",
      "Instant publishing without redeploys via tag-based cache revalidation; contact form secured with Zod, rate limiting, and a honeypot; CI running lint, type-check, build, and gitleaks secret scanning.",
    ],
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

/*
 * Skills are grouped. Each item is either an image (`img`) or a
 * react-icon (`icon`). Add new skills to the relevant group.
 */
export const skillGroups = [
  {
    group: "Front-End",
    items: [
      { name: "HTML", img: "/html.png" },
      { name: "CSS", img: "/css.jpg" },
      { name: "JavaScript", img: "/js.jpg" },
      { name: "TypeScript", img: "/ts.png" },
      { name: "React", img: "/react2.webp" },
      { name: "Next.js", img: "/next.svg" },
      { name: "Tailwind CSS", img: "/tailwindcss.svg" },
    ],
  },
  {
    group: "Backend & Tools",
    items: [
      { name: "Supabase", icon: <SiSupabase color="#3ECF8E" size={34} /> },
      { name: "Neon", icon: <FaDatabase color="#00E599" size={28} /> },
      { name: "Git", icon: <SiGit color="#F05032" size={32} /> },
      { name: "GitHub", icon: <SiGithub color="#ffffff" size={32} /> },
    ],
  },
];

/*
 * Full skills list exactly as grouped in the CV. Not rendered yet — the
 * Skills section will switch to this in the design phase.
 */
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
      "a11y",
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
 * Order follows the CV. `tier: "main"` are the four CV projects;
 * `tier: "more"` are OrderEasy and the 7 corporate sites (the CV's "More").
 *
 * To feature a project in the highlighted "Latest Project" section,
 * add `featured: true` to it. Only the first one marked `featured`
 * is shown there. It still appears in the projects grid below as well.
 * For a featured project you can also add a `highlights: [...]` array.
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
      "next-intl",
      "Serwist (PWA)",
      "Gemini API",
      "Unsplash API",
    ],
    live: "https://orderly-wine.vercel.app/en-US",
    video:
      "https://www.linkedin.com/posts/hamam-sadek_saas-foodtech-restauranttech-ugcPost-7476627452656685056-YW5r/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_-P4ABudhGpTsxX5uc96YG_vhpRd9UZro",
    imge: "/Orderly.png",
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
  },
  {
    title: "XStore",
    subtitle: "E-commerce SPA",
    description:
      "SPA with client-side routing and a Redux Toolkit store for cart, filters, and user state; faster loads via code splitting and lazy-loaded routes.",
    category: "React",
    tier: "main",
    tech: ["Vite", "React", "Redux Toolkit", "Axios", "Tailwind CSS"],
    live: "https://xstore-app.netlify.app/",
    github: "https://github.com/hamam-abdo/xstore-app",
    video:
      "https://www.linkedin.com/posts/hamam-abdulrahman-b1467b25b_html-tailwind-react-activity-7203860224745652225-DL6s?utm_source=share&utm_medium=member_desktop",
    imge: "/XStore.png",
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
      "A clean and modern website designed to showcase educational content with a focus on simplicity and accessibility.",
    category: "HTML & CSS",
    tier: "more",
    tech: ["HTML", "CSS"],
    live: "https://hamam-abdo.github.io/Primary/",
    imge: "/Primary.png",
  },
  {
    title: "DGcom",
    description:
      "A dynamic and professional corporate website for showcasing business services and offerings.",
    category: "HTML & CSS",
    tier: "more",
    tech: ["HTML", "CSS"],
    live: "https://hamam-abdo.github.io/DGcom/",
    imge: "/DGcom.png",
  },
  {
    title: "Pioneer",
    description:
      "A sleek and responsive landing page tailored for promoting innovative tech solutions.",
    category: "HTML & CSS",
    tier: "more",
    tech: ["HTML", "CSS"],
    live: "https://hamam-abdo.github.io/Pioneer/",
    imge: "/Pioneer.png",
  },
  {
    title: "Special Design",
    description:
      "A visually appealing website focused on creative design and showcasing artistic projects.",
    category: "JavaScript",
    tier: "more",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://hamam-abdo.github.io/Special-Design/",
    imge: "/Special.png",
  },
  {
    title: "BigTech",
    description:
      "A modern website tailored for a tech-focused company, emphasizing innovation and technology services.",
    category: "JavaScript",
    tier: "more",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://hamam-abdo.github.io/BigTech/",
    imge: "/BigTech.png",
  },
  {
    title: "Artelligence",
    description:
      "A website dedicated to showcasing artificial intelligence solutions and creative applications.",
    category: "JavaScript",
    tier: "more",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://hamam-abdo.github.io/Artelligence/",
    imge: "/Artelligence.png",
  },
  {
    title: "Techwix",
    description:
      "A website for a tech-oriented brand featuring a clean layout and modern design elements.",
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
    icon: <TiSocialFacebookCircular size={24} />,
    url: "https://www.facebook.com/profile.php?id=61584238953915",
  },
  {
    name: "GitHub",
    icon: <VscGithub size={22} />,
    url: "https://github.com/hamam-abdo",
  },
  {
    name: "LinkedIn",
    icon: <CiLinkedin size={24} />,
    url: "https://www.linkedin.com/in/hamam-sadek/",
  },
];

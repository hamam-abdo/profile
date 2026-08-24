import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SiFirebase, SiSupabase, SiGit, SiGithub } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

/* Personal info ------------------------------------------------- */
export const profile = {
  name: "Hamam Sadek",
  roles: ["Front-End Developer", "React & Next.js Developer", "SaaS Builder"],
  tagline:
    "I build production-ready web applications — from the first component to the deploy.",
  bio: "I'm a Front-End Developer building fast, accessible web applications with Next.js, React and TypeScript — and I take them all the way to production with Prisma, PostgreSQL and Supabase. Most recently I designed, built and shipped Orderly single-handedly: a multi-tenant SaaS for restaurants with real-time ordering, role-based dashboards, an offline-first PWA and full Arabic/English support.",
  email: "hamamabdo002@gmail.com",
  cv: "https://drive.google.com/uc?export=download&id=1b2-KvPtzDqxKGkSdaL9LgjzYqcaz8Pfw",
  location: "Egypt",
  // Paste your Formspree endpoint here (https://formspree.io) to receive
  // messages directly in your inbox. Leave empty to fall back to mailto.
  formEndpoint: "https://formspree.io/f/meebkzkl",
};

export const stats = [
  { value: "12", label: "Projects Shipped" },
  { value: "15+", label: "Technologies" },
  { value: "2+", label: "Years Experience" },
];

export const navLinks = [
  { path: "#home", title: "Home" },
  { path: "#about", title: "About" },
  { path: "#skills", title: "Skills" },
  { path: "#projects", title: "Projects" },
  { path: "#contact", title: "Contact" },
  {
    title: "Resume",
    path:  "https://drive.google.com/file/d/1b2-KvPtzDqxKGkSdaL9LgjzYqcaz8Pfw/view",
    target: "_blank",
    rel: "noopener noreferrer",
  },
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
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" size={34} /> },
      { name: "Neon", icon: <FaDatabase color="#00E599" size={28} /> },
      { name: "Git", icon: <SiGit color="#F05032" size={32} /> },
      { name: "GitHub", icon: <SiGithub color="#ffffff" size={32} /> },
    ],
  },
];

/*
 * To feature a project in the highlighted "Latest Project" section,
 * add `featured: true` to it. Only the first one marked `featured`
 * is shown there. It still appears in the projects grid below as well.
 * For a featured project you can also add a `highlights: [...]` array.
 */
export const projects = [
  {
    title: "Orderly",
    description:
      "A multi-tenant SaaS platform for restaurants, built solo from database design to deployment. QR-code menu ordering for guests, plus role-based dashboards for admin, cashier, kitchen and waiter — with real-time order sync, offline-first support and full Arabic/English localization.",
    category: "Next.js",
    featured: true,
    highlights: [
      "Multi-tenant SaaS with role-based dashboards",
      "Real-time order sync across every device (Pusher)",
      "Offline-first PWA — keeps working when the network drops",
      "Full Arabic/English localization with RTL support",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Pusher",
      "PWA",
      "Tailwind CSS",
    ],
    live: "https://orderly-wine.vercel.app/en-US",
    video:
      "https://www.linkedin.com/posts/hamam-sadek_saas-foodtech-restauranttech-ugcPost-7476627452656685056-YW5r/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_-P4ABudhGpTsxX5uc96YG_vhpRd9UZro",
    imge: "/Orderly.png",
  },
  {
    title: "Zawwaqa",
    description:
      "A restaurant discovery platform with server-side rendering for fast first paint and indexable pages. Multi-criteria search and filtering with URL-synced state, Google Maps integration for location-based browsing, and a Supabase data layer for reviews and ratings.",
    category: "Next.js",
    tech: ["Next.js", "TypeScript", "Supabase", "Google Maps", "Tailwind CSS"],
    live: "https://zawwaqa.vercel.app/",
    video:
      "https://www.linkedin.com/posts/hamam-sadek_aeyaewaffaepaeqaer-zawwaqa-foodreview-activity-7401197240314224640-v8Fh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_-P4ABudhGpTsxX5uc96YG_vhpRd9UZro",
    imge: "/Zawwaqa.png",
  },
  {
    title: "Exclusive",
    description:
      "A full-stack e-commerce store covering the complete flow — catalog, product details, cart management and checkout. Authentication and session handling with Supabase Auth, including protected routes and persisted cart state on a mobile-first layout.",
    category: "Next.js",
    tech: ["Next.js", "Supabase Auth", "REST APIs", "Tailwind CSS"],
    live: "https://exclusive-mauve.vercel.app/",
    video:
      "https://www.linkedin.com/posts/hamam-abdulrahman-b1467b25b_nextjs-supabase-ecommerce-activity-7267551794224848897-OUtH?utm_source=share&utm_medium=member_desktop",
    imge: "/Exclusive.png",
  },
  {
    title: "XStore",
    description:
      "A fast e-commerce single page application with client-side routing and a centralized Redux Toolkit store for cart, filters and user state. Perceived load time reduced through code splitting, lazy-loaded routes and optimized image delivery.",
    category: "React",
    tech: ["Vite", "React", "Redux Toolkit", "Axios", "Tailwind CSS"],
    live: "https://xstore-app.netlify.app/#/Home",
    video:
      "https://www.linkedin.com/posts/hamam-abdulrahman-b1467b25b_html-tailwind-react-activity-7203860224745652225-DL6s?utm_source=share&utm_medium=member_desktop",
    imge: "/XStore.png",
  },
  {
    title: "Order Easy",
    description:
      "A restaurant ordering system enabling customers to choose tables, browse the menu and place orders seamlessly, with an admin panel for managing orders and tables in real time.",
    category: "React",
    tech: ["React", "Firebase", "Tailwind CSS"],
    live: "https://test-834f5.web.app/",
    video:
      "https://www.linkedin.com/posts/hamam-abdulrahman-b1467b25b_technology-development-programming-activity-7226992840717815808-8p8t?utm_source=share&utm_medium=member_desktop",
    imge: "/Order.png",
  },
];

/*
 * Earlier work — corporate sites and landing pages built with plain
 * HTML/CSS/JS. Rendered as a compact list under the main grid so the
 * featured projects above stay the focus.
 */
export const earlierWork = [
  { title: "Techwix", tech: "JavaScript", live: "https://hamam-abdo.github.io/Techwix/" },
  { title: "Artelligence", tech: "JavaScript", live: "https://hamam-abdo.github.io/Artelligence/" },
  { title: "BigTech", tech: "JavaScript", live: "https://hamam-abdo.github.io/BigTech/" },
  { title: "Special Design", tech: "JavaScript", live: "https://hamam-abdo.github.io/Special-Design/" },
  { title: "Pioneer", tech: "HTML & CSS", live: "https://hamam-abdo.github.io/Pioneer/" },
  { title: "DGcom", tech: "HTML & CSS", live: "https://hamam-abdo.github.io/DGcom/" },
  { title: "Primary", tech: "HTML & CSS", live: "https://hamam-abdo.github.io/Primary/" },
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

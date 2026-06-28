import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SiFirebase, SiSupabase, SiGit, SiGithub } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

/* Personal info ------------------------------------------------- */
export const profile = {
  name: "Hamam Sadek",
  roles: ["Front-End Developer", "React & Next.js Developer", "UI Enthusiast"],
  tagline:
    "I build fast, accessible and beautiful web interfaces with modern technologies.",
  bio: "I'm a Front-End Developer focused on turning ideas into clean, responsive and performant web experiences. I work mainly with React, Next.js and Tailwind CSS, and I love crafting interfaces that feel smooth and intuitive across every device.",
  email: "hamamabdo002@gmail.com",
  cv: "https://drive.google.com/file/d/18dS_SSZYNmaUFyqNgNQP6kBxEwr4Q464/view",
  location: "Egypt",
  // Paste your Formspree endpoint here (https://formspree.io) to receive
  // messages directly in your inbox. Leave empty to fall back to mailto.
  formEndpoint: "https://formspree.io/f/meebkzkl",
};

export const stats = [
  { value: "10+", label: "Projects" },
  { value: "12+", label: "Technologies" },
  { value: "2+", label: "Years Coding" },
];

export const navLinks = [
  { path: "#home", title: "Home" },
  { path: "#about", title: "About" },
  { path: "#skills", title: "Skills" },
  { path: "#projects", title: "Projects" },
  { path: "#contact", title: "Contact" },
  {
    title: "Resume",
    path: "https://drive.google.com/file/d/18dS_SSZYNmaUFyqNgNQP6kBxEwr4Q464/view",
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
    title: "Primary",
    description:
      "A clean and modern website designed to showcase educational content with a focus on simplicity and accessibility.",
    category: "HTML & CSS",
    tech: ["HTML", "CSS"],
    live: "https://hamam-abdo.github.io/Primary/",
    imge: "/Primary.png",
  },
  {
    title: "DGcom",
    description:
      "A dynamic and professional corporate website for showcasing business services and offerings.",
    category: "HTML & CSS",
    tech: ["HTML", "CSS"],
    live: "https://hamam-abdo.github.io/DGcom/",
    imge: "/DGcom.png",
  },
  {
    title: "Pioneer",
    description:
      "A sleek and responsive landing page tailored for promoting innovative tech solutions.",
    category: "HTML & CSS",
    tech: ["HTML", "CSS"],
    live: "https://hamam-abdo.github.io/Pioneer/",
    imge: "/Pioneer.png",
  },
  {
    title: "Special Design",
    description:
      "A visually appealing website focused on creative design and showcasing artistic projects.",
    category: "JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://hamam-abdo.github.io/Special-Design/",
    imge: "/Special.png",
  },
  {
    title: "BigTech",
    description:
      "A modern website tailored for a tech-focused company, emphasizing innovation and technology services.",
    category: "JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://hamam-abdo.github.io/BigTech/",
    imge: "/BigTech.png",
  },
  {
    title: "Artelligence",
    description:
      "A website dedicated to showcasing artificial intelligence solutions and creative applications.",
    category: "JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://hamam-abdo.github.io/Artelligence/",
    imge: "/Artelligence.png",
  },
  {
    title: "Techwix",
    description:
      "A website for a tech-oriented brand featuring a clean layout and modern design elements.",
    category: "JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://hamam-abdo.github.io/Techwix/",
    imge: "/Techwix.png",
  },
  {
    title: "XStore",
    description:
      "A customer-focused e-commerce platform with an intuitive interface for browsing products and placing orders.",
    category: "React",
    tech: ["React", "Tailwind CSS"],
    live: "https://xstore-app.netlify.app/#/Home",
    video:
      "https://www.linkedin.com/posts/hamam-abdulrahman-b1467b25b_html-tailwind-react-activity-7203860224745652225-DL6s?utm_source=share&utm_medium=member_desktop",
    imge: "/XStore.png",
  },
  {
    title: "Order Easy",
    description:
      "A restaurant ordering system enabling customers to choose tables, browse the menu, and place orders seamlessly, with administrative features for order and table management.",
    category: "React",
    tech: ["React", "Firebase"],
    live: "https://test-834f5.web.app/",
    video:
      "https://www.linkedin.com/posts/hamam-abdulrahman-b1467b25b_technology-development-programming-activity-7226992840717815808-8p8t?utm_source=share&utm_medium=member_desktop",
    imge: "/Order.png",
  },
  {
    title: "Exclusive",
    description:
      "A fully functional e-commerce platform offering a complete experience for customers, including order management, payments, and product handling.",
    category: "Next.js",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    live: "https://exclusive-mauve.vercel.app/",
    video:
      "https://www.linkedin.com/posts/hamam-abdulrahman-b1467b25b_nextjs-supabase-ecommerce-activity-7267551794224848897-OUtH?utm_source=share&utm_medium=member_desktop",
    imge: "/Exclusive.png",
  },
  {
    title: "Zawwaqa",
    description:
      "An interactive food discovery application designed to connect food enthusiasts with the best local restaurants through user-generated ratings, visual reviews, and location-based recommendations.",
    category: "Next.js",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    live: "https://zawwaqa.vercel.app/",
    video:
      "https://www.linkedin.com/posts/hamam-sadek_aeyaewaffaepaeqaer-zawwaqa-foodreview-activity-7401197240314224640-v8Fh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_-P4ABudhGpTsxX5uc96YG_vhpRd9UZro",
    imge: "/Zawwaqa.png",
  },
  {
    title: "Orderly",
    description:
      "A full SaaS platform for restaurants — digital menus, QR-code ordering, table management and a powerful admin dashboard. Built with internationalization (i18n) support for a seamless multi-language experience.",
    category: "Next.js",
    featured: true,
    highlights: [
      "Multi-language (i18n) SaaS architecture",
      "QR-code based digital menu & ordering",
      "Real-time order & table management",
      "Admin dashboard with analytics",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Neon", "i18n"],
    live: "https://orderly-wine.vercel.app/en-US",
    video:
      "https://www.linkedin.com/posts/hamam-sadek_saas-foodtech-restauranttech-ugcPost-7476627452656685056-YW5r/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_-P4ABudhGpTsxX5uc96YG_vhpRd9UZro",
    imge: "/Orderly.png",
  }
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

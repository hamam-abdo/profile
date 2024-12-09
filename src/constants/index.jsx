import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { TiSocialFacebookCircular } from "react-icons/ti";
export const navLinks = [
  {
    path: "#about",
    title: "About",
  },

  {
    path: "#projects",
    title: "Projects",
  },
  {
    title: "CV",
    path: "https://drive.google.com/file/d/1LKuCMqHaYSTZd3OjEYsUj6fo6z1ybjpE/view",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  { title: "Contact", path: "mailto:hamamabdo002@gmail.com" },
];

export const skills = [
  {
    name: "HTML",
    img: "/html.png",
  },
  {
    name: "CSS",
    img: "/css.jpg",
  },
  {
    name: "JavaScript",
    img: "/js.jpg",
  },
  {
    name: "Tailwindcss",
    img: "/tailwindcss.svg",
  },
  {
    name: "React",
    img: "/react2.webp",
  },
  {
    name: "Typescript",
    img: "/ts.png",
  },
  {
    name: "Next.js",
    img: "/next.svg",
  },
];

export const projects = [
  {
    title: "Primary",
    description:
      "A clean and modern website designed to showcase educational content with a focus on simplicity and accessibility.",
    category: "HTML & CSS",
    live: "https://hamam-abdo.github.io/Primary/",
    imge: "/Primary.png",
  },
  {
    title: "DGcom",
    description:
      "A dynamic and professional corporate website for showcasing business services and offerings.",
    category: "HTML & CSS",
    live: "https://hamam-abdo.github.io/DGcom/",
    imge: "/DGcom.png",
  },
  {
    title: "Pioneer",
    description:
      "A sleek and responsive landing page tailored for promoting innovative tech solutions.",
    category: "HTML & CSS",
    live: "https://hamam-abdo.github.io/Pioneer/",
    imge: "/Pioneer.png",
  },
  {
    title: "Special Design",
    description:
      "A visually appealing website focused on creative design and showcasing artistic projects.",
    category: "JavaScript",
    live: "https://hamam-abdo.github.io/Special-Design/",
    imge: "/Special.png",
  },
  {
    title: "BigTech",
    description:
      "A modern website tailored for a tech-focused company, emphasizing innovation and technology services.",
    category: "JavaScript",
    live: "https://hamam-abdo.github.io/BigTech/",
    imge: "/BigTech.png",
  },
  {
    title: "Artelligence",
    description:
      "A website dedicated to showcasing artificial intelligence solutions and creative applications.",
    category: "JavaScript",
    live: "https://hamam-abdo.github.io/Artelligence/",
    imge: "/Artelligence.png",
  },
  {
    title: "Techwix",
    description:
      "A website for a tech-oriented brand featuring a clean layout and modern design elements.",
    category: "JavaScript",
    live: "https://hamam-abdo.github.io/Techwix/",
    imge: "/Techwix.png",
  },
  {
    title: "XStore",
    description:
      "A customer-focused e-commerce platform with an intuitive interface for browsing products and placing orders.",
    category: "React",
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
    live: "https://exclusive-mauve.vercel.app/",
    video:
      "https://www.linkedin.com/posts/hamam-abdulrahman-b1467b25b_nextjs-supabase-ecommerce-activity-7267551794224848897-OUtH?utm_source=share&utm_medium=member_desktop",
    imge: "/Exclusive.png",
  },
];

export const socialLinks = [
  {
    icon: <TiSocialFacebookCircular size={30} />,
    url: "https://www.facebook.com/profile.php?id=100076514415204",
  },
  {
    icon: <VscGithub size={25} />,
    url: "https://github.com/hamam-abdo",
  },
  {
    icon: <CiLinkedin size={25} />,
    url: "https://www.linkedin.com/in/hamam-abdulrahman-b1467b25b/",
  },
];

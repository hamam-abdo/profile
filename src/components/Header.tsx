"use client";
import { useState, useEffect } from "react";
import { navLinks } from "@/constants";
export default function Header() {
  const [fixed, setfixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setfixed(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false); // حالة التحكم في فتح وإغلاق القائمة المنبثقة

  return (
    <header
      className={`${
        fixed ? "fixed   animate-[hedar_1s]" : ""
      } w-full top-0  z-50 bg-[#111] `}
    >
      <nav className="  relative  container flex items-center py-5 justify-between sm:w-4/5 ">
        <h1 className=" font-bold  text-2xl sm:text-3xl  text-white">
       Portfolio
        </h1>
        <div
          className={` ${isOpen && "before:scale-[2.7] before:opacity-40"}
            relative py-2 pr-10 pl-5 flex items-center cursor-pointer bg-white rounded-full text-black before:absolute before:bg-black before:w-[5px] before:h-[5px] before:rounded-full before:right-5 group   
`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            data-text="MENU"
            className="relative w-full h-full
    after:content-[attr(data-text)]
    after:relative after:top-0 after:duration-[0.2s]  after:visible after:opacity-100
    before:content-[attr(data-text)] before:duration-[0.2s]  
    before:absolute before:top-full before:invisible before:opacity-0
    group-hover:after:-top-10 group-hover:after:invisible group-hover:after:opacity-0
    group-hover:before:top-0 group-hover:before:visible group-hover:before:opacity-100
    "
          >
            {/* محتوى العنصر هنا إن وجد */}
          </span>
        </div>
        {isOpen && (
          <ul className="py-3 top-full  z-10 gap-3 w-[200px] right-5 absolute  text-white  font-light rounded shadow-lg transition-transform duration-300 ease-in-out">
            {/* خلفية مع تأثير الشفافية */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff82f3] via-[#7b13ff] to-[#400d64] opacity-50 rounded"></div>

            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  target={link.target}
                  rel={link.rel }
                  className="flex  gap-1 py-2 px-4 relative"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

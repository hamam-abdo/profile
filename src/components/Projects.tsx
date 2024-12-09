"use client";
import { useState } from "react";
import { projects } from "@/constants";
import Image from "next/image"; // لاستيراد مكون الصور من Next.js
import { FaPlayCircle, FaExternalLinkAlt } from "react-icons/fa";
export default function Projects() {
  const categories = [
    "All Projects",
    "HTML & CSS",
    "JavaScript",
    "React",
    "Next.js",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="container  py-20" id="projects">
      <h2 className="text-4xl font-bold inline-block text-gradient mb-8 w-full  text-center">
        My Latest Projects
      </h2>
      <div className="flex justify-center gap-3 flex-wrap mb-10 ">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xl py-3 px-7 border w-full sm:w-fit border-[#0ea5ea] rounded-[50px] font-medium text-white duration-[0.4s] hover:bg-about-gradient hover:border-transparent 
              ${
                selectedCategory === cat
                  ? "bg-about-gradient border-transparent"
                  : ""
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden group  border border-gray-600  "
          >
            {/* حاوية الصورة */}
            <div className="relative w-full h-52">
              <Image
                src={project.imge} // صورة المشروع
                alt={project.title}
                layout="fill" // يجعل الصورة تأخذ الحجم الكامل
                objectFit="cover" // يضمن أن الصورة تملأ المساحة
                className="transition-all duration-[1s] object-top group-hover:object-bottom " // تأثير الحركة عند التمرير
              />
            </div>

            {/* معلومات المشروع */}
            <div className="p-4 text-center relative z-10">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* روابط */}
              <div className="flex justify-evenly ">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0ea5ea] hover:underline flex items-center gap-2"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                {/* رابط الفيديو إذا كان موجودًا */}
                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0ea5ea] hover:underline flex items-center gap-2"
                  >
                    <FaPlayCircle />
                    Watch Video
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

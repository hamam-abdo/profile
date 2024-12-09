import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { socialLinks } from "@/constants";

export default function Home() {
  return (
    <>
      <Header />
      <div className="fixed flex  items-center top-1/2 -right-24 sm:-right-16 transform -translate-y-1/2 rotate-90 z-50">
        <p className="text-[#bbb]   font-semibold relative before:absolute before:w-12 before:h-[1px] before:bg-white before:right-0 before:top-1/2 pr-16 ">
          Follow Me
        </p>
        <div className="flex  gap-4  ml-5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0ea5ea]"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className=" min-h-custom relative " id="about">
        <div
          className="absolute inset-0  text-stone-100 flex items-center justify-center   overflow-hidden
                before:absolute before:inset-0 
                before:bg-[url('/h.png')] 
                before:-top-full before:-left-full 
                before:animate-grained
                before:-z-10
                
              "
        >
          <h1 className="text-fill-color text-8xl  !leading-[1.2] sm:text-9xl  text-center font-bold    ">
            {" "}
            Hamam Sadek
          </h1>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
    </>
  );
}

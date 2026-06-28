import { skillGroups } from "@/constants";
import Image from "next/image";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="container scroll-mt-24 py-20 sm:py-28">
      <Reveal>
        <h2 className="section-title">Skills &amp; Tools</h2>
        <div className="mb-10 h-1 w-20 rounded-full bg-about-gradient" />
      </Reveal>

      <div className="space-y-10">
        {skillGroups.map((group, gi) => (
          <div key={gi}>
            <Reveal>
              <h3 className="mb-5 text-lg font-semibold text-gray-300">
                {group.group}
              </h3>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {group.items.map((skill, index) => (
                <Reveal key={index} delay={index * 60}>
                  <div className="group flex h-full items-center justify-center gap-3 rounded-xl border border-line bg-card/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-card">
                    <span className="grid h-9 w-9 shrink-0 place-items-center transition-transform duration-300 group-hover:scale-110">
                      {"img" in skill ? (
                        <Image
                          src={skill.img}
                          alt={skill.name}
                          width={36}
                          height={36}
                          className="h-8 w-8 rounded-md object-contain sm:h-9 sm:w-9"
                        />
                      ) : (
                        skill.icon
                      )}
                    </span>
                    <h4 className="text-sm font-semibold text-white sm:text-lg">
                      {skill.name}
                    </h4>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

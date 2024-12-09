import { skills } from "@/constants";
import Image from "next/image";
export default function Skills() {
  return (
    <div className="container  sm:w-4/5 ">
      <h2 className="text-4xl font-bold inline-block text-gradient mb-8">
        Skills
      </h2>

      <div className=" grid gap-8 grid-cols-2  md:grid-cols-3  lg:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 rounded-lg flex items-center    justify-center  bg-[#131c31] gap-4  border border-[#222f43] "
          >
            <Image
              src={skill.img}
              alt={skill.name}
              width={30}
              height={30}
              className="rounded-full sm:w-[35px]  "
            />

            <h3 className="text-white font-semibold   text-sm  sm:text-xl ">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

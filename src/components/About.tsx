"use client";
import { Typewriter } from "react-simple-typewriter";
export default function About() {
  return (
    <div className="container py-14 sm:w-4/5 ">
      <h2 className="text-4xl font-bold inline-block  text-gradient ">
        About Me
      </h2>
      <p className=" my-3  max-w-[500px] break-words leading-[1.9]  text-white	 ">
        <Typewriter
          words={[
            "I'm just a Front-End Developer who loves creating amazing user experiences through modern web technologies",
          ]}
          cursor // يظهر مؤشر الكتابة
          cursorStyle="|"
          typeSpeed={90} // سرعة الكتابة
        />
      </p>
    </div>
  );
}

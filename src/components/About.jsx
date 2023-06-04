import React from "react";

function About(props) {
  return (
    <div
      className={`flex items-center ${
        props.style === "fixed" ? "h-screen" : "max-h-screen my-72"
      }`}
    >
      <div
        className={`${
          props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
        } w-full md:w-2/3 duration-[2500ms] ${
          props.navDisplay === true ? "-translate-x-2/3 " : ""
        }`}
      >
        <div className="text-center lg:text-left m-10 p-5  md:pl-20">
          <h1 className="font-bold text-5xl pb-12 -z-10">About me</h1>
          <p className="text-lg -z-10">
            I am a self taught frontend engineer based in Mumbai, India. Over
            the past year, I have worked on personal and corporate projects
            using CSS frameworks, react and my photoshop skills. I am always
            eager to learn new skills and up for challenges!! I can bring
            innovative ideas to web development and contribute to building a
            strong team bond and a healthy working envoirnment.
          </p>
        </div>
      </div>
      <div
        className={`hidden md:inline-block md:animate-float w-1/3 ${
          props.mode === "dark" ? "invert-[10%]" : ""
        }`}
      >
        <img src="\assets\airballoon.webp" alt="Hot air balloon" />
      </div>
    </div>
  );
}

export default About;

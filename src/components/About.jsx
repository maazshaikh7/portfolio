import React from "react";

function About(props) {
  return (
    <section
      className={`flex items-center min-h-screen ${
        props.style === "fixed" ? "" : "my-20"
      }`}
    >
      <div
        className={`${
          props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
        } w-full md:w-2/3 duration-[2500ms] ${
          props.navDisplay === true ? "-translate-x-2/3 " : ""
        }`}
      >
        <div className="m-10 p-5  md:pl-20">
          <h1 className="font-bold text-center md:text-left text-5xl pb-12 -z-10">
            About me
          </h1>
          <p className="text-lg -z-10 py-6">
            I am Maaz Shaikh, a self-taught frontend engineer from Mumbai,
            India. With a strong passion for web development, I have gained
            experience in personal and corporate projects. I am dedicated to
            continuous learning and enjoy taking on challenges.
          </p>
          <p className="text-lg -z-10 py-6">
            Overall, I am a driven and enthusiastic frontend developer, eager to
            contribute to a team and create a positive working environment. I
            believe in continuous growth and learning in the ever-evolving field
            of web development, and I am excited to take on new challenges and
            make meaningful contributions to projects.
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
    </section>
  );
}

export default About;

import React from "react";

function About(props) {
  return (
    <div
      className={`${
        props.style === "fixed" ? "max-h-[65.8vh]" : "max-h-screen"
      }`}
    >
      <div
        className={`my-40 lg:mt-96 ${
          props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
        } mx-8 lg:pl-72 duration-[2500ms] max-w-[70rem] ${
          props.navDisplay === true ? "-translate-x-2/3 " : ""
        }`}
      >
        <div className="translate-y-12 text-center lg:text-left">
          <h1 className="font-bold text-7xl pb-3 -z-10">About me</h1>
          <p className="text-xl -z-10">
            I am a self taught frontend engineer based in Mumbai, India. Over
            the past year, I have worked on personal and corporate projects
            using CSS frameworks, react and my photoshop skills. I am always
            eager to learn new skills and up for challenges!! I can bring
            innovative ideas to web development and contribute to building a
            strong team bond and a healthy working envoirnment.
          </p>
        </div>
        <div
          className={`opacity-50 hidden ${
            props.style === "fixed"
              ? "fixed top-28"
              : "relative -top-96 right-80"
          } lg:block duration-[2500ms] -z-20 ${
            props.navDisplay === true ? "-translate-x-2/3" : ""
          } `}
        >
          <img
            src="src\assets\cloud.png"
            alt="cloud"
            className="min-w-[90rem] "
          />
        </div>
        <div
          className={`relative hidden lg:block -top-[100vh] left-[100vh] ${
            props.mode === "dark" ? "invert-[20%]" : ""
          }`}
        >
          <img src="src/assets/airballoon.webp" alt="Hot air balloon" />
        </div>
      </div>
    </div>
  );
}

export default About;

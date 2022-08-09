import React from "react";

function About(props) {
  return (
    <>
      <div
        className={`my-40 lg:mt-60 ${
          props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
        } mx-8 lg:pl-72 duration-[2500ms] max-w-[70rem] ${
          props.navDisplay === true ? "-translate-x-2/3 " : ""
        }`}
      >
        <h1 className="font-bold text-7xl pb-3 -z-10">About me</h1>
        <p className="text-xl -z-10">
          something about me i haven't figured out yet. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Delectus, repellat laborum.
          Obcaecati provident id deleniti, ad incidunt eius officia rerum ipsa
          repellendus veritatis ex excepturi sint unde sit officiis corrupti
          iusto a necessitatibus molestiae.
        </p>
      </div>
      <div
        className={`relative hidden lg:block -top-[50vh] left-[130vh] ${
          props.mode === "dark" ? "invert-[20%]" : ""
        }`}
      >
        <img src="src/assets/airballoon.webp" alt="Hot air balloon" />
      </div>
      <img
        src="src\assets\cloud.png"
        alt="cloud"
        className={`min-w-[90rem] opacity-50 hidden lg:block absolute top-[115vh] duration-[2500ms] -z-20  ${
          props.navDisplay === true ? "-translate-x-2/3" : ""
        } `}
      />
    </>
  );
}

export default About;

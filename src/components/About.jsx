import React from "react";

function About(props) {
  return (
    <div className={`${props.style === "fixed" ? 'max-h-[65.8vh]' : 'max-h-screen' }`}>
      <div
        className={`my-40 lg:mt-80 ${
          props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
        } mx-8 lg:pl-72 duration-[2500ms] max-w-[70rem] ${
          props.navDisplay === true ? "-translate-x-2/3 " : ""
        }`}
      >
        <h1 className="font-bold text-7xl pb-3 -z-10">About me</h1>
        <p className="text-xl -z-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          necessitatibus doloribus fugit voluptates iure distinctio! Sint, atque
          praesentium. Eius, culpa architecto obcaecati quos maxime neque ex
          tenetur quam deleniti expedita quod consequatur magnam quae eum
          blanditiis nostrum velit, cupiditate doloribus, reprehenderit repellat
          repellendus? Repellat aut odio expedita ipsa quod ipsam?
        </p>
      </div>
      <div
        className={`relative hidden lg:block -top-[60vh] left-[130vh] ${
          props.mode === "dark" ? "invert-[20%]" : ""
        }`}
      >
        <img src="src/assets/airballoon.webp" alt="Hot air balloon" />
      </div>
      <div
        className={`opacity-50 hidden ${props.style === 'fixed'? 'fixed top-28' : 'relative -top-[110vh]'} lg:block duration-[2500ms] -z-20 ${
          props.navDisplay === true ? "-translate-x-2/3" : ""
        } `}
      >
        <img
          src="src\assets\cloud.png"
          alt="cloud"
          className="min-w-[90rem] "
        />
      </div>
    </div>
  );
}

export default About;

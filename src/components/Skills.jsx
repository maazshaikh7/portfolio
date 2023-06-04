import React from "react";

function Skills(props) {
  return (
    <>
      <div
        className={`min-h-screen py-10 ${
          props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
        } `}
      >
        <h1 className="text-4xl font-bold my-28 lg:pb-18 text-center">
          My Skills
        </h1>
        <ul className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center text-md text-neutral-100 border-2 shadow-xl shadow-neutral-700 font-semibold w-1/2 mx-auto bg-neutral-900 rounded-xl p-10 mb-28 ">
          <li className="text-center w-16">
            <img src="\assets\html.webp" alt="HTML icon" /> <p>Html 5</p>
          </li>
          <li className="text-center w-16">
            <img src="\assets\css.png" alt="CSS icon" /> <p>CSS 3</p>
          </li>
          <li className="text-center w-16">
            <img src="\assets\js.png" alt="Javascript icon" /> <p>JavaScript</p>
          </li>
          <li className="text-center w-16">
            <img src="\assets\react.png" alt="React js icon" />
            <p>React JS</p>
          </li>
          <li className="text-center w-16">
            <img src="\assets\typescript.png" alt="Typescript icon" />
            <p>Typescript</p>
          </li>
          <li className="text-center w-16">
            <img src="\assets\bootstrap.png" alt="Bootstrap icon" />
            <p>Bootstrap</p>
          </li>
          <li className="text-center w-16">
            <img src="\assets\tailwind.png" alt="Tailwind CSS icon" />
            <p>Tailwind CSS</p>
          </li>
          <li className="text-center w-16">
            <img src="\assets\git.png" alt="Git icon" />
            <p>Git</p>
          </li>
          <li className="text-center w-16">
            <img src="/assets/jest.svg" alt="Jest icon" />
            <p>Jest</p>
          </li>
          <li className="text-center w-16">
            <img src="\assets\responsive.jpeg" alt="Responsive Design icon" />
            <p>Responsive Design</p>
          </li>
          <li className="text-center w-16">
            <img src="\assets\nodejs.png" alt="Git icon" />
            <p>NodeJS</p>
          </li>
          <li className="text-center w-16">
            <img
              className="invert"
              src="\assets\github.png"
              alt="github icon"
            />
            <p>Github</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Skills;

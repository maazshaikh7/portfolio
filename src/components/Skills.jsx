import React from "react";

function Skills(props) {
  return (
    <>
      <section
        className={`min-h-screen py-10 ${
          props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
        } `}
      >
        <h1 className="text-4xl font-bold my-28 lg:pb-18 text-center">
          My Skills
        </h1>
        <ul className="grid gap-10 gap-x-20 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center text-md text-neutral-100 border-2 shadow-xl shadow-neutral-700 font-semibold w-1/2 mx-auto bg-neutral-900 rounded-xl p-10 mb-28 ">
          <li className="text-center w-16">
            <img src="\assets\html.webp" alt="HTML logo" loading="lazy" />{" "}
            <p>Html 5</p>
          </li>
          <li className="text-center w-16">
            <img src="\assets\css.png" alt="CSS logo" loading="lazy" />{" "}
            <p>CSS 3</p>
          </li>
          <li className="text-center w-16">
            <img src="\assets\js.png" alt="Javascript logo" loading="lazy" />{" "}
            <p>JavaScript</p>
          </li>
          <li className="text-center w-16">
            <img src="\assets\react.png" alt="React js logo" loading="lazy" />
            <p>React JS</p>
          </li>
          <li className="text-center w-16">
            <img
              src="\assets\typescript.png"
              alt="Typescript logo"
              loading="lazy"
            />
            <p>Typescript</p>
          </li>
          <li className="text-center w-16">
            <img
              src="/assets/nextjs.png"
              alt="Next logo"
              loading="lazy"
              className="invert"
            />
            <p>NextJS</p>
          </li>
          <li className="text-center w-16">
            <img
              src="\assets\bootstrap.png"
              alt="Bootstrap logo"
              loading="lazy"
            />
            <p>Bootstrap</p>
          </li>
          <li className="text-center w-16">
            <img
              src="\assets\tailwind.png"
              alt="Tailwind CSS logo"
              loading="lazy"
            />
            <p>Tailwind CSS</p>
          </li>
          <li className="text-center w-16">
            <img src="\assets\git.png" alt="Git logo" loading="lazy" />
            <p>Git</p>
          </li>
          <li className="text-center w-16">
            <img src="\assets\sass.png" alt="Sass logo" loading="lazy" />
            <p>Sass</p>
          </li>
          <li className="text-center w-16">
            <img src="\assets\nodejs.png" alt="Git logo" loading="lazy" />
            <p>NodeJS</p>
          </li>
          <li className="text-center w-16">
            <img
              className="invert"
              src="\assets\github.png"
              alt="github logo"
              loading="lazy"
            />
            <p>Github</p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Skills;

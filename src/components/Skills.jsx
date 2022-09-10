import React from "react";

function Skills(props) {
  return (
    <>
      <div
        className={`min-h-screen ${
          props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
        } `}
      >
        <h1 className="text-7xl font-bold my-28 lg:pb-28 text-center">
          My Skills
        </h1>
        <ul className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center text-xl text-neutral-100 border-2 shadow-xl shadow-neutral-700 font-semibold w-1/2 mx-auto bg-neutral-900 rounded-xl p-10 ">
          <li className="text-center w-20">
            <img src="src\assets\html.webp" alt="HTML icon" /> Html 5
          </li>
          <li className="text-center w-20">
            <img src="src\assets\css.png" alt="CSS icon" /> CSS 3
          </li>
          <li className="text-center w-20">
            <img src="src\assets\js.png" alt="Javascript icon" /> JavaScript
          </li>
          <li className="text-center w-20">
            <img src="src\assets\react.png" alt="React js icon" /> React js
          </li>
          <li className="text-center w-20">
            <img src="src\assets\bootstrap.png" alt="Bootstrap icon" />
            Bootstrap
          </li>
          <li className="text-center w-20">
            <img src="src\assets\tailwind.png" alt="Tailwind CSS icon" />
            Tailwind css
          </li>
          <li className="text-center w-20">
            <img src="src\assets\git.png" alt="Git icon" />
            Git
          </li>
          <li className="text-center w-20">
            <img className="invert" src="src\assets\github.png" alt="github icon" />
            Github
          </li>
        </ul>
      </div>
    </>
  );
}

export default Skills;

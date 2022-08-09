import React from "react";

function Skills(props) {
  return (
    <>
      <div
      className={`my-96 ${
        props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
      } `}
    ><h1 className="text-7xl font-bold my-28 text-center">My Skills</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center text-xl ">
          <li>Html 5</li>
          <li>CSS 3</li>
          <li>JavaScript</li>
          <li>React js</li>
          <li>Bootstrap</li>
          <li>Tailwind css</li>
        </ul>
      </div>
    </>
  );
}

export default Skills;

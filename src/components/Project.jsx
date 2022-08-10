import React from "react";

function Project(props) {
  return (
    <>
    {/* ABOUT PROJECT ON HOVER */}
      <div className={`project p-5 bg-gradient-to-tr ${
          props.mode == "dark"
            ? "from-blue-500 to-cyan-100"
            : "from-blue-900 to-indigo-900 "
        } hover:border-4 rounded-xl min-w-48`}>
        <div className={`project-name p-3 text-center text-2xl font-bold ${props.mode === 'dark' ? 'bg-neutral-800': 'bg-neutral-100'} rounded-lg`}>{props.projectName}</div>
        <img
          src={props.img}
          className="preview w-80 h-64 mx-auto m-5 rounded-xl"
        />
        <button className="py-2 px-10 m-2 rounded-full block mx-auto bg-neutral-100 text-xl text-black">Live Preview</button>
        <button className="py-2 px-10 m-2 rounded-full block mx-auto bg-neutral-100 text-xl text-black">Source code</button>

      </div>
    </>
  );
}

export default Project;

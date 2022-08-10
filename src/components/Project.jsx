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
          src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="preview w-80 h-64 mx-auto m-5 rounded-xl"
        />
        <button className="py-2 px-10 m-2 rounded-full block mx-auto bg-neutral-100 text-xl text-black">Live Preview</button>
        <button className="py-2 px-10 m-2 rounded-full block mx-auto bg-neutral-100 text-xl text-black">Source code</button>

      </div>
    </>
  );
}

export default Project;

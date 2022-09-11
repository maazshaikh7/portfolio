import React from "react";

function Project(props) {
  return (
    <>
    {/* ABOUT PROJECT ON HOVER */}
      <div className={`group p-5 bg-neutral-900 border-4 shadow-2xl rounded-xl min-w-fit `}>
        <div className={`project-name p-3 text-center text-2xl font-bold ${props.mode === 'dark' ? 'bg-neutral-800': 'bg-neutral-100'} rounded-lg`}>{props.projectName}</div>
        <div className="about relative w-fit pl-1 pr-12 text-lg h-0 hidden text-neutral-300 top-10 left-7 group-hover:block">{props.about}</div>
        <img
          src={props.img}
          className=" w-80 h-64 mx-auto m-5 rounded-xl group-hover:opacity-5 duration-300 object-cover"
        />
        <a href={props.preview} target="_blank"><button className="py-2 px-10 m-2 rounded-full block mx-auto bg-neutral-100 text-xl text-black hover:bg-blue-200">Live Preview</button></a>
        <a href={props.code} target="_blank"><button className="py-2 px-10 m-2 rounded-full block mx-auto bg-neutral-100 text-xl text-black hover:bg-red-200">Source code</button></a>

      </div>
    </>
  );
}

export default Project;

import React from "react";
import Project from "./Project";

function Portfolio(props) {
  return (
    <div
      className={`${
        props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
      } mx-8 py-20 lg:my-0`}
    >
      <h1 className="text-7xl font-bold my-28 text-center">My projects</h1>
      <div className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-2/3 mx-auto">
        <Project projectName={"TEXTUTILS"} mode={props.mode}/>
        <Project projectName={"NEWS-MONKEY"} mode={props.mode}/>
        <Project projectName={"ODIN-CALCULATOR"} mode={props.mode}/>
        <Project projectName={"SPEED TYPING"} mode={props.mode}/>
        <Project projectName={"MICROSOFT CLONE"} mode={props.mode}/>
        <Project projectName={"MEMORY CARD"} mode={props.mode}/>
      </div>
    </div>
  );
}

export default Portfolio;

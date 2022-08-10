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
        <Project projectName={"TEXTUTILS"} mode={props.mode} img={"https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}/>
        <Project projectName={"NEWS-MONKEY"} mode={props.mode} img={""} />
        <Project projectName={"ODIN-CALCULATOR"} mode={props.mode} img={""} />
        <Project projectName={"SPEED TYPING"} mode={props.mode} img={""} />
        <Project projectName={"MICROSOFT CLONE"} mode={props.mode} img={""} />
        <Project projectName={"MEMORY CARD"} mode={props.mode} img={""} />
      </div>
    </div>
  );
}

export default Portfolio;

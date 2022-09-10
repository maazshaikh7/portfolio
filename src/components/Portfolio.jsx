import React from "react";
import Project from "./Project";

function Portfolio(props) {
  return (
    <div
      className={`${
        props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
      } py-20 lg:my-0`}
    >
      <h1 className="text-7xl font-bold my-28 text-center">My projects</h1>
      <div className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-2/3 mx-auto my-40">
        <Project
          projectName={"TEXTUTILS"}
          mode={props.mode}
          img={"src\\assets\\textutils.png"}
          preview={"https://www.google.com"}
          code={"https://github.com/maazshaikh7/textutils"}
          about={
            "TextUtils is a simple utility tool for text editing made using react and bootstrap"
          }
        />
        <Project
          projectName={"NEWS-MONKEY"}
          mode={props.mode}
          img={""}
          preview={""}
          code={"https://github.com/maazshaikh7/textutils"}
          about={""}
        />
        <Project
          projectName={"ODIN-CALCULATOR"}
          mode={props.mode}
          img={""}
          preview={""}
          code={"https://github.com/maazshaikh7/textutils"}
          about={""}
        />
        <Project
          projectName={"SPEED TYPING"}
          mode={props.mode}
          img={""}
          preview={""}
          code={"https://github.com/maazshaikh7/textutils"}
          about={""}
        />
        <Project
          projectName={"MICROSOFT CLONE"}
          mode={props.mode}
          img={""}
          preview={""}
          code={"https://github.com/maazshaikh7/textutils"}
          about={""}
        />
        <Project
          projectName={"MEMORY CARD"}
          mode={props.mode}
          img={""}
          preview={""}
          code={"https://github.com/maazshaikh7/textutils"}
          about={""}
        />
      </div>
    </div>
  );
}

export default Portfolio;

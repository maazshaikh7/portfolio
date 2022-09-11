import React from "react";
import Project from "./Project";

function Portfolio(props) {
  return (
    <div
      className={`${
        props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
      } py-12 lg:py-0`}
    >
      <h1 className="text-7xl font-bold my-28 text-center">My projects</h1>
      <div className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-2/3 mx-auto my-40">
        <Project
          projectName={"NEWS-MONKEY"}
          mode={props.mode}
          img={"src\\assets\\newsapp.png"}
          preview={""}
          code={"https://github.com/maazshaikh7/newsapp"}
          about={"NewsApp shows all the breaking news at one place using NEWS API, react and bootstrap"}
        />
          <Project
            projectName={"TODO-LIST"}
            mode={props.mode}
            img={"src\\assets\\todolist.png"}
            preview={""}
            code={"https://github.com/maazshaikh7/todolist"}
            about={"As the name suggests, a list of things to do, stored in local-storage made using pure HTML, CSS and Javascript."}
          />
        <Project
          projectName={"ETCH-A-SKETCH"}
          mode={props.mode}
          img={"src\\assets\\etch-a-sketch.png"}
          preview={""}
          code={"https://github.com/maazshaikh7/etch-a-sketch"}
          about={"A sketchpad on web with rgb sketching made using pure HTML, CSS and Javscript"}
        />
        <Project
          projectName={"ODIN-CALCULATOR"}
          mode={props.mode}
          img={"src\\assets\\odin-calculator.png"}
          preview={""}
          code={"https://github.com/maazshaikh7/odin-calculator"}
          about={"'The odin project' basic calculator remade using tailwind-css and javascript"}
        />
        {/* <Project
          projectName={"SWIFT-TYPE"}
          mode={props.mode}
          img={""}
          preview={""}
          code={"https://github.com/maazshaikh7/swift-type"}
          about={""}
        /> */}
        <Project
          projectName={"MICROSOFT CLONE"}
          mode={props.mode}
          img={"src\\assets\\ms-clone.png"}
          preview={""}
          code={"https://github.com/maazshaikh7/ms-clone"}
          about={"Cloned design of microsoft website as of July 2022 using tailwind-css and react"}
        />
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
      </div>
    </div>
  );
}

export default Portfolio;

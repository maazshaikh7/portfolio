import React from "react";
import Project from "./Project";

function Portfolio(props) {
  return (
    <section
      className={`${
        props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
      } py-12 my-auto`}
    >
      <h1 className="text-4xl font-bold my-28 text-center">My projects</h1>
      <div className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-2/3 mx-auto my-40">
        <Project
          projectName={"SHADOW-KEYS"}
          mode={props.mode}
          img={"\\assets\\shadowkeys.png"}
          preview={"https://shadowkeys.netlify.app"}
          code={"https://github.com/maazshaikh7/shadow-keys"}
          about={
            "Made using react and typescript for practicing touch typing and increasing typing speed."
          }
        />
        <Project
          projectName={"CODESWEAR"}
          mode={props.mode}
          img={"\\assets\\codeswear.png"}
          preview={"https://codeswear-ecommerce.vercel.app"}
          code={"https://github.com/maazshaikh7/codeswear"}
          about={
            "Codeswear is a Next.js-based Fullstack eCommerce website that offers a diverse range of trendy and fashionable clothing and accessories"
          }
        />
        <Project
          projectName={"ETCH-A-SKETCH"}
          mode={props.mode}
          img={"\\assets\\etch-a-sketch.png"}
          preview={"https://maazshaikh7.github.io/Etch-A-Sketch/"}
          code={"https://github.com/maazshaikh7/etch-a-sketch"}
          about={
            "A sketchpad on web with rgb sketching made using pure HTML, CSS and Javscript"
          }
        />
        <Project
          projectName={"MICROSOFT CLONE"}
          mode={props.mode}
          img={"\\assets\\ms-clone.png"}
          preview={"https://pagenotfound.netlify.app"}
          code={"https://github.com/maazshaikh7/microsoft-clone"}
          about={
            "Cloned design of microsoft website as of July 2022 using tailwind-css and react"
          }
        />
        <Project
          projectName={"NEWS-MONKEY"}
          mode={props.mode}
          img={"\\assets\\newsapp.png"}
          preview={"https://newsapp-maazshaikh7.netlify.app"}
          code={"https://github.com/maazshaikh7/newsapp"}
          about={
            "NewsApp shows all the breaking news at one place using NEWS API, react and bootstrap"
          }
        />
        <Project
          projectName={"TEXTUTILS"}
          mode={props.mode}
          img={"\\assets\\textutils.png"}
          preview={"https://textutils-maazshaikh7.netlify.app"}
          code={"https://github.com/maazshaikh7/textutils"}
          about={
            "TextUtils is a simple utility tool for text editing made using react and bootstrap"
          }
        />
      </div>
    </section>
  );
}

export default Portfolio;

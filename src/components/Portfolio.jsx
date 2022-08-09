import React from "react";

function Portfolio(props) {
  return (
    <div
      className={`${
        props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
      } mx-8 py-20 lg:my-0`}
    >
      <h1 className="text-7xl font-bold my-28 text-center">My projects</h1>
      <div className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-2/3 mx-auto">
        <div className="project w-64 h-64 bg-orange-400">project</div>
        <div className="project w-64 h-64 bg-orange-400">project</div>
        <div className="project w-64 h-64 bg-orange-400">project</div>
        <div className="project w-64 h-64 bg-orange-400">project</div>
        <div className="project w-64 h-64 bg-orange-400">project</div>
        <div className="project w-64 h-64 bg-orange-400">project</div>
      </div>
    </div>
  );
}

export default Portfolio;

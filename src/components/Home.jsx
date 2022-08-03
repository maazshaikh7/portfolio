import React from "react";

function Home() {
  return (
    <>
      <div
        className={`resume absolute right-6 top-4 sm: ${
          props.mode === "dark" ? "text-white" : ""
        }`}
      >
        <i className="bx text-5xl bxs-notepad"></i>
        <p className="font-bold pl-3">CV</p>
      </div>
    </>
  );
}

export default Home;

import React from "react";

function Home(props) {
  return (
    <>
      <main
        className={`absolute top-[45%] duration-700 right-1/4 ${
          props.navDisplay === false ? "-translate-x-80" : ""
        } `}
      >
        <img src="src\assets\cloud.png" alt="cloud" />

        {/* <div className={`${props.mode === "dark" ? "text-cyan-100" : ""}`}>
          <p className="text-2xl">Hi, I'm,</p>
          <h1 className="text-7xl font-sans">Maaz Shaikh</h1>
          <h3 className="text-3xl">Frontend Developer | UI/UX Designer</h3>
        </div>
        <div className="contact"></div>
        <div className={`resume ${props.mode === "dark" ? "text-white" : ""}`}>
          <i className="bx text-5xl bxs-notepad"></i>
          <p className="font-bold pl-3">CV</p>
        </div> */}
      </main>
    </>
  );
}

export default Home;

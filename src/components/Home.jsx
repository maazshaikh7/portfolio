import React from "react";

function Home(props) {
  return (
    <>
      <main
        className={`absolute top-1/4 duration-[2500ms] right-[5%] -z-10 ${
          props.navDisplay === false
            ? "xl:-translate-x-80 "
            : "-translate-y-[100vh]"
        } `}
      >
        <img
          src="src\assets\cloud.png"
          alt="cloud"
          className="h-[30rem] opacity-50 hidden lg:block"
        />
        <div
          className={`details lg:absolute m-8 md:m-20 lg:m-0 top-36 duration-700 right-1/4 font-semibold ${
            props.mode === "dark"
              ? "from-blue-900 to-violet-900"
              : "from-blue-500 to-cyan-100"
          } rounded-3xl p-3 lg:bg-none lg:p-0 bg-gradient-to-tr ${
            props.navDisplay === true ? "lg:hidden sm:translate-x-0" : ""
          } `}
        >
          <div className={`${props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"} `}>
            <p className="text-2xl my-1 lg:m-0">Hi, I'm,</p>
            <h1 className="text-7xl font-sans my-1 lg:m-0">Maaz Shaikh</h1>
            <h3 className="text-3xl my-1 lg:m-0">Frontend Developer | UI/UX Designer</h3>
          </div>
          <div className="contact">
            <button className="p-3 text-lg my-5 lg:my-2 rounded-full bg-cyan-200">
              Contact me
            </button>
          </div>
          {/* <div
            className={`resume ${props.mode === "dark" ? "text-white" : ""}`}
          >
            <i className="bx text-5xl bxs-notepad"></i>
            <p className="font-bold pl-3">CV</p>
          </div> */}
        </div>
      </main>
    </>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <div className="fill w-screen h-screen -z-50 grid items-center text-center ">
        <Link to="/contact">
          <button className={`p-3 ${
          props.navDisplay === true
            ? "-translate-x-[100vh]"
            : "-translate-x-52 "
        } text-lg my-5 lg:my-2 duration-[2500ms] rounded-full translate-y-20 bg-cyan-200 hover:bg-indigo-500 hover:border-2 active:border-0  font-semibold`}>
            Contact me
          </button>
        </Link>
      </div>
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
          <div
            className={`${
              props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
            } `}
          >
            <p className="text-2xl my-1 lg:m-0">Hi, I'm,</p>
            <h1 className="text-7xl font-sans my-1 lg:m-0">Maaz Shaikh</h1>
            <h3 className="text-3xl my-1 lg:m-0">
              Frontend Developer | UI/UX Designer
            </h3>
          </div>
        </div>
      </main>
      <img
        src="src\assets\sun.png"
        alt="sun"
        className={`sun/moon hidden md:block w-72 absolute top-3 right-2 duration-1000 ${
          props.mode === "dark" ? "-translate-y-72" : ""
        }`}
      />
      <img
        src="src\assets\moon.png"
        alt="moon"
        className={`sun/moon hidden md:block w-40 absolute top-3 right-2 duration-1000 ${
          props.mode === "light" ? "translate-x-40" : ""
        }`}
      />
    </>
  );
}

export default Home;

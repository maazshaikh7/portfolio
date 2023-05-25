import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <main
        className={`duration-[2500ms] -z-10 grid place-items-center h-screen ${
          props.navDisplay === false ? " " : "-translate-y-[100vh]"
        } `}
      >
        <img
          src="\assets\cloud.png"
          alt="cloud"
          className="h-[32rem] opacity-50 hidden lg:block"
        />
        <div
          className={`details lg:absolute top-auto duration-700 font-semibold ${
            props.navDisplay === true ? "lg:hidden sm:translate-x-0" : ""
          } `}
        >
          <div
            className={`${
              props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
            } `}
          >
            <p className="text-xl my-1 ">Hi, I'm,</p>
            <h1 className="text-5xl font-sans my-1">Maaz Shaikh</h1>
            <h3 className="text-2xl my-1 ">
              Frontend Developer | UI/UX Designer
            </h3>
            <Link to="/contact">
              <button
                className={`p-3 ${
                  props.navDisplay === true
                    ? "-translate-x-[100vh] bg-transparent"
                    : " "
                } text-md mt-5 rounded-full border-2 border-neutral-800 hover:border-2 hover:border-sky-300 font-semibold`}
              >
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </main>
      {/* <img
        src="\assets\sun.png"
        alt="sun"
        className={`sun/moon hidden md:block w-72 absolute top-3 right-2 duration-1000 ${
          props.mode === "dark" ? "-translate-y-72" : ""
        }`}
      />
      <img
        src="\assets\moon.png"
        alt="moon"
        className={`sun/moon hidden md:block w-40 absolute top-3 right-2 duration-1000 ${
          props.mode === "light" ? "translate-x-40" : ""
        }`}
      /> */}
    </>
  );
}

export default Home;

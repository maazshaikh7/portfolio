import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    //TODO Cloud revealing animation till assets load
    <>
      <main
        className={`duration-[2500ms] md:animate-float -z-10 grid place-items-center h-screen ${
          props.navDisplay === false ? " " : "-translate-y-[100vh]"
        } `}
      >
        <img
          src="\assets\cloud.png"
          alt="cloud"
          className="w-full lg:w-4/5 xl:w-2/3  opacity-50 hidden md:block "
        />
        <div className="details md:absolute top-auto px-10 duration-700 font-semibold">
          <div
            className={`${
              props.mode === "dark" ? "text-cyan-100" : "text-neutral-900"
            } px-5`}
          >
            <p className="text-xl my-1 ">Hi, I'm,</p>
            <h1 className="text-5xl font-sans my-1">Maaz Shaikh</h1>
            <h2 className="text-2xl my-1 ">
              Frontend Developer | UI/UX Designer
            </h2>
            <Link to="/contact">
              <button
                className={`p-3 text-md mt-5 rounded-full border-2 border-neutral-800 hover:border-2 hover:border-sky-300 font-semibold`}
              >
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </main>
      <img
        src="\assets\sun.png"
        alt="sun"
        className={`sun hidden md:block w-64 absolute top-3 right-2 duration-1000 ${
          props.mode === "dark" ? "-translate-y-72 animate-fade-out" : ""
        }`}
      />
      <img
        src="\assets\moon.png"
        alt="moon"
        className={`moon hidden md:block w-36 absolute top-3 right-2 duration-1000 ${
          props.mode === "light" ? "-translate-y-80 animate-fade-out" : ""
        }`}
      />
    </>
  );
}

export default Home;

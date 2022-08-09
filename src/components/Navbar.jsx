import React, { useState } from "react";

function Navbar(props) {
  return (
    <>
      <nav
        className={`absolute sm:fixed pt-8 w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3 rounded-r-xl bg-gradient-to-tr ${
          props.mode == "light"
            ? "from-blue-500 to-cyan-100"
            : "from-blue-900 to-violet-900 "
        } min-h-screen overflow-hidden duration-700 z-10 ${
          props.navDisplay ? "" : "-translate-x-full"
        }`}
      >
        <div className="container ml-6 mr-6">
          <div
            className={`shape w-52 h-52 rounded-full absolute -top-8 -left-8 ${
              props.mode === "light" ? "bg-sky-200" : "bg-blue-900"
            } blur-3xl`}
          ></div>
          <div className="data relative py-20 mx-10">
            <div
              className={`mask sm:flex justify-center items-end ${
                props.mode === "light" ? "text-sky-900" : "text-cyan-200"
              } text-2xl overflow-hidden`}
            >
              <img
                src="src\assets\avatar.webp"
                alt="My Avatar"
                className="w-36"
              />
              <div className="greeting p-6">
                Hi, I'm
                <h1 className="name text-4xl font-bold">
                  Maaz <br />
                  Shaikh
                </h1>
              </div>
            </div>
          </div>
          <ul
            className={`navlist font-bold text-lg ${
              props.mode === "light" ? "text-sky-900" : "text-cyan-200"
            } list-none px-28 pb-28 flex flex-col -translate-x-14 text-center space-y-12`}
          >
            <li className="navItem">
              <a href="/" className="navLink">
                <i className="bx bx-home"></i>Home
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                <i className="bx bx-user"></i>About Me
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                <i className="bx bx-briefcase"></i>Portfolio
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                <i className="bx bx-bookmark"></i>Skills
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                <i className="bx bxs-chat"></i>Contact Me
              </a>
            </li>
            <ul className="socials flex justify-center py-3">
              <li>
                <i className="bx bxl-facebook cursor-pointer hover:text-4xl"></i>
              </li>
              <li>
                <i className="bx bxl-github cursor-pointer hover:text-4xl"></i>
              </li>
              <li>
                <i className="bx bxl-linkedin cursor-pointer hover:text-4xl"></i>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
      <div className="close fixed top-5 left-5 inline-flex cursor-pointer mb-16 font-bold z-10 ">
        {/* add class list bx-menu duration-300  */}
        <i
          onClick={props.toggleNav}
          className={`bx ${
            props.mode === "dark" ? "text-white" : ""
          } text-4xl duration-700 ${props.navDisplay ? "bx-x" : "bx-menu"}`}
        ></i>
      </div>

      <button
        onClick={props.toggleMode}
        className="mode fixed left-1/2 top-5 z-10"
      >
        <i
          className={`bx bxs-${
            props.mode == "light" ? "moon" : "sun text-white"
          }`}
        ></i>{" "}
      </button>
      <div
        className={`resume fixed right-6 top-4 sm:float-right sm:top-[90vh] sm:right-10 ${
          props.mode === "dark" ? "text-white" : ""
        }`}
      >
        <i className="bx text-5xl bxs-notepad"></i>
        <p className="font-bold pl-3">CV</p>
      </div>
    </>
  );
}

export default Navbar;

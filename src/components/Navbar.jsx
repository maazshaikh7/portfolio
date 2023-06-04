import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav
        className={`fixed  pt-8 lg:p-0 lg:m-0 w-2/3 md:w-1/2 lg:w-min top-0 lg:top-[17vh] lg:left-0 rounded-r-xl bg-gradient-to-tr ${
          props.mode == "light"
            ? "from-blue-500 to-cyan-100"
            : "from-blue-900 to-violet-900 "
        } min-h-full lg:min-h-0 lg:h-2/3 lg:flex lg:items-center overflow-hidden duration-700 z-10 ${
          props.navDisplay ? "" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="container">
          <div className="data lg:hidden relative py-4 md:py-14 mx-10">
            <div
              className={`mask justify-center items-end ${
                props.mode === "light" ? "text-sky-900" : "text-cyan-200"
              } text-lg overflow-hidden`}
            >
              <img
                src="\assets\avatar.webp"
                alt="My Avatar"
                className="mx-auto w-28 pt-10"
              />

              <h1 className="name text-2xl pt-5 text-center font-bold">
                Maaz <br />
                Shaikh
              </h1>
            </div>
          </div>
          <ul
            className={`navlist font-bold text-sm ${
              props.mode === "light" ? "text-sky-900" : "text-cyan-200"
            } list-none w-18 mt-8 lg:m-4 lg:p-0  flex flex-col  text-center lg:text-left space-y-7`}
          >
            <li className="navItem">
              <Link to="/" className="navLink">
                <i className="bx bx-home hidden md:inline"></i>
                <p className="lg:hidden">Home</p>
              </Link>
            </li>
            <li className="navItem">
              <Link to="/about" className="navLink">
                <i className="bx bx-user hidden md:inline"></i>
                <p className="lg:hidden">About Me</p>
              </Link>
            </li>
            <li className="navItem">
              <Link to="/portfolio" className="navLink">
                <i className="bx bx-briefcase hidden md:inline"></i>
                <p className="lg:hidden">Portfolio</p>
              </Link>
            </li>
            <li className="navItem">
              <Link to="/skills" className="navLink">
                <i className="bx bx-bookmark hidden md:inline"></i>
                <p className="lg:hidden">Skills</p>
              </Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">
                <i className="bx bxs-chat hidden md:inline"></i>
                <p className="lg:hidden">Contact Me</p>
              </Link>
            </li>
            <ul className="socials flex justify-center lg:text-left lg:flex-col p-7 lg:p-0 lg:pt-10">
              <li>
                <a
                  className="bx bxl-facebook cursor-pointer hover:text-3xl"
                  href="https://www.facebook.com/profile.php?id=100071131632511"
                  target="_blank"
                ></a>
              </li>
              <li>
                <a
                  className="bx bxl-github cursor-pointer hover:text-3xl"
                  href="https://github.com/maazshaikh7"
                  target="_blank"
                ></a>
              </li>
              <li>
                <a
                  className="bx bxl-linkedin cursor-pointer hover:text-3xl"
                  href="https://www.linkedin.com/in/maazshaikh7"
                  target="_blank"
                ></a>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
      <div className="close lg:hidden fixed top-5 left-5 inline-flex cursor-pointer mb-16 font-bold z-10 ">
        <i
          onClick={props.toggleNav}
          className={`bx ${
            props.mode === "dark" ? "text-white" : ""
          } text-3xl duration-700 ${props.navDisplay ? "bx-x" : "bx-menu"}`}
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
      <Link
        to="/cv"
        className={`resume fixed right-6 top-4 sm:float-right sm:top-[90vh] sm:right-10 ${
          props.mode === "dark" ? "text-white" : ""
        }`}
      >
        <i className="bx text-3xl bxs-notepad p-0"></i>
        <p className="font-bold text-sm text-center">CV</p>
      </Link>
    </>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav
        className={`fixed shadow-sm pt-8 lg:p-0 lg:m-0 w-2/3 duration-1000 md:w-1/2 lg:w-16 top-0 lg:top-1/2 lg:-translate-y-1/2 lg:left-0 rounded-r-xl bg-gradient-to-tr ${
          props.mode == "light"
            ? "from-blue-500 to-cyan-100"
            : "from-blue-900 to-violet-900 "
        } min-h-full lg:min-h-0 lg:max-h-2/3 lg:flex lg:items-center overflow-hidden duration-700 z-10 ${
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
            } list-none w-18  mt-8 lg:m-4 lg:p-0  flex flex-col  text-center`}
          >
            <li className="navItem group">
              <Link to="/" aria-label="Home page link" className="navLink">
                <i
                  className="bx bx-home hidden lg:inline lg:group-hover:opacity-0"
                  font-display="swap"
                ></i>
                <p className="text-sm lg:text-2xs lg:hidden group-hover:block relative bottom-5 -left-1">
                  Home
                </p>
              </Link>
            </li>
            <li className="navItem group">
              <Link
                to="/about"
                aria-label="About page link"
                className="navLink"
              >
                <i
                  className="bx bx-user hidden lg:inline lg:group-hover:opacity-0"
                  font-display="swap"
                ></i>
                <p className="text-sm lg:text-2xs lg:hidden group-hover:block relative bottom-5 -left-1">
                  About
                </p>
              </Link>
            </li>
            <li className="navItem group">
              <Link
                to="/portfolio"
                aria-label="Portfolio page link"
                className="navLink"
              >
                <i
                  className="bx bx-briefcase hidden lg:inline lg:group-hover:opacity-0"
                  font-display="swap"
                ></i>
                <p className="text-sm lg:text-2xs lg:hidden group-hover:block relative bottom-5 -left-3">
                  Projects
                </p>
              </Link>
            </li>
            <li className="navItem group">
              <Link
                to="/skills"
                aria-label="Skills page link"
                className="navLink"
              >
                <i
                  className="bx bx-bookmark hidden lg:inline lg:group-hover:opacity-0"
                  font-display="swap"
                ></i>
                <p className="text-sm lg:text-2xs lg:hidden group-hover:block relative bottom-5 -left-1">
                  Skills
                </p>
              </Link>
            </li>
            <li className="navItem group">
              <Link
                to="/contact"
                aria-label="Contact page link"
                className="navLink"
              >
                <i
                  className="bx bxs-chat hidden lg:inline lg:group-hover:opacity-0"
                  font-display="swap"
                ></i>
                <p className="text-sm lg:text-2xs lg:hidden group-hover:block relative bottom-5 -left-3">
                  Contact
                </p>
              </Link>
            </li>
            <ul className="socials flex justify-center lg:text-left lg:flex-col p-7 lg:p-0 lg:pt-10">
              <li>
                <a
                  className="bx bxl-facebook cursor-pointer hover:text-3xl"
                  aria-label="Facebook link"
                  font-display="swap"
                  href="https://www.facebook.com/profile.php?id=100071131632511"
                  target="_blank"
                ></a>
              </li>
              <li>
                <a
                  className="bx bxl-github cursor-pointer hover:text-3xl"
                  aria-label="Github link"
                  font-display="swap"
                  href="https://github.com/maazshaikh7"
                  target="_blank"
                ></a>
              </li>
              <li>
                <a
                  className="bx bxl-linkedin cursor-pointer hover:text-3xl"
                  aria-label="LinkedIn link"
                  font-display="swap"
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
          font-display="swap"
          className={`bx ${
            props.mode === "dark" ? "text-white" : ""
          } text-3xl duration-700 ${props.navDisplay ? "bx-x" : "bx-menu"}`}
        ></i>
      </div>

      <button
        onClick={props.toggleMode}
        aria-label="Change theme"
        role="presentation"
        className="mode fixed left-1/2 top-5 z-10"
      >
        <i
          font-display="swap"
          className={`bx bxs-${
            props.mode == "light" ? "moon" : "sun text-white"
          }`}
        ></i>
      </button>
      <Link
        to="/cv"
        aria-label="Link to CV"
        className={`resume z-20 fixed right-6 top-4 md:float-right md:top-[90vh] md:right-10 ${
          props.mode === "dark" ? "text-white" : ""
        }`}
      >
        <i className="bx text-3xl bxs-notepad p-0" font-display="swap"></i>
        <p className="font-bold text-sm text-center">CV</p>
      </Link>
    </>
  );
}

export default Navbar;

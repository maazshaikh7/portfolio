import React, { useState } from "react";

function Navbar(props) {
  const [navDisplay, setNavDisplay] = useState(true);
  const toggleNav = () => {
    navDisplay ? setNavDisplay(false) : setNavDisplay(true);
    console.log(navDisplay);
  };

  return (
    <>
      <nav
        className={`pt-8 w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3 rounded-r-xl bg-gradient-to-tr ${
          props.mode == "light"
            ? "from-blue-500 to-cyan-100"
            : "from-blue-900 to-violet-900 "
        } min-h-screen overflow-hidden duration-700 ${
          navDisplay ? "" : "-translate-x-full"
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
      <div className="close absolute top-5 left-5 inline-flex cursor-pointer mb-16 font-bold z-10 ">
        {/* add class list bx-menu duration-300  */}
        <i
          onClick={toggleNav}
          className={`bx ${props.mode === 'dark' ? "text-white" : "" } text-4xl duration-700 ${
            navDisplay ? "bx-x" : "bx-menu"
          }`}
        ></i>
      </div>
      <button
        onClick={props.toggleMode}
        className="mode absolute left-1/2 top-5 z-10"
      >
        <i className={`bx bxs-${props.mode == "light" ? "moon" : "sun text-white"}`}></i>{" "}
      </button>
      
      <img
        src='src\assets\sun.png'
        alt='sun'
        className={`sun/moon hidden md:block w-72 absolute top-3 right-2 duration-1000 ${props.mode === 'dark' ? "-translate-y-72" : "" }`}
      />
      <img
        src='src\assets\moon.png'
        alt= 'moon'
        className={`sun/moon hidden md:block w-40 absolute top-3 right-2 duration-1000 ${props.mode === 'light' ? "translate-x-40" : "" }`}
      />
    </>
  );
}

export default Navbar;

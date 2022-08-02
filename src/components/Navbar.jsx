import React, { useState } from "react";

function Navbar() {
  const body = document.body;
  const html = document.documentElement;
  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  const [navDisplay, setNavDisplay] = useState(true);
  const toggleNav = () => {
    navDisplay ? setNavDisplay(false) : setNavDisplay(true);
    console.log(navDisplay);
  };

  return (
    <>
      <nav
        className={`pt-8 z-50 w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3 rounded-r-xl bg-gradient-to-br from-indigo-700 to-violet-900 min-h-screen overflow-hidden duration-700 ${
          navDisplay ? "" : "-translate-x-full"
        }`}
      >
        <div className="container ml-6 mr-6">
          <div className="shape w-52 h-52 rounded-full absolute -top-8 -left-8 bg-blue-900 blur-3xl"></div>
          <div className="data relative py-20 mx-10">
            <div className="mask sm:flex justify-center items-end text-cyan-100 text-2xl overflow-hidden">
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
          <ul className="navlist font-bold text-lg text-cyan-200 list-none px-28 pb-28 flex flex-col -translate-x-14 text-center space-y-12">
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
          </ul>
        </div>
      </nav>
      <div className="close absolute top-5 left-5 inline-flex cursor-pointer mb-16 font-bold z-10">
        {/* add class list bx-menu duration-300  */}
        <i
          onClick={toggleNav}
          className={`bx text-4xl duration-700 ${
            navDisplay ? "bx-x" : "bx-menu"
          }`}
        ></i>
      </div>
    </>
  );
}

export default Navbar;

import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import CV from "./components/CV";
import Footer from "./components/Footer";

function App() {
  //TODO Parallax effect

  // On hamburger menu toggle
  const [navDisplay, setNavDisplay] = useState(false);
  const toggleNav = () => {
    navDisplay ? setNavDisplay(false) : setNavDisplay(true);
  };

  // Set theme
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode || "light";
  });

  useEffect(() => {
    localStorage.setItem("mode", mode);
    if (mode === "light") {
      document.body.style.backgroundImage =
        "linear-gradient(to left, lightskyblue, dodgerblue)";
    } else {
      document.body.style.backgroundImage =
        "linear-gradient(250deg, darkslateblue , midnightblue, indigo )";
    }
  }, [mode]);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  // Destructuring
  const UIProps = {
    mode: mode,
    navDisplay: navDisplay,
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar
                {...UIProps}
                toggleMode={toggleMode}
                toggleNav={toggleNav}
              />
              <Home {...UIProps} />
              <About {...UIProps} />
              <Portfolio {...UIProps} />
              <Skills {...UIProps} />
              <Contact {...UIProps} />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar
                toggleMode={toggleMode}
                {...UIProps}
                toggleNav={toggleNav}
              />
              <About {...UIProps} style="fixed" />
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <>
              {" "}
              <Navbar
                {...UIProps}
                toggleMode={toggleMode}
                toggleNav={toggleNav}
              />
              <Portfolio {...UIProps} />
            </>
          }
        />
        <Route
          path="/skills"
          element={
            <>
              <Navbar
                {...UIProps}
                toggleMode={toggleMode}
                toggleNav={toggleNav}
              />{" "}
              <Skills mode={mode} navDisplay={navDisplay} />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar
                toggleMode={toggleMode}
                {...UIProps}
                toggleNav={toggleNav}
              />
              <Contact {...UIProps} />
            </>
          }
        />
        <Route path="/cv" element={<CV {...UIProps} />} />
      </Routes>
    </>
  );
}

export default App;

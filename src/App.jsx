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
import CloudAnimation from "./components/CloudAnimation";

function App() {
  //TODO Parallax effect
  const [loading, setLoading] = useState(true);
  const [navDisplay, setNavDisplay] = useState(false);

  // Set theme
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode || "light";
  });

  // On hamburger menu toggle
  const toggleNav = () => {
    setNavDisplay((prevNavDisplay) => !prevNavDisplay);
  };

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    localStorage.setItem("mode", mode);
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

  // CSS class for the root element
  const rootClass = mode === "light" ? "light-theme" : "dark-theme";

  return (
    <div className={rootClass}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {loading ? (
                <CloudAnimation />
              ) : (
                <div className="hidden"></div> // Hide the cloud animation when not loading
              )}
              <Navbar
                {...UIProps}
                toggleMode={toggleMode}
                toggleNav={toggleNav}
              />
              <Home {...UIProps} toggleMode={toggleMode} />
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
              <Skills {...UIProps} />
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
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  // Parallax effect
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // console.log(offset); 

  // On hamburger menu toggle
  const [navDisplay, setNavDisplay] = useState(false);
  const toggleNav = () => {
    navDisplay ? setNavDisplay(false) : setNavDisplay(true);
  };

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };
  if (mode === 'light') {
    document.body.style.backgroundImage = 'linear-gradient(to left, lightskyblue, dodgerblue)'
  } else if(mode === 'dark') {
    document.body.style.backgroundImage = 'linear-gradient(to top, black, midnightblue, slateblue)'
  }
  return (
    <>
      {/* TODO: React router DOM*/}
      <Navbar mode={mode} toggleMode={toggleMode} navDisplay={navDisplay} toggleNav={toggleNav} />
      <Home mode={mode} navDisplay={navDisplay}/>
      <About mode={mode} navDisplay={navDisplay}/>
      <Portfolio mode={mode} navDisplay={navDisplay}/>
      <Skills mode={mode} navDisplay={navDisplay}/>
      <Contact mode={mode} navDisplay={navDisplay}/>
    </>
  );
}

export default App;

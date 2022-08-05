import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  // On hamburger menu toggle
  const [navDisplay, setNavDisplay] = useState(true);
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
    <div>
      <Navbar mode={mode} toggleMode={toggleMode} navDisplay={navDisplay} toggleNav={toggleNav} />
      {/* TODO: React router DOM*/}
      <Home mode={mode} navDisplay={navDisplay}/>
    </div>
  );
}

export default App;

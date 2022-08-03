import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };
  if (mode === 'light') {
    document.body.style.backgroundImage = 'linear-gradient(to left, lightskyblue, dodgerblue)'
  } else if(mode === 'dark') {
    document.body.style.backgroundImage = 'linear-gradient(to right, navy, midnightblue)'
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      {/* TODO: React router DOM*/}
    </>
  );
}

export default App;

import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); // Dark mode enable or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } 
    else 
      setMode("light");
  };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About us" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze" />
        {/* <About/> */}
      </div>
    </>
  );
}
export default App;

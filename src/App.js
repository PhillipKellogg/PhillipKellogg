import React from "react";
import logo from "./logo.svg";
import Home from "./components/home/Home";
import "./styles/style.scss";
// import "./index.css";
function App() {
  const fuckExcel = () => {
    {
      setTimeout(() => {
        alert("I clicked on your shitty bio info");
      }, 2000);
    }
  };

  return (
    <>
      <h1>Fuck you MsExcel</h1>{" "}
      <iframe
        width="1280   "
        height="720"
        src="https://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1"
        frameborder="0"
        allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      {fuckExcel()}
    </>
  );
}

export default App;

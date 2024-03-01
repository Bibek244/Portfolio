import React from "react";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import HireMe from "./Components/HireMe";
import Footer from "./Components/Footer";
import { SideBar } from "./Components/SideBar";
import Project from "./Components/Project";

function App() {
  return (
    <>
      <div className="bg-gray-900">        
        <SideBar />
        <NavBar />
        <div style={{ marginLeft: "18%" }}>
          <AboutMe />
          <Skills />
          <Project />
          <HireMe />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

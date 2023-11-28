// App.js
import React from "react";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import SocialLinks from "./components/SocialLinks";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div id="cabecera">
        <Header />
      </div>
      {/* <div id="sobre-mi">
        <Projects />
      </div> */}
      <div id="proyectos">
        <Projects />
      </div>
      <div id="habilidades">
        <Skills />
      </div>
      <div id="contacto">
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
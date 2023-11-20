import React from 'react';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import SocialLinks from './components/SocialLinks/SocialLinks';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div id="proyectos">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contacto">
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;

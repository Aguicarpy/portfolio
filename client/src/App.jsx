// App.js
import React from 'react';
import Header from './components/Header';
import ProfilePic from './components/Pic';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';
import Contact from './components/SocialLinks';
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

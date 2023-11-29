import {useState} from "react";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import AboutMe from "./components/AboutMe/AboutMe";
import "./App.css";
import esTranslation from "./translations/es.json"
import ptTranslation from "./translations/pt.json"

function App() {

  const [language, setLanguage] = useState('es');

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'pt' : 'es'));
  };
  const translations = language === 'es' ? esTranslation : ptTranslation;

  return (
    <div className="app">
      <div id="cabecera" style={{ position: 'relative', zIndex: 1 }}>
        <Header translations={translations} />
      </div>
      <div className="selectContainer">
        <select value={language} onChange={changeLanguage}>
          <option value="es">Español</option>
          <option value="pt">Portugués</option>
        </select>
      </div>
      <div id="sobre-mi">
        <AboutMe translations={translations} />
      </div>
      <div id="proyectos">
        <Projects translations={translations} />
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
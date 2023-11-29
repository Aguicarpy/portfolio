import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import AboutMe from "./components/AboutMe/AboutMe";
import "./App.css";
import esTranslation from "./translations/es.json";
import ptTranslation from "./translations/pt.json";

function App() {
  const [language, setLanguage] = useState("es");
  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "pt" : "es"));
  };
  const translations = language === "es" ? esTranslation : ptTranslation;

  const selectVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="app">
      <div id="cabecera" style={{ position: "relative", zIndex: 1 }}>
        <Header translations={translations} />
      </div>
      <motion.div
        className="selectContainer"
        initial="hidden"
        animate="visible"
        variants={selectVariants}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="es">Español</option>
          <option value="pt">Portugués</option>
        </select>
      </motion.div>
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

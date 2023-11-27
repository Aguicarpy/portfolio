import React from "react";
import { motion } from "framer-motion";
import styles from "./Header.module.css";
import videoBack from "../../assets/Plexus_Wave_Background.mp4";

const Header = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.2 } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.8, transition: { delay: 0.5 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 0.8, x: 0 },
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className={styles.headerContainer}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h1 className={styles.title} variants={titleVariants}>
        Carlos Aguilar
      </h1>
      <p className={styles.subtitle} variants={subtitleVariants}>
        Desarrollador Web Fullstack
      </p>
      <nav className={styles.navigation}>
        <a
          className={styles.navItem}
          variants={navItemVariants}
          onClick={() => scrollToSection("sobre-mi")}
        >
          Sobre mi
        </a>
        <a
          className={styles.navItem}
          variants={navItemVariants}
          onClick={() => scrollToSection("proyectos")}
        >
          Proyectos
        </a>
        <a
          className={styles.navItem}
          variants={navItemVariants}
          onClick={() => scrollToSection("habilidades")}
        >
          Skills
        </a>
        <a
          className={styles.navItem}
          variants={navItemVariants}
          onClick={() => scrollToSection("contacto")}
        >
          Contacto
        </a>
      </nav>
      <video muted autoPlay loop>
        <source src={videoBack} type="video/mp4"></source>
      </video>
      <div className={styles.capa}></div>
    </motion.div>
  );
};

export default Header;

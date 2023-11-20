// Header.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.css';
import logo from '../../assets/logoHeader.png';

const Header = () => {
  return (
    <motion.header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.navigation}>
        
        <a href='/home' onClick={() => scrollToSection('home')}>Home</a>
        <a href='/proyectos' onClick={() => scrollToSection('proyectos')}>Proyectos</a>
        <a href='/skills' onClick={() => scrollToSection('skills')}>Skills</a>
        <a href='/contacto' onClick={() => scrollToSection('contacto')}>Contacto</a>
      </div>
    </motion.header>
  );
};

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default Header;

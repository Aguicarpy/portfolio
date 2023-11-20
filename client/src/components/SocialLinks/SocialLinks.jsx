// SocialLinks.js
import React from 'react';
import styles from './SocialLinks.module.css';  // Importa el módulo CSS
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className={styles.socialLinksContainer}>
      <a href="https://www.linkedin.com/in/aguicarpy/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        <FaLinkedin />
      </a>
      <a href="https://github.com/Aguicarpy" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialLinks;

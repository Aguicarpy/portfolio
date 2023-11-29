import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './AboutMe.module.css';
import perfil from '../../assets/perfilProfesional.jpg';

const AboutMe = ({translations}) => {
  const [isVisible, setIsVisible] = useState(false);

  const aboutMeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const aboutMeSection = document.getElementById('aboutMeSection');

      if (aboutMeSection && scrollPosition > aboutMeSection.offsetTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      id="aboutMeSection"
      className={`${styles.sobreMiContainer} ${isVisible ? styles.visible : ''}`}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={aboutMeVariants}
      transition={{ duration: 1 }}
    >
      <h2>{translations.aboutMe}</h2>
      <img src={perfil} alt="Perfil Profesional" />
      <p>
        {translations.p1AboutMe}
      </p>
      <p>
      {translations.p2AboutMe}
      </p>
    </motion.div>
  );
};

export default AboutMe;

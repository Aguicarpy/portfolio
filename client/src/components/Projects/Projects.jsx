// Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Projects.module.css';  // Importa el módulo CSS
import loginIntra from '../../assets/project01/intranetLogin.png';
import intra02 from '../../assets/project01/intranet02.png';
import intra03 from '../../assets/project01/intranet03.png';
import intra04 from '../../assets/project01/intranet04.png';
import intra05 from '../../assets/project01/intranet05.png';
import intra06 from '../../assets/project01/intranet06.png';
import patitas01 from '../../assets/project02/patitas01.png';
import patitas02 from '../../assets/project02/patitas02.png';
import patitas03 from '../../assets/project02/patitas03.png';
import patitas04 from '../../assets/project02/patitas04.png';
import patitas05 from '../../assets/project02/patitas05.png';
import patitas06 from '../../assets/project02/patitas06.png';
import patitas07 from '../../assets/project02/patitas07.png';
import patitas08 from '../../assets/project02/patitas08.png';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projectsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const projectSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <motion.section
      className={styles.projectsContainer}
      initial="hidden"
      animate="visible"
      variants={projectsVariants}
      transition={{ duration: 1 }}
    >
      <h2>Proyectos Realizados</h2>
      <div className={styles.projectsList}>
        <div className={styles.project}>
          <div className={styles.mediaContainer}>
            <Slider {...projectSettings}>
              <img src={loginIntra} alt="Proyecto 1 - Imagen 1" className={styles.mediaContent} />
              <img src={intra02} alt="Proyecto 1 - Imagen 2" className={styles.mediaContent} />
              <img src={intra03} alt="Proyecto 1 - Imagen 3" className={styles.mediaContent} />
              <img src={intra04} alt="Proyecto 1 - Imagen 4" className={styles.mediaContent} />
              <img src={intra05} alt="Proyecto 1 - Imagen 5" className={styles.mediaContent} />
              <img src={intra06} alt="Proyecto 1 - Imagen 5" className={styles.mediaContent} />
            </Slider>
          </div>
          <h3>Intranet</h3>
          <p>Proyecto realizado con la finalidad de mejorar la cooperación entre los colaboradores, presenta 
              varias funcionalidades hechas para facilitar interacción y comunicación entre funcionarios de varias 
              sucursales.
          </p>
          <a href="https://github.com/Aguicarpy/intranet_sulamerica" target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
            <FaGithub />
          </a>
        </div>
        <div className={styles.project}>
          <div className={styles.mediaContainer}>
            <Slider {...projectSettings}>
              <img src={patitas01} alt="Proyecto 2 - Imagen 1" className={styles.mediaContent} />
              <img src={patitas02} alt="Proyecto 2 - Imagen 2" className={styles.mediaContent} />
              <img src={patitas03} alt="Proyecto 2 - Imagen 3" className={styles.mediaContent} />
              <img src={patitas04} alt="Proyecto 2 - Imagen 4" className={styles.mediaContent} />
              <img src={patitas05} alt="Proyecto 2 - Imagen 5" className={styles.mediaContent} />
              <img src={patitas06} alt="Proyecto 2 - Imagen 6" className={styles.mediaContent} />
              <img src={patitas07} alt="Proyecto 2 - Imagen 7" className={styles.mediaContent} />
              <img src={patitas08} alt="Proyecto 2 - Imagen 8" className={styles.mediaContent} />
            </Slider>
          </div>
          <h3>Patitas Sin Hogar</h3>
          <p>Proyecto realizado con un enfoque social a la adopción de 
              mascotas en situación de busca de un hogar. La página ayuda al usuario u organización a dar en 
              adopción a la mascota, para que un usuario adoptante pueda dar un hogar a la mascota.
          </p>
          <a href="https://github.com/RieraAndres/Henry_PF" target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import loginIntra from "../assets/project01/intranetLogin.png";
import intra02 from "../assets/project01/intranet02.png";
import intra03 from "../assets/project01/intranet03.png";
import intra04 from "../assets/project01/intranet04.png";
import intra05 from "../assets/project01/intranet05.png";
import intra06 from "../assets/project01/intranet06.png";
import patitas01 from "../assets/project02/patitas01.png"
import patitas02 from "../assets/project02/patitas02.png"
import patitas03 from "../assets/project02/patitas03.png"
import patitas04 from "../assets/project02/patitas04.png"
import patitas05 from "../assets/project02/patitas05.png"
import patitas06 from "../assets/project02/patitas06.png"
import patitas07 from "../assets/project02/patitas07.png"
import patitas08 from "../assets/project02/patitas08.png"
import { FaGithub } from 'react-icons/fa';

const ProjectsContainer = styled(motion.section)`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -10px; /* Añadido para compensar los márgenes negativos de los proyectos */
`;

const Project = styled.div`
width: calc(47% - 20px); /* Ajusta según el número de proyectos por fila */
margin: 10px; /* Espacio entre los proyectos */
background-color: #ecf0f1;
padding: 15px;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease-in-out;

&:hover {
  transform: scale(1.05);
}
`;

const MediaContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const MediaContent = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const RepoLink = styled.a`
  margin: 0 10px;
  font-size: 24px;
  color: #2c3e50; /* Azul oscuro */
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #3498db; /* Azul más claro al pasar el ratón */
  }
`;

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
    <ProjectsContainer
      initial="hidden"
      animate="visible"
      variants={projectsVariants}
      transition={{ duration: 1 }}
    >
      <h2>Proyectos Realizados</h2>
      <ProjectsList>
      <Project>
        <MediaContainer>
          <Slider {...projectSettings}>
            <MediaContent src={loginIntra} alt="Proyecto 1 - Imagen 1" />
            <MediaContent src={intra02} alt="Proyecto 1 - Imagen 2" />
            <MediaContent src={intra03} alt="Proyecto 1 - Imagen 3" />
            <MediaContent src={intra04} alt="Proyecto 1 - Imagen 4" />
            <MediaContent src={intra05} alt="Proyecto 1 - Imagen 5" />
            <MediaContent src={intra06} alt="Proyecto 1 - Imagen 5" />
          </Slider>
        </MediaContainer>
        <h3>Intranet</h3>
        <p>Proyecto realizado con la finalidad de mejorar la cooperación entre los colaboradores, presenta 
            varias funcionalidades hechas para facilitar interacción y comunicación entre funcionarios de varias 
            sucursales.
        </p>
        <RepoLink href="https://github.com/Aguicarpy/intranet_sulamerica" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </RepoLink>
      </Project>
      <Project>
        <MediaContainer>
          <Slider {...projectSettings}>
            <MediaContent src={patitas01} alt="Proyecto 2 - Imagen 1" />
            <MediaContent src={patitas02} alt="Proyecto 2 - Imagen 2" />
            <MediaContent src={patitas03} alt="Proyecto 2 - Imagen 3" />
            <MediaContent src={patitas04} alt="Proyecto 2 - Imagen 4" />
            <MediaContent src={patitas05} alt="Proyecto 2 - Imagen 5" />
            <MediaContent src={patitas06} alt="Proyecto 2 - Imagen 6" />
            <MediaContent src={patitas07} alt="Proyecto 2 - Imagen 7" />
            <MediaContent src={patitas08} alt="Proyecto 2 - Imagen 8" />
          </Slider>
        </MediaContainer>
        <h3>Patitas Sin Hogar</h3>
        <p>Proyecto realizado con un enfoque social a la adopción de 
            mascotas en situación de busca de un hogar. La página ayuda al usuario u organización a dar en 
            adopción a la mascota, para que un usuario adoptante pueda dar un hogar a la mascota.
        </p>
        <RepoLink href="https://github.com/RieraAndres/Henry_PF" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </RepoLink>
      </Project>
      </ProjectsList>
    </ProjectsContainer>
  );
};

export default Projects;

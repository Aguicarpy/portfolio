import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  background-color: #2c3e50;
  color: white;
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
  opacity: 0.8;
`;

const Navigation = styled.nav`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const NavItem = styled(motion.a)`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.5rem;
  opacity: 0.8;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

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
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Title variants={titleVariants}>Carlos Aguilar</Title>
      <Subtitle variants={subtitleVariants}>Desarrollador Web Fullstack</Subtitle>
      <Navigation>
        <NavItem variants={navItemVariants} onClick={() => scrollToSection('proyectos')}>
          Proyectos
        </NavItem>
        <NavItem variants={navItemVariants} onClick={() => scrollToSection('skills')}>
          Skills
        </NavItem>
        <NavItem variants={navItemVariants} onClick={() => scrollToSection('contacto')}>
          Contacto
        </NavItem>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;

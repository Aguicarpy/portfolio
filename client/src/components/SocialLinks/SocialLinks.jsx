import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialLinksContainer = styled.div`
  text-align: center;
  margin-top: 200px; /* Ajusté el margen superior */
`;

const SocialLink = styled.a`
  margin: 0 15px;
  font-size: 32px;
  color: #2c3e50;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #3498db;
  }
`;

const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <SocialLink href="https://www.linkedin.com/in/aguicarpy/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </SocialLink>
      <SocialLink href="https://github.com/Aguicarpy" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </SocialLink>
    </SocialLinksContainer>
  );
};

export default SocialLinks;

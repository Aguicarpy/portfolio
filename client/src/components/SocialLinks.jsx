import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialLinksContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  margin: 0 10px;
  font-size: 24px;
  color: #2c3e50; /* Azul oscuro */
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #3498db; /* Azul más claro al pasar el ratón */
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

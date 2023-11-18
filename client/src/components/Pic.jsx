import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import pic from "../assets/perfilProfesional.jpg";

const ProfilePicContainer = styled(motion.div)`
  text-align: center;
  margin-top: 20px;
`;

const ProfilePicImage = styled.img`
  border-radius: 50%;
  width: 150px;
  border: 3px solid #2c3e50; /* Borde azul oscuro */
`;

const ProfilePic = () => {
  const profilePicVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <ProfilePicContainer
      initial="hidden"
      animate="visible"
      variants={profilePicVariants}
      transition={{ duration: 0.5 }}
    >
      <ProfilePicImage src={pic} alt="Tu Foto" />
    </ProfilePicContainer>
  );
};

export default ProfilePic;

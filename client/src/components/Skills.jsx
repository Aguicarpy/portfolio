import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import javascriptImage from "../assets/technologies/JavaScript.png"
import nodejsImage from "../assets/technologies/node.png"
import expressjsImage from "../assets/technologies/express.png"
import postgreSQLImage from "../assets/technologies/postgres.png"
import reactImage from "../assets/technologies/react.png"
import reduxImage from "../assets/technologies/redux.png"
import sequelizeImage from "../assets/technologies/sequelize.png"

const SkillsContainer = styled(motion.section)`
  padding: 40px;
  background-color: #1f1f1f;
  color: #b3b3b3;
  text-align: center;
`;

const SkillGrid = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const SkillItem = styled.div`
  padding: 20px;
  background-color: #333;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const SkillImage = styled.img`
  width: 80px;
  height: 80px;
`;

const Skills = () => {
  const skillsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <SkillsContainer
      initial="hidden"
      animate="visible"
      variants={skillsVariants}
      transition={{ duration: 1 }}
    >
      <h2>Habilidades</h2>
      <SkillGrid>
        <SkillItem>
          <SkillImage src={javascriptImage} alt="JavaScript" />
          <p>JavaScript</p>
        </SkillItem>
        <SkillItem>
          <SkillImage src={nodejsImage} alt="Node.js" />
          <p>Node.js</p>
        </SkillItem>
        <SkillItem>
          <SkillImage src={expressjsImage} alt="express.js" />
          <p>Express.js</p>
        </SkillItem>
        <SkillItem>
          <SkillImage src={sequelizeImage} alt="sequelizeORM" />
          <p>Sequelize</p>
        </SkillItem>
        <SkillItem>
          <SkillImage src={postgreSQLImage} alt="postgreSQL" />
          <p>PostgreSQL</p>
        </SkillItem>
        <SkillItem>
          <SkillImage src={reactImage} alt="react" />
          <p>React</p>
        </SkillItem>
        <SkillItem>
          <SkillImage src={reduxImage} alt="redux" />
          <p>Redux</p>
        </SkillItem>
      </SkillGrid>
    </SkillsContainer>
  );
};

export default Skills;

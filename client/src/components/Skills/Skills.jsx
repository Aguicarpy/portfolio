// Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css'; // Importa el módulo CSS
import javascriptImage from "../../assets/technologies/JavaScript.png";
import nodejsImage from "../../assets/technologies/node.png";
import expressjsImage from "../../assets/technologies/express.png";
import postgreSQLImage from "../../assets/technologies/postgres.png";
import reactImage from "../../assets/technologies/react.png";
import reduxImage from "../../assets/technologies/redux.png";
import sequelizeImage from "../../assets/technologies/sequelize.png";

const Skills = () => {
  const skillsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.section
      className={styles.skillsContainer} // Usa la clase CSS del módulo
      initial="hidden"
      animate="visible"
      variants={skillsVariants}
      transition={{ duration: 1 }}
    >
      <h2>Habilidades</h2>
      <div className={styles.skillGrid}> {/* Cambia la clase a camelCase como se define en el módulo */}
        <div className={styles.skillItem}>
          <img src={javascriptImage} alt="JavaScript" className={styles.skillImage} />
          <p>JavaScript</p>
        </div>
        <div className={styles.skillItem}>
          <img src={nodejsImage} alt="Node.js" className={styles.skillImage} />
          <p>Node.js</p>
        </div>
        <div className={styles.skillItem}>
          <img src={expressjsImage} alt="express.js" className={styles.skillImage} />
          <p>Express.js</p>
        </div>
        <div className={styles.skillItem}>
          <img src={sequelizeImage} alt="sequelizeORM" className={styles.skillImage} />
          <p>Sequelize</p>
        </div>
        <div className={styles.skillItem}>
          <img src={postgreSQLImage} alt="postgreSQL" className={styles.skillImage} />
          <p>PostgreSQL</p>
        </div>
        <div className={styles.skillItem}>
          <img src={reactImage} alt="react" className={styles.skillImage} />
          <p>React</p>
        </div>
        <div className={styles.skillItem}>
          <img src={reduxImage} alt="redux" className={styles.skillImage} />
          <p>Redux</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import javascriptImage from "../../assets/technologies/JavaScript.png"
import nodejsImage from "../../assets/technologies/node.png"
import expressjsImage from "../../assets/technologies/express.png"
import postgreSQLImage from "../../assets/technologies/postgres.png"
import reactImage from "../../assets/technologies/react.png"
import reduxImage from "../../assets/technologies/redux.png"
import sequelizeImage from "../../assets/technologies/sequelize.png"
import azureImage from "../../assets/technologies/azureCloud.png"
import styles from './Skills.module.css';

const Skills = ({translations}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const skillsVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <motion.section
      id="skillsSection"
      className={`${styles.skillsContainer} ${isVisible ? styles.visible : ''}`}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={skillsVariants}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      ref={ref}
    >
      <h2>{translations.skillsh2}</h2>
      <div className={styles.skillGrid}>
        <div className={styles.skillItem}>
          <img className={styles.skillImage} src={javascriptImage} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className={styles.skillItem}>
          <img className={styles.skillImage} src={nodejsImage} alt="Node.js" />
          <p>Node.js</p>
        </div>
        <div className={styles.skillItem}>
          <img className={styles.skillImage} src={expressjsImage} alt="express.js" />
          <p>Express.js</p>
        </div>
        <div className={styles.skillItem}>
          <img className={styles.skillImage} src={sequelizeImage} alt="sequelizeORM" />
          <p>Sequelize</p>
        </div>
        <div className={styles.skillItem}>
          <img className={styles.skillImage} src={postgreSQLImage} alt="postgreSQL" />
          <p>PostgreSQL</p>
        </div>
        <div className={styles.skillItem}>
          <img className={styles.skillImage} src={reactImage} alt="react" />
          <p>React</p>
        </div>
        <div className={styles.skillItem}>
          <img className={styles.skillImage} src={reduxImage} alt="redux" />
          <p>Redux</p>
        </div>
        <div className={styles.skillItem}>
          <img className={styles.skillImage} src={azureImage} alt="redux" />
          <p>Azure</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

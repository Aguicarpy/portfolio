import styles from './SocialLinks.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";
import { IoMdMail, IoMdPaper } from 'react-icons/io';
import { isMobile } from 'react-device-detect';

const SocialLinks = ({language}) => {

  const email = 'aguicarpy@gmail.com';
  const subject = encodeURIComponent('Asunto del correo');
  const body = encodeURIComponent('Cuerpo del correo');
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
  
  const pdfUrl = `./CV-CarlosAguilar${language}.pdf`;
  
  const handleEmailClick = () => {
    if (isMobile) {
      window.open(mailtoLink, '_blank');
    } else {
      window.open(gmailLink, '_blank');
    }
  };
  const containerVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };
  
  return (
    <motion.div
    className={styles.SocialLinksContainer}
    initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 1, delay: 0.5 }}
      >
    
      <a className={styles.SocialLink} onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
        <IoMdMail />
      </a>
      <a className={styles.SocialLink} href="https://www.linkedin.com/in/aguicarpy/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a className={styles.SocialLink} href="https://github.com/Aguicarpy" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a className={`${styles.SocialLink}`} href={pdfUrl} target="_blank" rel="noopener noreferrer">
        <IoMdPaper /> 
      </a>
    
    </motion.div>
  );
};

export default SocialLinks;

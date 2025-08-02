import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import headshotImage from './Images/IMG_3517.jpg';
import './Home.css';

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Hi, I'm <span className="highlight">Kazi Ruslan Rahman</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Graduate Research Assistant, Electrical Engineer Graduate, Educator
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-description"
            >
              Graduate AI Research Assistant at the Artificial Intelligence Laboratory of Augmented Multimodal Perception (AI-LAMP) 
              with 1+ year of experience in multimodal deep learning and video-to-audio synthesis. 
              Currently pursuing my Master's in Statistical Data Science while being a Teaching Assistant for Calculus II, Grader for AI in Engineering, 
              and K-8 mathematics at Descartes Learning Club. 
              Graduated with a B.S. in Electrical Engineering with specialization in Machine Learning. 
              Former IT Project Management Intern at Fortune20 company.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hero-buttons"
            >
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="social-links"
            >
              <a href="https://github.com/krahman2" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/kaziruslanrahman" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="mailto:rahmankaziruslan@gmail.com" className="social-link">
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-visual"
          >
            <div className="hero-image">
              <img src={headshotImage} alt="Kazi Ruslan Rahman" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="scroll-indicator"
          onClick={() => scrollToSection('quick-overview')}
        >
          <FaArrowDown />
          <span>Scroll to explore</span>
        </motion.div>
      </section>

      {/* Quick Overview Section */}
      <section id="quick-overview" className="quick-overview">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title"
          >
            What I Do
          </motion.h2>

                                           <div className="overview-grid">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="overview-card"
              >
                <h3>Video 2 Audio Generation Research</h3>
                <p>Researching multimodal deep learning models and Visual-to-Audio synthesis at AI-LAMP.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="overview-card"
              >
                <h3>Outreach and Education Work</h3>
                <p>Teaching Calculus at SF State and K-8 mathematics, fostering learning and community engagement.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="overview-card"
              >
                <h3>Project and Product Management</h3>
                <p>Led Agile ceremonies and optimized processes using Azure, JIRA, and data analytics.</p>
              </motion.div>
            </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home; 
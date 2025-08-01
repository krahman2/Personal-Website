import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaHeart, FaCode, FaBook, FaMusic } from 'react-icons/fa';
import aboutImage from './Images/PXL_20241222_002245799.jpg';
import './About.css';

const About = () => {
  const interests = [
    { icon: <FaCode />, title: 'AI Research', description: 'Multimodal deep learning and Visual-to-Audio synthesis' },
    { icon: <FaBook />, title: 'Engineering', description: 'Embedded systems, signal processing, and control systems' },
    { icon: <FaMusic />, title: 'Leadership', description: 'Community building and cultural outreach programs' },
    { icon: <FaHeart />, title: 'Project Management', description: 'Agile methodologies and process optimization' }
  ];

  return (
    <div className="about">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About Me
        </motion.h1>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-text"
          >
            <h2>Who I Am</h2>
            <p>
              I'm an Electrical Engineer and AI Researcher with 4+ years of cross-disciplinary experience across machine learning, 
              project management, outreach, and embedded systems. Currently researching multimodal deep learning models 
              (Visual-to-Audio synthesis) at AI-LAMP, I combine technical expertise with leadership experience to drive 
              innovative solutions in AI and engineering.
            </p>
            
            <p>
              My journey began with electrical engineering fundamentals and has evolved into a passion for AI research 
              and project management. I believe in leveraging technology to solve real-world problems while building 
              strong communities and fostering collaboration across disciplines.
            </p>

            <div className="personal-info">
              <div className="info-item">
                <FaGraduationCap className="info-icon" />
                <div>
                  <h4>Education</h4>
                  <p>B.S. in Electrical Engineering – Specialization in Machine Learning</p>
                  <p>San Francisco State University</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                  <p>Open to opportunities in AI Research & Engineering</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="about-image"
          >
            <div className="image-placeholder">
              <div className="profile-image">
                <img src={aboutImage} alt="Kazi Ruslan Rahman" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="interests-section"
        >
          <h3>My Interests</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="interest-card"
              >
                <div className="interest-icon">
                  {interest.icon}
                </div>
                <h4>{interest.title}</h4>
                <p>{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="values-section"
        >
          <h3>My Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <h4>Innovation</h4>
              <p>Pushing boundaries in AI research and developing cutting-edge solutions for complex problems.</p>
            </div>
            <div className="value-item">
              <h4>Excellence</h4>
              <p>Maintaining high standards in engineering design and research methodology.</p>
            </div>
            <div className="value-item">
              <h4>Community</h4>
              <p>Building inclusive environments and fostering collaboration across diverse teams.</p>
            </div>
            <div className="value-item">
              <h4>Leadership</h4>
              <p>Leading by example and empowering others to achieve their full potential.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 
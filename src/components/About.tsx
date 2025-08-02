import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaHeart, FaCode, FaBook, FaMusic, FaGlobe, FaChartLine, FaCogs } from 'react-icons/fa';
import aboutImage from './Images/PXL_20241222_002245799.jpg';
import './About.css';

const About = () => {
  const interests = [
    { icon: <FaCode />, title: 'AI Research', description: 'Multimodal deep learning and Visual-to-Audio synthesis. Working on AMAVA (semantic video-to-audio generation), SVA-LLM (support vector analysis), and Diff-Foley (diffusion-based audio synthesis)' },
    { icon: <FaGlobe />, title: 'Product Management', description: 'Building web apps: LingLoom (language learning platform), Chalan (inventory management), AI-LAMP demo website' },
    { icon: <FaChartLine />, title: 'Teaching & Mentoring', description: 'Graduate Teaching Assistant for Calculus, TA and Grader for ENGR 413 AI in Engineering, K-8 mathematics educator' },
    { icon: <FaCogs />, title: 'Project Management', description: 'Agile methodologies, sprint planning, PI planning, retrospectives, and process optimization using Azure, JIRA, and data analytics' }
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
          About
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
              I'm a Graduate AI Research Assistant at AI-LAMP with 1+ year of experience in multimodal deep learning and Visual-to-Audio synthesis. 
              Currently pursuing my Master's in Statistical Data Science while teaching Calculus at SF State and K-8 mathematics at Descartes Learning Club, 
              I combine technical expertise with leadership experience to drive innovative solutions in AI and engineering.
            </p>
            
            <p>
              My journey began in Bangladesh, where I was born and raised with an appreciation for community and curiosity. 
              In my late teens, I moved to Malaysia, a transition that shaped my independence, adaptability, and worldview. 
              Eventually, I moved to the United States to pursue my passion for engineering and my ambition to make a larger impact.
            </p>
            
            <p>
              I graduated Cum Laude from San Francisco State University in 2024 with a B.S. in Electrical Engineering, specializing in Machine Learning. 
              During my undergraduate years, I served as IEEE Vice President, Engineering Student Advisory Board Secretary, and completed an IT Project Management 
              internship at Cencora (Fortune 20 pharmaceutical company). Currently pursuing my Master's in Statistical Data Science (Aug 2025 - Aug 2027), 
              I'm expanding my expertise in statistical analysis and data mining while conducting research at AI-LAMP and teaching mathematics. 
              I believe in leveraging technology to solve real-world problems while building strong communities and fostering collaboration across disciplines.
            </p>

            <div className="personal-info">
                             <div className="info-item">
                 <FaGraduationCap className="info-icon" />
                 <div>
                   <h4>Education</h4>
                   <p>MS in Statistical Data Science - Specializing in Probability and Statistics</p>
                   <p>B.S. in Electrical Engineering – Specialization in Machine Learning</p>
                   <p>San Francisco State University, Cum Laude, Class of 2024</p>
                   <p>Dean's List, IEEE Scholar</p>
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


      </div>
    </div>
  );
};

export default About; 
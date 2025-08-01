import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight, FaImages, FaFileAlt } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "GitHub Profile",
      description: "View my open-source contributions and engineering projects including MNIST neural network, schedule optimizer, and embedded systems work.",
      icon: <FaGithub />,
      link: "https://github.com/krahman2",
      type: "github",
      featured: true
    },
    {
      title: "LinkedIn Profile",
      description: "Connect with me professionally and view my experience in AI research, electrical engineering, and project management.",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/kaziruslanrahman",
      type: "linkedin",
      featured: true
    },
    {
      title: "ENGR492 Projects",
      description: "Senior design project repository featuring DC motor control, Mars audio filtering, power flow analysis, and QPSK communication systems.",
      icon: <FaGithub />,
      link: "https://github.com/krahman2/ENGR492",
      type: "github",
      featured: true
    },
    {
      title: "MNIST Neural Network",
      description: "Neural network implementation from scratch using only NumPy. Achieved ~90% accuracy on MNIST handwritten digits dataset.",
      icon: <FaGithub />,
      link: "https://github.com/krahman2/MNIST-Numpy",
      type: "github",
      featured: false
    },
    {
      title: "Classify: Schedule Optimizer",
      description: "Decision tree-based tool for optimizing student class schedules. Reduced scheduling conflicts by over 25%.",
      icon: <FaGithub />,
      link: "https://github.com/krahman2/Classify",
      type: "github",
      featured: false
    },
    {
      title: "Shutter Tester",
      description: "Embedded camera testing tool for hardware validation and quality assurance.",
      icon: <FaGithub />,
      link: "https://github.com/krahman2/shutter-tester",
      type: "github",
      featured: false
    },
    {
      title: "IEEE Events & Workshops",
      description: "Photos and documentation from IEEE workshops, external speaker events (Intel, FBI), and technical presentations.",
      icon: <FaImages />,
      link: "#",
      type: "media",
      featured: false
    },
    {
      title: "BSA Cultural Events",
      description: "Bengali cultural events including Iftar Nights, Language Day, and Bengali Movie Nights with 200+ attendees.",
      icon: <FaImages />,
      link: "#",
      type: "media",
      featured: false
    },
    {
      title: "AI Research Blog (Planned)",
      description: "Personal blog covering audio synthesis from video (AI-LAMP research), technical tutorials, and industry insights.",
      icon: <FaFileAlt />,
      link: "#",
      type: "blog",
      featured: false
    },
    {
      title: "Student Resources Blog (Planned)",
      description: "Resume building and internship tips for international students, career guidance, and academic advice.",
      icon: <FaFileAlt />,
      link: "#",
      type: "blog",
      featured: false
    },
    {
      title: "Embedded Tutorials (Planned)",
      description: "STM32 + sensors tutorials, embedded systems projects, and hardware integration guides.",
      icon: <FaFileAlt />,
      link: "#",
      type: "blog",
      featured: false
    }
  ];

  const featuredItems = portfolioItems.filter(item => item.featured);
  const otherItems = portfolioItems.filter(item => !item.featured);

  return (
    <div className="portfolio">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Portfolio & Media
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="portfolio-intro"
        >
          Explore my technical projects, professional profiles, and media content showcasing my work in AI research, 
          engineering, and community leadership.
        </motion.p>

        {featuredItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="featured-portfolio"
          >
            <h2>Featured Links</h2>
            <div className="featured-grid">
              {featuredItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="portfolio-card featured"
                >
                  <div className="portfolio-icon">
                    {item.icon}
                  </div>
                  <div className="portfolio-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                      <span>View {item.type === 'github' ? 'Repository' : item.type === 'linkedin' ? 'Profile' : 'Content'}</span>
                      <FaArrowRight />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="other-portfolio"
        >
          <h2>Additional Content</h2>
          <div className="portfolio-grid">
            {otherItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="portfolio-card"
              >
                <div className="portfolio-icon">
                  {item.icon}
                </div>
                <div className="portfolio-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                    <span>View {item.type === 'github' ? 'Repository' : item.type === 'media' ? 'Gallery' : 'Blog'}</span>
                    <FaArrowRight />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="contact-section"
        >
          <h2>Get In Touch</h2>
          <p>
            Interested in collaborating on AI research, engineering projects, or discussing opportunities? 
            Feel free to reach out through any of the platforms above or contact me directly.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio; 
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Control of DC Motor & Inverted Pendulum System",
      description: "Designed full Simulink simulation with state feedback control and observer. Modeled system dynamics, optimized gain tuning. Reduced motor settling time by 0.1s, improved angular precision by 10%.",
      image: "https://via.placeholder.com/400x250/3498db/ffffff?text=DC+Motor+Control",
      technologies: ["MATLAB", "Simulink", "Control Systems", "State Feedback", "System Dynamics"],
      github: "https://github.com/krahman2/ENGR492",
      live: "#",
      featured: true
    },
    {
      title: "Filtering & Noise Reduction – Mars Perseverance Project",
      description: "Processed actual NASA microphone samples from Mars rover. Removed 600 Hz interference using FFT, notch filters, and MATLAB scripts. Achieved +20 dB SNR and enhanced clarity for audio features.",
      image: "https://via.placeholder.com/400x250/3498db/ffffff?text=Mars+Audio+Filtering",
      technologies: ["MATLAB", "FFT", "Notch Filters", "Signal Processing", "NASA Data"],
      github: "https://github.com/krahman2/ENGR492",
      live: "#",
      featured: true
    },
    {
      title: "MNIST Neural Network (NumPy from Scratch)",
      description: "Implemented feedforward neural net using NumPy only (no libraries). Created custom functions for matrix multiplication, sigmoid, loss, etc. Achieved ~90% test accuracy on MNIST handwritten digits dataset. Visualized activations layer-by-layer for debugging.",
      image: "https://via.placeholder.com/400x250/3498db/ffffff?text=MNIST+Neural+Net",
      technologies: ["Python", "NumPy", "Neural Networks", "Machine Learning", "MNIST"],
      github: "https://github.com/krahman2/MNIST-Numpy",
      live: "#",
      featured: true
    },
    {
      title: "Health Index Prediction Model",
      description: "Built predictive model using KNN, Scikit-learn, Pandas, Matplotlib. Preprocessed health data (missing value imputation, encoding). Tuned k values, achieved MSE < 0.4. Final deliverable included EDA dashboard and accuracy benchmarks.",
      image: "https://via.placeholder.com/400x250/3498db/ffffff?text=Health+Index+Prediction",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "KNN", "EDA"],
      github: "https://github.com/krahman2/health-prediction",
      live: "#",
      featured: false
    },
    {
      title: "Classify: Schedule Optimizer",
      description: "Created a tool to suggest optimal class times for students based on survey history. Used Decision Tree Regressor with scikit-learn, pandas. Reduced scheduling conflict rate by over 25% during simulation tests.",
      image: "https://via.placeholder.com/400x250/3498db/ffffff?text=Schedule+Optimizer",
      technologies: ["Python", "Scikit-learn", "Pandas", "Decision Trees", "Optimization"],
      github: "https://github.com/krahman2/Classify",
      live: "#",
      featured: false
    },
    {
      title: "Power Flow Analysis – 3-Bus System",
      description: "Implemented Newton-Raphson method to solve nonlinear equations. Simulated voltage, power loss, and angle convergence. Achieved accurate load flow solution within 5–10 iterations.",
      image: "https://via.placeholder.com/400x250/3498db/ffffff?text=Power+Flow+Analysis",
      technologies: ["MATLAB", "Newton-Raphson", "Power Systems", "Load Flow", "Numerical Methods"],
      github: "https://github.com/krahman2/ENGR492",
      live: "#",
      featured: false
    },
    {
      title: "QPSK Communication System Simulation",
      description: "Designed and tested QPSK system in MATLAB & Simulink. Analyzed BER under variable gain/noise conditions. Implemented low-pass filters and SNR calculations.",
      image: "https://via.placeholder.com/400x250/3498db/ffffff?text=QPSK+Communication",
      technologies: ["MATLAB", "Simulink", "QPSK", "Communication Systems", "BER Analysis"],
      github: "https://github.com/krahman2/ENGR492",
      live: "#",
      featured: false
    },
    {
      title: "3D Printing: Rapid Prototyping & Component Design",
      description: "Created 20+ models for robotics and IoT enclosures. Used TinkerCAD, Fusion 360, and Ultimaker Cura. Presented at InnoFest and advised student teams on design best practices.",
      image: "https://via.placeholder.com/400x250/3498db/ffffff?text=3D+Printing+Design",
      technologies: ["TinkerCAD", "Fusion 360", "Ultimaker Cura", "3D Modeling", "Rapid Prototyping"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="projects">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="projects-intro"
        >
          A collection of my engineering and AI research projects, showcasing skills in signal processing, 
          machine learning, control systems, and embedded systems development.
        </motion.p>

        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="featured-projects"
          >
            <h2>Featured Projects</h2>
            <div className="featured-grid">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="project-card featured"
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub />
                        </a>
                        {project.live !== "#" && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="featured-badge">
                      <FaStar />
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
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
          className="other-projects"
        >
          <h2>Other Projects</h2>
          <div className="projects-grid">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="project-card"
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                      {project.live !== "#" && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "AMAVA: Adaptive Motion-Aware Video-to-Audio Framework",
      description: "First publication coming soon: 'Semantically consistent Video-to-Audio Generation using Multimodal Language Large Model'. Novel framework that automatically generates audio semantically consistent with video content. Harnesses multimodal large language model (MLLM) to understand video semantics and generate creative audio schemes. Results in video-to-audio generation with natural language as interface. In collaboration with AI-LAMP, San Francisco.",
      image: "https://via.placeholder.com/400x250/3498db/ffffff?text=AMAVA+Research",
      technologies: ["Python", "Multimodal LLM", "Video-to-Audio", "Semantic Generation", "AI-LAMP", "Publication"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Diff-Foley: Synchronized Video-to-Audio Synthesis",
      description: "Currently working on diffusion foley replication and improvement. State-of-the-art V2A method using latent diffusion model (LDM) with contrastive audio-visual pretraining (CAVP). Generates high-quality audio with improved synchronization and audio-visual relevance. Achieves SOTA performance on large-scale V2A datasets with practical applicability and generalization capabilities.",
      image: "https://via.placeholder.com/400x250/3498db/ffffff?text=Diff-Foley+Research",
      technologies: ["Python", "Latent Diffusion Models", "CAVP", "Cross-Attention", "Spectrogram", "V2A Synthesis"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "SVA V2A (Visual-to-Audio Research)",
      description: "Currently developing a novel pipeline to convert visual input into meaningful soundscapes for individuals with visual impairments. Built and labeled a custom video dataset using public surveillance and street activity clips. Applied classifier models to detect actions like walking, crossing, and traffic scenarios. Integrated SVA (Support Vector Analysis) for robust multimodal training. In collaboration with AI-LAMP, San Francisco.",
      image: "https://via.placeholder.com/400x250/3498db/ffffff?text=SVA+V2A+Research",
      technologies: ["Python", "Deep Learning", "Computer Vision", "Audio Synthesis", "Accessibility", "AI-LAMP"],
      github: "#",
      live: "#",
      featured: true
    },
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

  const mlProjects = projects.filter(project => 
    project.technologies.some(tech => 
      ['Python', 'Deep Learning', 'Machine Learning', 'Neural Networks', 'Multimodal LLM', 'Video-to-Audio', 'Latent Diffusion Models', 'CAVP', 'Scikit-learn', 'NumPy', 'Computer Vision', 'Audio Synthesis'].includes(tech)
    )
  );
  
  const engineeringProjects = projects.filter(project => 
    project.technologies.some(tech => 
      ['MATLAB', 'Simulink', 'Control Systems', 'Signal Processing', 'FFT', 'Power Systems', 'Communication Systems', 'QPSK', 'Newton-Raphson', '3D Modeling', 'Rapid Prototyping'].includes(tech)
    )
  );

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

        {mlProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="ml-projects"
          >
            <h2>Machine Learning & AI Projects</h2>
            <div className="projects-grid">
              {mlProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
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
                    {project.featured && (
                      <div className="featured-badge">
                        <FaStar />
                      </div>
                    )}
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

        {engineeringProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="engineering-projects"
          >
            <h2>Engineering & Control Systems Projects</h2>
            <div className="projects-grid">
              {engineeringProjects.map((project, index) => (
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
                    {project.featured && (
                      <div className="featured-badge">
                        <FaStar />
                      </div>
                    )}
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
      </div>
    </div>
  );
};

export default Projects; 
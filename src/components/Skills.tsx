import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaTools, FaProjectDiagram, FaPalette, FaChartBar, FaCertificate } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Libraries",
      icon: <FaCode />,
      skills: [
        { name: "Python", details: "NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, SciPy, OpenCV" },
        { name: "MATLAB & Simulink", details: "Signal, control, DSP modules" },
        { name: "C/C++", details: "ARM Assembly, embedded systems" },
        { name: "JavaScript", details: "HTML/CSS, basic web development" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <FaBrain />,
      skills: [
        { name: "Neural Networks", details: "Feedforward, backpropagation, activation functions, TensorFlow, PyTorch" },
        { name: "Signal Processing", details: "FFT, filtering, noise reduction, Control Systems" },
        { name: "Data Analysis", details: "EDA, statistical modeling, visualization, Time Series Analysis" },
        { name: "Machine Learning", details: "KNN, Decision Trees, model evaluation, Statistical Learning" }
      ]
    },
    {
      title: "Engineering Tools & Platforms",
      icon: <FaTools />,
      skills: [
        { name: "JIRA (JQL)", details: "Issue linking, sprint metrics, workflow automation" },
        { name: "Azure DevOps", details: "Apptio, Clarity, EZ BI dashboards" },
        { name: "Power Automate", details: "Workflow automation, integration" },
        { name: "Excel & Analytics", details: "Pivot tables, Google Sheets, data analysis" },
        { name: "Development Tools", details: "VS Code, Jupyter, Git, MS Project, Notion, Slack" }
      ]
    },
    {
      title: "Hardware & Engineering",
      icon: <FaTools />,
      skills: [
        { name: "Lab Equipment", details: "Oscilloscope, Logic Analyzer, Soldering" },
        { name: "Communication Protocols", details: "ADCs, UART, I2C, SPI (STM32 basics)" },
        { name: "Microcontrollers", details: "STM32 Nucleo, Arduino, Embedded Systems" },
        { name: "Circuit Design", details: "Multisim, LTSpice, KiCAD" }
      ]
    },
    {
      title: "Project Management",
      icon: <FaProjectDiagram />,
      skills: [
        { name: "Agile Methodologies", details: "Scrum, Kanban, PI Planning, Sprint Reviews" },
        { name: "Risk Management", details: "RAID logs, stakeholder alignment" },
        { name: "Budget & Capacity", details: "Forecasting, documentation" },
        { name: "Process Optimization", details: "Lean Six Sigma principles" }
      ]
    },
    {
      title: "Statistical Data Science",
      icon: <FaChartBar />,
      skills: [
        { name: "Statistical Analysis", details: "Probability Theory, Hypothesis Testing, Linear Models" },
        { name: "Experimental Design", details: "Design of Experiments, Categorical Data Analysis" },
        { name: "Data Mining", details: "Statistical Learning, Pattern Recognition, Predictive Modeling" }
      ]
    },

  ];

  const certifications = [
    {
      name: "Gator's Leadership Circle",
      issuer: "San Francisco State University",
      year: "2021"
    },
    {
      name: "Google Project Management Fundamentals",
      issuer: "Google / Coursera",
      year: "2022"
    },
    {
      name: "Agile Project Management with Jira",
      issuer: "LinkedIn Learning",
      year: "2023"
    },
    {
      name: "Agile Software Development",
      issuer: "LinkedIn Learning",
      year: "2023"
    },
    {
      name: "Azure DevOps Fundamentals",
      issuer: "LinkedIn Learning",
      year: "2023"
    },
    {
      name: "Excel for Data Analytics",
      issuer: "LinkedIn Learning",
      year: "2023"
    },
    {
      name: "Simulink OnRamp",
      issuer: "MATLAB (MathWorks)",
      year: "2024"
    },
    {
      name: "Control Design with MATLAB",
      issuer: "MATLAB (MathWorks)",
      year: "2024"
    },
    {
      name: "MATLAB Fundamentals",
      issuer: "MATLAB (MathWorks)",
      year: "2024"
    },
    {
      name: "Python 3: Zero to Hero",
      issuer: "Udemy",
      year: "2024"
    },
    {
      name: "Python for Data Visualization",
      issuer: "Udemy",
      year: "2024"
    },
    {
      name: "CPR & First Aid",
      issuer: "ORC (Outdoor Resource Center)",
      year: "2023"
    }
  ];

  return (
    <div className="skills">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Skills
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="skills-intro"
        >
          A comprehensive set of technical and professional skills developed through academic projects, 
          research work, and industry experience in AI, engineering, and project management.
        </motion.p>

        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="skill-category"
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
                                <div className="skills-grid">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + idx * 0.05 }}
                        className="skill-item"
                      >
                        <div className="skill-header">
                          <h4>{skill.name}</h4>
                        </div>
                        <p className="skill-details">{skill.details}</p>
                      </motion.div>
                    ))}
                  </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="certifications-section"
        >
          <div className="category-header">
            <div className="category-icon">
              <FaCertificate />
            </div>
            <h3>Certifications</h3>
          </div>
          
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.05 }}
                className="certification-item"
              >
                <div className="certification-header">
                  <h4>{cert.name}</h4>
                  <span className="certification-year">{cert.year}</span>
                </div>
                <p className="certification-issuer">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 
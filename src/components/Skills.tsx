import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaTools, FaProjectDiagram } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Libraries",
      icon: <FaCode />,
      skills: [
        { name: "Python", level: 90, details: "NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, SciPy" },
        { name: "MATLAB & Simulink", level: 85, details: "Signal, control, DSP modules" },
        { name: "C/C++", level: 80, details: "ARM Assembly, embedded systems" },
        { name: "JavaScript", level: 70, details: "HTML/CSS, basic web development" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <FaBrain />,
      skills: [
        { name: "Neural Networks", level: 85, details: "Feedforward, backpropagation, activation functions" },
        { name: "Signal Processing", level: 80, details: "FFT, filtering, noise reduction" },
        { name: "Data Analysis", level: 85, details: "EDA, statistical modeling, visualization" },
        { name: "Machine Learning", level: 80, details: "KNN, Decision Trees, model evaluation" }
      ]
    },
    {
      title: "Engineering Tools & Platforms",
      icon: <FaTools />,
      skills: [
        { name: "JIRA (JQL)", level: 85, details: "Issue linking, sprint metrics, workflow automation" },
        { name: "Azure DevOps", level: 75, details: "Apptio, Clarity, EZ BI dashboards" },
        { name: "Power Automate", level: 80, details: "Workflow automation, integration" },
        { name: "Excel & Analytics", level: 85, details: "Pivot tables, Google Sheets, data analysis" },
        { name: "Development Tools", level: 80, details: "VS Code, Jupyter, ClickUp, Monday.com, Git" }
      ]
    },
    {
      title: "Hardware & Engineering",
      icon: <FaTools />,
      skills: [
        { name: "Lab Equipment", level: 80, details: "Oscilloscope, Logic Analyzer, Soldering" },
        { name: "Communication Protocols", level: 75, details: "ADCs, UART, I2C, SPI (STM32 basics)" },
        { name: "Microcontrollers", level: 80, details: "STM32 Nucleo, Arduino" },
        { name: "Circuit Design", level: 75, details: "Multisim, LTSpice, KiCAD" }
      ]
    },
    {
      title: "Project Management",
      icon: <FaProjectDiagram />,
      skills: [
        { name: "Agile Methodologies", level: 85, details: "Scrum, Kanban, PI Planning, Sprint Reviews" },
        { name: "Risk Management", level: 80, details: "RAID logs, stakeholder alignment" },
        { name: "Budget & Capacity", level: 75, details: "Forecasting, documentation" },
        { name: "Process Optimization", level: 80, details: "Lean Six Sigma principles" }
      ]
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
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="skill-details">{skill.details}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 
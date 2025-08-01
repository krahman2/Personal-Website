import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Research Assistant",
      company: "AI-LAMP (SFSU)",
      location: "San Francisco, CA",
      duration: "Jul 2024 - Present",
      description: "Researching diffusion models and Visual-to-Audio (V2A) synthesis for multimodal deep learning applications.",
      achievements: [
        "Researched diffusion models and V2A (Visual-to-Audio) synthesis",
        "Worked on AudioGen, MusicGen, CLIP, FFMPEG for multimodal synthesis",
        "Implemented filtering using FFT and noise reduction in generation pipeline"
      ],
      technologies: ["Python", "AudioGen", "MusicGen", "CLIP", "FFMPEG", "FFT"]
    },
    {
      title: "IT Project Management Intern",
      company: "Cencora (AmerisourceBergen)",
      location: "Remote",
      duration: "May 2023 - Aug 2023",
      description: "Led Agile ceremonies and optimized processes using Azure, JIRA, and data analytics for pharmaceutical distribution.",
      achievements: [
        "Led Agile ceremonies (sprint planning, PI planning, retrospectives)",
        "Automated tracking of 200+ test cases via Power Automate",
        "Integrated EZ BI dashboards for Sprint Health, Cycle Time, and Lead Time",
        "Improved budget management using Apptio, Excel, and Clarity",
        "Reduced billing errors by $60,000"
      ],
      technologies: ["Azure", "JIRA", "Power Automate", "Apptio", "Excel", "Clarity"]
    },
    {
      title: "Program Assistant, Wellness",
      company: "SF State Residential Life",
      location: "San Francisco, CA",
      duration: "Jan 2023 - Aug 2024",
      description: "Designed health and wellness programs for 500+ residents, improving engagement and community well-being.",
      achievements: [
        "Designed 20+ health/wellness programs for 500+ residents",
        "Increased program engagement by 10%",
        "Improved marketing through video promos, feedback loops, and analytics"
      ],
      technologies: ["Program Design", "Analytics", "Video Production", "Community Outreach"]
    },
    {
      title: "Outreach Coordinator",
      company: "Estuary & Ocean Science Center",
      location: "San Francisco, CA",
      duration: "Dec 2021 - Jun 2022",
      description: "Organized outreach events for K-12 students and partnered with scientists and Bay Area schools.",
      achievements: [
        "Organized outreach events for 500+ K-12 students",
        "Partnered with 20+ scientists and 15 Bay Area schools",
        "Developed evaluation models and retention tracking (achieved 15% retention)"
      ],
      technologies: ["Event Planning", "Partnership Development", "Data Analysis", "Education"]
    },
    {
      title: "Staff Member",
      company: "Outdoor Resource Center (SFSU)",
      location: "San Francisco, CA",
      duration: "Jan 2022 - Present",
      description: "Managed logistics, inventory, and equipment checkout for outdoor gear and recreational activities.",
      achievements: [
        "Managed logistics, inventory, and equipment checkout for outdoor gear",
        "Trained new recruits, handled reporting, and enforced ORC protocols"
      ],
      technologies: ["Inventory Management", "Training", "Logistics", "Safety Protocols"]
    },
    {
      title: "Supply Chain Intern",
      company: "Seasoned Syndicate Auto Parts (BD)",
      location: "Bangladesh",
      duration: "Dec 2020 - Mar 2021",
      description: "Optimized supply chain operations using Lean Six Sigma methodologies for automotive parts distribution.",
      achievements: [
        "Switched sourcing from India to China to reduce costs",
        "Reduced delivery time by 10% using Lean Six Sigma",
        "Led logistics for national distribution, overseeing 8–20 team members"
      ],
      technologies: ["Lean Six Sigma", "Supply Chain Management", "Logistics", "Team Leadership"]
    }
  ];

  return (
    <div className="experience">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Professional Experience
        </motion.h1>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="experience-card">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <div className="experience-meta">
                    <span className="location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                    <span className="duration">
                      <FaCalendarAlt /> {exp.duration}
                    </span>
                  </div>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="achievements">
                  <h5>Key Achievements</h5>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="technologies">
                  <h5>Technologies Used</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="skills-summary"
        >
          <h2>Professional Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <p>React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap</p>
            </div>
            <div className="skill-category">
              <h3>Backend Development</h3>
              <p>Node.js, Python, Express.js, Django, REST APIs, GraphQL</p>
            </div>
            <div className="skill-category">
              <h3>Database & Cloud</h3>
              <p>PostgreSQL, MongoDB, AWS, Docker, Kubernetes, CI/CD</p>
            </div>
            <div className="skill-category">
              <h3>Tools & Methodologies</h3>
              <p>Git, Agile, Scrum, JIRA, Figma, Postman, Testing</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience; 
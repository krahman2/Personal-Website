import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Graduate AI Research Assistant",
      company: "AI-LAMP (SFSU)",
      location: "San Francisco, CA",
      duration: "Jul 2024 - Present",
      description: "Researching diffusion models and Visual-to-Audio (V2A) synthesis for multimodal deep learning applications. Currently working on AMAVA project and diffusion foley replication.",
      achievements: [
        "Researched diffusion models and V2A (Visual-to-Audio) synthesis",
        "Worked on AudioGen, MusicGen, CLIP, FFMPEG for multimodal synthesis",
        "Implemented filtering using FFT and noise reduction in generation pipeline"
      ],
      technologies: ["Python", "AudioGen", "MusicGen", "CLIP", "FFMPEG", "FFT", "Diffusion Models", "AMAVA", "Diff-Foley"]
    },
    {
      title: "Graduate Teaching Assistant",
      company: "San Francisco State University",
      location: "San Francisco, CA",
      duration: "Aug 2024 - Present",
      description: "Teaching Calculus 2 and Calculus Seminar courses, providing academic support and guidance to undergraduate students in mathematics.",
      achievements: [
        "Teaching Calculus 2 (Calculus II) to undergraduate students",
        "Leading Calculus Seminar sessions for advanced mathematical concepts",
        "Providing one-on-one tutoring and office hours support",
        "Grading assignments and providing constructive feedback",
        "Supporting students in developing strong mathematical foundations"
      ],
      technologies: ["Calculus", "Mathematics Education", "Student Mentoring", "Academic Support", "Course Management"]
    },
    {
      title: "TA and Grader",
      company: "San Francisco State University - ENGR 413",
      location: "San Francisco, CA",
      duration: "Aug 2024 - Present",
      description: "Teaching Assistant and Grader for ENGR 413: AI in Engineering course, covering fundamental AI concepts, machine learning, neural networks, and practical engineering applications.",
      achievements: [
        "Grading assignments and providing feedback for AI engineering projects",
        "Supporting students in machine learning, neural networks, and computer vision",
        "Assisting with hands-on projects and real-world case studies",
        "Contributing to course development and student learning outcomes"
      ],
      technologies: ["AI Engineering", "Machine Learning", "Neural Networks", "Computer Vision", "Student Assessment"]
    },
    {
      title: "Math Educator",
      company: "Descartes Learning Club",
      location: "San Francisco, CA",
      duration: "Jun 2024 - Present",
      description: "Teaching personalized mathematics to K-8 students, fostering problem-solving minds and inspiring lifelong love for learning through world-class math education.",
      achievements: [
        "Teaching personalized mathematics to K-8 students",
        "Developing problem-solving minds and mathematical thinking",
        "Creating tailored learning experiences for each student's unique needs",
        "Fostering investigation and curiosity in mathematical concepts"
      ],
      technologies: ["Mathematics Education", "Personalized Learning", "Problem-Solving", "K-8 Curriculum", "Student Assessment"]
    },
    {
      title: "IT Project Management Intern",
      company: "Cencora (AmerisourceBergen) - Fortune 20 Pharmaceutical Supply Chain",
      location: "Remote",
      duration: "May 2023 - Aug 2023",
      description: "Led Agile ceremonies and optimized processes using Azure, JIRA, and data analytics for pharmaceutical distribution. Supported execution of $100M+ infrastructure and automation projects in the Engineering, Design & Automation (ED&A) Division.",
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


      </div>
    </div>
  );
};

export default Experience; 
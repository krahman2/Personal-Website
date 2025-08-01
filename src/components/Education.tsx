import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaBook, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Electrical Engineering",
      specialization: "Machine Learning & Signal Processing",
      school: "San Francisco State University",
      location: "San Francisco, CA",
      duration: "2021 - 2024",
      gpa: "3.59/4.0",
      honors: "Graduated Cum Laude",
      description: "Focused on machine learning, embedded systems, and signal processing. Completed coursework in hardware for ML, digital signal processing, and control systems.",
      achievements: [
        "Dean's List (4 consecutive semesters)",
        "Gator's Leadership Circle Honoree",
        "IEEE SFSU Vice President",
        "Engineering Student Advisory Board Secretary"
      ],
      courses: [
        "Hardware for Machine Learning",
        "Digital Signal Processing",
        "Signals & Systems",
        "Power Systems & Protection",
        "Communication Systems",
        "Microprocessor System Design",
        "Control Systems",
        "Data Structures & Algorithms in C/C++"
      ],
      academicEvents: [
        "Presenter at SFSU Engineering Showcase (Senior Capstone)",
        "Participant at MESA STEM Conference",
        "Contributor to IEEE Student Research Forum"
      ]
    },
    {
      degree: "Bachelor of Engineering in Electrical & Electronics",
      specialization: "Minor in Supply Chain Management",
      school: "Taylor's University",
      location: "Subang Jaya, Malaysia",
      duration: "2019 - 2021",
      gpa: "3.11/4.0",
      honors: "Transferred to SFSU",
      description: "Focused on electrical engineering fundamentals with supply chain management minor. Developed leadership skills through various campus organizations.",
      achievements: [
        "Class President & Academic Representative",
        "3D Printing Club Coordinator",
        "Student Ambassador for the Engineering Faculty"
      ],
      courses: [
        "Electrical Engineering Fundamentals",
        "Supply Chain Management",
        "3D Printing & Rapid Prototyping",
        "PCB Design & Robotics Integration"
      ],
      academicEvents: [
        "Hosted Taylor's InnoFest (multi-department project expo)",
        "Organized inter-campus design challenges and hackathons",
        "Participated in PCB design & robotics integration workshops"
      ]
    }
  ];

  const certifications = [
    {
      name: "Google Project Management Fundamentals",
      issuer: "Google / Coursera",
      year: "2023"
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
      year: "2023"
    },
    {
      name: "Control Design with MATLAB",
      issuer: "MATLAB (MathWorks)",
      year: "2023"
    },
    {
      name: "MATLAB Fundamentals",
      issuer: "MATLAB (MathWorks)",
      year: "2023"
    },
    {
      name: "Python 3: Zero to Hero",
      issuer: "Udemy",
      year: "2023"
    },
    {
      name: "Python for Data Science Essentials",
      issuer: "Udemy",
      year: "2023"
    },
    {
      name: "CPR & First Aid",
      issuer: "ORC (Outdoor Resource Center)",
      year: "2023"
    }
  ];

  return (
    <div className="education">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Education & Certifications
        </motion.h1>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="education-item"
            >
              <div className="timeline-marker">
                <FaGraduationCap />
              </div>
              <div className="education-card">
                <div className="education-header">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.specialization}</h4>
                  <p className="school">{edu.school}</p>
                  <div className="education-meta">
                    <span><FaMapMarkerAlt /> {edu.location}</span>
                    <span><FaCalendarAlt /> {edu.duration}</span>
                    <span><FaAward /> GPA: {edu.gpa}</span>
                    {edu.honors && <span className="honors">{edu.honors}</span>}
                  </div>
                </div>

                <div className="education-details">
                  <p className="description">{edu.description}</p>
                  
                  <div className="achievements-section">
                    <h5><FaAward /> Honors & Awards</h5>
                    <ul>
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="courses-section">
                    <h5><FaBook /> Key Courses</h5>
                    <div className="courses-grid">
                      {edu.courses.slice(0, 6).map((course, idx) => (
                        <span key={idx} className="course-tag">{course}</span>
                      ))}
                      {edu.courses.length > 6 && (
                        <span className="course-tag">+{edu.courses.length - 6} more</span>
                      )}
                    </div>
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
          className="certifications-section"
        >
          <h2>Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
                className="certification-card"
              >
                <h4>{cert.name}</h4>
                <p className="issuer">{cert.issuer}</p>
                <p className="year">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education; 
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaBook, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Statistical Data Science",
      specialization: "Statistical Analysis & Data Mining",
      school: "San Francisco State University",
      location: "San Francisco, CA",
      duration: "Aug 2025 - Aug 2027 (Expected)",
      gpa: "In Progress",
      description: "Focusing on advanced statistical methods, data mining, and machine learning applications. Emphasis on probability theory and statistical learning. Selected as Graduate Teaching Assistant.",
      academicEvents: [
        "Starting program in August 2025",
        "Planning research in statistical applications to AI"
      ]
    },
    {
      degree: "Bachelor of Science in Electrical Engineering",
      specialization: "Machine Learning & Signal Processing",
      school: "San Francisco State University",
      location: "San Francisco, CA",
      duration: "2021 - 2024",
      gpa: "3.59/4.0",
      honors: "Graduated Cum Laude, Dean's List, IEEE Scholar",
      description: "Focused on machine learning, embedded systems, and signal processing. Completed coursework in hardware for ML, digital signal processing, and control systems.",
      achievements: [
        "Dean's List (4 consecutive semesters)",
        "IEEE Scholar",
        "Gator's Leadership Circle Honoree",
        "IEEE SFSU Vice President",
        "Engineering Student Advisory Board Secretary"
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
      academicEvents: [
        "Hosted Taylor's InnoFest (multi-department project expo)",
        "Organized inter-campus design challenges and hackathons",
        "Participated in PCB design & robotics integration workshops"
      ]
    }
  ];

  const courseCategories = [
    {
      title: "Mathematics",
      courses: [
        "Calculus I",
        "Calculus II",
        "Calculus III",
        "Differential Equations",
        "Linear Algebra",
        "Probability and Statistics I",
        "Probability and Statistics II"
      ]
    },
    {
      title: "Machine Learning",
      courses: [
        "Statistical Learning and Data Mining",
        "Introduction to Time Series Analysis",
        "Design and Analysis of Experiments",
        "Introduction to Linear Models",
        "Hardware for Machine Learning"
      ]
    },
    {
      title: "Electrical Engineering Core",
      courses: [
        "Linear Systems Analysis",
        "Operational Amplifiers",
        "Electromechanical Systems",
        "Power Systems",
        "Semiconductor Materials",
        "Communication Systems",
        "Control Systems",
        "Digital Signal Processing"
      ]
    },
    {
      title: "Programming & Computing",
      courses: [
        "Introduction to C Programming for Engineers",
        "Programming Techniques",
        "Computing Applications for Engineers"
      ]
    },
    {
      title: "Engineering Design & Projects",
      courses: [
        "Engineering Experimentation",
        "Engineering Design and Analysis",
        "Engineering Project Management"
      ]
    },
    {
      title: "Electronics & Circuits",
      courses: [
        "Digital and Analogue Electronics",
        "Circuits and Devices",
        "Electromagnetic Fields and Waves",
        "Signals and Systems"
      ]
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
          Education
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
                  
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="achievements-section">
                      <h5><FaAward /> Honors & Awards</h5>
                      <ul>
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="courses-section"
        >
          <div className="category-header">
            <div className="category-icon">
              <FaBook />
            </div>
            <h3>Coursework</h3>
          </div>
          
          <div className="course-categories-grid">
            {courseCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                className="course-category"
              >
                <h4 className="category-title">{category.title}</h4>
                <div className="courses-list">
                  {category.courses.map((course, idx) => (
                    <span key={idx} className="course-tag">{course}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education; 
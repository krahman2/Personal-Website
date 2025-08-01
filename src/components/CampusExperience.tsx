import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaTrophy, FaCalendarAlt } from 'react-icons/fa';
import './CampusExperience.css';

const CampusExperience = () => {
  const experiences = [
    {
      title: "MESA Conference",
      role: "Presenter",
      duration: "2023 - 2024",
      description: "Presented engineering projects and research findings at the MESA (Mathematics, Engineering, Science Achievement) Conference.",
      activities: [
        "Presented technical projects to industry professionals",
        "Networked with engineering leaders and peers",
        "Received feedback on research methodologies"
      ]
    },
    {
      title: "Engineering Showcase",
      role: "Coordinator",
      duration: "2021 - 2024",
      description: "Coordinated the annual Engineering Showcase featuring 20+ senior projects and research presentations.",
      activities: [
        "Coordinated 20+ senior projects and presentations",
        "Managed event logistics and technical requirements",
        "Facilitated industry connections and feedback"
      ]
    },
    {
      title: "Gator's Leadership Circle",
      role: "Member",
      duration: "2022 - 2024",
      description: "Participated in leadership development program focused on community building and professional growth.",
      activities: [
        "Developed leadership skills through workshops",
        "Collaborated on campus improvement initiatives",
        "Mentored incoming student leaders"
      ]
    }
  ];

  return (
    <div className="campus-experience">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Campus Experience
        </motion.h1>

        <div className="campus-content">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="campus-card"
            >
              <div className="campus-header">
                <h3>{exp.title}</h3>
                <span className="role">{exp.role}</span>
                <span className="duration"><FaCalendarAlt /> {exp.duration}</span>
              </div>
              
              <p className="campus-description">{exp.description}</p>
              
              <div className="activities">
                <h4>Key Activities</h4>
                <ul>
                  {exp.activities.map((activity, idx) => (
                    <li key={idx}>
                      <FaTrophy className="activity-icon" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusExperience; 
import { motion } from 'framer-motion';
import { FaTrophy, FaCalendarAlt } from 'react-icons/fa';
import './CampusExperience.css';

const CampusExperience = () => {
  const experiences = [
    {
      title: "Office & Human Resources Assistant",
      role: "Mashouf Wellness Center",
      duration: "May 2022 - Aug 2024",
      description: "Provided administrative support and human resources assistance for the university wellness center.",
      activities: [
        "Managed administrative tasks and student inquiries",
        "Assisted with HR processes and documentation",
        "Supported wellness center operations and student services"
      ]
    },
    {
      title: "Staff Member",
      role: "Outdoor Resource Center (ORC)",
      duration: "Jan 2022 - May 2023",
      description: "Managed outdoor equipment rentals and provided support for recreational activities.",
      activities: [
        "Managed equipment inventory and rental processes",
        "Provided customer service for outdoor recreation activities",
        "Maintained safety protocols and equipment standards"
      ]
    },
    {
      title: "Peer Mentor",
      role: "Student Success Programs (First Year Experience)",
      duration: "Aug 2022 - May 2023",
      description: "Mentored first-year students to support their academic transition and success.",
      activities: [
        "Provided academic guidance and support to first-year students",
        "Facilitated orientation and transition programs",
        "Helped students navigate university resources and services"
      ]
    },
    {
      title: "Coordinator",
      role: "Engineering Showcase",
      duration: "Dec 2021 - May 2023",
      description: "Coordinated the annual Engineering Showcase event featuring student projects and research.",
      activities: [
        "Coordinated Engineering Showcase with 20+ senior projects",
        "Managed event logistics and student presentations",
        "Facilitated industry connections and networking opportunities"
      ]
    },
    {
      title: "Outreach Coordinator",
      role: "Estuary & Ocean Science Center",
      duration: "Dec 2021 - Jun 2022",
      description: "Organized outreach events and educational programs for K-12 students and community engagement.",
      activities: [
        "Organized outreach events for K-12 students",
        "Partnered with scientists and Bay Area schools",
        "Developed educational programs and retention tracking"
      ]
    },
    {
      title: "Presenter",
      role: "MESA Conference",
      duration: "Dec 2021 - Jun 2022",
      description: "Presented research and projects at the MESA STEM Conference.",
      activities: [
        "Presented technical projects and research findings",
        "Represented university at STEM conference",
        "Networked with industry professionals and researchers"
      ]
    },

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
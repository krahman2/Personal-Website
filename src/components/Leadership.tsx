import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Leadership.css';

const Leadership = () => {
  const leadershipRoles = [
    {
      title: "Founder & President",
      organization: "Bangladeshi Students Association (BSA)",
      location: "San Francisco State University",
      duration: "May 2023 - May 2024",
      description: "Founded the organization from scratch to create a community for Bangladeshi and international students.",
      achievements: [
        "Founded organization from scratch",
        "Created a welcoming cultural space for Bangladeshi students",
        "Organized language nights, festivals, and community workshops",
        "Hosted DEI events with 200+ attendees",
        "Created community for Bangladeshi and international students"
      ]
    },
    {
      title: "Vice President",
      organization: "IEEE @ SFSU",
      location: "San Francisco State University",
      duration: "May 2022 - May 2024",
      description: "Led the IEEE student chapter, hosting industry events and rebuilding an inactive organization into a thriving community.",
      achievements: [
        "Grew member engagement by 3x through technical and networking events",
        "Built cross-campus partnerships with tech companies and alumni",
        "Hosted 10+ industry events (Intel, FBI, etc.)",
        "Rebuilt inactive chapter, recruited 20+ members, managed finance",
        "Organized technical workshops and networking events"
      ]
    },
    {
      title: "Secretary",
      organization: "Engineering Student Advisory Board (ESAB)",
      location: "San Francisco State University",
      duration: "2021 - 2024",
      description: "Coordinated engineering events and managed board communications, budgets, and calendars.",
      achievements: [
        "Coordinated Engineering Showcase with 20+ senior projects",
        "Managed calendars, budgets, and communications",
        "Represented student interests to faculty and administration"
      ]
    },
    {
      title: "Project Lead",
      organization: "Solar Electric Vehicle Team (SEVT)",
      location: "San Francisco State University",
      duration: "2022 - 2024",
      description: "Led research on battery safety and cell balancing for the Formula Sun Grand Prix competition.",
      achievements: [
        "Led research on battery safety and cell balancing",
        "Managed solar/microcontroller timelines for Formula Sun Grand Prix",
        "Coordinated team efforts across multiple engineering disciplines"
      ]
    }
  ];

  return (
    <div className="leadership">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Leadership & Involvement
        </motion.h1>

        <div className="leadership-content">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="leadership-card"
            >
              <div className="leadership-header">
                <div className="role-info">
                  <h3>{role.title}</h3>
                  <h4>{role.organization}</h4>
                  <div className="role-meta">
                    <span><FaMapMarkerAlt /> {role.location}</span>
                    <span><FaCalendarAlt /> {role.duration}</span>
                  </div>
                </div>
                <div className="role-icon">
                  <FaUsers />
                </div>
              </div>
              
              <p className="role-description">{role.description}</p>
              
              <div className="achievements">
                <h5>Key Accomplishments</h5>
                <ul>
                  {role.achievements.map((achievement, idx) => (
                    <li key={idx}>
                      {achievement}
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

export default Leadership; 
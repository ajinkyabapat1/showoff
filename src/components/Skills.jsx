import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skillsData = {
  "Primary Skills": [
    { name: "React.js", level: 4 },
    { name: "Angular (v4+)", level: 4 },
    { name: "JavaScript (ES6+)", level: 4 },
    { name: "TypeScript", level: 4 },
    { name: "Node.js", level: 3 },
    { name: "Gen AI", level: 3 },
  ],
  "Secondary Skills": [
    { name: "Redux", level: 3 },
    { name: "Next.js", level: 4 },
    { name: "Spring Boot", level: 2 },
    { name: "MongoDB", level: 3 },
    { name: "PostgreSQL", level: 3 },
    { name: "AWS (EC2, S3)", level: 3 },
  ],
  "Project-Specific & Tools": [
    { name: "Leadership & Mentorship", level: 4 },
    { name: "Cross-functional Collaboration", level: 4 },
    { name: "Jira", level: 4 },
    { name: "Agile/Scrum", level: 4 },
    { name: "Vite", level: 4 },
  ],
};

const skillItemVariants = {
  hidden: { opacity: 1, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const sectionVariants = {
    hidden: { opacity: 1, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const getStars = (level) => "★".repeat(level) + "☆".repeat(5 - level);

  return (
    <motion.section
      id="skills"
      className="section"
      variants={sectionVariants}
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Skills & Experience</h2>
      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <motion.div
            className="skill-category card"
            key={category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
          >
            <h3>{category}</h3>
            <ul className="skill-list">
              {skills.map((skill, i) => (
                <motion.li
                  key={i}
                  className="skill-item"
                  variants={skillItemVariants}
                >
                  <span>{skill.name}</span>
                  <span className="stars">{getStars(skill.level)}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;

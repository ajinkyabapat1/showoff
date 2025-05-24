import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import './Section.css'; // General section styling
import './Skills.css'; // Skills-specific styling

// You can add an 'icon' property here if you integrate an icon library
const skillsData = {
    "Programming Languages": [
        { name: "JavaScript (ES6+)", icon: "fab fa-js" }, // Example icon class
        { name: "TypeScript", icon: "fas fa-code" },
        { name: "Python", icon: "fab fa-python" },
        { name: "Java", icon: "fab fa-java" },
        { name: "C# (ASP.NET Core)", icon: "fas fa-cogs" }
    ],
    "Frontend Development": [
        { name: "React.js", icon: "fab fa-react" },
        { name: "Next.js", icon: "fas fa-globe" },
        { name: "Redux", icon: "fas fa-sync-alt" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "Sass", icon: "fab fa-sass" },
        { name: "Webpack", icon: "fas fa-box" },
        { name: "Vite", icon: "fas fa-bolt" }
    ],
    "Backend Development": [
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Express.js", icon: "fas fa-server" },
        { name: "Django", icon: "fas fa-leaf" },
        { name: "Flask", icon: "fas fa-flask" },
        { name: "Spring Boot", icon: "fas fa-leaf" },
        { name: "RESTful APIs", icon: "fas fa-exchange-alt" },
        { name: "GraphQL", icon: "fas fa-code-branch" }
    ],
    "Databases": [
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "MongoDB", icon: "fas fa-database" },
        { name: "MySQL", icon: "fas fa-database" },
        { name: "Redis", icon: "fas fa-memory" },
        { name: "Elasticsearch", icon: "fas fa-search" }
    ],
    "Cloud Platforms & DevOps": [
        { name: "AWS (EC2, S3, Lambda, DynamoDB)", icon: "fab fa-aws" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Kubernetes", icon: "fas fa-cubes" },
        { name: "CI/CD (Jenkins, GitLab CI)", icon: "fas fa-cogs" },
        { name: "Terraform", icon: "fas fa-cloud" }
    ],
    "Tools & Methodologies": [
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "Jira", icon: "fab fa-jira" },
        { name: "Agile/Scrum", icon: "fas fa-users" },
        { name: "TDD", icon: "fas fa-vial" },
        { name: "Microservices", icon: "fas fa-microchip" },
        { name: "System Design", icon: "fas fa-sitemap" },
        { name: "Mentorship", icon: "fas fa-handshake" },
        { name: "Technical Leadership", icon: "fas fa-user-tie" }
    ]
};

// Framer Motion variants for skill items
const skillItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Skills = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <motion.section
            id="skills"
            className="section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2>Skills & Experience</h2>
            <div className="skills-grid">
                {Object.entries(skillsData).map(([category, skills], index) => (
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
                                <motion.li key={i} className="skill-item" variants={skillItemVariants}>
                                    {/* If using Font Awesome, you'd integrate it here */}
                                    {/* <i className={skill.icon}></i> */}
                                    {skill.name}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
            <p className="experience-summary">
                With 8 years of experience, I've had the privilege of working on various projects, from building high-performance web applications to designing distributed systems. My experience extends beyond coding to include team leadership, project management, and client consultation.
            </p>
        </motion.section>
    );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import './Section.css'; // General section styling
import './Portfolio.css'; // Portfolio-specific styling

const projects = [
    {
        id: 1,
        title: "Enterprise Resource Planning (ERP) System Modernization",
        timeframe: "Jan 2022 - Present", // Added timeframe
        description: "Led a team to re-architect and develop a legacy ERP system into a scalable microservices-based application using React, Node.js, and Kafka. Improved data processing by 40% and reduced operational costs.",
        technologies: ["React", "Node.js", "Express", "PostgreSQL", "Kafka", "Docker", "AWS"],
        link: "https://github.com/your-username/erp-modernization" // Corrected link format
    },
    {
        id: 2,
        title: "Real-time Analytics Dashboard for IoT Devices",
        timeframe: "Aug 2020 - Dec 2021", // Added timeframe
        description: "Designed and implemented a real-time data streaming and visualization dashboard for over 10,000 IoT devices, enabling proactive maintenance and anomaly detection. Utilized Python, Flask, and an Elasticsearch/Kibana stack.",
        technologies: ["Python", "Flask", "Elasticsearch", "Kibana", "Redis", "MQTT", "AWS Lambda"],
        link: "https://github.com/your-username/iot-dashboard" // Corrected link format
    },
    {
        id: 3,
        title: "E-commerce Platform with AI-driven Personalization",
        timeframe: "Mar 2019 - Jul 2020", // Added timeframe
        description: "Contributed to a high-traffic e-commerce platform, focusing on building a recommendation engine using machine learning algorithms and integrating it with the user-facing React application. Boosted conversion rates by 15%.",
        technologies: ["React", "Redux", "Django", "TensorFlow", "Kubernetes", "Azure"],
        link: "https://github.com/your-username/ecommerce-platform" // Corrected link format
    },
    {
        id: 4,
        title: "Financial Data Aggregation Service",
        timeframe: "Oct 2017 - Feb 2019", // Added timeframe
        description: "Developed a robust backend service for aggregating financial data from various APIs, ensuring data integrity and high availability. Implemented in Java with Spring Boot and utilized a PostgreSQL database.",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Kafka", "Jenkins"],
        link: "https://github.com/your-username/financial-aggregator" // Corrected link format
    },
    // Add more projects
];

const Portfolio = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const projectCardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
    };

    return (
        <motion.section
            id="portfolio"
            className="section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2>My Portfolio & Experience Timeline</h2>
            <p className="portfolio-intro">
                Here are some of the key projects where I've applied my expertise to deliver significant business value. Each project highlights a specific challenge, my approach, and the resulting impact, presented in a chronological timeline.
            </p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card card"
                        key={project.id}
                        variants={projectCardVariants}
                        // Stagger children for a nice reveal effect
                        custom={index} // Pass index as custom prop for staggered animation
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.1 }} // Stagger delay based on index
                    >
                        <div className="project-header">
                            <h3>{project.title}</h3>
                            <span className="project-timeframe">{project.timeframe}</span>
                        </div>
                        <p>{project.description}</p>
                        <div className="project-tech">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                Learn More <span className="arrow">→</span>
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Portfolio;

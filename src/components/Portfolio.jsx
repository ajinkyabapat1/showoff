import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';
import './Portfolio.css';

const projects = [
    {
        id: 1,
        title: "MUHS – University Automation Portal",
        timeframe: "May 2024 – Present",
        description: "Built an end-to-end academic automation platform for Maharashtra’s medical university. Supported admissions, seat allotments, exams, and PhD workflows. Scaled to statewide usage with real-time dashboards, role-based workflows, and institutional analytics.",
        technologies: ["React", "Redux", "REST APIs", "PostgreSQL", "Agile", "Accessibility"],
        link: "https://automation.muhs.ac.in/"
    },
    {
        id: 2,
        title: "Custodian Reconciliation Platform for Gloabal Investment Bank",
        timeframe: "Oct 2023 – May 2024",
        description: "Designed and implemented user-friendly UI modules for large-scale reconciliation workflows. Focused on real-time exception tracking, workflow visualization, and compliance support for institutional clients.",
        technologies: ["Angular","Node.JS", "Redux", "REST APIs", "Jira", "Agile", "Accessibility"],
        link: ""
    },
    {
        id: 3,
        title: "Capital Markets Platform for Gloabl Fintech Org.",
        timeframe: "Aug 2021 – Oct 2023",
        description: "Led the development of scalable front-end modules for global trading workflows, regulatory reporting, and multi-region financial data visualization. Integrated real-time market feeds and collaborated with global teams.",
        technologies: ["React", "Redux", "Spring Boot", "REST APIs", "Kafka", "Agile"],
        link: ""
    },
    {
        id: 4,
        title: "Clairvoyant Dashboard – Pharma Research",
        timeframe: "Aug 2020 – Jul 2021",
        description: "Built interactive dashboards for a pharma Fortune 500 company to visualize global R&D progress. Implemented real-time charts, domain-specific filters, and advanced reporting tools used by medical teams.",
        technologies: ["Angular", "Node.JS","Redux", "D3.js", "Chart.js", "REST APIs", "Agile"],
        link: ""
    },
    {
        id: 5,
        title: "LA Metro – Tolling & Traffic Monitoring",
        timeframe: "Oct 2018 – Aug 2020",
        description: "Developed responsive dashboards to monitor real-time highway toll transactions. Integrated APIs, optimized rendering, and ensured WCAG compliance to support high data volumes and multi-role usage.",
        technologies: ["Angular", "JavaScript", "D3.js", "REST APIs", "Agile"],
        link: ""
    },
        {
        id: 6,
        title: "GitHub Practice Projects",
        timeframe: "Ongoing",
        description: "A curated collection of hands-on projects to explore new technologies and reinforce best practices. Includes a React portfolio site, Redux-powered state manager, and full-stack MERN applications.",
        technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        link: "https://github.com/ajinkyabapat1"
    }
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
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true, amount: 0.3 }}
        >
            <h2>My Portfolio & Experience Timeline</h2>
            <p className="portfolio-intro">
                Here are some of the key projects where I've applied my expertise to deliver significant business value. Each project highlights a specific challenge, my approach, and the resulting impact.
            </p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card card"
                        key={project.id}
                        variants={projectCardVariants}
                        custom={index}
                        // initial="hidden"
                        // whileInView="visible"
                        // viewport={{ once: true, amount: 0.2 }}
                        // transition={{ delay: index * 0.1 }}
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

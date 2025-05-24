import React from 'react';
import { motion } from 'framer-motion';
import './Section.css'; // General section styling
import './Resume.css'; // Resume-specific styling

const Resume = () => {
    // You should place your PDF resume in the `public` folder
    const resumePdfPath = '/your_resume.pdf'; // e.g., /assets/your_name_resume.pdf

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
    };

    return (
        <motion.section
            id="resume"
            className="section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2>My Resume</h2>
            <motion.div className="card resume-card" variants={cardVariants}>
                <p>
                    While this website provides a comprehensive overview of my work and experience,
                    you can download my full professional resume for more detailed information on my work history,
                    education, and specific achievements.
                </p>
                <a href={resumePdfPath} target="_blank" rel="noopener noreferrer" className="btn primary-btn download-resume-btn">
                    Download Full Resume (PDF)
                </a>
                <p className="resume-note">
                    *This resume is designed to complement my portfolio, providing a traditional overview of my career.*
                </p>
            </motion.div>

            <motion.div className="card key-highlights-card" variants={cardVariants} transition={{ delay: 0.2 }}>
                <h3>Key Highlights (Not a Full Resume)</h3>
                <ul>
                    <li>**8+ Years of Experience:** Delivering high-impact software solutions.</li>
                    <li>**Full-Stack Expertise:** Proficient in modern frontend (React, Next.js) and backend (Node.js, Python, Java) technologies.</li>
                    <li>**Cloud & DevOps:** Hands-on experience with AWS, Docker, Kubernetes, and CI/CD pipelines.</li>
                    <li>**System Design & Architecture:** Proven ability to design scalable, resilient, and performant systems.</li>
                    <li>**Technical Leadership:** Mentoring teams, leading feature development, and driving technical excellence.</li>
                    <li>**Problem Solver:** Adept at translating complex business requirements into technical solutions.</li>
                </ul>
            </motion.div>
        </motion.section>
    );
};

export default Resume;

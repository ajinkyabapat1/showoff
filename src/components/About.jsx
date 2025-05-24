import React from 'react';
import { motion } from 'framer-motion';
import './Section.css'; // CSS imported

const About = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <motion.section
            id="about"
            className="section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible" // Animates when section comes into view
            viewport={{ once: true, amount: 0.3 }} // Only animate once, when 30% of element is visible
        >
            <h2>About Me</h2>
            <div className="card">
                <p>
                    As a seasoned software consultant with 8 years of hands-on experience, I bring a unique blend of technical expertise, strategic thinking, and a passion for solving complex business problems. My journey has involved leading diverse teams, architecting scalable enterprise solutions, and driving the successful delivery of mission-critical projects.
                </p>
                <p>
                    I thrive in dynamic environments where innovation is key. My approach is rooted in understanding the core business needs first, then leveraging cutting-edge technologies and best practices to build robust, maintainable, and high-performing software. I'm a strong advocate for clean code, agile methodologies, and continuous improvement.
                </p>
                <p>
                    Beyond the code, I enjoy mentoring junior developers, fostering collaborative team environments, and contributing to open-source projects. I'm always eager to learn new technologies and apply them to create impactful solutions.
                </p>
            </div>
        </motion.section>
    );
};

export default About;

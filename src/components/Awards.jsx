import React from 'react';
import { motion } from 'framer-motion';
import './Section.css'; // General section styling
import './Awards.css'; // Awards-specific styling

const awardsData = [
    {
        id: 1,
        title: "Innovation Excellence Award",
        organization: "Tech Solutions Inc.",
        year: "2023",
        description: "Recognized for leading the development of a breakthrough AI-driven analytics platform that significantly improved client decision-making processes."
    },
    {
        id: 2,
        title: "Top Performer Award",
        organization: "Global Software Consulting",
        year: "2021",
        description: "Awarded for consistent exceptional performance in project delivery and client satisfaction across multiple large-scale engagements."
    },
    {
        id: 3,
        title: "Open Source Contributor",
        organization: "Community Recognition (StackOverflow, GitHub)",
        year: "2020-Present",
        description: "Regularly contributing to popular open-source projects, providing solutions, and mentoring new developers."
    },
    // Add more awards
];

const Awards = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const awardCardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10 } }
    };

    return (
        <motion.section
            id="awards"
            className="section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2>Awards & Recognition</h2>
            <div className="awards-grid">
                {awardsData.map((award, index) => (
                    <motion.div
                        className="award-card card"
                        key={award.id}
                        variants={awardCardVariants}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h3>{award.title}</h3>
                        <p className="award-meta">{award.organization} | {award.year}</p>
                        <p>{award.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Awards;

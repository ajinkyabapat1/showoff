import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import './Hero.css'; // CSS imported

const Hero = () => {
    // Framer Motion variants for animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay children animations
                delayChildren: 0.3 // Delay start of children animations
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10, delay: 1.2 } }
    };

    return (
        <motion.section
            id="hero"
            className="hero-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="hero-content">
                <motion.h1 className="hero-title" variants={itemVariants}>
                    Hi, I'm <span className="highlight">Ajinkya Bapat</span>
                </motion.h1>
                <motion.p className="hero-subtitle" variants={itemVariants}>
                    An <span className="highlight">8+ Years Experienced Software Consultant</span> specializing in crafting robust and scalable solutions.
                </motion.p>
                <motion.p className="hero-description" variants={itemVariants}>
                    I transform complex business challenges into elegant software architectures,
                    driving innovation and delivering exceptional results for clients across diverse industries.
                </motion.p>
                <motion.div className="hero-buttons" variants={itemVariants}>
                    <a href="#portfolio" className="btn primary-btn">View My Work</a>
                    <a href="#contact" className="btn secondary-btn">Let's Connect</a>
                </motion.div>
            </div>
            <motion.div className="hero-image-container" variants={imageVariants}>
                {/* Replace with your actual profile picture */}
                <img src="/assets/profile.jpg" alt="Ajinkya Bapat" className="hero-image" />
            </motion.div>
        </motion.section>
    );
};

export default Hero;

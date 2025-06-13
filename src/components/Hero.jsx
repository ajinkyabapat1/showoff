import React from "react";
import { motion } from "framer-motion"; // Import motion
import "./Hero.css"; // CSS imported

const Hero = () => {
  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay children animations
        delayChildren: 0.3, // Delay start of children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, delay: 1.2 },
    },
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
          A <span className="highlight">Senior Software Consultant</span> with
          8+ years of experience delivering scalable, real-world solutions.
        </motion.p>

        <motion.p className="hero-description" variants={itemVariants}>
          I specialize in full-stack JavaScript—<strong>React</strong>,{" "}
          <strong>Node.js</strong>, <strong>MongoDB</strong>—and have built
          mission-critical platforms for
          <strong>
            {" "}
            fintech, government, healthcare, and enterprise clients
          </strong>
          .
        </motion.p>

        <motion.p className="hero-description" variants={itemVariants}>
          From architecting high-impact fintech systems managing{" "}
          <strong>trillions in transactions</strong> to leading public-sector
          digitization for <strong>millions of users</strong>, I transform
          complexity into clean, performant, and user-centric software.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <a href="#portfolio" className="btn primary-btn">
            View My Work
          </a>
          <a href="#contact" className="btn secondary-btn">
            Let's Connect
          </a>
          <a
            href="https://github.com/ajinkyabapat1"
            className="btn secondary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </motion.div>
      </div>

      <motion.div className="hero-image-container" variants={imageVariants}>
        {/* Replace with your actual profile picture */}
        <img
          src="/showoff/src/assets/ajinkya.jpg"
          alt="Ajinkya Bapat"
          className="hero-image"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;

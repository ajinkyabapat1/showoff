import React from "react";
import { motion } from "framer-motion";
import "./Section.css"; // CSS imported

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
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
          I’m a Senior Technology Consultant with 8+ years of experience
          designing and delivering transformative, scalable solutions for global
          organizations. My core strength lies in full-stack JavaScript
          development—working across modern front-end frameworks like{" "}
          <strong>React</strong> and <strong>Angular</strong>, and robust
          back-end architectures using <strong>Node.js</strong>,{" "}
          <strong>Express</strong>, and <strong>MongoDB</strong>.
        </p>
        <p>
          One of my standout achievements includes architecting a fintech
          product now leveraged by global custodians to manage{" "}
          <strong>trillions in financial transactions</strong>. I've also led
          impactful projects across sectors like{" "}
          <strong>
            finance, healthcare, public sector, transportation, and tolling
          </strong>
          , consistently building secure, compliant, and performance-driven
          systems.
        </p>
        <p>
          Currently, I’m leading a{" "}
          <strong>
            digital transformation initiative for the Government of India
          </strong>
          , creating applications that digitize operations across state
          universities and departments—serving thousands of students and
          administrators through end-to-end automation of admissions, exams, and
          results.
        </p>
        <p>
          I thrive in high-stakes, regulated environments where innovation,
          compliance, and user-centric design go hand-in-hand. I lead
          cross-functional teams, mentor developers, and push the envelope on
          modern development practices—from <strong>agile methodologies</strong>{" "}
          to <strong>clean code principles</strong>.
        </p>
        <p>
          I'm also an active open-source contributor on{" "}
          <a
            href="https://github.com/ajinkyabapat1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          , continuously exploring emerging tech to stay ahead of the curve.
        </p>
        <p>
          I’m looking to collaborate with forward-thinking organizations in{" "}
          <strong>fintech, gov-tech, or product-driven spaces</strong>—bringing
          technical excellence, strategic insight, and a relentless drive to
          build meaningful software that scales.
        </p>
      </div>
    </motion.section>
  );
};

export default About;

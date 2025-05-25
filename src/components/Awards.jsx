import React from "react";
import { motion } from "framer-motion";
import "./Awards.css";
import ajinkyaJpg from "../assets/ajinkya.jpg";

const awards = [
  {
    title: "Client Extraordinaire",
    issuer: "EY",
    date: "Oct 2024",
    description:
      "Awarded for exceptional client delivery and contribution on high-impact technology transformation projects.",
    logo:"/images/ey_logo.png",// Replace with actual path if available
  },
  {
    title: "GitHub Arctic Vault Contributor",
    issuer: "GitHub",
    date: "Apr 2021",
    description:
      "Recognized as a contributor to open-source software archived in the GitHub Arctic Code Vault—a historic snapshot of code for future generations.",
    logo:"/images/github_logo.png",
  },
  {
    title: "Conduent Honor Roll (Individual Award)",
    issuer: "Conduent Business Services",
    date: "Aug 2019",
    description:
      "Received for top performance and contributions to mission-critical enterprise software projects.",
     logo:"/images/conduent_logo.png"
  },
];

const Awards = () => {
  return (
    <>
      <motion.section
        id="awards"
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>Awards & Recognitions</h2>
        <div className="awards-grid">
          {awards.map((award, index) => (
            <motion.div
              className="award-card"
              key={index}
              whileHover={{ scale: 1.03 }}
            >
              <div className="award-logo">
                <img
                  src={award.logo}
                  alt={`${award.issuer} logo`}

                />
              </div>
              <h3>{award.title}</h3>
              <div className="award-meta">
                Issued by <strong>{award.issuer}</strong> ·{" "}
                <em>{award.date}</em>
              </div>
              <p>{award.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Awards;

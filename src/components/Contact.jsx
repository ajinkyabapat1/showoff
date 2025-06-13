import { useState } from "react";
import { motion } from "framer-motion";
import "./Section.css"; // Make sure this is imported

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi Ajinkya,\n\n${formData.message}\n\nReply to: ${formData.email}`
    );
    window.location.href = `mailto:ajinkyabapat1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <motion.section
      id="contact"
      className="section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Contact Me</h2>

      <div className="card contact-card">
        <form className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            value={formData.email}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            onChange={handleChange}
            value={formData.message}
          ></textarea>
          <button type="button" onClick={handleSend}>
            Send via Email
          </button>
        </form>
      </div>
    </motion.section>
  );
}

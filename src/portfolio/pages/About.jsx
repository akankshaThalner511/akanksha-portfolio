import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiTrendingUp,
  FiZap,
  FiArrowUpRight,
  FiServer,
  FiCpu,
} from "react-icons/fi";
import "../styles/About.css";
import Profile from "../../assets/about-profile.png";

const skills = [
  "Java",
  "Spring Boot",
  "Microservices",
  "REST APIs",
  "MySQL",
  "React JS",
  "Git",
  "Postman",
];

const highlights = [
  {
    icon: <FiCode />,
    title: "Backend Development",
    text: "Building secure, scalable APIs with Java, Spring Boot, REST architecture, and clean layered design.",
  },
  {
    icon: <FiLayers />,
    title: "Microservices Mindset",
    text: "Comfortable working with modular services, API communication, business logic, and maintainable backend flows.",
  },
  {
    icon: <FiDatabase />,
    title: "Database Driven",
    text: "Hands-on with MySQL, SQL workflows, data modelling basics, and performance-focused backend development.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Continuous Learner",
    text: "Always improving through real projects, debugging, new technologies, and practical problem-solving.",
  },
];

function About() {
  return (
    <section className="aboutSection" id="about">
      <div className="aboutGridPattern" aria-hidden="true" />
      <div className="aboutBgGlow aboutBgGlowOne" />
      <div className="aboutBgGlow aboutBgGlowTwo" />

      <div className="aboutContainer">
        <motion.div
          className="aboutImageColumn"
          initial={{ opacity: 0, x: -70, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <div className="aboutImageFrame">
            <div className="aboutImageGlow" />
            <div className="aboutImageRing aboutImageRingOne" />
            <div className="aboutImageRing aboutImageRingTwo" />

            <img
              src={Profile}
              alt="Akanksha Thalner - Java Full Stack Developer"
              className="aboutImage"
              loading="lazy"
            />

            <div className="aboutImageOverlay" />

            <motion.div
              className="aboutFloatingCard aboutFloatingCardOne"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiZap />
              <div>
                <strong>Backend Focused</strong>
                <span>Java · Spring Boot</span>
              </div>
            </motion.div>

            <motion.div
              className="aboutFloatingCard aboutFloatingCardTwo"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiServer />
              {/* <div>
                <strong>API Development</strong>
                <span>REST · Microservices</span>
              </div> */}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="aboutContent"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <p className="aboutTag">
            <span />
            About Me
          </p>

          <h2 className="aboutTitle">
            Java Full Stack Developer focused on building scalable backend solutions.
          </h2>

          <p className="aboutText">
            Hi, I am <strong>Akanksha Thalner</strong>, a passionate Java Full
            Stack Developer with strong interest in backend development, Spring
            Boot, REST APIs, Microservices, and database-driven applications.
          </p>

          <p className="aboutText">
            I enjoy solving real-world problems through clean code, structured
            architecture, and practical project experience. My focus is to build
            reliable, maintainable, and scalable applications that create real
            business value.
          </p>

          <p className="aboutText">
            I am continuously learning new technologies, improving my
            problem-solving ability, and growing as a developer who can adapt,
            collaborate, and contribute effectively in professional teams.
          </p>

          {/* <div className="aboutSkills">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
              >
                {skill}
              </motion.span>
            ))}
          </div> */}
        </motion.div>
      </div>

      <motion.div
        className="aboutHighlights"
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        {highlights.map((item, index) => (
          <motion.article
            className="aboutHighlightCard"
            key={item.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.55 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="aboutHighlightIcon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <span className="aboutCardArrow">
              <FiArrowUpRight />
            </span>
          </motion.article>
        ))}
      </motion.div>

      <div className="aboutBottomNote">
        <FiCpu />
        <span>Focused on clean code, practical learning, and real project delivery.</span>
      </div>
    </section>
  );
}

export default About;
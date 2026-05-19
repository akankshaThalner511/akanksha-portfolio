import React from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiMapPin,
  FiCalendar,
  FiCode,
  FiDatabase,
  FiLayers,
  FiTrendingUp,
  FiCheckCircle,
  FiArrowUpRight,
} from "react-icons/fi";
import "../styles/ExperienceInternship.css";

const experiences = [
  {
    type: "Current Position",
    role: "Java Developer",
    company: "Verticross India Private Limited",
    location: "Hyderabad, India",
    period: "Jan 2026 – Present",
    tag: "Live Enterprise Work",
    summary:
      "Working on real-time College Management System and Transport Automation modules with backend-focused Java Spring Boot development.",
    points: [
      "Developing Spring Boot REST APIs, MySQL workflows, backend validation, and module-level business logic.",
      "Contributing to CMS and Transport Automation modules including authentication, role-based access, students, staff, and operational workflows.",
      "Improving React-based UI pages, API integration flows, responsive layouts, and production-ready frontend behavior.",
      "Working with Git, Maven, debugging, testing flows, and team collaboration in real-time development.",
    ],
    tech: ["Java", "Spring Boot", "Microservices", "REST APIs", "MySQL", "React JS", "Git", "Maven"],
    icon: <FiBriefcase />,
  },
  {
    type: "Earlier Role",
    role: "Trainee Engineer",
    company: "Verticross India Private Limited",
    location: "Hyderabad, India",
    period: "Sep 2025 – Dec 2025",
    tag: "Enterprise Training",
    summary:
      "Completed hands-on enterprise training while learning real project structure, code quality, debugging, and scalable development practices.",
    points: [
      "Strengthened Core Java, Spring Boot, REST APIs, SQL, Git, Maven, and Agile development practices.",
      "Understood enterprise application structure, reusable components, backend flows, and deployment basics.",
      "Worked on practical scenarios involving frontend-backend integration and clean implementation patterns.",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "SQL", "Git", "Maven", "Agile"],
    icon: <FiTrendingUp />,
  },
  {
    type: "Previous Experience",
    role: "Associate Software Engineer",
    company: "Bhasaka Technologies",
    location: "Hyderabad, India",
    period: "Sep 2024 – Feb 2025",
    tag: "Enterprise Web Apps",
    summary:
      "Contributed to enterprise web application development with backend support, API optimization, AEM components, and Agile delivery.",
    points: [
      "Created AEM components, templates, dialogs, and content structures for enterprise-level pages.",
      "Worked on REST API improvements and backend support for application workflows.",
      "Collaborated in Agile sprints using Jira for task tracking, issue resolution, and timely delivery.",
    ],
    tech: ["Java", "AEM", "REST APIs", "Servlets", "Jira", "Swagger", "Maven"],
    icon: <FiLayers />,
  },
  {
    type: "Internship",
    role: "Java Developer Trainee",
    company: "HulkHire Tech",
    location: "Hyderabad, India",
    period: "Jun 2025 – Aug 2025",
    tag: "Payment Integration",
    summary:
      "Worked on a secure payment integration system using Spring Boot microservices, Redis, MySQL, API security, and testing.",
    points: [
      "Built validation workflows using Redis Cache and secured APIs using HmacSHA256 and RSA-based logic.",
      "Integrated Trustly Deposit API with payment tracking, error handling, and transaction integrity checks.",
      "Wrote JUnit and Mockito tests to improve reliability and maintain better code coverage.",
    ],
    tech: ["Java", "Spring Boot", "Microservices", "Redis", "MySQL", "Postman", "JUnit", "Mockito", "AWS"],
    icon: <FiCode />,
  },
];

const metrics = [
  { icon: <FiCode />, value: "Java", label: "Core Backend Skill" },
  { icon: <FiLayers />, value: "Spring Boot", label: "Main Framework" },
  { icon: <FiDatabase />, value: "MySQL", label: "Database Exposure" },
  { icon: <FiTrendingUp />, value: "Microservices", label: "Architecture Focus" },
];

function ExperienceInternship() {
  return (
    <section className="experienceSection" id="experience">
      <div className="experienceBg experienceBgOne" />
      <div className="experienceBg experienceBgTwo" />
      <div className="experienceGridBg" />

      <div className="experienceContainer">
        <motion.div
          className="experienceHeader"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="experienceTag">
            <span />
            Experience & Internship
          </p>

          <h2>Professional Journey</h2>

          <p className="experienceIntro">
            A clear overview of my professional experience, internship exposure,
            backend development work, real-time project involvement, and
            continuous growth as a Java Full Stack Developer.
          </p>
        </motion.div>

        <motion.div
          className="experienceMetricGrid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {metrics.map((item) => (
            <motion.div
              className="experienceMetricCard"
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
            >
              <span className="experienceMetricIcon">{item.icon}</span>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="experienceTimeline">
          {experiences.map((item, index) => (
            <motion.article
              className="experienceCard"
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="experienceTimelinePoint">
                <span>{index + 1}</span>
              </div>

              <div className="experienceCardTop">
                <div className="experienceIconBox">{item.icon}</div>

                <div className="experienceTitleBlock">
                  <span className="experienceType">{item.type}</span>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                </div>

                <span className="experienceBadge">{item.tag}</span>
              </div>

              <div className="experienceMeta">
                <span>
                  <FiCalendar />
                  {item.period}
                </span>
                <span>
                  <FiMapPin />
                  {item.location}
                </span>
              </div>

              <p className="experienceSummary">{item.summary}</p>

              <div className="experienceContentGrid">
                <div className="experienceResponsibilities">
                  <h5>
                    <FiCheckCircle />
                    Key Responsibilities & Achievements
                  </h5>

                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>
                        <span />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experienceTechBox">
                  <h5>Technologies Used</h5>

                  <div className="experienceTechTags">
                    {item.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="experienceViewMore">
                    <FiArrowUpRight />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceInternship;
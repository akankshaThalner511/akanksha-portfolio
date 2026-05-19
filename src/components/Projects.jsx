import React from "react";
import "../styles/Projects.css";

import CmsProject from "../assets/cms-project-dummy.svg";
import PaymentProject from "../assets/online-payment-process.svg";
import PaymentIntegration from "../assets/payment-integration.svg";
import BookStoreProject from "../assets/book-store.svg";

const liveProjects = [
  {
    title: "College Management System",
    status: "Ongoing Enterprise Project",
    image: CmsProject,
    category: "Enterprise Automation",
    description:
      "Currently working on a CMS platform to manage student, faculty, admissions, authentication, role-based access control, academic modules, and integration with web and mobile applications.",
    stack: "Java, Spring Boot, MySQL, REST APIs, React JS, Flutter",
    points: [
      "Student, faculty, admissions, and academic module workflows",
      "Role-based access control and authentication support",
      "Backend API development with frontend and mobile integration",
      "Scalable database design for real-time college automation",
    ],
  },
  {
    title: "Portfolio Website",
    status: "React Portfolio Project",
    image: PaymentIntegration,
    category: "Personal Branding",
    description:
      "A personal portfolio website built to showcase profile, skills, experience, education, achievements, and project work in a clean professional layout.",
    stack: "React JS, Vite, HTML, CSS, JavaScript",
    points: [
      "Responsive portfolio layout with hero, about, experience, projects, and contact sections",
      "Professional profile presentation for HR and interview screening",
      "Reusable React components and clean project structure",
      "Ready to deploy on GitHub Pages, Netlify, or Vercel",
    ],
    link: "https://github.com/akankshaThalner511/portfolio-project",
  },
];

const projects = [
  {
    title: "Core Payment Integration System",
    image: PaymentProject,
    link: "https://github.com/akankshaThalner511/Payment-Integration-System",
    category: "Secure Payment System",
    description:
      "Contributed to developing a secure and scalable payment integration system using Java Spring Boot in a microservices architecture.",
    stack: "Java, Spring Boot, Microservices, Redis, AWS, MySQL, JUnit, Mockito",
    points: [
      "Designed validation framework for payment request processing",
      "Implemented HmacSHA256 and RSA-based security workflows",
      "Integrated Trustly Deposit API and transaction tracking",
      "Added error handling, testing, and reliability improvements",
    ],
  },
  {
    title: "Book Store Web Application",
    image: BookStoreProject,
    link: "https://github.com/akankshaThalner511/bookstoreApp",
    category: "Full Stack Application",
    description:
      "Developed a full-stack bookstore application with secure and efficient CRUD operations using Java, Spring Boot, JPA, H2, and REST APIs.",
    stack: "Java, Spring Boot, JPA, H2, REST APIs, Swagger",
    points: [
      "Implemented layered architecture with controller, service, and repository layers",
      "Created book management APIs for add, update, view, and delete operations",
      "Integrated Swagger for API documentation and testing",
      "Used H2 database for lightweight development and validation",
    ],
  },
];

function getProjectInitials(title) {
  return title.split(" ").slice(0, 2).map((word) => word[0]).join("").toUpperCase();
}

function ProjectCard({ project, index, live }) {
  const techStack = project.stack.split(",").map((tech) => tech.trim());

  return (
    <article className={`projectCard ${live ? "projectCardLive" : "projectCardStandard"}`} style={{ "--project-index": index }}>
      <div className="projectImageBox">
        <div className="projectImageGlow" aria-hidden="true" />
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="projectImageOverlay">
          <span className="projectCategoryBadge">{project.category}</span>
          <span className="projectInitialBadge">{getProjectInitials(project.title)}</span>
        </div>
      </div>

      <div className="projectDetails">
        <div className="projectDetailsTop">
          <span className="projectStatus">{live ? project.status : `Project 0${index + 1}`}</span>
          <span className="projectType">{live ? "Live Work" : "GitHub Project"}</span>
        </div>

        <h3>{project.title}</h3>
        <p className="projectDescription">{project.description}</p>

        <ul className="projectPoints">
          {project.points.map((point) => (
            <li key={point}><span>✓</span>{point}</li>
          ))}
        </ul>

        <div className="projectStack">
          <strong>Tech Stack</strong>
          <div className="projectTechTags">
            {techStack.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </div>

        <div className="projectActionRow">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noreferrer">View Project <span>→</span></a>
          ) : (
            <button type="button" className="projectDisabledButton">Project Details Coming Soon</button>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectsHeader({ eyebrow, title, description, stats }) {
  return (
    <div className="projectsHeader">
      <div className="projectsHeaderGlow" aria-hidden="true" />
      <span className="projectsEyebrow"><span className="projectsEyebrowDot" />{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="projectsHeaderStats">
        {stats.map((stat) => <span key={stat.label}><strong>{stat.value}</strong>{stat.label}</span>)}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <>
      <section className="projectsSection" id="live-projects">
        <div className="projectsSectionBg" aria-hidden="true"><span className="projectOrb projectOrbOne" /><span className="projectOrb projectOrbTwo" /></div>
        <ProjectsHeader eyebrow="Live Projects" title="Current Work & Portfolio" description="Real-time development work, enterprise modules, responsive portfolio building, and production-oriented project presentation." stats={[{ value: "2", label: "Live Projects" }, { value: "React", label: "Frontend Work" }, { value: "Java", label: "Backend Stack" }]} />
        <div className="projectsList twoColumnProjects">{liveProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} live />)}</div>
      </section>
      <section className="projectsSection projectSectionAlt" id="projects">
        <div className="projectsSectionBg" aria-hidden="true"><span className="projectOrb projectOrbThree" /><span className="projectOrb projectOrbFour" /></div>
        <ProjectsHeader eyebrow="My Projects" title="Projects I Worked On" description="Hands-on Java, Spring Boot, REST API, microservices, database, testing, and full-stack application projects." stats={[{ value: "2", label: "GitHub Projects" }, { value: "REST", label: "API Development" }, { value: "Tested", label: "Reliable Flow" }]} />
        <div className="projectsList twoColumnProjects">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}</div>
      </section>
    </>
  );
}

export default Projects;

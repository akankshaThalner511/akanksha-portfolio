import React from "react";
import "../styles/About.css";
import Profile from "../assets/about-profile.png";

function About() {
  return (
    <section className="aboutSection" id="about">
      <div className="aboutContainer">
         <div className="aboutImageBox">
          <img src={Profile} alt="Akanksha Thalner" className="aboutImage" />
        </div>
        <div className="aboutText">
          <span className="aboutTag">About Me</span>
          <h2>Passionate Java Developer focused on backend and enterprise applications.</h2>
          <p>
            I am a skilled Java Developer with hands-on experience in Core Java, Spring Boot,
            REST APIs, Microservices, MySQL, React JS, and real-time application development. I
            enjoy building secure APIs, clean integrations, and user-friendly software solutions.
          </p>
          <p>
            Currently, I am contributing to enterprise-level software modules including College
            Management System, Transport Automation, authentication, role-based access control,
            and company website rebuild work using React JS.
          </p>
        </div>

        <div className="aboutCards">
          <article>
            <strong>Backend</strong>
            <span>Java, Spring Boot, REST APIs, Microservices</span>
          </article>
          <article>
            <strong>Frontend</strong>
            <span>React JS, Vite, HTML, CSS, responsive layouts</span>
          </article>
          <article>
            <strong>Database</strong>
            <span>MySQL, Redis, H2, schema and integration workflows</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;

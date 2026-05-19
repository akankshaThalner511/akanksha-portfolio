import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="heroSection" id="home">
      <div className="heroBg" aria-hidden="true">
        <span className="heroCodeImageLayer" />
        <span className="heroCodeImageGlow" />
        <span className="heroCodeScanLine" />

        <span className="heroOrb heroOrbOne" />
        <span className="heroOrb heroOrbTwo" />
        <span className="heroOrb heroOrbThree" />
        <span className="heroLine heroLineOne" />
        <span className="heroLine heroLineTwo" />
        <span className="heroDot heroDotOne" />
        <span className="heroDot heroDotTwo" />
        <span className="heroDot heroDotThree" />
      </div>

      <div className="heroContent">
        <span className="heroBadge">Java Spring Boot Developer</span>

        <h1>Akanksha Thalner</h1>

        <h2>Building secure backend APIs, scalable systems, and clean React interfaces.</h2>

        <p>
          Passionate Java Developer with hands-on experience in Core Java, Spring Boot,
          Microservices, REST APIs, React JS, MySQL, and real-time enterprise project work.
        </p>

        <div className="heroActions">
          <a href="#projects">View Projects</a>
          <a className="secondaryHeroButton" href="/Akanksha_Thalner_Resume.pdf" download>
            Download Resume
          </a>
        </div>

        <div className="heroContactRow">
          <a href="tel:+919156070849">+91 9156070849</a>
          <a href="mailto:akankshathalner@gmail.com">akankshathalner@gmail.com</a>
          <a href="https://www.linkedin.com/in/akanksha-java-se/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/akankshaThalner511" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <aside className="heroProfileCard">
        <span className="heroCardGlow" />
        <span className="heroCardRing heroCardRingOne" />
        <span className="heroCardRing heroCardRingTwo" />

        <div className="heroAvatar">AT</div>

        <h3>Current Focus</h3>

        <p>Java Developer at Verticross India Private Limited</p>

        <div>
          <span>Spring Boot</span>
          <span>React JS</span>
          <span>Microservices</span>
          <span>MySQL</span>
        </div>
      </aside>
    </section>
  );
}

export default Hero;
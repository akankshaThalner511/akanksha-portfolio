import React from "react";
import "../styles/Greetings.css";
import HeroImage from "../../assets/portfolio.png";
import javaLogo from "../../assets/java-logo.png";

function Greetings() {
  return (
    <main className="portfolioHero" id="home">
      <img className="portfolioHeroBg" src={HeroImage} alt="Akanksha Thalner" />

      <div className="portfolioHeroShade" />
      <div className="portfolioHeroGlow" />

      <div className="portfolioParticles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <section className="portfolioHeroContent">
        <p className="portfolioHello">HELLO, I’M</p>

        <h1 className="portfolioName">
          AKANKSHA <br /> THALNER
        </h1>

        <h2 className="portfolioRole">FULL-STACK DEVELOPER</h2>

        <p className="portfolioDescription">
          Building efficient, scalable and user-friendly applications with clean
          code and innovative solutions.
        </p>

        <div className="portfolioSkills" aria-label="Core technical skills">
          <span className="portfolioSkillItem">
            <img className="portfolioJavaLogo" src={javaLogo} alt="Java logo" />
            <strong>JAVA</strong>
          </span>

          <span className="portfolioSkillItem">
            <span className="portfolioCodeIcon" aria-hidden="true">
              &lt;/&gt;
            </span>
            <strong>CODE</strong>
          </span>

          <span className="portfolioSkillItem portfolioSkillWide">
            <span className="portfolioMicroIcon" aria-hidden="true">
              ⚙
            </span>
            <strong>MICROSERVICES</strong>
          </span>
        </div>
      </section>

      <div className="portfolioScrollIndicator" aria-hidden="true">
        <span />
      </div>
    </main>
  );
}

export default Greetings;

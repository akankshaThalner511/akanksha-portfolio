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

        <h2 className="portfolioRole">JAVA DEVELOPER</h2>

        <p className="portfolioDescription">
          Building efficient, scalable and user-friendly applications with clean
          code and innovative solutions.
        </p>

        <div className="portfolioSkills">
          <img className="portfolioJavaLogo" src={javaLogo} alt="Java logo" />

          <span className="portfolioCodeIcon">&lt;/&gt;</span>

          <strong>JAVA</strong>

          <span className="portfolioSkillDivider" />

          <span className="portfolioMicroIcon">⚙</span>

          <strong>MICROSERVICES</strong>
          
        </div>
      </section>

      <div className="portfolioScrollIndicator" aria-hidden="true">
        <span />
      </div>
    </main>
  );
}

export default Greetings;
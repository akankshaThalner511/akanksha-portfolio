import React from "react";
import Greetings from "./portfolio/pages/Greetings";
import About from "./portfolio/pages/About";
import EducationSkills from "./portfolio/pages/EducationSkills";
import ExperienceInternship from "./portfolio/pages/ExperienceInternship";
import Projects from "./portfolio/pages/Projects";
import Contact from "./portfolio/pages/Contact";

function Portfolio() {
    return (
        <>
            <Greetings />
            <About />
            <ExperienceInternship />
            <Projects />
            <EducationSkills />
            <Contact />
        </>
    );
}

export default Portfolio;
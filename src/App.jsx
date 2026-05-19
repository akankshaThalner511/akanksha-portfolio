import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import ExperienceInternship from "./components/ExperienceInternship.jsx";
import Projects from "./components/Projects.jsx";
import EducationSkills from "./components/EducationSkills.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="portfolioApp">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceInternship />
        <Projects />
        <EducationSkills />
      </main>
      <Contact />
    </div>
  );
}

export default App;

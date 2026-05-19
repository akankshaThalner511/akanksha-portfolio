import React from "react";
import "../styles/EducationSkills.css";

const educationList = [
  {
    icon: "🎓",
    degree: "BCA - Bachelor of Computer Application",
    institute: "Dr. A.G.D. Bendale Mahila Mahavidyalaya, Jalgaon",
    year: "2020 - 2023",
    details: "CGPA: 9.31/10",
    highlight: "Strong academic foundation in programming, databases, web technologies, and software development.",
  },
];

const trainingList = [
  {
    icon: "🏅",
    title: "Java Full Stack Training Program",
    institute: "Naresh I Technologies",
    location: "Ameerpet, Hyderabad, India",
    details:
      "Completed an intensive, hands-on training program covering Core Java, advanced frameworks, and full-stack development with a strong focus on practical, project-based learning.",
    link: "https://nareshit.com/",
  },
];

const skillCategories = [
  { title: "Programming Languages", icon: "PL", level: "Strong Foundation", skills: ["Java", "C", "HTML", "CSS", "JavaScript"] },
  { title: "Frameworks & Libraries", icon: "FW", level: "Backend Focus", skills: ["Spring Boot", "JPA / Hibernate", "Spring Security", "Mockito", "JUnit"] },
  { title: "Databases", icon: "DB", level: "Data Driven Apps", skills: ["MySQL", "Redis", "H2 Database"] },
  { title: "Tools & Platforms", icon: "TP", level: "Development Workflow", skills: ["Git", "GitHub", "Bitbucket", "Maven", "Jira", "Postman", "Swagger", "AWS Basic", "AEM"] },
  { title: "Soft Skills", icon: "SS", level: "Professional Strengths", skills: ["Problem-Solving", "Team Collaboration", "Mentoring", "Time Management"] },
];

const achievements = [
  { title: "Problem-Solving Competition", event: "PINNACLE 2022", details: "Cleared all three rounds of a Java coding contest, demonstrating strong logical and problem-solving abilities." },
  { title: "Quiz Competition", event: "KnowaTech 2022", details: "Advanced through group and individual rounds in a C & Java Web Tech quiz, showcasing broad technical knowledge." },
  { title: "Academic Excellence", event: "3rd Year, 2nd Semester", details: "Secured a high CGPA of 9.71/10, reflecting dedication and hard work in academic studies." },
];

const educationStats = [
  { value: "9.31", label: "Overall CGPA" },
  { value: "Java", label: "Core Strength" },
  { value: "Full Stack", label: "Training Focus" },
];

const skillIconMap = {
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Bitbucket: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
  Jira: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
};

function SkillIcon({ skill }) {
  const icon = skillIconMap[skill];
  if (icon) return <span className="skillIcon"><img src={icon} alt={skill} loading="lazy" /></span>;
  return <span className="skillIcon skillIconText">{skill.slice(0, 2).toUpperCase()}</span>;
}

function EducationSkills() {
  return (
    <section className="eduSkillSection" id="education">
      <div className="eduSkillBackground" aria-hidden="true"><span className="eduOrb eduOrbOne" /><span className="eduOrb eduOrbTwo" /><span className="eduGridPattern" /></div>
      <div className="eduSkillContainer">
        <div className="eduHeader">
          <span className="eduTag"><span className="eduTagDot" />Education & Skills</span>
          <h2 className="eduTitle">Academic Journey<span>& Technical Strengths</span></h2>
          <p className="eduHeaderText">Strong academic background, Java full stack training, practical project experience, and a growing technical skill set focused on enterprise application development.</p>
          <div className="eduHeaderStats">{educationStats.map((stat) => <span key={stat.label}><strong>{stat.value}</strong>{stat.label}</span>)}</div>
        </div>

        <div className="eduSkillGrid">
          <div className="educationBox">
            {educationList.map((item) => (
              <article className="educationCard" key={item.degree}>
                <div className="educationIcon"><span>{item.icon}</span></div>
                <div className="educationContent">
                  <span className="educationLabel">Academic Qualification</span>
                  <h3>{item.degree}</h3>
                  <h4>{item.institute}</h4>
                  <p>{item.details}</p>
                  <p className="educationHighlight">{item.highlight}</p>
                  <div className="educationMetaRow"><span>{item.year}</span><span>Graduate Degree</span></div>
                </div>
              </article>
            ))}

            <div className="trainingPanel" id="training">
              <div className="panelHeader"><span className="panelIcon">🏆</span><div><p>Professional Learning</p><h3>Training & Certifications</h3></div></div>
              {trainingList.map((item) => (
                <article className="trainingCard" key={item.title}>
                  <div className="educationIcon trainingIcon"><span>{item.icon}</span></div>
                  <div className="trainingContent"><h4>{item.title}</h4><a href={item.link} target="_blank" rel="noreferrer">{item.institute}<span>↗</span></a><p>{item.details}</p><div className="educationMetaRow"><span>{item.location}</span><span>Hands-on Training</span></div></div>
                </article>
              ))}
            </div>

            <div className="achievementPanel" id="achievements">
              <div className="panelHeader"><span className="panelIcon">⭐</span><div><p>Recognition</p><h3>Achievements</h3></div></div>
              <div className="achievementGrid">{achievements.map((achievement, index) => <article className="achievementCard" key={achievement.title}><span className="achievementNumber">{String(index + 1).padStart(2, "0")}</span><h4>{achievement.title}</h4><strong>{achievement.event}</strong><p>{achievement.details}</p></article>)}</div>
            </div>
          </div>

          <aside className="skillsBox" id="skills">
            <div className="skillsBoxGlow" aria-hidden="true" />
            <div className="skillsHeader"><span className="skillsHeaderIcon">⚙️</span><div><p>Technical Toolkit</p><h3 className="skillsTitle">My Skills</h3></div></div>
            <div className="skillsProgressPanel"><div><span>Backend Development</span><strong>88%</strong></div><div className="skillProgressTrack"><span style={{ width: "88%" }} /></div><div><span>Frontend Integration</span><strong>78%</strong></div><div className="skillProgressTrack"><span style={{ width: "78%" }} /></div><div><span>Database & APIs</span><strong>84%</strong></div><div className="skillProgressTrack"><span style={{ width: "84%" }} /></div></div>
            <div className="skillsCategoryList">{skillCategories.map((category) => <div className="skillsCategory" key={category.title}><div className="skillsCategoryHeader"><span>{category.icon}</span><div><h4>{category.title}</h4><p>{category.level}</p></div></div><div className="skillsList">{category.skills.map((skill) => <span key={skill} className="skillBadge"><SkillIcon skill={skill} />{skill}</span>)}</div></div>)}</div>
            <div className="skillNote"><h4>Professional Focus</h4><p>Focused on Java backend development, Spring Boot REST APIs, secure application design, database-driven systems, and real-time project implementation.</p></div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default EducationSkills;

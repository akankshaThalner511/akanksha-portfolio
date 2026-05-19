import React, { useEffect, useMemo, useState } from "react";
import "../styles/ExperienceInternship.css";

const AUTOSCROLL_DELAY = 3000;

const techIconMap = {
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "React JS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  Jira: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
};

const experienceList = [
  {
    category: "Current Position",
    categoryIcon: "💼",
    role: "Java Developer",
    company: "Verticross India Private Limited",
    location: "Rukminipur, A S Rao Nagar, ECIL Main Road, Hyderabad",
    period: "Jan 2026 – Present",
    badge: "Live Enterprise Work",
    summary:
      "Working on live enterprise software projects with Java, Spring Boot, Microservices, React JS, MySQL, REST APIs, Flutter, Git, and Maven.",
    highlights: [
      "Contributing to real-time College Management System and Transport Automation modules.",
      "Rebuilt and improved the company website using React JS with responsive UI.",
      "Developing Spring Boot REST APIs, database logic, and frontend integration flows.",
      "Working on authentication, role-based access control, validation, and reusable modules.",
    ],
    focus: ["Backend APIs", "Microservices", "React Integration", "Real-time Modules"],
    impact: ["CMS Modules", "Transport Automation", "Company Website", "API Integration"],
    techStack: ["Java", "Spring Boot", "Microservices", "REST APIs", "React JS", "MySQL", "Flutter", "Git", "Maven"],
  },
  {
    category: "Earlier Role",
    categoryIcon: "🎯",
    role: "Trainee Engineer",
    company: "Verticross India Private Limited",
    location: "Rukminipur, A S Rao Nagar, ECIL Main Road, Hyderabad",
    period: "Sep 2025 – Dec 2025",
    badge: "Enterprise Training",
    summary:
      "Completed hands-on enterprise software training while supporting real-time development activities and module-level implementation.",
    highlights: [
      "Strengthened practical skills in Core Java, Spring Boot, REST APIs, SQL, Git, Maven, and Agile practices.",
      "Worked with senior engineers to understand system design, code quality, debugging, and deployment flow.",
      "Participated in backend and frontend integration learning with real project scenarios.",
    ],
    focus: ["Core Java", "Spring Boot", "REST APIs", "Agile Practice"],
    impact: ["Code Quality", "Debugging", "Deployment Flow", "Reusable Components"],
    techStack: ["Java", "Spring Boot", "REST APIs", "SQL", "Agile", "Git", "Maven"],
  },
  {
    category: "Previous Experience",
    categoryIcon: "🏢",
    role: "Associate Software Engineer",
    company: "Bhasaka Technologies",
    location: "Madhura Nagar, Hyderabad, Telangana - 500038",
    period: "Sep 2024 – Feb 2025",
    badge: "Enterprise Web Apps",
    summary:
      "Contributed to enterprise web applications for Brunswick Corporation with a focus on performance, user experience, backend support, and AEM components.",
    highlights: [
      "Designed and implemented AEM components, templates, dialogs, and content structures.",
      "Developed and optimized REST APIs and backend processes to support business workflows.",
      "Collaborated in Agile sprints using Jira to manage tasks, track progress, and deliver work on time.",
    ],
    focus: ["AEM Components", "REST APIs", "Agile Delivery", "Backend Support"],
    impact: ["Performance", "User Experience", "Business Workflows", "Sprint Delivery"],
    techStack: ["Java", "AEM", "REST APIs", "Servlets", "Agile", "Jira", "Maven", "Swagger"],
  },
  {
    category: "Internship",
    categoryIcon: "🚀",
    role: "Java Developer Trainee",
    company: "HulkHire Tech",
    location: "Begumpet, Hyderabad, Telangana - 500016",
    period: "Jun 2025 – Aug 2025",
    badge: "Payment Integration",
    summary:
      "Worked on a secure Payment Integration System using Java Spring Boot microservices, Redis, MySQL, and AWS basics.",
    highlights: [
      "Built validation workflows with Redis Cache and secured APIs using HmacSHA256 and RSA-based logic.",
      "Integrated Trustly Deposit API and implemented payment tracking, error handling, and transaction checks.",
      "Wrote JUnit and Mockito tests and used GitHub Copilot to improve productivity.",
    ],
    focus: ["Payment Integration", "Redis Cache", "Security", "Unit Testing"],
    impact: ["Validation", "Security", "Tracking", "Testing"],
    techStack: ["Java", "Spring Boot", "Microservices", "REST APIs", "Redis", "MySQL", "Postman", "JUnit", "Mockito", "AWS"],
  },
];

const profileMetrics = [
  { icon: "JD", label: "Current Role", value: "Java Developer", description: "Enterprise backend and full-stack module work", tone: "blue" },
  { icon: "FS", label: "Core Stack", value: "Spring Boot + React JS", description: "REST APIs, React integration and clean UI delivery", tone: "green" },
  { icon: "MS", label: "Architecture", value: "Microservices", description: "Scalable backend services and reusable modules", tone: "orange" },
  { icon: "RT", label: "Project Type", value: "Real-time Enterprise", description: "CMS, transport automation and website rebuild", tone: "dark" },
];

function TechIcon({ tech }) {
  const icon = techIconMap[tech];
  if (icon) {
    return <i className="techIcon"><img src={icon} alt={tech} loading="lazy" /></i>;
  }
  return <i className="techIcon techIconText">{tech.slice(0, 3).toUpperCase()}</i>;
}

function ExperienceCard({ item, index, isActive }) {
  return (
    <article className={`experienceCard ${isActive ? "activeExperience" : ""}`} aria-hidden={!isActive}>
      <div className="experienceCardGlow" aria-hidden="true" />
      <div className="experienceCardTop">
        <div className="experienceMarker"><span>{String(index + 1).padStart(2, "0")}</span></div>
        <div className="experienceHeadingBlock">
          <span className="experienceCategory"><span>{item.categoryIcon}</span>{item.category}</span>
          <h3>{item.role}</h3>
          <strong className="experienceCompany">🏢 {item.company}</strong>
        </div>
        <div className="experiencePeriod">🗓️ {item.period}</div>
      </div>
      <div className="experienceMetaGrid"><span>📍 {item.location}</span><span>🏷️ {item.badge}</span></div>
      <p className="experienceSummary">{item.summary}</p>
      <div className="experienceFocusGrid">{item.focus.map((focusItem) => <span key={focusItem}><i>◆</i> {focusItem}</span>)}</div>
      <div className="experienceContentGrid">
        <div className="experienceMainPanel">
          <div className="experienceMiniTitle"><span>✅</span> Key Contributions</div>
          <ul className="experienceHighlightList">{item.highlights.map((point) => <li key={point}><span className="highlightIcon">✓</span><span>{point}</span></li>)}</ul>
        </div>
        <aside className="experienceSidePanel">
          <div className="experienceImpactPanel"><h4>Work Impact</h4><div className="experienceImpactGrid">{item.impact.map((impact) => <span key={impact}>{impact}</span>)}</div></div>
          <div className="experienceTechPanel"><h4>Tech Stack</h4><div className="experienceTechTags">{item.techStack.map((tech) => <span key={tech}><TechIcon tech={tech} />{tech}</span>)}</div></div>
        </aside>
      </div>
    </article>
  );
}

function ExperienceInternship() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeItem = experienceList[activeIndex];

  const allTechTags = useMemo(() => {
    const techSet = new Set();
    experienceList.forEach((item) => item.techStack.forEach((tech) => techSet.add(tech)));
    return Array.from(techSet);
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % experienceList.length);
    }, AUTOSCROLL_DELAY);
    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused]);

  const goToSlide = (index) => setActiveIndex(index);
  const goToPrevious = () => setActiveIndex((currentIndex) => currentIndex === 0 ? experienceList.length - 1 : currentIndex - 1);
  const goToNext = () => setActiveIndex((currentIndex) => (currentIndex + 1) % experienceList.length);

  return (
    <section className="experienceSection" id="experience" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="experienceBackground" aria-hidden="true"><span className="experienceOrb experienceOrbOne" /><span className="experienceOrb experienceOrbTwo" /><span className="experienceGridPattern" /></div>
      <div className="experienceContainer">
        <div className="experienceHeader">
          <span className="experienceEyebrow"><span className="experienceEyebrowDot" />Experience & Internship</span>
          <h2>Professional Experience<span> in Enterprise Development</span></h2>
          <p>Real-time development experience in Java, Spring Boot, Microservices, REST APIs, React JS, database integration, company website rebuild, and enterprise project delivery.</p>
          <div className="experienceHeaderStats"><span><strong>4</strong> Career Milestones</span><span><strong>10+</strong> Technologies</span><span><strong>Live</strong> Enterprise Projects</span></div>
        </div>

        <div className="experienceMetricGrid">{profileMetrics.map((metric, index) => <button type="button" className={`experienceMetricCard metric-${metric.tone} ${activeIndex === index ? "activeMetric" : ""}`} key={metric.label} onClick={() => goToSlide(index)}><span className="metricSerial">{String(index + 1).padStart(2, "0")}</span><div className="metricIcon"><span>{metric.icon}</span></div><div className="metricContent"><span>{metric.label}</span><strong>{metric.value}</strong><p>{metric.description}</p></div></button>)}</div>

        <div className="experienceDynamicBar"><div className="dynamicBarContent"><span className="dynamicBarIcon">{activeItem.categoryIcon}</span><div><small>{isPaused ? "Paused" : "Auto Sliding"}</small><strong>{activeItem.role} · {activeItem.company}</strong></div></div><div className="dynamicProgress"><span key={`${activeIndex}-${isPaused}`} className={isPaused ? "progressPaused" : ""} style={{ "--delay": `${AUTOSCROLL_DELAY}ms` }} /></div></div>

        <div className="experienceTechMarquee"><div className="techMarqueeTrack">{[...allTechTags, ...allTechTags].map((tech, index) => <span key={`${tech}-${index}`}><TechIcon tech={tech} />{tech}</span>)}</div></div>

        <nav className="experienceNavigator">{experienceList.map((item, index) => <button type="button" key={`${item.company}-${item.role}`} className={activeIndex === index ? "activeNavItem" : ""} onClick={() => goToSlide(index)}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{item.role}</strong><small>{item.category}</small></div><em>{item.categoryIcon}</em></button>)}</nav>

        <div className="experienceSelectedPanel"><div className="experienceSliderShell"><div className="experienceSliderTop"><div className="sliderTopLeft"><span className="sliderLiveDot" /><div><small>Selected Milestone</small><strong>{activeItem.role}</strong></div></div><div className="sliderTopRight"><span>{activeItem.category}</span><b>{String(activeIndex + 1).padStart(2, "0")} / {String(experienceList.length).padStart(2, "0")}</b></div></div><button type="button" className="experienceControl experienceControlLeft" onClick={goToPrevious}>‹</button><div className="experienceCardsViewport" style={{ "--active-index": activeIndex }}><div className="experienceViewportBackdrop" aria-hidden="true" /><div className="experienceCardsTrack">{experienceList.map((item, index) => <ExperienceCard item={item} index={index} isActive={activeIndex === index} key={`${item.company}-${item.role}-${item.period}`} />)}</div></div><button type="button" className="experienceControl experienceControlRight" onClick={goToNext}>›</button><div className="experienceSliderBottom"><span>{activeItem.company}</span><span>{activeItem.period}</span><span>{isPaused ? "Paused on hover" : "Auto sliding"}</span></div></div></div>

        <div className="experienceDots">{experienceList.map((item, index) => <button type="button" key={`${item.role}-dot`} className={activeIndex === index ? "activeDot" : ""} onClick={() => goToSlide(index)} />)}</div>
      </div>
    </section>
  );
}

export default ExperienceInternship;

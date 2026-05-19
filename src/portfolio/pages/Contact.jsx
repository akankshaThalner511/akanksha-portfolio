import React, { useState } from "react";
import "../styles/Contact.css";

const contactDetails = [
  {
    icon: "📞",
    label: "Phone",
    value: "+91 9156070849",
    href: "tel:+919156070849",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "akankshathalner@gmail.com",
    href: "mailto:akankshathalner@gmail.com",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "akanksha-java-se",
    href: "https://www.linkedin.com/in/akanksha-java-se/",
  },
  {
    icon: "GH",
    label: "GitHub",
    value: "akankshaThalner511",
    href: "https://github.com/akankshaThalner511",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Ameerpet, Hyderabad, India",
    href: "https://www.google.com/maps/place/Ameerpet,+Hyderabad,+Telangana/",
  },
];

const quickHighlights = [
  "Java Developer",
  "Spring Boot",
  "Backend APIs",
  "Microservices",
  "React JS",
];

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact - ${formData.name.trim() || "New Message"}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );

    window.location.href = `mailto:akankshathalner@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="contactSection" id="contact">
      <div className="contactBackground" aria-hidden="true">
        <span className="contactOrb contactOrbOne" />
        <span className="contactOrb contactOrbTwo" />
        <span className="contactGridPattern" />
      </div>

      <div className="contactContainer">
        <div className="contactHeader">
          <div className="contactHeaderPattern" aria-hidden="true" />
          <div className="contactHeaderGlow" aria-hidden="true" />

          <div className="contactHeaderContent">
            <span className="contactTag">
              <span className="contactTagDot" />
              Contact Me
            </span>

            <h2>Let’s Build Something Meaningful Together</h2>

            <p>
              I am open to Java Developer, Spring Boot Backend Developer, Full
              Stack Developer, and Software Developer opportunities.
            </p>

            <div className="contactHighlights">
              {quickHighlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="contactGrid">
          <section className="contactInfoPanel">
            <div className="contactPanelHeader">
              <span className="contactPanelIcon">👩‍💻</span>
              <div>
                <p>Reach Out</p>
                <h3>Contact Details</h3>
              </div>
            </div>

            <div className="contactCards">
              {contactDetails.map((item) => (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="contactCard"
                  key={item.label}
                >
                  <span className="contactIcon">{item.icon}</span>

                  <span className="contactText">
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </span>
                </a>
              ))}
            </div>

            <div className="resumeBox">
              <h4>Resume</h4>
              <p>Download my resume to review my complete professional profile.</p>

              <a className="resumeButton" href="/Akanksha_Thalner_Trainer.pdf" download>
                Download Resume
                <span>↓</span>
              </a>
            </div>
          </section>

          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="contactPanelHeader">
              <span className="contactPanelIcon">✉️</span>
              <div>
                <p>Message</p>
                <h3>Send a Message</h3>
              </div>
            </div>

            <div className="formGrid">
              <label>
                Your Name
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Your Email
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label>
              Message
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit">
              Send Message
              <span>→</span>
            </button>
          </form>
        </div>

        <div className="declarationBlock">
          <p>I hereby declare that the information provided above is true to the best of my knowledge.</p>
          <strong>Akanksha Bapu Thalner</strong>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
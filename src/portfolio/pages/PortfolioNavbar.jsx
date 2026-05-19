import React, { useState } from "react";
import {
  FaBars,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import "../styles/PortfolioNavbar.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const contactItems = [
  {
    label: "+91 9156070849",
    href: "tel:+919156070849",
    icon: <FaPhoneAlt />,
  },
  {
    label: "akankshathalner@gmail.com",
    href: "mailto:akankshathalner@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akanksha-java-se/",
    icon: <FaLinkedin />,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/akankshaThalner511",
    icon: <FaGithub />,
    external: true,
  },
  {
    label: "Hyderabad, India",
    href: "https://www.google.com/maps/place/Hyderabad,+Telangana/",
    icon: <FaMapMarkerAlt />,
    external: true,
  },
];

function PortfolioNavbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="portfolioTopHeader">
      

      <nav className="portfolioNavbar" aria-label="Portfolio navigation">
        <a className="portfolioNavBrand" href="#home" onClick={closeMenu}>
          <span>AT</span>
        </a>

        <button
          type="button"
          className={`portfolioMenuButton ${open ? "portfolioMenuButtonOpen" : ""}`}
          aria-label="Toggle portfolio navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`portfolioNavLinks ${open ? "portfolioNavLinksOpen" : ""}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <a
            className="portfolioNavResume"
            href="/Akanksha_Thalner_Trainer.pdf"
            download
            onClick={closeMenu}
          >
            <FiDownload />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

export default PortfolioNavbar;

import React, { useState } from "react";
import "../styles/Navbar.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="navLogo" href="#home" onClick={() => setOpen(false)}>
        <span>AT</span>
        Akanksha Thalner
      </a>

      <button
        type="button"
        className={`navToggle ${open ? "navToggleOpen" : ""}`}
        onClick={() => setOpen((current) => !current)}
        aria-label="Toggle navigation"
      >
        <i />
        <i />
        <i />
      </button>

      <nav className={`navLinks ${open ? "navLinksOpen" : ""}`}>
        {navItems.map((item) => (
          <a href={item.href} key={item.label} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="navResume" href="/Akanksha_Thalner_Resume.pdf" download>
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar;

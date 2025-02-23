import React, { useEffect, useState } from "react";
import { Nav, NavContainer, NavLink } from "../Styles/HeaderStyles";

const sections = ["home", "projects", "skills", "experience", "education", "contact"];

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home"; // Default to "home" initially

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();

          // Ensure "home" is active when the Vanta.js section is visible
          if (section === "home" && rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
            currentSection = "home";
          } 
          // Check other sections normally
          else if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call it initially to set the correct section on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav>
      <NavContainer>
        {sections.map((section) => (
          <NavLink
            key={section}
            href={`#${section}`}
            className={activeSection === section ? "active" : ""}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </NavLink>
        ))}
      </NavContainer>
    </Nav>
  );
};

export default Header;

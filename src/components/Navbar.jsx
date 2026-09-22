import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <a href="#home" onClick={() => scrollToSection('home')}>
            <h2>Portfolio</h2>
          </a>
        </div>

        <ul id="primary-navigation" className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
          <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a href="#education" onClick={() => scrollToSection('education')}>Education</a></li>
          <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>

          <button
            type="button"
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

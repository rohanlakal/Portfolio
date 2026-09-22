import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

const getStoredTheme = () => {
  try {
    return localStorage.getItem('portfolio-theme') || 'light';
  } catch {
    return 'light';
  }
};

function App() {
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Theme still works for the current session if storage is blocked.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <Services />
      <Skills />
      <Education />
      <Projects />
      <Contact />

      <footer className="footer">
        &copy; {new Date().getFullYear()} Rohan Lakal. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;

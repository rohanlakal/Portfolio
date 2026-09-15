import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Education />
      <Projects />
      <Contact />

      <footer style={{ textAlign: "center", padding: "20px", color: "#666" }}>
  © {new Date().getFullYear()} Rohan Lakal. All Rights Reserved.
</footer>

    </div>
  );
}

export default App;

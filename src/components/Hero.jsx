import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <img src="https://i.pinimg.com/736x/1b/34/89/1b348953de47132d63d4454d0d649af5.jpg" alt="Profile" className="profile-img" />
            <h1>Hi, It's <span>ROHAN LAKAL</span></h1>
            <h2 className="hero-subtitle">I'm a <span className="typing">Engineering Student  </span></h2>
            <p className="hero-description">
              I am a passionate Computer Engineering student with a strong interest in software development, web technologies, and problem-solving. I have completed my Diploma in <strong>Computer Engineering</strong> and am currently pursuing my <strong>Engineering</strong> degree through Direct Second Year admission.
            </p>
            {/* <p className="hero-description">
              With a strong foundation in <strong>HTML, CSS, JavaScript,Python and React-js</strong>, I've worked on several projects 
              that highlight my ability to create responsive and user-friendly websites.
            </p> */}
            <div className="hero-buttons">
              <a href="#projects" className="btn">View Projects</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/rohanlakal" className="social-icon" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" aria-label="LinkedIn profile">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/rohanlakal" className="social-icon" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" aria-label="GitHub profile">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://x.com/rohan_lakal" className="social-icon" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" aria-label="X profile">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/rohan_lakal" className="social-icon" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" aria-label="Instagram profile">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

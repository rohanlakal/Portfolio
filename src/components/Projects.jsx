import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Driver Drowsiness Detection System',
      period: 'March 2026',
      description: 'Driver Drowsiness Detection System is a real-time safety application that monitors a drivers eyes using a webcam. It detects drowsiness through Eye Aspect Ratio (EAR) analysis and generates an alert when the driver appears sleepy. The system helps reduce road accidents caused by fatigue.',
      features: ['Real-time Eye Monitoring', 'Face & Eye Detections', 'Eye Aspect Ratio (EAR) Calculation', 'Automatic Drowsiness Detection', 'Audio Alarm Alert', 'Visual Warning Message', 'Webcam-Based Detection', 'Low-Cost Solution', 'Non Intrusive Monitoring', 'Easy Integration with Vehicles']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-item fade-in-up">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-date">{project.period}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-features">
                {project.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    <i className="fas fa-check"></i> {feature}
                  </span>
                ))}
              </div>
              {/* <div className="project-actions">
                <a href="#" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                <a href="#" className="project-link github">GitHub <i className="fab fa-github"></i></a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

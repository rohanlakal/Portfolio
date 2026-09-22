import React from 'react';
import './Education.css';

function Education() {
  const education = [
    {
      id: 1,
      school: 'Sou. Shardadevi Pandit Polytechnic Institute',
      location: 'Dharashiv',
      degree: 'Diploma In Computer Engineering',
      period: '2023-26'
    },
    {
      id: 2,
      school: "Terna Public Charitable Trust's College of Engineering",
      location: 'Dharashiv',
      degree: 'B.Tech in Computer Science and Engineering',
      period: '2026-2029'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">My Education</h2>
        <div className="education-timeline">
          {education.map((item) => (
            <div key={item.id} className="timeline-item fade-in-up">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>{item.school}</h3>
                <p className="location">Location: {item.location}</p>
                <p className="degree">{item.degree}</p>
                {item.tech && <p className="tech">Technology: {item.tech}</p>}
                <span className="period">{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

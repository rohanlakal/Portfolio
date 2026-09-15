import React from 'react';
import './Services.css';

function Services() {
  const services = [
     
    // {
    //   id: 1,
    //   icon: '🎨',
    //   title: 'Web Design',
    //   description: 'Creating beautiful and intuitive web designs that attract users and enhance user experience with modern aesthetics.'
    // },
    // {
    //   id: 2,
    //   icon: '💻',
    //   title: 'Web Developer',
    //   description: 'Building responsive and dynamic websites using modern technologies like React, JavaScript, HTML5, CSS3 and more.'
    // }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">No any Services Currently</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card fade-in-up">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

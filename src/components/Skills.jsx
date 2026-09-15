import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    {
      id: 1,
      title: 'Java',
      image: 'https://i.pinimg.com/1200x/03/46/6f/03466fd822648ba64f9d42f379b6815f.jpg',
      description: '25%'
    },

    {
      id: 2,
      title: 'Python',
      image: 'https://i.pinimg.com/1200x/77/51/60/7751602415a1f7439c821a8bd54d2c67.jpg',
      description: '48%'
    },

     {
      id: 3,
      title: 'C',
      image: 'https://i.pinimg.com/1200x/51/16/39/511639ed8370cb83211f49e0d8f04af2.jpg',
      description: '20%'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Working on Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card fade-in-up">
              <div className="skill-image">
                <img src={skill.image} alt={skill.title} />
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

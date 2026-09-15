
import React, { useState } from 'react';

import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();


}




  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">My Contact</h2>
        
        <div className="contact-content">
          <div className="contact-info fade-in-up">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <a href="tel:+919370723326">Call</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:rvlakal@gmail.com">Send Mail</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-instagram"></i>
              </div>
              <div className="contact-details">
                <h4>Instagram</h4>
                <a href="https://instagram.com/rohan_lakal" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/rohanlakal" className="social-btn" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/rohanlakal" className="social-btn" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://x.com/rohan_lakal" className="social-btn" title="Twitter">
                <i className="fab fa-twitter"></i>  
              </a>
              <a href="https://www.instagram.com/rohan_lakal" className="social-btn" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            {/* <a href="#" download className="btn download-cv">
              <i className="fas fa-download"></i> Download CV
            </a> */}
          </div>

          <form className="contact-form fade-in-up" onSubmit={handleSubmit}>
            {submitted && <div className="success-msg">✓ Message sent successfully!</div>}
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;

import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const emptyForm = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitLockRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submitLockRef.current) {
      return;
    }

    submitLockRef.current = true;
    setIsSubmitting(true);

    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailtoLink = `mailto:rvlakal@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setFormData(emptyForm);
    setSubmitStatus('Opening your email app. Your form has been cleared.');

    timeoutRef.current = setTimeout(() => {
      submitLockRef.current = false;
      setIsSubmitting(false);
      setSubmitStatus('');
    }, 8000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">My Contact</h2>

        <div className="contact-content">
          <div className="contact-info fade-in-up">
            {/* <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <a href="tel:+919370723326">Call</a>
              </div>
            </div> */}

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
                <a href="https://instagram.com/rohan_lakal" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">Instagram</a>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/rohanlakal" className="social-btn" title="LinkedIn" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" aria-label="LinkedIn profile">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/rohanlakal" className="social-btn" title="GitHub" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" aria-label="GitHub profile">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://x.com/rohan_lakal" className="social-btn" title="Twitter" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" aria-label="X profile">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/rohan_lakal" className="social-btn" title="Instagram" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" aria-label="Instagram profile">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <form className="contact-form fade-in-up" onSubmit={handleSubmit}>
            {submitStatus && <div className="success-msg">{submitStatus}</div>}

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

            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Opening Email App...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

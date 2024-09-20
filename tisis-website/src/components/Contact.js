import React, { useState } from 'react';
import '../styles/Contact.css';
import submitDefault from '../assets/icons/contact/submitDefault.svg';
import xIconDefault from '../assets/icons/contact/xDefault.svg';
import linkedInIconDefault from '../assets/icons/contact/linkedInDefault.svg';
import youtubeIconDefault from '../assets/icons/contact/youtubeDefault.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [notification, setNotification] = useState({ show: false, message: '', isError: false });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setNotification({ show: true, message: 'Please fill out all fields.', isError: true });
      setTimeout(() => setNotification({ ...notification, show: false }), 3000);
      return;
    }

    if (!validateEmail(formData.email)) {
      setNotification({ show: true, message: 'Please enter a valid email address.', isError: true });
      setTimeout(() => setNotification({ ...notification, show: false }), 3000);
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/contact/submit/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification({ show: true, message: 'Message sent successfully!', isError: false });
        setTimeout(() => setNotification({ ...notification, show: false }), 3000);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setNotification({ show: true, message: 'Error sending message. Please try again.', isError: true });
        setTimeout(() => setNotification({ ...notification, show: false }), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setNotification({ show: true, message: 'Network error. Please try again.', isError: true });
      setTimeout(() => setNotification({ ...notification, show: false }), 3000);
    }
  };

  return (
    <div className="contact-section">
      <div className={`sliding-notification ${notification.show ? 'show' : ''} ${notification.isError ? 'error' : 'success'}`}>
        {notification.message}
      </div>

      <div className="contact-title">contact</div>
      <div className="contact-container">
        <div className="contact-left">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your name..."
              value={formData.name}
              onChange={handleChange}
              className="contact-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your e-mail..."
              value={formData.email}
              onChange={handleChange}
              className="contact-input"
            />
            <textarea
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              className="contact-textarea"
            />
            <button type="submit" className="contact-submit hover-submit">
              <img src={submitDefault} alt="Submit" />
            </button>
          </form>
        </div>

        <div className="contact-right">
          <h2>Follow Me</h2>
          <div className="contact-follow">
            <a
              href="https://x.com/JimRisis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={xIconDefault} alt="X Profile" className="hover-x" />
            </a>
            <a
              href="https://www.linkedin.com/in/dimitris-risis-551039302/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedInIconDefault}
                alt="LinkedIn Profile"
                className="hover-linkedin"
              />
            </a>
            <a
              href="https://www.youtube.com/@tisisgame5968"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={youtubeIconDefault}
                alt="YouTube Channel"
                className="hover-youtube"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
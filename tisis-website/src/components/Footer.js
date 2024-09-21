import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-nav-container">
        <div className="footer-logo">
          <span className="logo">tisis</span>
        </div>

        <nav className="footer-nav">
          <ul>
            <li><a onClick={() => handleScroll('home')}>home</a></li>
            <li><a onClick={() => handleScroll('lore')}>lore</a></li>
            <li><a onClick={() => handleScroll('gallery')}>gallery</a></li>
            <li><a onClick={() => handleScroll('about')}>about</a></li>
            <li><a onClick={() => handleScroll('contact')}>contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>Copyright 2024 Tisis</p>
        </div>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
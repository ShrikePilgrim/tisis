import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import hamDefault from '../assets/icons/header/hamDefault.svg';
import hamClicked from '../assets/icons/header/hamClicked.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 550);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen && isMobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen, isMobile]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 550);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="logo">tisis</div>
      {isMobile ? (
        <>
          <div className="menu-icon" onClick={toggleMenu}>
            <img src={menuOpen ? hamClicked : hamDefault} alt="menu icon" />
          </div>
          {menuOpen && <div className="overlay"></div>}
          <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>home</a></li>
              <li><a href="#lore" onClick={(e) => { e.preventDefault(); handleScroll('lore'); }}>lore</a></li>
              <li><a href="#gallery" onClick={(e) => { e.preventDefault(); handleScroll('gallery'); }}>gallery</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>about</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>contact</a></li>
            </ul>
          </nav>
        </>
      ) : (
        <nav className="nav">
          <ul>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>home</a></li>
            <li><a href="#lore" onClick={(e) => { e.preventDefault(); handleScroll('lore'); }}>lore</a></li>
            <li><a href="#gallery" onClick={(e) => { e.preventDefault(); handleScroll('gallery'); }}>gallery</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>about</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
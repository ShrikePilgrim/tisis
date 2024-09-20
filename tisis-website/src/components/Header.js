import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import hamDefault from '../assets/icons/header/hamDefault.svg';
import hamClicked from '../assets/icons/header/hamClicked.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 510);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 510);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="grid-container">
      <header className="header">
        <div className="logo">tisis</div>

        {isMobile ? (
          <>
            <div className="hamburger" onClick={toggleMenu}>
              <img
                src={menuOpen ? hamClicked : hamDefault}
                alt="menu icon"
                className="hamburger-icon"
              />
            </div>

            <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
              <ul>
                <li><a href="#home" onClick={toggleMenu}>home</a></li>
                <li><a href="#lore" onClick={toggleMenu}>lore</a></li>
                <li><a href="#gallery" onClick={toggleMenu}>gallery</a></li>
                <li><a href="#about" onClick={toggleMenu}>about</a></li>
                <li><a href="#contact" onClick={toggleMenu}>contact</a></li>
              </ul>
            </nav>

            {menuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
          </>
        ) : (
          <nav className="nav">
            <ul>
              <li><a href="#home">home</a></li>
              <li><a href="#lore">lore</a></li>
              <li><a href="#gallery">gallery</a></li>
              <li><a href="#about">about</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
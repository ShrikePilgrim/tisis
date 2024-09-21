import React, { useEffect } from 'react';
import '../styles/Home.css';
import arrowIcon from '../assets/icons/home/arrowIcon.svg';

const Home = () => {
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    preloadImage(require('../assets/icons/home/arrowIcon.svg'));
    preloadImage(require('../assets/icons/home/watchTrailerDefault.svg'));
    preloadImage(require('../assets/icons/home/watchTrailerHover.svg'));
  }, []);

  return (
    <section className="home">
      <div className="home-content">
        <div className="title">tisis</div>
        <div className="subtitle">retribution of hubris</div>
        <a href="https://www.youtube.com/watch?v=TXX0xWmK08E&t=2s" target="_blank" rel="noopener noreferrer" className="watch-trailer">
          Watch trailer
        </a>
      </div>

      <div className="scroll-arrow">
        <img src={arrowIcon} alt="Scroll Down" />
      </div>
    </section>
  );
};

export default Home;
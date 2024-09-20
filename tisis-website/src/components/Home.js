import React from 'react';
import '../styles/Home.css';
import arrowIcon from '../assets/icons/home/arrowIcon.svg';

const Home = () => {
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
import React from 'react';
import backgroundVideo from './assets/videos/Final Cut.webm';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Lore from './components/Lore';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div id="home">
        <Header />
      </div>

      <Home />

      <div id="lore">
        <Lore />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <div id="about">
        <About />
      </div>

      <Contact />

      <div id="contact">
        <Footer />
      </div>

    </div>
  );
}

export default App;
import React from 'react';
import backgroundVideo from './assets/videos/Final Cut.mp4';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Lore from './components/Lore';

function App() {
  return (
    <div className="App">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Header />
      <Home />
      <Lore />

    </div>
  );
}

export default App;
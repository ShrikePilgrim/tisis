import React from 'react';
import Header from './components/Header';
import backgroundVideo from './assets/videos/Final Cut.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Header />

    </div>
  );
}

export default App;
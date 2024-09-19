import React from 'react';
import '../styles/About.css';
import kingsLegacyImage from '../assets/images/about/kingsLegacy.png';
import surviveMadnessImage from '../assets/images/about/surviveMadness.png';
import behindVeilImage from '../assets/images/about/behindVeil.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-title">about</div>
      <div className="about-sections">

        <div className="about-section">
          <img src={kingsLegacyImage} alt="The King's Legacy" className="about-image" />
          <h2 className="about-section-title">The King's Legacy</h2>
          <p className="about-text">
            In the shadow of the Second World War, an Allied soldier joins an expedition to the frozen wastes of Antarctica, where the Axis’s secret division, Ahnenerbe, has uncovered something far older and darker than history itself. In their hubris, they have disturbed a force beyond comprehension—an ancient play, whispered through time, known as The King in Yellow. As madness takes root among the expedition, you, the last survivor, must uncover the truth. The inevitable retribution —Tisis—looms ever closer, and only by embracing your forgotten past can you face the reckoning that awaits. The thin line between reality and madness fades, and the echoes of Carcosa call you home...</p>
        </div>

        <div className="about-section">
          <img src={surviveMadnessImage} alt="Survive the Madness" className="about-image" />
          <h2 className="about-section-title">Survive the Madness</h2>
          <p className="about-text">
            In Tisis, survival is more than escaping physical dangers—it’s about holding on to your sanity in a world that’s constantly unraveling. As you explore forgotten ruins, ancient secrets, and eerie landscapes, reality itself becomes uncertain. The King in Yellow is always watching, twisting your perception and distorting the truth. Every choice you make will shape your descent into madness, as the lines between what is real and imagined blur. Your instincts are your only guide in a world designed to deceive. Will you be able to navigate the illusions, or will the madness consume you before you uncover the truth?</p>
        </div>

        <div className="about-section">
          <img src={behindVeilImage} alt="Behind the Veil" className="about-image" />
          <h2 className="about-section-title">Behind the Veil</h2>
          <p className="about-text">
            Tisis is the product of nearly two years of solo development, built from the ground up in Unreal Engine 4. From level design to plot development, every aspect of the game was meticulously crafted, with many of the 3D models and assets designed from scratch. The eerie environments, intricate storylines, and the unsettling atmosphere were born from countless hours of fine-tuning. As a one-person project, Tisis represents a labor of passion, where every sound, texture, and narrative element was handpicked to immerse players in a world where reality and madness collide. This journey—filled with challenges and breakthroughs—has shaped the unique experience that is Tisis.</p>
        </div>

      </div>
    </div>
  );
};

export default About;
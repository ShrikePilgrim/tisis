import React, { useEffect } from 'react';
import '../styles/Lore.css';
import carcosa from '../assets/images/lore/carcosa.webp';
import hyades from '../assets/images/lore/hyades.webp';
import lakeHali from '../assets/images/lore/lakeHali.webp';
import nightfall from '../assets/images/lore/nightfall.webp';

const Lore = () => {
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    preloadImage(carcosa);
    preloadImage(hyades);
    preloadImage(lakeHali);
    preloadImage(nightfall);
  }, []);

  return (
    <section className="lore">
      <div className="lore-title">lore</div>
        <div className="lore-content">
          <div className="lore-pair">
            <img src={lakeHali} alt="Lake Hali" className="lore-image" />
            <p className="lore-text">
              Along the shore the cloud waves break,<br />
              The twin suns sink behind the lake,<br />
              The shadows lengthen<br />
              <span className="highlighted-text">In Carcosa.</span>
            </p>
          </div>
          <div className="lore-pair">
            <img src={nightfall} alt="Nightfall" className="lore-image" />
            <p className="lore-text">
              Strange is the night where black stars rise,<br />
              And strange moons circle through the skies,<br />
              But stranger still is<br />
              <span className="highlighted-text">Lost Carcosa.</span>
            </p>
          </div>
          <div className="lore-pair">
            <img src={hyades} alt="Hyades' Song" className="lore-image" />
            <p className="lore-text">
              Songs that the Hyades shall sing,<br />
              Where flap the tatters of the King,<br />
              Must die unheard in<br />
              <span className="highlighted-text">Dim Carcosa.</span>
            </p>
          </div>
          <div className="lore-pair">
            <img src={carcosa} alt="Carcosa" className="lore-image" />
            <p className="lore-text">
              Song of my soul, my voice is dead;<br />
              Die thou, unsung, as tears unshed<br />
              Shall dry and die in<br />
              <span className="highlighted-text">Lost Carcosa.</span>
            </p>
          </div>
        </div>
    </section>
  );
};

export default Lore;
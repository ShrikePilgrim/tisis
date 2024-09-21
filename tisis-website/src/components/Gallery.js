import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Gallery.css";

import lake1Video from "../assets/videos/lake1.mp4";
import templeVideo from "../assets/videos/temple.mp4";
import village1Video from "../assets/videos/village1.mp4";
import forest2Video from "../assets/videos/forest2.mp4";
import asylum1Video from "../assets/videos/asylum1.mp4";
import forest1Video from "../assets/videos/forest1.mp4";
import hyadesVideo from "../assets/videos/hyades.mp4";
import lake2Video from "../assets/videos/lake2.mp4";
import expeditionVideo from "../assets/videos/expedition.mp4";
import asylum2Video from "../assets/videos/asylum2.mp4";
import village2Video from "../assets/videos/village2.mp4";
import asylum3Video from "../assets/videos/asylum3.mp4";
import asylum4Video from "../assets/videos/asylum4.mp4";
import bunkerVideo from "../assets/videos/bunker.mp4";
import nightfallVideo from "../assets/videos/nightfall.mp4";
import village3Video from "../assets/videos/village3.mp4";

import antarcticImage from "../assets/images/gallery/expedition8.png";
import temple2Image from "../assets/images/gallery/temple2.png";
import bunker1Image from "../assets/images/gallery/bunker1.png";
import forest6Image from "../assets/images/gallery/forest6.png";
import lake3Image from "../assets/images/gallery/lake3.png";
import asylum2Image from "../assets/images/gallery/asylum2.png";
import village6Image from "../assets/images/gallery/village6.png";
import expedition1Image from "../assets/images/gallery/expedition1.jpg";
import bunker6Image from "../assets/images/gallery/bunker6.png";
import forest4Image from "../assets/images/gallery/forest4.png";
import village8Image from "../assets/images/gallery/village8.png";
import asylum8Image from "../assets/images/gallery/asylum8.png";
import village11Image from "../assets/images/gallery/village11.png";
import forest2Image from "../assets/images/gallery/forest2.png";
import asylum5Image from "../assets/images/gallery/asylum5.png";
import village12Image from "../assets/images/gallery/village12.png";

function Gallery() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (image) => {
    setFullscreenImage(image);
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImage(null);
  };

  const handleFullscreenChange = () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    setIsFullscreen(!!fullscreenElement);
  };

  const handleVideoClick = (videoElement) => {
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.webkitRequestFullscreen) { // Safari support
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { // Firefox support
      videoElement.mozRequestFullScreen();
    } else if (videoElement.msRequestFullscreen) { // IE/Edge support
      videoElement.msRequestFullscreen();
    }
  };

  useEffect(() => {
    // Add fullscreen event listeners
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      // Clean up event listeners
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const preloadMedia = (src) => {
      const media = new Image();
      media.src = src;
    };

    preloadMedia(antarcticImage);
    preloadMedia(temple2Image);
    preloadMedia(bunker1Image);
    preloadMedia(forest6Image);

    preloadMedia(lake1Video);
    preloadMedia(templeVideo);
    preloadMedia(village1Video);
    preloadMedia(forest2Video);

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isFullscreen]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="gallery">
      <div className="gallery-title">gallery</div>
        <div className="gallery-container">

        <Slider {...settings}>

          <div className="carousel-item" key="lake1video">
          <video className={`media-content ${isFullscreen ? "fullscreen-video" : ""}`} controls preload="metadata" onClick={(e) => handleVideoClick(e.target)}>
              <source src={lake1Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-item-title">Lake Hali</div>
            <div className="carousel-item-description">
              Explore the eerie Lake Hali, and follow in the steps of His Dynasty...
            </div>
          </div>

          <div className="carousel-item" key="templeVideo">
            <video className={`media-content ${isFullscreen ? "fullscreen-video" : ""}`} controls preload="metadata" onClick={(e) => handleVideoClick(e.target)}>
              <source src={templeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-item-title">Antarctic Temple</div>
            <div className="carousel-item-description">
              Discover what lies beneath the Antarctica, hidden for aeons...
            </div>
          </div>

          <div className="carousel-item" key="village1Video">
            <video className={`media-content ${isFullscreen ? "fullscreen-video" : ""}`} controls preload="metadata" onClick={(e) => handleVideoClick(e.target)}>
              <source src={village1Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-item-title">Wichport Village</div>
            <div className="carousel-item-description">
              Look for survivors in the fishing village of Wichport, if you dare...
            </div>
          </div>

          <div className="carousel-item" key="forest2Video">
            <video className={`media-content ${isFullscreen ? "fullscreen-video" : ""}`} controls preload="metadata" onClick={(e) => handleVideoClick(e.target)}>
              <source src={forest2Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-item-title">The Forest</div>
            <div className="carousel-item-description">
              Your sanity limits will be tested, for the King in Yellow beckons...
            </div>
          </div>

          <div className="carousel-item" key="asylum1Video">
            <video className={`media-content ${isFullscreen ? "fullscreen-video" : ""}`} controls preload="metadata" onClick={(e) => handleVideoClick(e.target)}>
              <source src={asylum1Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-item-title">Saint H.P. Lunatic Asylum</div>
            <div className="carousel-item-description">
            Navigate the halls of the, possibly, abandoned Asylum...
            </div>
          </div>

          <div className="carousel-item" key="forest1Video">
            <video className={`media-content ${isFullscreen ? "fullscreen-video" : ""}`} controls preload="metadata" onClick={(e) => handleVideoClick(e.target)}>
              <source src={forest1Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-item-title">The Forest</div>
            <div className="carousel-item-description">
              In the mnisty woods, the line between sanity and madness fades...
            </div>
          </div>

          <div className="carousel-item" key="hyadesVideo">
            <video className={`media-content ${isFullscreen ? "fullscreen-video" : ""}`} controls preload="metadata" onClick={(e) => handleVideoClick(e.target)}>
              <source src={hyadesVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-item-title">Hyades' Song</div>
            <div className="carousel-item-description">
              The haunting melody of the Hyades echoes, luring all to a forgottern fate...
            </div>
          </div>

          <div className="carousel-item" key="lake2Video">
            <video className={`media-content ${isFullscreen ? "fullscreen-video" : ""}`} controls preload="metadata" onClick={(e) => handleVideoClick(e.target)}>
              <source src={lake2Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-item-title">Lake Hali</div>
            <div className="carousel-item-description">
              Beneath the twin suns, the waters of Lake Hali conceal ancient secrets...
            </div>
          </div>

          <div className="carousel-item" key="expeditionVideo">
            <video className={`media-content ${isFullscreen ? "fullscreen-video" : ""}`} controls preload="metadata" onClick={(e) => handleVideoClick(e.target)}>
              <source src={expeditionVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-item-title">Antarctic Expedition</div>
            <div className="carousel-item-description">
              In the frozen wastelands, secrets buried beneath ice threaten to awaken...
            </div>
          </div>

          <div className="carousel-item" key="asylum2Video">
            <video className={`media-content ${isFullscreen ? "fullscreen-video" : ""}`} controls preload="metadata" onClick={(e) => handleVideoClick(e.target)}>
              <source src={asylum2Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-item-title">Saint H.P. Lunatic Asylum</div>
            <div className="carousel-item-description">
              Sanity is a fleeting illusion, lost to the King's will...
            </div>
          </div>

          <div className="carousel-item" key="village2Video">
            <video className={`media-content ${isFullscreen ? "fullscreen-video" : ""}`} controls preload="metadata" onClick={(e) => handleVideoClick(e.target)}>
              <source src={village2Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-item-title">Wichport Village</div>
            <div className="carousel-item-description">
              The village hides its secrets, but the shadows reveal more than they should...
            </div>
          </div>

          <div className="carousel-item" key="asylum3Video">
            <video className={`media-content ${isFullscreen ? "fullscreen-video" : ""}`} controls preload="metadata" onClick={(e) => handleVideoClick(e.target)}>
              <source src={asylum3Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-item-title">Saint H.P. Lunatic Asylum</div>
            <div className="carousel-item-description">
              Within these walls, madness reigns and reality unravels...
            </div>
          </div>

          <div className="carousel-item" key="asylum4Video">
            <video className={`media-content ${isFullscreen ? "fullscreen-video" : ""}`} controls preload="metadata" onClick={(e) => handleVideoClick(e.target)}>
              <source src={asylum4Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-item-title">Saint H.P. Lunatic Asylum</div>
            <div className="carousel-item-description">
              The truth lies within, but only madness can find it...
            </div>
          </div>

          <div className="carousel-item" key="bunkerVideo">
            <video className={`media-content ${isFullscreen ? "fullscreen-video" : ""}`} controls preload="metadata" onClick={(e) => handleVideoClick(e.target)}>
              <source src={bunkerVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-item-title">Bunker</div>
            <div className="carousel-item-description">
              Sanity is a fleeting illusion, lost to the King's will...
            </div>
          </div>

          <div className="carousel-item" key="nightfallVideo">
            <video className={`media-content ${isFullscreen ? "fullscreen-video" : ""}`} controls preload="metadata" onClick={(e) => handleVideoClick(e.target)}>
              <source src={nightfallVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-item-title">Nightfall</div>
            <div className="carousel-item-description">
              Strange moons rise, and the shadows of Carcosa stretch endlessly...
            </div>
          </div>

          <div className="carousel-item" key="village3Video">
            <video className={`media-content ${isFullscreen ? "fullscreen-video" : ""}`} controls preload="metadata" onClick={(e) => handleVideoClick(e.target)}>
              <source src={village3Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-item-title">Wichport Village</div>
            <div className="carousel-item-description">
              Beneath its silence, Wichport hides ancient and unsettling truths...
            </div>
          </div>

        </Slider>

        <div className="carousel-spacing"></div>

        <Slider {...settings}>

          <div className="carousel-item" key="antarcticImage" onClick={() => handleImageClick(antarcticImage)}>
            <div className="image-wrapper">
              <img src={antarcticImage} alt="Antarctic Expedition" className="media-content"/>
            </div>
            <div className="carousel-item-title">Antarctic Expedition</div>
            <div className="carousel-item-description">
              Frozen landscapes hide what should have remained buried beneath the ice...
            </div>
          </div>

          <div className="carousel-item" key="temple2Image" onClick={() => handleImageClick(temple2Image)}>
            <div className="image-wrapper">
              <img src={temple2Image} alt="Antarctic Temple" className="media-content"/>
            </div>
            <div className="carousel-item-title">Antarctic Temple</div>
            <div className="carousel-item-description">
              Deep in the ice, an ancient temple holds secrets long forgotten by time...
            </div>
          </div>

          <div className="carousel-item" key="bunker1Image" onClick={() => handleImageClick(bunker1Image)}>
            <div className="image-wrapper">
              <img src={bunker1Image} alt="Bunker" className="media-content"/>
            </div>
            <div className="carousel-item-title">Bunker</div>
            <div className="carousel-item-description">
              Buried beneath the earth, the bunker hides truths too dark to face...
            </div>
          </div>

          <div className="carousel-item" key="forest6Image" onClick={() => handleImageClick(forest6Image)}>
            <div className="image-wrapper">
              <img src={forest6Image} alt="The Forest" className="media-content"/>
            </div>
            <div className="carousel-item-title">The Forest</div>
            <div className="carousel-item-description">
              Among the trees, shadows move and sanity slips away...
            </div>
          </div>

          <div className="carousel-item" key="lake3Image" onClick={() => handleImageClick(lake3Image)}>
            <div className="image-wrapper">
              <img src={lake3Image} alt="Lake Hali" className="media-content" loading="lazy"/>
            </div>
            <div className="carousel-item-title">Lake Hali</div>
            <div className="carousel-item-description">
              Beneath the still waters, ancient forces stir, waiting to rise...
            </div>
          </div>

          <div className="carousel-item" key="asylum2Image" onClick={() => handleImageClick(asylum2Image)}>
            <div className="image-wrapper">
              <img src={asylum2Image} alt="Saint H.P. Lunatic Asylum" className="media-content" loading="lazy"/>
            </div>
            <div className="carousel-item-title">Saint H.P. Lunatic Asylum</div>
            <div className="carousel-item-description">
              Within these walls, madness and reality blur into one...
            </div>
          </div>

          <div className="carousel-item" key="village6Image" onClick={() => handleImageClick(village6Image)}>
            <div className="image-wrapper">
              <img src={village6Image} alt="Wichport Village" className="media-content" loading="lazy"/>
            </div>
            <div className="carousel-item-title">Wichport Village</div>
            <div className="carousel-item-description">
              A quiet village, where ancient whispers echo through the fog...
            </div>
          </div>

          <div className="carousel-item" key="expeditionImage" onClick={() => handleImageClick(expedition1Image)}>
            <div className="image-wrapper">
              <img src={expedition1Image} alt="Antarctic Expedition" className="media-content" loading="lazy"/>
            </div>
            <div className="carousel-item-title">Antarctic Expedition</div>
            <div className="carousel-item-description">
              Madness is the only way that the King can be perceived...
            </div>
          </div>

          <div className="carousel-item" key="bunker6Image" onClick={() => handleImageClick(bunker6Image)}>
            <div className="image-wrapper">
              <img src={bunker6Image} alt="Bunker" className="media-content" loading="lazy"/>
            </div>
            <div className="carousel-item-title">Bunker</div>
            <div className="carousel-item-description">
              In the cold, silent depths, the bunker conceals horrors beyond imagining...
            </div>
          </div>

          <div className="carousel-item" key="forest4Image" onClick={() => handleImageClick(forest4Image)}>
            <div className="image-wrapper">
              <img src={forest4Image} alt="The Forest" className="media-content" loading="lazy"/>
            </div>
            <div className="carousel-item-title">The Forest</div>
            <div className="carousel-item-description">
              Lost in the mist, the forest hides secrets that test your sanity...
            </div>
          </div>

          <div className="carousel-item" key="village8Image" onClick={() => handleImageClick(village8Image)}>
            <div className="image-wrapper">
              <img src={village8Image} alt="Wichport Village" className="media-content" loading="lazy"/>
            </div>
            <div className="carousel-item-title">Wichport Village</div>
            <div className="carousel-item-description">
              Wichport's eerie quiet masks the ancient dread lurking within...
            </div>
          </div>

          <div className="carousel-item" key="asylum8Image" onClick={() => handleImageClick(asylum8Image)}>
            <div className="image-wrapper">
              <img src={asylum8Image} alt="Saint H.P. Lunatic Asylum" className="media-content" loading="lazy"/>
            </div>
            <div className="carousel-item-title">Saint H.P. Lunatic Asylum</div>
            <div className="carousel-item-description">
              The asylum's halls echo with madness...
            </div>
          </div>

          <div className="carousel-item" key="village11Image" onClick={() => handleImageClick(village11Image)}>
            <div className="image-wrapper">
              <img src={village11Image} alt="Wichport Village" className="media-content" loading="lazy"/>
            </div>
            <div className="carousel-item-title">Wichport Village</div>
            <div className="carousel-item-description">
            Beneath its silence, Wichport guard secrets long forgotten...
            </div>
          </div>

          <div className="carousel-item" key="forest2Image" onClick={() => handleImageClick(forest2Image)}>
            <div className="image-wrapper">
              <img src={forest2Image} alt="The Forest" className="media-content" loading="lazy"/>
            </div>
            <div className="carousel-item-title">The Forest</div>
            <div className="carousel-item-description">
              The deeper you go, the more the forest warps reality around you...
            </div>
          </div>

          <div className="carousel-item" key="asylum5Image" onClick={() => handleImageClick(asylum5Image)}>
            <div className="image-wrapper">
              <img src={asylum5Image} alt="Saint H.P. Lunatic Asylum" className="media-content" loading="lazy"/>
            </div>
            <div className="carousel-item-title">Saint H.P. Lunatic Asylum</div>
            <div className="carousel-item-description">
              The asylum's walls hold the whispers of the minds lost...
            </div>
          </div>

          <div className="carousel-item" key="village12Image" onClick={() => handleImageClick(village12Image)}>
            <div className="image-wrapper">
              <img src={village12Image} alt="Wichport Village" className="media-content" loading="lazy"/>
            </div>
            <div className="carousel-item-title">Wichport Village</div>
            <div className="carousel-item-description">
              Wichport's dark past hides secrets that refuse to stay buried...
            </div>
          </div>

        </Slider>

        {isFullscreen && (
          <div className="fullscreen-modal" onClick={handleCloseFullscreen}>
            <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
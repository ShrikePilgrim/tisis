import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Gallery.css";
import placeholderImage from '../assets/images/loadingPlaceholder.png';

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
    const fullscreenElement = document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement;
    setIsFullscreen(!!fullscreenElement);
  };

  const handleImageError = (event) => {
    event.target.src = placeholderImage;
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
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
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
    dots: true,
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
        },
      },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  // Videos data array
  const videoItems = [
    {
      src: lake1Video,
      title: 'Lake Hali',
      description: 'Explore the eerie Lake Hali, and follow in the steps of His Dynasty...',
    },
    {
      src: templeVideo,
      title: 'Antarctic Temple',
      description: 'Discover what lies beneath the Antarctica, hidden for aeons...',
    },
    {
      src: village1Video,
      title: 'Wichport Village',
      description: 'Look for survivors in the fishing village of Wichport, if you dare...',
    },
    {
      src: forest2Video,
      title: 'The Forest',
      description: 'Your sanity limits will be tested, for the King in Yellow beckons...',
    },
    {
      src: asylum1Video,
      title: 'Saint H.P. Lunatic Asylum',
      description: 'Navigate the halls of the, possibly, abandoned Asylum...',
    },
    {
      src: forest1Video,
      title: 'The Forest',
      description: 'In the misty woods, the line between sanity and madness fades...',
    },
    {
      src: hyadesVideo,
      title: 'Hyades\' Song',
      description: 'The haunting melody of the Hyades echoes, luring all to a forgotten fate...',
    },
    {
      src: lake2Video,
      title: 'Lake Hali',
      description: 'Beneath the twin suns, the waters of Lake Hali conceal ancient secrets...',
    },
    {
      src: expeditionVideo,
      title: 'Antarctic Expedition',
      description: 'In the frozen wastelands, secrets buried beneath ice threaten to awaken...',
    },
    {
      src: asylum2Video,
      title: 'Saint H.P. Lunatic Asylum',
      description: 'Sanity is a fleeting illusion, lost to the King\'s will...',
    },
    {
      src: village2Video,
      title: 'Wichport Village',
      description: 'The village hides its secrets, but the shadows reveal more than they should...',
    },
    {
      src: asylum3Video,
      title: 'Saint H.P. Lunatic Asylum',
      description: 'Within these walls, madness reigns and reality unravels...',
    },
    {
      src: asylum4Video,
      title: 'Saint H.P. Lunatic Asylum',
      description: 'The truth lies within, but only madness can find it...',
    },
    {
      src: bunkerVideo,
      title: 'Bunker',
      description: 'Sanity is a fleeting illusion, lost to the King\'s will...',
    },
    {
      src: nightfallVideo,
      title: 'Nightfall',
      description: 'Strange moons rise, and the shadows of Carcosa stretch endlessly...',
    },
    {
      src: village3Video,
      title: 'Wichport Village',
      description: 'Beneath its silence, Wichport hides ancient and unsettling truths...',
    },
  ];

  // Images data array
  const imageItems = [
    {
      src: antarcticImage,
      title: 'Antarctic Expedition',
      description: 'Frozen landscapes hide what should have remained buried beneath the ice...',
    },
    {
      src: temple2Image,
      title: 'Antarctic Temple',
      description: 'Deep in the ice, an ancient temple holds secrets long forgotten by time...',
    },
    {
      src: bunker1Image,
      title: 'Bunker',
      description: 'Buried beneath the earth, the bunker hides truths too dark to face...',
    },
    {
      src: forest6Image,
      title: 'The Forest',
      description: 'Among the trees, shadows move and sanity slips away...',
    },
    {
      src: lake3Image,
      title: 'Lake Hali',
      description: 'Beneath the still waters, ancient forces stir, waiting to rise...',
    },
    {
      src: asylum2Image,
      title: 'Saint H.P. Lunatic Asylum',
      description: 'Within these walls, madness and reality blur into one...',
    },
    {
      src: village6Image,
      title: 'Wichport Village',
      description: 'A quiet village, where ancient whispers echo through the fog...',
    },
    {
      src: expedition1Image,
      title: 'Antarctic Expedition',
      description: 'Madness is the only way that the King can be perceived...',
    },
    {
      src: bunker6Image,
      title: 'Bunker',
      description: 'In the cold, silent depths, the bunker conceals horrors beyond imagining...',
    },
    {
      src: forest4Image,
      title: 'The Forest',
      description: 'Lost in the mist, the forest hides secrets that test your sanity...',
    },
    {
      src: village8Image,
      title: 'Wichport Village',
      description: 'Wichport\'s eerie quiet masks the ancient dread lurking within...',
    },
    {
      src: asylum8Image,
      title: 'Saint H.P. Lunatic Asylum',
      description: 'The asylum\'s halls echo with madness...',
    },
    {
      src: village11Image,
      title: 'Wichport Village',
      description: 'Beneath its silence, Wichport guards secrets long forgotten...',
    },
    {
      src: forest2Image,
      title: 'The Forest',
      description: 'The deeper you go, the more the forest warps reality around you...',
    },
    {
      src: asylum5Image,
      title: 'Saint H.P. Lunatic Asylum',
      description: 'The asylum\'s walls hold the whispers of the minds lost...',
    },
    {
      src: village12Image,
      title: 'Wichport Village',
      description: 'Wichport\'s dark past hides secrets that refuse to stay buried...',
    },
  ];

  const renderMediaItem = (item, index, isVideo = false) => {
    return (
      <div className="carousel-item" key={`${isVideo ? 'video' : 'image'}-${index}`}>
        {isVideo ? (
          <LazyLoad height={200} offset={100} once>
            <video
              className={`media-content ${isFullscreen ? 'fullscreen-video' : ''}`}
              controls
              preload="metadata"
              onClick={(e) => handleVideoClick(e.target)}
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </LazyLoad>
        ) : (
          <LazyLoad height={200} offset={100} once>
            <div className="image-wrapper" onClick={() => handleImageClick(item.src)}>
              <img
                src={item.src}
                alt={item.title}
                className="media-content"
                onError={handleImageError}
              />
            </div>
          </LazyLoad>
        )}
        <div className="carousel-item-title">{item.title}</div>
        <div className="carousel-item-description">{item.description}</div>
      </div>
    );
  };

  return (
    <section className="gallery">
      <div className="gallery-title">gallery</div>

      {/* Video Carousel */}
      <div className="gallery-container">
        <Slider {...settings}>
          {videoItems.map((item, index) => renderMediaItem(item, index, true))}
        </Slider>
      </div>

      {/* Image Carousel */}
      <div className="gallery-container">
        <Slider {...settings}>
          {imageItems.map((item, index) => renderMediaItem(item, index, false))}
        </Slider>
      </div>

      {/* Fullscreen modal for images */}
      {isFullscreen && (
        <div className="fullscreen-modal" onClick={handleCloseFullscreen}>
          <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
        </div>
      )}
    </section>
  );
}

export default Gallery;
import React, { useState, useEffect, useRef } from "react";
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

import asylum1Thumbnail from "../assets/images/thumbnails/asylum1Thumbnail.png";
import asylum2Thumbnail from "../assets/images/thumbnails/asylum2Thumbnail.png";
import asylum3Thumbnail from "../assets/images/thumbnails/asylum3Thumbnail.png";
import asylum4Thumbnail from "../assets/images/thumbnails/asylum4Thumbnail.png";
import bunkerThumbnail from "../assets/images/thumbnails/bunkerThumbnail.png";
import expeditionThumbnail from "../assets/images/thumbnails/expeditionThumbnail.png";
import forest1Thumbnail from "../assets/images/thumbnails/forest1Thumbnail.png";
import forest2Thumbnail from "../assets/images/thumbnails/forest2Thumbnail.png";
import hyadesThumbnail from "../assets/images/thumbnails/hyadesThumbnail.png";
import lake1Thumbnail from "../assets/images/thumbnails/lake1Thumbnail.png";
import lake2Thumbnail from "../assets/images/thumbnails/lake2Thumbnail.png";
import nightfallThumbnail from "../assets/images/thumbnails/nightfallThumbnail.png";
import templeThumbnail from "../assets/images/thumbnails/templeThumbnail.png";
import village1Thumbnail from "../assets/images/thumbnails/village1Thumbnail.png";
import village2Thumbnail from "../assets/images/thumbnails/village2Thumbnail.png";
import village3Thumbnail from "../assets/images/thumbnails/village3Thumbnail.png";

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

  const [loadedVideos, setLoadedVideos] = useState([]);
  const videoRefs = useRef({});

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

  const handleVideoClick = (index) => {
    setLoadedVideos(prev => [...prev, index]);
    setTimeout(() => {
      const videoElement = videoRefs.current[index];

      if (videoElement) {
        videoElement.play();

        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if (videoElement.webkitRequestFullscreen) { // Safari support
          videoElement.webkitRequestFullscreen();
        } else if (videoElement.mozRequestFullScreen) { // Firefox support
          videoElement.mozRequestFullScreen();
        } else if (videoElement.msRequestFullscreen) { // IE/Edge support
          videoElement.msRequestFullscreen();
        }
      }
    }, 100);
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
      thumbnail: lake1Thumbnail,
      title: 'Lake Hali',
      description: 'Explore the eerie Lake Hali, and follow in the steps of His Dynasty...',
    },
    {
      src: templeVideo,
      thumbnail: templeThumbnail,
      title: 'Antarctic Temple',
      description: 'Discover what lies beneath the Antarctica, hidden for aeons...',
    },
    {
      src: village1Video,
      thumbnail: village1Thumbnail,
      title: 'Wichport Village',
      description: 'Look for survivors in the fishing village of Wichport, if you dare...',
    },
    {
      src: forest2Video,
      thumbnail: forest2Thumbnail,
      title: 'The Forest',
      description: 'Your sanity limits will be tested, for the King in Yellow beckons...',
    },
    {
      src: asylum1Video,
      thumbnail: asylum1Thumbnail,
      title: 'Saint H.P. Lunatic Asylum',
      description: 'Navigate the halls of the, possibly, abandoned Asylum...',
    },
    {
      src: forest1Video,
      thumbnail: forest1Thumbnail,
      title: 'The Forest',
      description: 'In the misty woods, the line between sanity and madness fades...',
    },
    {
      src: hyadesVideo,
      thumbnail: hyadesThumbnail,
      title: 'Hyades\' Song',
      description: 'The haunting melody of the Hyades echoes, luring all to a forgotten fate...',
    },
    {
      src: lake2Video,
      thumbnail: lake2Thumbnail,
      title: 'Lake Hali',
      description: 'Beneath the twin suns, the waters of Lake Hali conceal ancient secrets...',
    },
    {
      src: expeditionVideo,
      thumbnail: expeditionThumbnail,
      title: 'Antarctic Expedition',
      description: 'In the frozen wastelands, secrets buried beneath ice threaten to awaken...',
    },
    {
      src: asylum2Video,
      thumbnail: asylum2Thumbnail,
      title: 'Saint H.P. Lunatic Asylum',
      description: 'Sanity is a fleeting illusion, lost to the King\'s will...',
    },
    {
      src: village2Video,
      thumbnail: village2Thumbnail,
      title: 'Wichport Village',
      description: 'The village hides its secrets, but the shadows reveal more than they should...',
    },
    {
      src: asylum3Video,
      thumbnail: asylum3Thumbnail,
      title: 'Saint H.P. Lunatic Asylum',
      description: 'Within these walls, madness reigns and reality unravels...',
    },
    {
      src: asylum4Video,
      thumbnail: asylum4Thumbnail,
      title: 'Saint H.P. Lunatic Asylum',
      description: 'The truth lies within, but only madness can find it...',
    },
    {
      src: bunkerVideo,
      thumbnail: bunkerThumbnail,
      title: 'Bunker',
      description: 'Sanity is a fleeting illusion, lost to the King\'s will...',
    },
    {
      src: nightfallVideo,
      thumbnail: nightfallThumbnail,
      title: 'Nightfall',
      description: 'Strange moons rise, and the shadows of Carcosa stretch endlessly...',
    },
    {
      src: village3Video,
      thumbnail: village3Thumbnail,
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

  const renderVideoItem = (item, index) => {
    return (
      <div className="carousel-item" key={`video-${index}`}>
        <LazyLoad height={200} offset={100} once>
          {loadedVideos.includes(index) ? (
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className={`media-content ${isFullscreen ? 'fullscreen-video' : ''}`}
              controls
              preload="metadata"
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="thumbnail-wrapper" onClick={() => handleVideoClick(index)}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="media-content"
              />
              <div className="button-overlay play-button"></div>
            </div>
          )}
        </LazyLoad>
        <div className="carousel-item-title">{item.title}</div>
        <div className="carousel-item-description">{item.description}</div>
      </div>
    );
  };

  const renderImageItem = (item, index) => {
    return (
      <div className="carousel-item" key={`image-${index}`}>
        <LazyLoad height={200} offset={100} once>
          <div className="thumbnail-wrapper" onClick={() => handleImageClick(item.src)}>
            <img
              src={item.src}
              alt={item.title}
              className="media-content"
              onError={handleImageError}
            />
            <div className="button-overlay open-button"></div>
          </div>
        </LazyLoad>
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
          {videoItems.map((item, index) => renderVideoItem(item, index))}
        </Slider>
      </div>

      {/* Image Carousel */}
      <div className="gallery-container">
        <Slider {...settings}>
          {imageItems.map((item, index) => renderImageItem(item, index))}
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
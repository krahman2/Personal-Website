import { useLocation } from 'react-router-dom';
import './Background.css';

// Import media files
import fastLinesVideo from './Images/vecteezy_fast-lines-background_2018433.mp4';
import kul52Image from './Images/v882-kul-52.jpg';
import kul55Image from './Images/v882-kul-55.jpg';
import kul57Image from './Images/v882-kul-57.jpg';

const Background = () => {
  const location = useLocation();
  
  // Define the wallpaper mapping based on your requirements
  const getBackgroundMedia = () => {
    const path = location.pathname;
    
    // Page 1: Home - fast lines video
    if (path === '/') {
      return { type: 'video', src: fastLinesVideo };
    }
    
    // Page 2: About - kul52 image
    if (path === '/about') {
      return { type: 'image', src: kul52Image };
    }
    
    // Page 3: Education - kul57 image
    if (path === '/education') {
      return { type: 'image', src: kul57Image };
    }
    
    // Page 4: Experience - kul55 image
    if (path === '/experience') {
      return { type: 'image', src: kul55Image };
    }
    
    // Page 5: Projects - kul57 image
    if (path === '/projects') {
      return { type: 'image', src: kul57Image };
    }
    
    // Page 6: Leadership - kul52 image (repeat)
    if (path === '/leadership') {
      return { type: 'image', src: kul52Image };
    }
    
    // Page 7: Campus Experience - kul55 image (repeat)
    if (path === '/campus-experience') {
      return { type: 'image', src: kul55Image };
    }
    
    // Page 8: Skills - kul57 image (repeat)
    if (path === '/skills') {
      return { type: 'image', src: kul57Image };
    }
    
    // Page 9: Portfolio - kul52 image (repeat)
    if (path === '/portfolio') {
      return { type: 'image', src: kul52Image };
    }
    
    // Page 10: Contact - kul55 image (repeat)
    if (path === '/contact') {
      return { type: 'image', src: kul55Image };
    }
    
    // Default fallback
    return { type: 'video', src: fastLinesVideo };
  };

  const backgroundMedia = getBackgroundMedia();

  return (
    <div className="background-container">
      {backgroundMedia.type === 'video' ? (
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={backgroundMedia.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          className="background-image"
          src={backgroundMedia.src}
          alt="Background"
          loading="eager"
        />
      )}
      <div className="background-overlay"></div>
    </div>
  );
};

export default Background; 
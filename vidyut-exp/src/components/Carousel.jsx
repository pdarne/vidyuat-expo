import { useState, useEffect } from 'react';
import content1 from "../assets/content/content-1.jpeg";
import content2 from "../assets/content/content-2.jpeg";
import content3 from "../assets/content/content-3.jpeg";
import content4 from "../assets/content/content-4.jpeg";
import content5 from "../assets/content/content-5.jpeg";
import content6 from "../assets/content/content-6.jpeg";
import content7 from "../assets/content/content-7.jpeg";
import content8 from "../assets/content/content-8.jpeg";

const Carousel = () => {
  const images = [content1, content2, content3, content4, content5, content6, content7, content8];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
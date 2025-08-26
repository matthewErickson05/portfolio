import React, { useState } from 'react';
import ScrollTypewriter from './ScrollTypewriter.jsx';

const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Add your image URLs here - replace with actual paths to your images
  const images = [
    '/portfolio_pic_1.jpg',
    '/portfolio_pic_2.JPG', 
    '/portfolio_pic_3.jpg',
    '/portfolio_pic_4.jpg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="carousel-container">
            <div className="carousel">
              <button className="carousel-btn prev-btn" onClick={prevImage}>
                &#8249;
              </button>
              
              <div className="carousel-track-container">
                <div 
                  className="carousel-track" 
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                      <img 
                        src={image} 
                        alt={`About me ${index + 1}`}
                        className="carousel-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="carousel-btn next-btn" onClick={nextImage}>
                &#8250;
              </button>
            </div>
            
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="bio-container">
            <ScrollTypewriter 
              text="About Me"
              fontSize="3rem"
              color="lightgreen"
              delay={100}
              startDelay={200}
              className="about-title-typewriter"
            />
            <div className="bio-text">
              <p>
                Hey! I'm Matt, a third-year computer science student at Georgia Tech. I love building, being creative with my solutions, and exploring the modern frontier of computing.
              </p>
              <p>
                When I'm not coding, I love spending time with friends and family, playing sports, traveling, and music. I try to learn new things as much as possible and put myself in uncomfortable situations!
              </p>
              <p>
                I'm always excited to connect with fellow developers and collaborate 
                on interesting projects. Feel free to reach out if you'd like to chat!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
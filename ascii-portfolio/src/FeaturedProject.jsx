import React from 'react';
import ScrollTypewriter from './ScrollTypewriter.jsx';

const FeaturedProject = () => {
  return (
    <section className="featured-project-section">
      <div className="featured-project-container">
        <ScrollTypewriter 
          text="Featured Project"
          fontSize="3rem"
          color="lightgreen"
          delay={120}
          startDelay={300}
          className="featured-project-title-typewriter"
        />
        <div className="project-description">
          <p>
            As an avid window seat sitter, I always hate when the other side of the plane gets the better views than me. I decided to combat 
            this by creating this minimum viable product for a window seat chooser. Using react, javascript, a flightaware api and healthy amount of linear algeba 
            I built this app to detect visible landmarks at points throughout your flight and ignore non-visible landmarks, i.e. you can't see the Statue of Liberty from 30k feet. It then calculates 
            which side to sit on for the best view. I'm working on a new feature that would detect if a sunrise or sunset was visible. I built this project quickly
            because I really believe in the design philosophy of "make it exist first, then make it great". Now that it exists I can iterate and add more creative UI, and improve error handling!
          </p>
        </div>
        <div className="video-container">
          <video 
            className="project-video" 
            controls 
            poster="/Window_seat_cover.png"
          >
            <source src="/Window-Seat-MVP video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
import React from 'react';
import ScrollTypewriter from './ScrollTypewriter.jsx';

const ThankYouSection = () => {
  const handleResumeDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/Updated_SWE_Resume_7-30.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Matt_Erickson_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="thank-you-section">
      <div className="thank-you-container">
        <ScrollTypewriter 
          text="Thanks!"
          fontSize="3rem"
          color="lightgreen"
          delay={120}
          startDelay={400}
          className="thank-you-title-typewriter"
        />
        
        <div className="contact-info">
          <div className="email-container">
            <a href="mailto:your.email@example.com" className="email-link">
              mterickson404@gmail.com
            </a>
          </div>
          
          <button 
            onClick={handleResumeDownload}
            className="resume-download-btn"
          >
            <span className="btn-text">Download Resume</span>
            <span className="btn-icon">⬇</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
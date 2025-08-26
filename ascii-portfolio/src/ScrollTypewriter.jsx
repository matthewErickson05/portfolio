import { useState, useEffect, useRef } from 'react';

export default function ScrollTypewriter({ 
  text, 
  fontSize = '2rem', 
  color = 'lightgreen',
  delay = 100,
  startDelay = 0,
  showCursor = true,
  className = ''
}) {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Start animation a bit before fully visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timer = setTimeout(() => {
        let i = 0;
        const typeTimer = setInterval(() => {
          setDisplayText(text.slice(0, i));
          i++;
          if (i > text.length) {
            clearInterval(typeTimer);
            setHasAnimated(true);
          }
        }, delay);
      }, startDelay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, hasAnimated, text, delay, startDelay]);

  return (
    <div ref={elementRef}>
      {/* CSS for blinking cursor animation */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
      
      <div className={`scroll-typewriter ${className}`}>
        {/* Invisible placeholder to maintain container size */}
        <div style={{
          visibility: 'hidden',
          whiteSpace: 'pre-line',
          fontFamily: 'Poppins, sans-serif',
          fontSize: fontSize,
        }}>
          {text}
        </div>
        
        {/* Actual animated text positioned absolutely */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          color: color,
          whiteSpace: 'pre-line',
          fontSize: fontSize,
          fontFamily: 'Poppins, sans-serif',
          margin: 0
        }}>
          {displayText}
          {showCursor && (
            <span style={{
              animation: hasAnimated ? 'blink 1s infinite' : 'none',
              color: color,
              opacity: hasAnimated ? 1 : 0
            }}>|</span>
          )}
        </div>
      </div>
    </div>
  );
}
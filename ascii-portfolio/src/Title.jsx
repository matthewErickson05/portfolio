import { useState, useEffect } from 'react';

export default function TypewriterTitle() {
  const [text, setText] = useState('');
  const fullText = 'MATT\nERICKSON';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
        // Restart after 3 seconds
        setTimeout(() => {
          setText('');
          i = 0;
          const restartTimer = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(restartTimer);
          }, 150);
        }, 3000);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div>
      {/* CSS for blinking cursor animation */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
      
      <div style={{
        fontFamily: 'Poppins, Sans serif, Bold',
        fontSize: '6rem',
        background: 'black',
        padding: '20px',
        margin: 0,
        position: 'relative'
      }}>
        {/* Invisible placeholder to maintain container size */}
        <div style={{
          visibility: 'hidden',
          whiteSpace: 'pre-line'
        }}>
          MATT{'\n'}ERICKSON
        </div>
        
        {/* Actual animated text positioned absolutely */}
        <h1 style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          color: 'lightgreen',
          whiteSpace: 'pre-line',
          fontSize: '6rem',
          margin: 0
        }}>
          {text}<span style={{
            animation: 'blink 1s infinite',
            color: 'lightgreen'
          }}>|</span>
        </h1>
      </div>
    </div>
  );
}
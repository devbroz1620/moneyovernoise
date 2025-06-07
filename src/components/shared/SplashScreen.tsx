
import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show text after a brief delay
    const timer1 = setTimeout(() => {
      setShowText(true);
    }, 500);

    // Start fade out after text has been shown
    const timer2 = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Complete animation
    const timer3 = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-all duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1 
        className={`text-4xl md:text-6xl font-bold tracking-tight text-foreground transition-all duration-1000 ${
          showText ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}
        style={{
          animation: showText ? 'typewriter 1.5s steps(15, end)' : 'none'
        }}
      >
        We cut the noise.
      </h1>
    </div>
  );
};

export default SplashScreen;

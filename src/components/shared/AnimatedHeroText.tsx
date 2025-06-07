
import React, { useState, useEffect } from 'react';

const AnimatedHeroText = () => {
  const [showInitial, setShowInitial] = useState(true);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    // Show initial text with typewriter effect
    const timer1 = setTimeout(() => {
      // Start fade out of initial text
      setShowInitial(false);
    }, 2500); // Show for 2.5 seconds

    const timer2 = setTimeout(() => {
      // Show final text
      setShowFinal(true);
    }, 3000); // Start showing final text after 3 seconds

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-[120px] flex items-center justify-center">
      {showInitial && (
        <h1 
          className={`text-4xl md:text-6xl font-bold tracking-tight transition-all duration-500 overflow-hidden whitespace-nowrap ${
            showInitial ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
          }`}
          style={{
            width: showInitial ? '100%' : '0',
            animation: showInitial ? 'typewriter 1.5s steps(15, end)' : 'none'
          }}
        >
          We cut the noise.
        </h1>
      )}
      
      {showFinal && (
        <div 
          className={`transition-all duration-700 text-center ${
            showFinal ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Simplifying Money for You
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            No jargon, no overwhelm.
          </p>
        </div>
      )}
    </div>
  );
};

export default AnimatedHeroText;

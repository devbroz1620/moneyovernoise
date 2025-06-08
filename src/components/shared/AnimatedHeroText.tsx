
import React from 'react';

const AnimatedHeroText = () => {
  return (
    <div className="min-h-[120px] flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Simplifying <span className="text-blue-600 dark:text-orange-400">Money</span> for You
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          No jargon, no overwhelm.
        </p>
      </div>
    </div>
  );
};

export default AnimatedHeroText;

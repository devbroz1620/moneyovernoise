import React from 'react';

const AnimatedHeroText = () => {
  return (
    <div className="min-h-[120px] flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Financial Literacy for everyone
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          Learn how to invest, save, and grow — the simple way.
        </p>
      </div>
    </div>
  );
};

export default AnimatedHeroText;

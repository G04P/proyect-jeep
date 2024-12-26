import React from 'react';

export const HeroSection = ({ imageUrl, name }) => {
  return (
    <div className="relative w-full h-[200px] md:h-[400px]">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
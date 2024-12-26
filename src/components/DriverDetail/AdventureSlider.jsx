import React, { useState, useCallback } from 'react';

export const AdventureSlider = ({ slideGallery, PrevArrow, NextArrow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideGallery.length);
  }, [slideGallery.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideGallery.length) % slideGallery.length);
  }, [slideGallery.length]);

  if (!slideGallery?.length) {
    return (
      <div className="text-center py-8">
        No hay imágenes disponibles
      </div>
    );
  }

  return (
    <div className="px-4 pb-8">
      <h2 className="text-xl font-bold text-center mb-6">
        VIVI TU AVENTURA CON JEEP
      </h2>
      
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <img
            src={slideGallery[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-colors"
        >
          <PrevArrow className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-colors"
        >
          <NextArrow className="w-6 h-6" />
        </button>

        <div className="flex justify-center gap-2 mt-4">
          {slideGallery.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors
                ${currentSlide === index ? 'bg-black' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
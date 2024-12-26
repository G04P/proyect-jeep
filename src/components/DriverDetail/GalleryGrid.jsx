import React from 'react';

export const GalleryGrid = ({ gallery }) => {
  if (!gallery?.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-8">
      {gallery.map((imgUrl, index) => (
        <div key={index} className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
          <img
            src={imgUrl}
            alt={`Galería ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
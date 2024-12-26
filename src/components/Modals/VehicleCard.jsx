import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const VehicleCard = ({ product, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/product/${product.id}`}
      onClick={onClose}
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video rounded-lg overflow-hidden ">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        <img
          src={product.img}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500
            ${isLoading ? 'opacity-0' : 'opacity-100'}
            ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      </div>

      <h3 className={`mt-3 text-center text-white font-bold transition-colors duration-300
        ${isHovered ? 'text-yellow-400' : 'text-white'}`}>
        {product.name}
      </h3>
    </Link>
  );
};
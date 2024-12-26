import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { VehicleCard } from './VehicleCard';

export const VehicleModal = ({ isOpen, onClose, products }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300
        ${isOpen ? 'opacity-100 z-50' : 'opacity-0 -z-10'}`}
      onClick={onClose}
    >
      <div 
        className={`bg-[#1c1c1c] w-[90%] max-w-[1200px] h-[400px] rounded-lg shadow-2xl p-8 overflow-y-auto transform transition-all duration-300
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        >
          <IoMdClose size={24} />
        </button>

        <h2 className="text-white text-2xl font-bold text-center mb-8">
          Jeep® Argentina
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <VehicleCard 
                key={product.id}
                product={product}
                onClose={onClose}
              />
            ))
          ) : (
            <p className="text-white text-center col-span-full">
              No hay productos disponibles
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
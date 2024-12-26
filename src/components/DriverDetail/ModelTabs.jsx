import React, { useState, useEffect } from 'react';
import { ModelFeatures } from './ModelFeatures';
import { ModelColors } from './ColorSelector';

export const ModelTabs = ({ models, activeTab, onTabChange }) => {
  const [activeModal, setActiveModal] = useState('features');
  const [selectedColor, setSelectedColor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const activeModel = Object.values(models)[activeTab];
  const currentImage = selectedColor?.img || activeModel?.colors[0]?.img;

  useEffect(() => {
    setSelectedColor(null);
  }, [activeTab]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };

  const handleColorSelect = (color) => {
    setIsLoading(true);
    setSelectedColor(color);
  };

  const handleTabChange = (index) => {
    setIsLoading(true);
    onTabChange(index);
  };

  return (
    <div className="w-full px-2 sm:px-4 py-6">
      <div className="relative">
        <div className="flex overflow-x-auto scrollbar-hide -mx-2  px-2 border-b border-gray-200 mb-8">
          <div className="flex min-w-full">
            {Object.entries(models).map(([key, model], index) => (
              <button
                key={key}
                onClick={() => handleTabChange(index)}
                className={`flex-shrink-0 pb-4 px-4 sm:px-6 text-sm font-medium transition-colors relative whitespace-nowrap
                  ${activeTab === index 
                    ? 'text-black border-b-2 border-black' 
                    : 'text-gray-500 hover:text-black'}`}
              >
                <span className="block text-center">
                  {model.subName}
                  <span className="block text-xs mt-1">${model.price.toLocaleString()}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <div className="flex space-x-2 sm:space-x-4 mb-6">
            <button
              onClick={() => setActiveModal('features')}
              className={`px-3 sm:px-4 py-2 rounded-md transition-colors text-sm sm:text-base
                ${activeModal === 'features' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Descripción
            </button>
            <button
              onClick={() => setActiveModal('colors')}
              className={`px-3 sm:px-4 py-2 rounded-md transition-colors text-sm sm:text-base
                ${activeModal === 'colors' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Colores
            </button>
          </div>

          <div className="mt-4">
            {activeModal === 'features' ? (
              <ModelFeatures features={activeModel.feature} />
            ) : (
              <ModelColors 
                colors={activeModel.colors}
                selectedColor={selectedColor}
                onColorSelect={handleColorSelect}
              />
            )}
          </div>
        </div>

        <div className="relative h-[300px] sm:h-[400px] bg-gray-50 rounded-lg overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="w-8 h-8 sm:w-12 sm:h-12 border-4 border-black border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <img
            key={currentImage}
            src={currentImage}
            alt={activeModel.subName}
            className={`w-full h-full object-contain transition-all duration-300
              ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
      </div>
    </div>
  );
};
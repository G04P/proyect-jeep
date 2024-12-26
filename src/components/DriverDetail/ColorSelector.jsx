import React from 'react';

export const ModelColors = ({ colors, selectedColor, onColorSelect }) => {
  if (!colors?.length) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Colores disponibles</h3>
      <div className="grid grid-cols-2 gap-4">
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => onColorSelect(color)}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-all
              ${selectedColor?.name === color.name 
                ? 'bg-gray-100 ring-2 ring-black' 
                : 'bg-gray-50 hover:bg-gray-100'}`}
          >
            <span 
              className="w-8 h-8 rounded-full border-2 border-gray-200"
              style={{ backgroundColor: color.hex }}
            />
            <span className="text-sm font-medium">{color.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
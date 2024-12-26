import React from 'react';

export const ModelFeatures = ({ features }) => {
  if (!features?.length) return null;

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold mb-4">Características</h3>
      <div className="grid grid-cols-1 gap-3">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="p-3 bg-gray-50 rounded-lg text-sm"
          >
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};
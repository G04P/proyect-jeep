import React from 'react';

export const VehicleFeatures = ({ features }) => {
  if (!features?.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          {feature.icon && <feature.icon className="w-5 h-5 text-gray-700" />}
          <div>
            <h3 className="font-medium text-gray-900">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
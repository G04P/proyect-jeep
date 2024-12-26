import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HeroSection } from './HeroSection';
import { ModelTabs } from './ModelTabs';
import { GalleryGrid } from './GalleryGrid';
import { AdventureSlider } from './AdventureSlider';
import { getProducts } from '../../productMock';

export const DriverListDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);

  const products = getProducts();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="text-center mt-5 text-red-600 text-2xl">
        Producto no encontrado.
      </div>
    );
  }

  return (
    <div className="p-3 md:p-6 bg-[#1c1c1c] min-h-screen">
      <div className="max-w-[1520px] mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <HeroSection 
          imageUrl="https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/2022/renegade-2022/desc-general/JEEP-RENEGADE-MY25-HERO-HOME.jpg.img.2880.jpg" 
          name={product.name} 
        />
        
        <div className="border-b border-gray-200">
          <ModelTabs 
            models={product.models}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        <GalleryGrid gallery={Object.values(product.models)[activeTab]?.gallery} />

        <div className="border-t border-b border-gray-200 my-8" />
        
        <AdventureSlider 
          slideGallery={product.slideGallery}
          PrevArrow={ChevronLeft}
          NextArrow={ChevronRight}
        />
      </div>
    </div>
  );
}
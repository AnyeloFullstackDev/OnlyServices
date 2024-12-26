'use client';

import React, { useState, useEffect } from "react";
import Image from 'next/image';

interface CarouselProps {
  images: string[];       // Arreglo de URLs de imágenes
  speed: number;         
}

const Carousel: React.FC<CarouselProps> = ({ images, speed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const totalSlides = images.length;
  const infiniteImages = [...images, ...images]; // Imágenes duplicadas para el bucle infinito

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (currentIndex >= totalSlides) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0); // Reseteamos el índice cuando llegamos al final
      }, 500);
    }
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, speed);
      return () => clearInterval(interval);
    }
  }, [speed, isHovered]);

  const heightCarrusel = 600;
  const positionButton = heightCarrusel / 2.2;

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contenedor de las imágenes */}
      <div
        className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          height: `${heightCarrusel}px`,
        }}
      >
        {infiniteImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <Image
              width={800}
              height={800}
              src={image}
              alt={`carousel-image-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        className="absolute left-4 bg-black text-white w-[40px] h-[40px] rounded-full opacity-20 hover:opacity-70"
        style={{ top: `${positionButton}px` }}
        onClick={prevSlide}
      >
        ❮
      </button>

      <button
        className="absolute right-4 bg-black text-white w-[40px] h-[40px] rounded-full opacity-20 hover:opacity-70"
        style={{ top: `${positionButton}px` }}
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;

'use client';

import React, { useState, useEffect } from "react";
import Image from 'next/image';

interface CarouselProps {
  images: string[];       // Arreglo de URLs de imágenes
  speed: number;         
}

const Carousel: React.FC<CarouselProps> = ({ images, speed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // Cambié a false para mejorar control de transiciones
  const [isHovered, setIsHovered] = useState(false); // Nuevo estado para el hover

  const totalSlides = images.length;

  // Duplicar imágenes para efecto infinito
  const infiniteImages = [...images, ...images];

  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides); // Reseteo cuando alcanza el final
  };

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides); // Reseteo cuando llega al principio
  };

  // Reiniciar índice cuando alcanza el final del bucle
  useEffect(() => {
    if (currentIndex >= totalSlides) {
      setTimeout(() => {
        setIsTransitioning(false); // Desactivar transición para evitar animación abrupta
        setCurrentIndex(0);
      }, 500); // Tiempo igual a la duración de la transición CSS
    }
  }, [currentIndex, totalSlides]);

  // Auto-avance automático
  useEffect(() => {
    if (!isHovered) { // Solo iniciar el intervalo si no hay hover
      const interval = setInterval(nextSlide, speed);
      return () => clearInterval(interval);
    }
  }, [speed, isHovered]);

  const heightCarrusel = 600;
  const positionButton = (heightCarrusel / 2.2);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)} // Detener el carrusel cuando se pasa el mouse
      onMouseLeave={() => setIsHovered(false)} // Reanudar el carrusel cuando el mouse sale
    >
      {/* Contenedor de las imágenes */}
      <div
        className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          height: `${heightCarrusel}px`  // Aquí se interpoló correctamente el valor de height
        }}
      >
        {infiniteImages.map((image, index) => (
          <div key={index} className={`flex-shrink-0 w-full h-full`}>
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
        style={{ top: `${positionButton}px` }}  // Estilo interpolado
        onClick={prevSlide}
      >
        ❮
      </button>

      <button
        className="absolute right-4 bg-black text-white w-[40px] h-[40px] rounded-full opacity-20 hover:opacity-70"
        style={{ top: `${positionButton}px` }}  // Estilo interpolado
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;

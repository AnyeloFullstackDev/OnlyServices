'use client'

import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

interface Longitud {
  width: number;   // Propiedad para el ancho, de tipo número
  height: number;  // Propiedad para la altura, de tipo número
}

const SocialIcons: React.FC<Longitud> = ({ width, height }) => {

  return (
    <div className="flex space-x-4 md:space-x-7">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook
          style={{ width: `${width}px`, height: `${height}px` }} // Usar width y height de props
          className="text-white" // Siempre blanco
        />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter
          style={{ width: `${width}px`, height: `${height}px` }} // Usar width y height de props
          className="text-white" // Siempre blanco
        />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram
          style={{ width: `${width}px`, height: `${height}px` }} // Usar width y height de props
          className="text-white" // Siempre blanco
        />
      </a>
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
        <FaTiktok
          style={{ width: `${width}px`, height: `${height}px` }} // Usar width y height de props
          className="text-white" // Siempre blanco
        />
      </a>
    </div>
  );
};

export default SocialIcons;

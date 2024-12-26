'use client';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-primaryButton 
        text-primaryButtonTextLight 
        dark:text-primaryButtonTextDark 
        py-2 px-4 
        rounded-md 
        font-semibold 
        hover:opacity-90 
        transition-opacity duration-200
      "
    >
      {children}
    </button>
  );
};

export default Button;

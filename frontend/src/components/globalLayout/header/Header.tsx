// Header.tsx
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './nav/Nav';
import Language from './language/Language';
import Link from 'next/link';
import { useAuthStore } from '@/store/auth/Login';
import { MdLogin } from 'react-icons/md';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='w-full flex flex-row text-light bg-primary'>
      <div className='flex w-1/2 items-center justify-start'>
        <Navbar />
      </div>
      <div className='flex w-1/2 items-center justify-end'>
        <div className='flex flex-row mr-20 items-center'>
          <button className="bg-accent text-white px-6 h-9 rounded-l-md hover:bg-green-600">
            Buscar
          </button>
          <input
            type="text"
            placeholder="  Buscar proveedores..."
            className="w-[300px] rounded-r-md text-black focus:outline-none mr-2 h-9"
            style={{ border: 'transparent' }}
          />

          {/* Dropdown del Icono MdLogin */}
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-center p-2 rounded-md"
            >
              
              {isAuthenticated ? (
                   <p className="px-4 py-2 text-sm text-white font-bold">
                   {user?.username || 'Usuario'}! 👋
                 </p>
                ) : (
                  <p className='pr-22'>
                        <MdLogin
                      size={32}
                      color={'#ffffff'}
                      className="transition-transform duration-300 transform hover:scale-125"
                    />
                  </p>
                )}
              
            </button>
          
            {/* Dropdown */}
            {isOpen && (
              <div
                className="absolute top-10 left-5 w-[8rem] bg-white border border-gray-200 rounded-md shadow-lg z-50 opacity-60 hover:opacity-100"
                onMouseOver={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <div className="py-1">
                  {isAuthenticated ? (
                    <>
                      <button
                        onClick={() => {
                          logout();
                          setIsOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Salir
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/auth"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Ingresar
                      </Link>
                      <Link
                        href="/auth/register"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Registrarse
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <Language />
      </div>
    </div>
  );
};

export default Header;

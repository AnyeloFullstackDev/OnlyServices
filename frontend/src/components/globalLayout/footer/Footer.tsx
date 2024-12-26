import SocialIcons from '@/components/globalLayout/social-media/SocialMedia';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white p-6">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <p className="text-sm">
        &copy; 2024 Servicios Globales. Todos los derechos reservados. <a href="" className='text-sm text-blue-500'>Politica de privacidad</a>.
        </p>
        <div className="space-x-4">
        <SocialIcons width={30} height={30}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// next.config.js
module.exports = {
  output: 'standalone',
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'strapi',  // Nombre del servicio Docker para Strapi
        port: '1337',
        pathname: '/public/carrusel/**',  // Cambié /uploads/** a /public/carrusel/**
      },
      {
        protocol: 'http',
        hostname: 'localhost', // Agregar localhost para el desarrollo local
        port: '1337',
        pathname: '/public/carrusel/**',  // También actualicé aquí
      },
    ],
  },
  i18n: {
    locales: ['es', 'en'],  // Define los idiomas soportados: español e inglés
    defaultLocale: 'es',     // Establece el idioma predeterminado a español
  },
};

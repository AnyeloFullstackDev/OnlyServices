import type { Config } from "tailwindcss";

export default {
  darkMode: 'class', // Usa la clase 'dark' para manejar el tema manualmente
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Paleta personalizada
        primary: "#2563EB", // Azul fuerte
        secondary: "#80C4E9", // Azul claro
        accent: "#22C55E", // Rojo suave
        light: "#F1F0E8", // Gris claro
      },
      fontFamily: {
        navbar: ['Times New Roman', 'serif'], // Fuente personalizada para el navbar
      },
    },
  },
  plugins: [],
} satisfies Config;

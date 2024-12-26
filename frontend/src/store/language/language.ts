import { create } from "zustand";

// Define la interfaz para el estado del idioma
export interface LanguageState {
  language: string; // Estado del idioma (por ejemplo: 'en' para inglés, 'es' para español)
  setLanguage: (language: string) => void; // Método para cambiar el idioma
}

const useLanguageStore = create<LanguageState>((set) => ({
  language: "es", // Idioma por defecto (puedes cambiarlo si es necesario)
  setLanguage: (language) => set(() => ({ language })), // Cambia el idioma
}));

export default useLanguageStore;

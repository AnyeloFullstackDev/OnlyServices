import { create } from 'zustand';

interface User {
  email: string;
  username: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (jwt: string, user: User) => void;
  logout: () => void;
}

// Funciones auxiliares para manejar localStorage
const loadTokenFromStorage = (): string | null => {
  try {
    return localStorage.getItem('token');
  } catch (error) {
    console.error('Error al acceder a localStorage:', error);
    return null;
  }
};

const saveTokenToStorage = (token: string) => {
  try {
    localStorage.setItem('token', token);
  } catch (error) {
    console.error('Error al guardar token en localStorage:', error);
  }
};

const removeTokenFromStorage = () => {
  try {
    localStorage.removeItem('token');
  } catch (error) {
    console.error('Error al eliminar token de localStorage:', error);
  }
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: Boolean(loadTokenFromStorage()),
  user: null,
  token: loadTokenFromStorage(),
  login: (jwt, user) => {
    saveTokenToStorage(jwt);
    set({ isAuthenticated: true, user, token: jwt });
  },
  logout: () => {
    removeTokenFromStorage();
    set({ isAuthenticated: false, user: null, token: null });
  },
}));

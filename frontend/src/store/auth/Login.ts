// store/auth/Login.ts
import { create } from 'zustand';

interface User {
  email: string;
  username: string; // Asegúrate de que esto esté presente
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (jwt: string, user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (_jwt, user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));

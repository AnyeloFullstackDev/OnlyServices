'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthStore } from '@/store/auth/Login'; // Asegúrate de que la ruta es correcta

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Error al iniciar sesión');
      }

      // Actualizar el estado global con Zustand
      login(responseData.jwt, { email, username: responseData.user.username });

      router.push('/home');
    } catch (err: any) {
      console.error('Error al iniciar sesión:', err);
      setError(err.message || 'Ocurrió un error inesperado. Intenta más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Iniciar sesión</h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-foreground">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 p-3 w-full border border-gray-200 rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-medium text-foreground">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 p-3 w-full border border-gray-200 rounded-lg"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-4 py-3 px-6 rounded-lg shadow-md transition duration-300 ${
              loading ? 'bg-gray-400' : 'bg-primary hover:bg-primary-700 text-white'
            }`}
          >
            {loading ? 'Cargando...' : 'Iniciar sesión'}
          </button>

          <div className="text-center mt-4 text-sm">
            <p className="text-foreground">
              ¿No tienes una cuenta? 
              <Link href="/auth/register" className="ml-2 text-primary">Regístrate</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

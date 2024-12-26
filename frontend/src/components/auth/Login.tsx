'use client'
// Login.tsx
import { useAuthStore } from "@/store/auth/Login"; // Importa el store
import { useRouter } from 'next/navigation'; // Importa el enrutador de Next.js
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuthStore(); // Obtén la función login del store
  const router = useRouter(); // Usa el enrutador de Next.js

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    const response = await fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    });
  
    const data = await response.json();
  
    if (data.jwt) {
      // Asegúrate de que el objeto `user` tiene tanto `email` como `username`
      login(data.jwt, { email: data.user.email, username: data.user.username });
  
      // Redirigir a la página principal
      router.push("/home");
    } else {
      setError("Credenciales incorrectas. Intenta de nuevo.");
    }
  };
  

  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Iniciar sesión</h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-foreground">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 p-3 w-full border border-gray-200 rounded-lg bg-white text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-medium text-foreground">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 p-3 w-full border border-gray-200 rounded-lg bg-white hover:border-light"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 px-6 bg-primary text-primary-button-text text-white rounded-lg shadow-md hover:bg-primary-700 transition duration-300"
          >
            Iniciar sesión
          </button>

          <div className="text-center mt-4 text-sm">
            <p className="text-foreground">¿No tienes una cuenta? 
              <Link href="/auth/register" className="btn-secondary text-center text-primary ml-2">
                Regístrate
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

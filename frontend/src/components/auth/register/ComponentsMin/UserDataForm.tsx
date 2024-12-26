// components/UserDataForm.tsx

import React from 'react';
import { LoginData } from '@/components/auth/interfaces/form';

interface UserDataFormProps {
  loginData: LoginData;
  setLoginData: React.Dispatch<React.SetStateAction<LoginData>>;
}

const UserDataForm: React.FC<UserDataFormProps> = ({ loginData, setLoginData }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Datos de Inicio de Sesión</h3>
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={loginData.email}
        onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
        className="w-full px-4 py-2 mb-2 border rounded-md"
      />
      <input
        type="text"
        name="username"
        placeholder="Nombre de usuario"
        value={loginData.username}
        onChange={(e) => setLoginData((prev) => ({ ...prev, username: e.target.value }))}
        className="w-full px-4 py-2 mb-2 border rounded-md"
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={loginData.password}
        onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
        className="w-full px-4 py-2 mb-2 border rounded-md"
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirmar contraseña"
        value={loginData.confirmPassword}
        onChange={(e) => setLoginData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
        className="w-full px-4 py-2 mb-2 border rounded-md"
      />
    </div>
  );
};

export default UserDataForm;

'use client';

import React, { useState } from 'react';
import { goToNextPage, goToPreviousPage, handleSubmit } from '../functions/handleFormulary';
import { LoginData, ProfileData, AddressData } from '../interfaces/form';
import UserDataForm from './ComponentsMin/UserDataForm';
import ProfileDataForm from './ComponentsMin/ProfileDataForm';
import AddressDataForm from './ComponentsMin/AddressDataForm';

const RegistrationForm: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [profileData, setProfileData] = useState<ProfileData>({
    profileImage: null,
    phone: '',
    biography: '',
    additionalInfo: ''
  });

  const [addressData, setAddressData] = useState<AddressData>({
    address: '',
    state: '',
    city: '',
    municipality: '',
    parish: '',
    postalCode: ''
  });

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3;

  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Registro</h2>
        <form
          onSubmit={e => handleSubmit(e, loginData, profileData, addressData)}
          className="space-y-6"
        >
          {currentPage === 0 && (
            <UserDataForm loginData={loginData} setLoginData={setLoginData} />
          )}
          {currentPage === 1 && (
            <ProfileDataForm profileData={profileData} setProfileData={setProfileData} />
          )}
          {currentPage === 2 && (
            <AddressDataForm addressData={addressData} setAddressData={setAddressData} />
          )}

          {/* Botones de Navegación */}
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => goToPreviousPage(currentPage, setCurrentPage)}
              disabled={currentPage === 0}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg"
            >
              Anterior
            </button>
            {currentPage < totalPages - 1 ? (
              <button
                type="button"
                onClick={() => goToNextPage(currentPage, setCurrentPage, totalPages)}
                className="px-4 py-2 bg-primary text-white rounded-lg"
              >
                Siguiente
              </button>
            ) : (
              <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg">
                Registrar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

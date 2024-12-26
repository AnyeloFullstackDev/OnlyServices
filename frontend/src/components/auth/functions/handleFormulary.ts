// utils/formHandlers.ts

import React from 'react';
import { LoginData, ProfileData, AddressData } from '@/components/auth/interfaces/form';


export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setData: React.Dispatch<React.SetStateAction<LoginData | ProfileData | AddressData>>
) => {
  const { name, value } = e.target;
  setData(prev => ({ ...prev, [name]: value }));
};

export const handleImageChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>
) => {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileData(prev => ({
        ...prev,
        profileImage: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  }
};

export const goToNextPage = (
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  totalPages: number
) => {
  if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
};

export const goToPreviousPage = (
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  if (currentPage > 0) setCurrentPage(currentPage - 1);
};

export const handleSubmit = (
  e: React.FormEvent,
  loginData: LoginData,
  profileData: ProfileData,
  addressData: AddressData
) => {
  e.preventDefault();
  console.log('Login Data:', loginData);
  console.log('Profile Data:', profileData);
  console.log('Address Data:', addressData);
};

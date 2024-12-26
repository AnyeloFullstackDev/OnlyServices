import React from 'react';
import { ProfileData } from '@/components/auth/interfaces/form';

interface ProfileDataFormProps {
  profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
}

const ProfileDataForm: React.FC<ProfileDataFormProps> = ({ profileData, setProfileData }) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prev) => ({
          ...prev,
          profileImage: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Detalles del Perfil</h3>
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300 animate__animated animate__bounce">
        {/* Imagen de Perfil */}
        {profileData.profileImage ? (
          <img
            src={profileData.profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            Foto de Perfil
          </div>
        )}
        {/* Botón de Edición */}
        <label className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer transition-opacity">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <span className="text-white text-sm">Editar</span>
        </label>
      </div>

      <input
        type="text"
        name="phone"
        placeholder="Teléfono"
        value={profileData.phone}
        onChange={handleInputChange}
        className="w-full p-3 border rounded-lg mt-4"
      />
      <textarea
        name="biography"
        placeholder="Biografía"
        value={profileData.biography}
        onChange={handleInputChange}
        className="w-full p-3 border rounded-lg mt-4"
      />
      <textarea
        name="additionalInfo"
        placeholder="Información Adicional"
        value={profileData.additionalInfo}
        onChange={handleInputChange}
        className="w-full p-3 border rounded-lg mt-4"
      />
    </div>
  );
};

export default ProfileDataForm;
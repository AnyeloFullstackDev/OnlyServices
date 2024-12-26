// components/AddressDataForm.tsx

import React from 'react';
import { AddressData } from '@/components/auth/interfaces/form';

interface AddressDataFormProps {
  addressData: AddressData;
  setAddressData: React.Dispatch<React.SetStateAction<AddressData>>;
}

const AddressDataForm: React.FC<AddressDataFormProps> = ({ addressData, setAddressData }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Datos de Dirección</h3>
      <input
        type="text"
        name="address"
        placeholder="Dirección"
        value={addressData.address}
        onChange={(e) => setAddressData((prev) => ({ ...prev, address: e.target.value }))}
        className="w-full px-4 py-2 mb-2 border rounded-md"
      />
      <input
        type="text"
        name="state"
        placeholder="Estado"
        value={addressData.state}
        onChange={(e) => setAddressData((prev) => ({ ...prev, state: e.target.value }))}
        className="w-full px-4 py-2 mb-2 border rounded-md"
      />
      <input
        type="text"
        name="city"
        placeholder="Ciudad"
        value={addressData.city}
        onChange={(e) => setAddressData((prev) => ({ ...prev, city: e.target.value }))}
        className="w-full px-4 py-2 mb-2 border rounded-md"
      />
      <input
        type="text"
        name="municipality"
        placeholder="Municipio"
        value={addressData.municipality}
        onChange={(e) => setAddressData((prev) => ({ ...prev, municipality: e.target.value }))}
        className="w-full px-4 py-2 mb-2 border rounded-md"
      />
      <input
        type="text"
        name="parish"
        placeholder="Parroquia"
        value={addressData.parish}
        onChange={(e) => setAddressData((prev) => ({ ...prev, parish: e.target.value }))}
        className="w-full px-4 py-2 mb-2 border rounded-md"
      />
      <input
        type="text"
        name="postalCode"
        placeholder="Código Postal"
        value={addressData.postalCode}
        onChange={(e) => setAddressData((prev) => ({ ...prev, postalCode: e.target.value }))}
        className="w-full px-4 py-2 mb-2 border rounded-md"
      />
    </div>
  );
};

export default AddressDataForm;

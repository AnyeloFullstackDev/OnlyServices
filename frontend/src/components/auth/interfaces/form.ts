// types/formTypes.ts

/** Datos de Inicio de Sesión */
export interface LoginData {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  }
  
  /** Datos del Perfil del Usuario */
  export interface ProfileData {
    profileImage: string | null;
    phone: string;
    biography: string;
    additionalInfo: string;
  }
  
  /** Datos de la Dirección */
  export interface AddressData {
    address: string;
    state: string;
    city: string;
    municipality: string;
    parish: string;
    postalCode: string;
  }
  
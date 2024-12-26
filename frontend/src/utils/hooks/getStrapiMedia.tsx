export function getStrapiMedia(url: string | null) {
    if (!url) return '';
  
    // Si la URL ya es completa (comienza con 'http' o '//'), devuélvela tal cual
    if (url.startsWith('http') || url.startsWith('//')) {
      return url;
    }
  
    // Usar la URL base de Strapi, que depende del entorno (local o producción)
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
  
    return `${baseUrl}${url}`;
  }
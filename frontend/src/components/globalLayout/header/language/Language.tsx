import useLanguageStore from '@/store/language/language'; // Asegúrate de usar la ruta correcta
import Image from 'next/image'

const ThemeToggle: React.FC = () => {
  const { language, setLanguage } = useLanguageStore(); // Accediendo al store de idioma

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es'); // Cambia entre inglés (en) y español (es)
    console.log(language)
  };

  return (
    <div className="flex items-center">
      {/* Botón para cambiar el idioma con imagen de bandera */}
      <button
        onClick={toggleLanguage}
        className="fixed top-0 right-0 text-sm font-bold bg-white dark:bg-white text-white dark:text-black p-1 rounded-full shadow-md opacity-60 hover:opacity-100"
      >
        <Image
            src={`/languagesIcons/${language === 'es' ? 'estadosUnidos-min.png' : 'venezuela-min.png'}`}
            alt={language === 'es' ? 'Venezuela Flag' : 'USA Flag'}
            width={24}
            height={24}
            style={{ width: 'auto', height: 'auto' }}
          />      
        </button>
    </div>
  );
};

export default ThemeToggle;

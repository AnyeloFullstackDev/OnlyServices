import Link from 'next/link';
import Image from 'next/image'
const Navbar: React.FC = () => {
  return (
    <div className='w-full flex justify-between'>
      <div className='flex'>
        <Link href="/" passHref>
          <Image
            src={`/logo/logo.png`}
            width={200}
            height={200}
            alt={`Logo de VenServices`}
          />
        </Link>
      </div>
      <div className='flex justify-center items-center'>
        <nav className="space-x-10 ">
          <Link href="/" passHref className="text-lg hover:text-accent font-semibold">
            Inicio
          </Link>
          <Link href="/servicios" passHref className="text-lg hover:text-accent font-semibold">
            Quienes somos
          </Link>
          <Link href="/contacto" passHref className="text-lg hover:text-accent font-semibold">
            Contacto
          </Link>
          <Link href="/categorias" passHref className="text-lg hover:text-accent font-semibold">
            Categorias
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

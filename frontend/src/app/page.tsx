import Carousel from "@/components/reusables/carrusel/Carrusel";
import Image from "next/image";

export default function Home() {
  const images = [
    "/carrusel/2.jpg",
    "/carrusel/una.jpg",
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[500px]">
  {/* Imagen de fondo */}
  <Image
    src="/hero/ventasdeservicios.jpeg"
    alt="Hero Image"
    layout="fill"
    objectFit="cover"
    className="w-full h-full"
  />
  
  
</section>
<section className="bg-primary mt-8">
  {/* Contenido sobre la imagen */}
  <div className="flex flex-col items-center justify-center text-center py-[5rem] ">
    <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]">
      Todos los servicios que necesitas, en un solo lugar
    </h2>
    <p className="text-lg mb-6 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
      Conéctate con expertos en cualquier servicio, en cualquier parte del mundo.
    </p>
    <a
      href="#servicios"
      className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
    >
      Explora nuestros servicios
    </a>
  </div>
</section>

{/* Zona Gold Section */}
<section id="zona-gold" className="bg-yellow-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-yellow-700 mb-8">
            🌟 Zona Gold: Proveedores Premium 🌟
          </h3>
          <p className="text-gray-700 mb-6">
            Nuestros proveedores destacados garantizan calidad y eficiencia en cada servicio.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Proveedor Premium 1", desc: "Soluciones tecnológicas avanzadas." },
              { title: "Proveedor Premium 2", desc: "Mantenimiento y reparaciones." },
              { title: "Proveedor Premium 3", desc: "Asesoría profesional." },
            ].map((provider, index) => (
              <div
                key={index}
                className="p-6 bg-yellow-300 rounded-md shadow-lg text-center border-2 border-yellow-500"
              >
                <h4 className="text-xl font-bold mb-2">{provider.title}</h4>
                <p>{provider.desc}</p>
                <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700">
                  Contactar
                </button>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-700">
            ¿Quieres formar parte de la Zona Gold?{" "}
            <a href="#contacto" className="text-blue-600 hover:underline">
              Contáctanos
            </a>
          </p>
        </div>
      </section>



<div className="w-full flex flex-col justify-center items-center bg-gray-200">
  {/* Servicios Section */}
  <h3 className="text-[2rem] font-bold text-center mt-8">Nuestros Servicios</h3>
  <div id="servicios" className="flex flex-col justify-center items-center mx-auto">
    {/* 🛠️ Servicios Profesionales */}
    <div className="flex flex-row mt-4">
    <div className="w-full md:w-1/3 p-4">
      <h4 className="text-xl font-bold text-blue-600 mb-4">🛠️ Servicios Profesionales</h4>
      <div className="flex flex-wrap gap-4">
        <div className="p-6 bg-white rounded-md shadow-md text-center hover:shadow-lg transition-shadow duration-300 w-full">
          <h5 className="text-md font-bold mb-2 text-blue-500">Desarrollo de Software</h5>
          <p className="text-gray-600 text-sm">Soluciones tecnológicas personalizadas.</p>
          <div className="flex flex-row gap-4 mt-4">
            <div className="p-4 bg-gray-100 rounded-md w-full md:w-1/2">
              <h6 className="text-sm font-semibold text-blue-400">Desarrollo Web</h6>
              <p className="text-gray-500 text-md">Aplicaciones modernas y optimizadas.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-md w-full md:w-1/2">
              <h6 className="text-base font-semibold text-blue-400">Desarrollo Móvil</h6>
              <p className="text-gray-500 text-sm">Apps para iOS y Android.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 🏠 Servicios para el Hogar */}
    <div className="w-full md:w-1/3 p-4">
      <h4 className="text-xl font-bold text-blue-600 mb-4">🏠 Servicios para el Hogar</h4>
      <div className="flex flex-wrap gap-4">
        <div className="p-6 bg-white rounded-md shadow-md text-center hover:shadow-lg transition-shadow duration-300 w-full">
          <h5 className="text-lg font-bold mb-2 text-blue-500">Reparaciones Eléctricas</h5>
          <p className="text-gray-600 text-sm">Soluciones rápidas y seguras.</p>
          <div className="flex flex-row gap-4 mt-4">
            <div className="p-4 bg-gray-100 rounded-md w-full md:w-1/2">
              <h6 className="text-base font-semibold text-blue-400">Instalación Eléctrica</h6>
              <p className="text-gray-500 text-sm">Instalaciones residenciales y comerciales.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-md w-full md:w-1/2">
              <h6 className="text-sm font-semibold text-blue-400">Mantenimiento Eléctrico</h6>
              <p className="text-gray-500 text-sm">Prevención de fallos eléctricos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 👶 Servicios Personales */}
    <div className="w-full md:w-1/3 p-4">
      <h4 className="text-xl font-bold text-blue-600 mb-4">👶 Servicios Personales</h4>
      <div className="flex flex-wrap gap-4">
        <div className="p-6 bg-white rounded-md shadow-md text-center hover:shadow-lg transition-shadow duration-300 w-full">
          <h5 className="text-lg font-bold mb-2 text-blue-500">Cuidado de Niños</h5>
          <p className="text-gray-600 text-sm">Atención segura y confiable.</p>
          <div className="flex flex-row gap-4 mt-4">
            <div className="p-4 bg-gray-100 rounded-md w-full md:w-1/2">
              <h6 className="text-base font-semibold text-blue-400">Niñeras a Domicilio</h6>
              <p className="text-gray-500 text-sm">Cuidado en el hogar.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-md w-full md:w-1/2">
              <h6 className="text-base font-semibold text-blue-400">Cuidado en Eventos</h6>
              <p className="text-gray-500 text-sm">Cuidado durante celebraciones.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>

    <div className="mt-5 flex flex-row">
    {/* 📚 Servicios Educativos */}
    <div className="w-full md:w-1/3 p-4">
      <h4 className="text-xl font-bold text-blue-600 mb-4">📚 Servicios Educativos</h4>
      <div className="flex flex-wrap gap-4">
        <div className="p-6 bg-white rounded-md shadow-md text-center hover:shadow-lg transition-shadow duration-300 w-full">
          <h5 className="text-lg font-bold mb-2 text-blue-500">Tutorías Académicas</h5>
          <p className="text-gray-600 text-sm">Refuerza tus conocimientos.</p>
          <div className="flex flex-row gap-4 mt-4">
            <div className="p-4 bg-gray-100 rounded-md w-full md:w-1/2">
              <h6 className="text-base font-semibold text-blue-400">Tutorías Online</h6>
              <p className="text-gray-500 text-sm">Clases virtuales personalizadas.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-md w-full md:w-1/2">
              <h6 className="text-base font-semibold text-blue-400">Tutorías Presenciales</h6>
              <p className="text-gray-500 text-sm">Clases en tu ubicación preferida.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 🚗 Servicios de Transporte */}
    <div className="w-full md:w-1/3 p-4">
      <h4 className="text-xl font-bold text-blue-600 mb-4">🚗 Servicios de Transporte</h4>
      <div className="flex flex-wrap gap-4">
        <div className="p-6 bg-white rounded-md shadow-md text-center hover:shadow-lg transition-shadow duration-300 w-full">
          <h5 className="text-lg font-bold mb-2 text-blue-500">Transporte Privado</h5>
          <p className="text-gray-600 text-sm">Viaja con comodidad y seguridad.</p>
          <div className="flex flex-row gap-4 mt-4">
            <div className="p-4 bg-gray-100 rounded-md w-full md:w-1/2">
              <h6 className="text-base font-semibold text-blue-400">Transporte Ejecutivo</h6>
              <p className="text-gray-500 text-sm">Viajes exclusivos para negocios.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-md w-full md:w-1/2">
              <h6 className="text-base font-semibold text-blue-400">Traslado Aeropuerto</h6>
              <p className="text-gray-500 text-sm">Servicio puntual y confiable.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 🏋️‍♂️ Servicios de Salud */}
    <div className="w-full md:w-1/3 p-4">
      <h4 className="text-xl font-bold text-blue-600 mb-4">🏋️‍♂️ Servicios de Salud</h4>
      <div className="flex flex-wrap gap-4">
        <div className="p-6 bg-white rounded-md shadow-md text-center hover:shadow-lg transition-shadow duration-300 w-full">
          <h5 className="text-lg font-bold mb-2 text-blue-500">Consultas Médicas</h5>
          <p className="text-gray-600 text-sm">Atención médica de calidad.</p>
          <div className="flex flex-row gap-4 mt-4">
            <div className="p-4 bg-gray-100 rounded-md w-full md:w-1/2">
              <h6 className="text-base font-semibold text-blue-400">Medicina General</h6>
              <p className="text-gray-500 text-sm">Atención integral para toda la familia.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-md w-full md:w-1/2">
              <h6 className="text-base font-semibold text-blue-400">Especialidades Médicas</h6>
              <p className="text-gray-500 text-sm">Consultas con especialistas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>






      

      {/* Testimonios Section */}
      <section id="testimonios" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Testimonios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { quote: "¡Increíble servicio! Encontré exactamente lo que necesitaba.", author: "Juan Pérez" },
              { quote: "Profesionales y confiables, lo recomiendo totalmente.", author: "María López" },
              { quote: "Profesionales y confiables, lo recomiendo totalmente.", author: "María López" },
              { quote: "Profesionales y confiables, lo recomiendo totalmente.", author: "María López" },
              { quote: "Profesionales y confiables, lo recomiendo totalmente.", author: "María López" },
              { quote: "Profesionales y confiables, lo recomiendo totalmente.", author: "María López" },
            ].map((testimonial, index) => (
              <div key={index} className="p-4 bg-white shadow-md rounded-md">
                <p>"{testimonial.quote}"</p>
                <h5 className="font-bold mt-2">- {testimonial.author}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

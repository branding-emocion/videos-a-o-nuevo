import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-yellow-400 h-2 w-full"></div>

      <footer className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="slides/logo1.png"
              alt="Branding Emoción"
              className="h-16 mb-4"
            />

            <p className="text-sm opacity-90 leading-relaxed max-w-xs">
              Creamos videos emotivos y de alto impacto para marcas
              que quieren conectar con su audiencia y destacar
              en estas fiestas.
            </p>
          </div>

          <div className="flex flex-col items-center text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 opacity-90">
              Navegación
            </h3>

            <div className="flex flex-col space-y-2 text-sm opacity-90">
              <a href="#razones" className="hover:text-yellow-300 transition">
                Razones para elegirnos
              </a>
              <a href="#caracteristicas" className="hover:text-yellow-300 transition">
                Características
              </a>
              <a href="#pasos" className="hover:text-yellow-300 transition">
                3 Pasos
              </a>
              <a href="#videos" className="hover:text-yellow-300 transition">
                Ejemplos de videos
              </a>
              <a href="#planes" className="hover:text-yellow-300 transition">
                Planes
              </a>
              <a href="#contacto" className="hover:text-yellow-300 transition">
                Contáctanos
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-lg font-bold mb-4 opacity-90">
              Síguenos
            </h3>

            <div className="flex gap-5 text-2xl">
              <a
                href="#"
                className="transition transform hover:scale-110 hover:text-yellow-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="transition transform hover:scale-110 hover:text-yellow-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="transition transform hover:scale-110 hover:text-yellow-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/30 mt-12 pt-6 text-center">
          <p className="text-sm opacity-80">
            © {currentYear} Branding Emoción – Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}

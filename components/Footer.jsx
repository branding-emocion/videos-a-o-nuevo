import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // SOLUCIÓN: Envolver ambos elementos en un Fragmento (<>...</>)
    <> 
      {/* 1. Línea de acento amarilla (la chispa) */}
      <div className="bg-yellow-400 h-2 w-full"></div> 
      
      {/* 2. Fondo de la sección en azul oscuro saturado */}
      <footer className="w-full py-12 bg-blue-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* LOGO */}
          <img src="slides/loga1.png" alt="Logo Branding Emoción" className="h-16 mx-auto mb-6" />

          {/* REDES (Añadidas para utilidad) */}
          <div className="flex items-center justify-center gap-6 text-white text-2xl mb-8">
              <a href="#" className="hover:text-cyan-400 transition duration-300"><FaFacebookF /></a>
              <a href="#" className="hover:text-cyan-400 transition duration-300"><FaInstagram /></a>
              <a href="#" className="hover:text-cyan-400 transition duration-300"><FaWhatsapp /></a>
          </div>

          <div className="border-t border-blue-700 pt-6">
              <p className="text-sm opacity-80">
                  © {currentYear} Proyecto Videos Fin de Año – Todos los derechos reservados.
              </p>
          </div>
        </div>
      </footer>
    </>
  );
}
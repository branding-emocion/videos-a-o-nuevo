"use client";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    // 1. Fondo con gradiente azul vibrante (similar al de la imagen)
    <header className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO (Manteniendo el placeholder) */}
        {/* NOTA: Asegúrate de que el logo.png sea blanco para que se vea bien sobre el fondo azul */}
        <img src="/logo.png" alt="Logo" className="h-12 w-auto" />

        {/* REDES */}
        {/* 2. Íconos en color blanco para contraste */}
        <div className="flex items-center gap-5 text-white text-2xl"> 
          {/* 3. Efecto hover con el color amarillo brillante del logo (usando yellow-300) */}
          <a 
            href="#" 
            className="transition duration-300 hover:text-yellow-300 transform hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a 
            href="#" 
            className="transition duration-300 hover:text-yellow-300 transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a 
            href="#" 
            className="transition duration-300 hover:text-yellow-300 transform hover:scale-110"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
}
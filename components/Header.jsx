"use client";

import { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  // Estado para controlar si el usuario ha bajado (scrolled)
  const [scrolled, setScrolled] = useState(false);

  // useEffect para añadir el listener de scroll
  useEffect(() => {
    const handleScroll = () => {
      // Si la posición vertical es mayor a 50px (un umbral para activar el cambio)
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Agregar el evento al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente (buena práctica)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]); 

  // Clases dinámicas del Header (Fondo)
  const headerClasses = scrolled
    ? "bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg" // Fondo con gradiente y sombra (scrolled)
    : "bg-transparent shadow-none"; // Fondo transparente (inicio)
  
  // 🛑 Clases dinámicas del Color de los ÍCONOS
  const iconClasses = scrolled
    ? "text-white"         // Íconos BLANCOS al hacer scroll (sobre fondo azul)
    : "text-cyan-400";     // Íconos TURQUESA/CYAN al inicio (sobre fondo transparente/claro)

  // El color del hover (el amarillo brillante del "Branding Emoción")
  const hoverColor = "hover:text-yellow-300";

  return (
    // Aplicamos las clases dinámicas al <header>
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out ${headerClasses}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO DINÁMICO (Se mantiene el cambio de imagen que definimos) */}
        {scrolled ? (
          // Logo al hacer scroll (ej: logo blanco)
          <img src="slides/logo1.png" alt="Logo Branding Emocion" className="h-12 w-auto" />
        ) : (
          // Logo al inicio (ej: logo oscuro)
          <img src="slides/logo.png" alt="Logo Branding Emocion" className="h-12 w-auto" />
        )}

        {/* REDES SOCIALES */}
        {/* 🛑 Aplicamos la clase dinámica iconClasses al contenedor de los íconos */}
        <div className={`flex items-center gap-5 text-2xl ${iconClasses}`}> 
          
          <a 
            href="#" 
            className={`transition duration-300 ${hoverColor} transform hover:scale-110`}
          >
            <FaFacebookF />
          </a>
          <a 
            href="#" 
            className={`transition duration-300 ${hoverColor} transform hover:scale-110`}
          >
            <FaInstagram />
          </a>
          <a 
            href="#" 
            className={`transition duration-300 ${hoverColor} transform hover:scale-110`}
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
}
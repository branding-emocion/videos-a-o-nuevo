"use client";

import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Crea el saludo perfecto para tus clientes",
      description: "Un mensaje lleno de **emoción** para esta Navidad y Año Nuevo.", 
      buttonText: "Empezar ahora",
      imageUrl: "/slides/slide3.png ", 
      textLeft: true, // SLIDE 1: Texto Izquierda (Normal)
    },
    {
      title: "Captura la Esencia de tu Marca",
      description: "Grabamos en 4K en tu local comercial para asegurar la máxima calidad y profesionalismo en tu mensaje.",
      buttonText: "Ver Ejemplos",
      imageUrl: "/slides/slide2.png", 
      textLeft: false, // SLIDE 2: Texto Derecha (Invertido)
    },
    {
      title: "Emoción que Conecta y Vende",
      description: "Nuestro guion original y edición profesional garantizan que tu video de fin de año sea inolvidable y genere compromiso.",
      buttonText: "Ver Planes",
      imageUrl: "/slides/slide1.png", 
      textLeft: false, // SLIDE 3: Texto Derecha (Invertido)
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Efecto para el auto-avance (opcional, se activa cada 6 segundos)
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[currentSlide];

  // Función para manejar el formato del texto bold
  const renderDescription = (text) => {
    return text.split('**').map((part, index) => {
      return index % 2 === 1 ? <strong key={index}>{part}</strong> : <span key={index}>{part}</span>;
    });
  };

  // Componente de Texto (Columna)
  const TextContent = (
    <div className="animate-fadeInLeft">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
            {current.title}
        </h1>
        <p className="mt-4 text-xl text-gray-700">
            {renderDescription(current.description)}
        </p>
        <button className="mt-8 px-8 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-full text-lg shadow-lg transition duration-300 hover:bg-yellow-300 hover:shadow-xl hover:scale-[1.02]">
            {current.buttonText}
        </button>
    </div>
  );

  // Componente de Imagen (Columna)
  const ImageContent = (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center border-4 border-cyan-400">
        <img 
          src={current.imageUrl} 
          alt={current.title} 
          className="w-full h-full object-cover" 
        />
        {!current.imageUrl && (
            <div className="w-full h-full flex items-center justify-center bg-cyan-400 text-white text-center">
                <span className="text-xl font-semibold">[ SLIDE {currentSlide + 1}: REEMPLAZAR IMAGEN ]</span>
            </div>
        )}
    </div>
  );


  return (
    <section id="hero" className="w-full bg-blue-50 relative overflow-hidden py-16 md:py-24 min-h-[70vh]">
      
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full transition duration-500"> 
              
              {/* LÓGICA DE ORDEN GARANTIZADA: [Texto, Imagen] o [Imagen, Texto] */}
              {current.textLeft ? (
                // Patrón NORMAL (Slide 1): [Texto] [Imagen]
                <>
                  {TextContent}
                  {ImageContent}
                </>
              ) : (
                // Patrón INVERTIDO (Slides 2 y 3): [Imagen] [Texto]
                <>
                  {ImageContent}
                  {TextContent}
                </>
              )}
          </div>
      </div>
      
      {/* Navegación y Controles */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 z-20 bg-white/50 hover:bg-white rounded-full transition duration-300 shadow-md">
        <FaArrowLeft className="text-xl text-gray-700" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 z-20 bg-white/50 hover:bg-white rounded-full transition duration-300 shadow-md">
        <FaArrowRight className="text-xl text-gray-700" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'w-8 bg-cyan-500' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
} 
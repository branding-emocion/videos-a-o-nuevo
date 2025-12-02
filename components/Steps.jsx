"use client";

import { useState } from 'react';

export default function Steps() {
  const [activeIndex, setActiveIndex] = useState(1); 

  // 🛑 ARRAY DE PASOS ACTUALIZADO con rutas de imagen
  const steps = [
    {
      number: 1,
      title: "Hacemos el guion",
      description: "Creamos un guion emotivo y único, ajustado a tu marca y a los valores que quieres proyectar en Navidad y Año Nuevo.",
      imageUrl: "/guion/gion1.png", // 🛑 RUTA IMAGEN PASO 1
    },
    {
      number: 2,
      title: "Grabamos en tu local",
      description: "Nuestro equipo profesional se desplaza a tu oficina o local comercial para capturar el video en la mejor calidad 4K.",
      imageUrl: "/guion/gion2.png", // 🛑 RUTA IMAGEN PASO 2
    },
    {
      number: 3,
      title: "Editamos el video",
      description: "Entregamos el saludo final editado profesionalmente y optimizado en formato reel para todas tus redes sociales.",
      imageUrl: "/guion/gion3.png", // 🛑 RUTA IMAGEN PASO 3
    },
  ];

  const handleStepClick = (number) => {
    // Si se presiona el paso activo, lo cerramos. Si se presiona otro, lo abrimos.
    setActiveIndex(number === activeIndex ? null : number);
  };

  // Encontramos el objeto de paso activo para usarlo en la columna derecha
  const activeStep = steps.find(step => step.number === activeIndex);

  return (
    <section id="pasos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* COLUMNA IZQUIERDA: Pasos Interactivos */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-900 leading-tight">
            Tu video saludo de fin de año en 
            <span className="text-cyan-500"> 3 simples pasos</span>
          </h2>
          
          <div className="space-y-6">
            {steps.map((step, i) => {
              const isActive = step.number === activeIndex;
              
              return (
                <div 
                    key={i} 
                    className={`transition duration-300 pl-4 border-l-4 
                                ${isActive ? 'border-cyan-400' : 'border-gray-200'}`}
                >
                  
                  {/* Título/Botón del paso */}
                  <button 
                    onClick={() => handleStepClick(step.number)}
                    className={`text-left w-full pb-2 pt-2 -ml-4 pl-4 
                                ${isActive 
                                    ? 'text-gray-900 font-bold' 
                                    : 'text-gray-500 font-medium hover:text-gray-900'
                                }`}
                  >
                    <h3 className="text-xl">
                      <span className={`mr-2 ${isActive ? 'text-yellow-500' : 'text-gray-400'}`}>
                        {step.number}.
                      </span> 
                      {step.title}
                    </h3>
                  </button>
                  
                  {/* DESCRIPCIÓN: RENDERIZADA CONDICIONALMENTE */}
                  {isActive && (
                    <p className="text-base text-gray-700 mt-2 pb-2">
                      {step.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <button className="mt-10 px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg text-lg hover:bg-cyan-600 transition">
            Empezar ya
          </button>
        </div>

        {/* =========================================================
           COLUMNA DERECHA: IMAGEN DINÁMICA
           ========================================================= */}
        <div className="relative h-[500px] w-full bg-blue-900 rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Fondo de color vibrante (Cian/Azul) - Se mantiene como capa de fondo/placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl opacity-80"></div>
          
          {/* 🛑 LÓGICA DE IMAGEN DINÁMICA */}
          {activeStep && (
            <img 
              src={activeStep.imageUrl} 
              alt={activeStep.title} 
              // Estilos para la imagen: ocupa el 100% de la caja y se centra
              className="absolute inset-0 w-full h-full object-cover rounded-3xl z-10 opacity-100 transition-opacity duration-500"
            />
          )}

          {/* Placeholder de texto si no hay paso activo o si quieres el título encima de la imagen */}
          {activeIndex === null && (
            <div className="relative flex h-full items-center justify-center text-white text-center z-20">
              <p className="text-xl font-semibold">
                Haz clic en un paso para ver la ilustración
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
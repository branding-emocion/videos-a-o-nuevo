"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Steps() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [animationKey, setAnimationKey] = useState(0); // para reiniciar animación

  const steps = [
    {
      number: 1,
      title: "Hacemos el guion",
      description:
        "Creamos un guion emotivo y único, ajustado a tu marca y a los valores que quieres proyectar en Navidad y Año Nuevo.",
      imageUrl: "/guion/gion1.png",
    },
    {
      number: 2,
      title: "Grabamos en tu local",
      description:
        "Nuestro equipo profesional se desplaza a tu oficina o local comercial para capturar el video en la mejor calidad 4K.",
      imageUrl: "/guion/gion2.png",
    },
    {
      number: 3,
      title: "Editamos el video",
      description:
        "Entregamos el saludo final editado profesionalmente y optimizado en formato reel para todas tus redes sociales.",
      imageUrl: "/guion/gion3.png",
    },
  ];

  const DURATION = 4; // tiempo en segundos

  const activeStep = steps.find((step) => step.number === activeIndex);

  // ▶️ AUTO-ADVANCE
  useEffect(() => {
    if (!activeIndex) return;

    if (activeIndex === steps.length) return; // si es el último, no seguir

    const timer = setTimeout(() => {
      setActiveIndex((prev) => prev + 1);
      setAnimationKey((k) => k + 1); // reiniciar animación
    }, DURATION * 1000);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // ▶️ CLICK MANUAL: reset animación
  const handleStepClick = (number) => {
    setActiveIndex(number);
    setAnimationKey((k) => k + 1);
  };

  return (
    <section id="pasos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-900 leading-tight">
            Tu video saludo de fin de año en
            <span className="text-cyan-500"> 3 simples pasos</span>
          </h2>

          <div className="space-y-6">
            {steps.map((step, i) => {
              const isActive = step.number === activeIndex;

              return (
                <div key={i} className="relative pl-4">

                  {/* === BARRA IZQUIERDA POR STEP === */}
                  <div
                    className={`
                      absolute left-0 top-0 h-full w-[4px] rounded-full overflow-hidden
                      ${isActive ? "bg-transparent" : "bg-gray-200"}
                    `}
                  >
                    {isActive && (
                      <motion.div
                        key={animationKey} // reinicia anim
                        className="w-full bg-cyan-400"
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{
                          duration: DURATION,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </div>

                  {/* === TITULO BOTÓN === */}
                  <button
                    onClick={() => handleStepClick(step.number)}
                    className={`
                      text-left w-full pb-2 pt-2 -ml-4 pl-4 transition
                      ${isActive
                        ? "text-gray-900 font-bold"
                        : "text-gray-500 font-medium hover:text-gray-900"}
                    `}
                  >
                    <h3 className="text-xl">
                      <span
                        className={`mr-2 ${
                          isActive ? "text-yellow-500" : "text-gray-400"
                        }`}
                      >
                        {step.number}.
                      </span>
                      {step.title}
                    </h3>
                  </button>

                  {/* === DESCRIPTION SOLO SI ACTIVO === */}
                  {isActive && (
                    <p className="text-base text-gray-700 mt-2 pb-2">
                      {step.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <button className="mt-10 px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg text-lg hover:bg-cyan-600 transition">
            Empezar ya
          </button>
        </div>

        {/* RIGHT SIDE: IMAGE */}
        <div className="relative h-[500px] w-full bg-blue-900 rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl opacity-80"></div>

          {activeStep && (
            <img
              key={activeStep.imageUrl}
              src={activeStep.imageUrl}
              alt={activeStep.title}
              className="absolute inset-0 w-full h-full object-cover rounded-3xl z-10 opacity-100 transition-opacity duration-500"
            />
          )}
        </div>

      </div>
    </section>
  );
}

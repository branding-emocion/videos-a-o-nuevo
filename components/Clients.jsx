"use client";

import { motion } from "framer-motion";
import { FiUsers } from "react-icons/fi"; // ICONO IMPORTADO

export default function Clients() {
  const logos = [
    "roden.png",
    "jk.png",
    "cadeza.png",
    "ricorp.png",
  ];

  return (
    <section id="clientes" className="relative py-28 bg-blue-50 overflow-hidden">

      {/* FONDO DECORATIVO IZQUIERDA */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -left-40 top-32 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"
      />

      {/* FONDO DECORATIVO DERECHA */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -right-52 bottom-10 w-[28rem] h-[28rem] bg-blue-800 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        {/* ICONO + TITULO + DESCRIPCIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20"
        >
          {/* ICONO */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white shadow-xl shadow-cyan-500/20 rounded-2xl flex items-center justify-center">
              <FiUsers className="text-cyan-500 w-10 h-10" />
            </div>
          </div>

          {/* TITULO */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Nuestros <span className="text-cyan-500">Clientes</span>
          </h2>

          {/* DESCRIPCIÓN */}
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Empresas que han confiado en nuestros servicios para fortalecer su marca y conectar emocionalmente con su audiencia.
          </p>
        </motion.div>

        {/* LOGOS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 items-center">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="
                mx-auto flex justify-center items-center 
                w-full h-44 p-4
                transition transform 
                hover:scale-110 hover:-translate-y-1
              "
            >
              <img
                src={`/clientes/${logo}`}
                className="w-full max-h-full object-contain"
                alt={`Logo del Cliente ${i + 1}`}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

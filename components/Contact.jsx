"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiUser, FiMessageSquare } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contacto" className="relative py-32 bg-blue-50 overflow-hidden">

      {/* BLOBS DE FONDO */}
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -left-40 top-48 w-[22rem] h-[22rem] bg-cyan-500 rounded-full blur-[120px]"
      />

      <motion.div
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -right-40 bottom-20 w-[22rem] h-[22rem] bg-blue-800 rounded-full blur-[120px]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* COLUMNA IZQUIERDA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Contáctanos
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            ¿Tienes una idea para tu próximo video? Escríbenos y te ayudamos a crear algo increíble.
          </p>

          {/* DATOS DE CONTACTO */}
          <div className="space-y-6 text-gray-700">

            <div className="flex items-start gap-4">
              <FiPhone className="text-cyan-500 text-2xl" />
              <div>
                <p className="font-semibold text-gray-900">Teléfono</p>
                <p>+51 999 999 999</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMail className="text-cyan-500 text-2xl" />
              <div>
                <p className="font-semibold text-gray-900">Correo</p>
                <p>contacto@tuempresa.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMapPin className="text-cyan-500 text-2xl" />
              <div>
                <p className="font-semibold text-gray-900">Ubicación</p>
                <p>Lima, Perú</p>
              </div>
            </div>
          </div>

          {/* REDES */}
          <div className="flex gap-5 mt-10 text-blue-900 text-2xl">
            <a href="#"><FiFacebook className="hover:text-cyan-500 transition" /></a>
            <a href="#"><FiInstagram className="hover:text-cyan-500 transition" /></a>
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: FORMULARIO */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-900/10"
        >

          {/* CAMPOS */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">

            {/* nombre */}
            <div className="relative">
              <FiUser className="absolute left-3 top-3 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Nombre"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition text-gray-700"
              />
            </div>

            {/* apellido */}
            <div className="relative">
              <FiUser className="absolute left-3 top-3 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Apellido"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition text-gray-700"
              />
            </div>

          </div>

          {/* TELEFONO + CORREO */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">

            {/* telefono */}
            <div className="relative">
              <FiPhone className="absolute left-3 top-3 text-gray-400 text-xl" />
              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition text-gray-700"
              />
            </div>

            {/* correo */}
            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-gray-400 text-xl" />
              <input
                type="email"
                placeholder="Correo"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition text-gray-700"
              />
            </div>

          </div>

          {/* MENSAJE */}
          <div className="relative mb-8">
            <FiMessageSquare className="absolute left-3 top-3 text-gray-400 text-xl" />
            <textarea
              rows="5"
              placeholder="Cuéntanos sobre tu proyecto…"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none transition resize-none text-gray-700"
            />
          </div>

          {/* BOTON */}
          <button
            className="w-full py-4 text-lg font-semibold text-white bg-blue-900 rounded-xl hover:bg-cyan-600 transition duration-300 shadow-lg shadow-blue-900/20"
          >
            Enviar mensaje
          </button>

        </motion.form>
      </div>
    </section>
  );
}

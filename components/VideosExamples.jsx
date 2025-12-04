"use client";

import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";

export default function VideosExamples() {
  return (
    <section
      id="videos"
      className="
        py-28 
        bg-gradient-to-br from-cyan-600 via-cyan-500 to-cyan-700
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* =========================
            TÍTULO + SUBTÍTULO
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Ejemplos llenos de <span className="text-yellow-300">emoción</span>
          </h2>
          <p className="text-lg md:text-xl text-cyan-100 max-w-2xl mx-auto leading-relaxed">
            Proyectos reales diseñados para conectar, inspirar y potenciar la identidad visual de cada marca.
          </p>
        </motion.div>

        {/* =========================
            GRID DE VIDEOS
        ========================== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12"
        >
          {[1, 2, 3, 4].map((v) => (
            <motion.div
              key={v}
              variants={{
                hidden: { opacity: 0, scale: 0.92 },
                show: { opacity: 1, scale: 1 },
              }}
              className="
                bg-white rounded-3xl overflow-hidden shadow-xl
                transition transform duration-500 
                hover:scale-[1.03] hover:shadow-2xl
              "
            >
              <div className="relative w-full h-auto group overflow-hidden">

                {/* VIDEO */}
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster={`/images/video-preview-${v}.jpg`}
                  src={`/videos/video${v}.mp4`}
                />

                {/* OVERLAY PLAY ICON (solo visual, no botón) */}
                <div
                  className="
                    absolute inset-0 bg-black/0 group-hover:bg-black/20 
                    flex items-center justify-center pointer-events-none
                    transition
                  "
                >
                  <FaPlayCircle
                    className="
                      text-white text-5xl opacity-0 
                      group-hover:opacity-100 transition duration-300
                    "
                  />
                </div>
              </div>

              {/* PIE DE TEXTO CUTE */}
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-cyan-700 font-semibold text-base">
                  <FaPlayCircle className="text-yellow-400 text-lg" />
                  Video Ejemplo {v}
                </div>

                {/* Descripción breve */}
                <p className="mt-1 text-xs text-gray-500 text-center leading-relaxed">
                  Creatividad, emoción y producción profesional para impulsar tu marca.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaRocket } from "react-icons/fa";

export default function Plans() {
  const plans = [
    {
      name: "Plan Futuro",
      price: "S/120",
      isRecommended: false,
      items: ["Edición de video", "Uso de imágenes de apoyo y stock"],
    },
    {
      name: "Plan Emoción",
      price: "S/350",
      isRecommended: true,
      items: [
        "Guión",
        "Grabaciones en local comercial u oficina",
        "Edición de video",
        "Entregable en formato reel (9:16) y cine (16:9)",
      ],
    },
    {
      name: "Plan Fanático",
      price: "S/390",
      isRecommended: false,
      items: [
        "Todo lo del plan emoción",
        "Diseño flyer navideño",
        "Diseño flyer Año Nuevo",
        "Envío de mailing",
      ],
    },
  ];

  return (
    <section id="planes" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-20"
        >
          <FaRocket className="text-yellow-400 text-4xl animate-pulse" />

          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
            El plan <span className="text-cyan-500">adecuado</span> para tu empresa
          </h2>
        </motion.div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: { opacity: 0, y: 25 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, staggerChildren: 0.15 },
            },
          }}
          className="
            grid grid-cols-1 md:grid-cols-3 gap-10 
            items-stretch border-t border-b border-gray-200 pt-12 pb-12
          "
        >
          {plans.map((p, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                show: { opacity: 1, scale: 1 },
              }}
              whileHover={{
                y: -8,
                scale: 1.04,
                boxShadow: "0px 18px 45px rgba(0,0,0,0.13)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
              className={`
                relative p-6 md:p-8 bg-white text-gray-900 rounded-xl 
                flex flex-col justify-between cursor-pointer 
                overflow-hidden transform-gpu will-change-transform
                transition duration-200
                ${i < plans.length - 1 ? "md:border-r border-gray-100" : ""}
                ${p.isRecommended ? "bg-blue-50 border border-cyan-400 shadow-md" : "border border-gray-100"}
              `}
            >
              <div>
                {/* NOMBRE DEL PLAN */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <h3
                    className={`text-3xl font-bold ${
                      p.isRecommended ? "text-blue-900" : "text-gray-700"
                    }`}
                  >
                    {p.name}
                  </h3>

                  {p.isRecommended && (
                    <span className="px-2 py-1 text-xs bg-cyan-500 text-white rounded-full font-bold shadow-md">
                      TOP
                    </span>
                  )}
                </div>

                {/* PRECIO */}
                <p
                  className={`text-5xl font-extrabold mb-8 ${
                    p.isRecommended ? "text-cyan-600" : "text-blue-900"
                  }`}
                >
                  {p.price}
                  <span className="text-base font-normal text-gray-500">/mes</span>
                </p>

                {/* LISTA DE ITEMS */}
                <ul className="text-left space-y-3 mb-10">
                  <p className="font-semibold text-sm mb-4 border-b border-gray-200 pb-2">
                    {p.isRecommended
                      ? "Todo lo que incluye la edición básica, más:"
                      : "Incluye las siguientes funciones:"}
                  </p>

                  {p.items.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: j * 0.1 }}
                      className="flex items-start space-x-3 text-sm text-gray-700"
                    >
                      <FaCheckCircle className="text-cyan-500 text-lg flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* BOTÓN CTA */}
              <a href="#contacto" className="w-full block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full px-8 py-3 rounded-md text-lg font-semibold 
                    transition duration-300 mt-auto 
                    ${
                      p.isRecommended
                        ? "bg-cyan-500 text-white shadow-md hover:bg-cyan-600"
                        : "bg-gray-200 text-blue-900 hover:bg-gray-300"
                    }
                  `}
                >
                  Elegir {p.name}
                </motion.button>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

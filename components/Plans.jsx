import { FaCheckCircle } from "react-icons/fa";

export default function Plans() {
  const plans = [
    {
      name: "Plan Futuro",
      price: "S/120",
      isRecommended: false, // Plan sutil
      items: [
        "Edición de video",
        "Uso de imágenes de apoyo y stock"
      ]
    },
    {
      name: "Plan Emoción", 
      price: "S/350",
      isRecommended: true, // Plan destacado
      items: [
        "Guión",
        "Grabaciones en local comercial u oficina",
        "Edición de video",
        "Entregable en formato reel (9:16) y cine (16:9)"
      ]
    },
    {
      name: "Plan Fanático",
      price: "S/390",
      isRecommended: false, // Plan sutil
      items: [
        "Todo lo del plan emoción",
        "Diseño flyer navideño",
        "Diseño flyer Año Nuevo",
        "Envío de mailing"
      ]
    },
  ];

  return (
    <section id="planes" className="py-24 bg-white"> {/* Fondo blanco y limpio */}
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-blue-900">
          El plan <span className="text-cyan-500">adecuado</span> para tu empresa
        </h2>

        {/* Contenedor de las tarjetas de planes - Usamos una cuadrícula limpia */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-stretch border-t border-b border-gray-200">
          {plans.map((p, i) => (
            <div 
              key={i} 
              // 🛑 Estilo: Blanco y limpio. Usamos border-r para separar las columnas verticalmente
              className={`p-6 md:p-8 bg-white text-gray-900 
                          ${i < plans.length - 1 ? 'border-r border-gray-100' : ''} 
                          ${p.isRecommended ? 'bg-blue-50 border-cyan-400' : ''} 
                          flex flex-col justify-between`}
            >
              <div>
                {/* 🛑 Nombre del Plan (Más grande y centrado) */}
                <h3 className={`text-3xl font-bold mb-1 ${p.isRecommended ? 'text-blue-900' : 'text-gray-700'}`}>
                    {p.name}
                </h3>
                
                {/* 🛑 Precio */}
                <p className={`text-5xl font-extrabold mb-6 ${p.isRecommended ? 'text-cyan-600' : 'text-gray-900'}`}>
                    {p.price}
                    <span className="text-base font-normal text-gray-500">/mes</span>
                </p>

                {/* 🛑 LISTA DE ITEMS */}
                <ul className="text-left space-y-3 mb-8">
                    <p className="font-semibold text-sm mb-4 border-b border-gray-200 pb-2">
                        {p.isRecommended ? 'Todo lo que incluye la edición básica, más:' : 'Incluye las siguientes funciones:'}
                    </p>
                    {p.items.map((item, j) => (
                        <li key={j} className="flex items-start space-x-3 text-sm text-gray-700">
                            <FaCheckCircle className="text-cyan-500 text-lg flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
              </div>

              {/* 🛑 BOTÓN CTA (Posicionado en la parte inferior con margen) */}
              <button 
                className={`w-full px-8 py-3 rounded-md text-lg font-semibold 
                            transition duration-300 hover:opacity-90 mt-4 
                            ${p.isRecommended 
                                ? 'bg-cyan-500 text-white shadow-md' // Botón destacado (Cian)
                                : 'bg-gray-200 text-blue-900 hover:bg-gray-300' // Botón secundario (Gris)
                            }`}
              >
                Elegir {p.name}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default function Experience() {
  const stats = [
    {
      number: "+16",
      label: "Años de experiencia",
    },
    {
      number: "100+",
      label: "Producciones audiovisuales a nivel nacional",
    },
    {
      number: "Equipo",
      label: "Completo y profesional en cada área",
    },
  ];

  return (
    // Fondo de la sección en blanco
    <section id="experiencia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Título: Resaltamos "Emoción" con el color amarillo */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-blue-900">
          Emociónate con nuestra <span className="text-yellow-500">experiencia</span>
        </h2>

        {/* Contenedor de las estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((item, i) => (
            <div
              key={i}
              // Tarjetas con fondo azul muy claro (azul-50) y acento cian/amarillo
              className="p-8 bg-blue-50 rounded-2xl shadow-xl 
                         hover:shadow-2xl transition duration-300 transform hover:scale-[1.03] 
                         border-b-4 border-cyan-400 text-center" // Borde inferior cian para energía
            >
              {/* Números/Cifras destacadas con color cian */}
              <p className="text-6xl md:text-7xl font-black text-cyan-600 mb-3">
                {item.number}
              </p>
              
              {/* Etiqueta de la estadística */}
              <p className="text-xl font-semibold text-gray-800 leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
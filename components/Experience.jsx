export default function Experience() {
  const stats = [
    { number: "+16", label: "Años de experiencia" },
    { number: "100+", label: "Producciones audiovisuales a nivel nacional" },
    { number: "Equipo", label: "Completo y profesional en cada área" },
  ];

  return (
    <section
      id="experiencia"
      className="
        py-24
        bg-gradient-to-br from-cyan-600 via-cyan-500 to-cyan-700
      "
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-white">
          Emociónate con nuestra{" "}
          <span className="text-yellow-300">experiencia</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, i) => (
            <div
              key={i}
              className="
                p-10 bg-white rounded-2xl shadow-lg 
                hover:shadow-xl transition duration-300 transform hover:scale-[1.03]
                border-b-4 border-yellow-400
                flex flex-col items-center text-center
              "
            >
              <p className="text-6xl md:text-7xl font-black text-cyan-600 mb-3">
                {item.number}
              </p>

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

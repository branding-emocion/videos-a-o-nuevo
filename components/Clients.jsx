export default function Clients() {
  const logos = [
    "roden.png",
    "jk.png",
    "cadeza.png",
    "worldvision.png",
    "ricorp.png",
    "lugarsa.png",
  ];

  return (
    // 1. Fondo de la sección en azul muy claro (similar al Hero)
    <section id="clientes" className="py-24 bg-blue-50"> 
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Título en azul oscuro para contraste */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-blue-900">
          Nuestros <span className="text-cyan-500">Clientes</span>
        </h2>

        {/* Contenedor de la cuadrícula */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12 items-center">
          {logos.map((logo, i) => (
            <div 
                key={i} 
                className="mx-auto flex justify-center items-center w-full h-24 p-2"
            >
                <img 
                    src={`/clientes/${logo}`}
                    // 3. Aplicamos un filtro de escala de grises para uniformidad,
                    // y usamos el color cian/amarillo en el hover para la "chispa".
                    className="w-full max-h-full object-contain 
                               filter grayscale opacity-70 
                               hover:grayscale-0 hover:opacity-100 
                               hover:shadow-lg hover:shadow-cyan-400/50 
                               transition duration-500 transform hover:scale-105"
                    alt={`Logo del Cliente ${i + 1}`}
                />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
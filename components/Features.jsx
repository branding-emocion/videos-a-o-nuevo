import { 
  FaPlay, 
  FaMobileAlt, 
  FaVideo, 
  FaFeatherAlt, 
  FaExpandArrowsAlt, 
  FaPencilAlt        
} from "react-icons/fa";

const featuresData = [
  { 
    icon: FaPlay, 
    title: "Duración hasta 1 min", 
    description: "Contenido directo e impactante, perfecto para el consumo rápido." 
  },
  { 
    icon: FaMobileAlt, 
    title: "Formato para Redes", 
    description: "MP4 y formato Reel (9:16) optimizado para historias y TikTok." 
  },
  { 
    icon: FaExpandArrowsAlt, 
    title: "Grabación en 4K", 
    description: "Calidad de imagen ultra-definida para un impacto visual máximo." 
  },
  { 
    icon: FaFeatherAlt, 
    title: "Guion Original", 
    description: "Creamos un mensaje con personalidad que conecta con tu audiencia." 
  },
  { 
    icon: FaVideo, 
    title: "Grabación en tu Local", 
    description: "Capturamos la esencia de tu negocio donde la acción sucede." 
  },
  { 
    icon: FaPencilAlt, 
    title: "Edición Profesional", 
    description: "Acabados de cine con música, efectos y transiciones fluidas." 
  },
];

export default function Features() {

  const iconBgColors = ['bg-cyan-100', 'bg-yellow-100']; 
  const iconColors = ['text-cyan-600', 'text-yellow-600']; 
  
  return (
    <section id="caracteristicas" className="py-20 bg-blue-50"> 
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-blue-900">
          Un saludo con vida y <span className="text-yellow-500">emoción</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((item, i) => {
            const Icon = item.icon;
            
            return (
              // 🛑 ELIMINADAS CLASES DE FONDO BLANCO Y SOMBRA
              <div 
                key={i} 
                className="flex flex-col items-center text-center 
                           transition duration-300 transform hover:scale-[1.05] hover:z-10" // Escala un poco más grande al hacer hover
              >
                {/* CUADRADO DEL ÍCONO (manteniendo su estilo y fondo de color) */}
                <div className={`mb-6 p-5 rounded-xl border-2 border-dashed 
                                ${iconBgColors[i % 2]} ${iconColors[i % 2]}`} 
                >
                  <Icon className="text-4xl" /> 
                </div>
                
                {/* Título de la característica */}
                <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                
                {/* Descripción */}
                <p className="text-base text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
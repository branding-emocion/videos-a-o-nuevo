import { 
  FaHeart,      
  FaCalendarAlt, 
  FaUsers       
} from "react-icons/fa";

export default function Reasons() {
  const items = [
    {
      icon: <FaHeart />, 
      title: "Un saludo navideño con corazón",
      description: "Envíales un video de saludo este 25 de diciembre",
    },
    {
      icon: <FaCalendarAlt />, 
      title: "Deseales un feliz año nuevo",
      description: "Renueva tu compromiso este 2026",
    },
    {
      icon: <FaUsers />, 
      title: "Une a tu equipo de trabajo",
      description: "Anima a tus trabajadores a participar en las grabaciones",
    },
  ];

  // Paleta de colores para los íconos, basada en tu branding
  // Amarillo vibrante, Cian (azul verdoso), Azul oscuro
  const iconColors = ['text-yellow-400', 'text-cyan-500', 'text-blue-700']; 
  // Opcional: una paleta para el fondo del círculo del ícono si se desea ese efecto
  const iconBgColors = ['bg-yellow-100', 'bg-cyan-100', 'bg-blue-100']; 


  return (
    <section id="razones" className="py-20 bg-blue-50"> 
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-blue-900">
          Tus clientes lo <span className="text-cyan-500">merecen</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="p-6 bg-white rounded-2xl shadow-lg 
                         hover:shadow-xl transition duration-300 transform hover:scale-[1.03]
                         flex flex-col items-center text-center border-b-4 border-yellow-400" 
            >
              {/* 🛑 ÍCONO CON COLOR DINÁMICO */}
              {/* Usamos el módulo (%) para alternar los colores de la paleta */}
              <div 
                className={`text-5xl mb-4 ${iconColors[i % iconColors.length]} 
                           p-4 rounded-full ${iconBgColors[i % iconBgColors.length]}`} // Fondo de círculo opcional
              > 
                {item.icon} 
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
              </h3>
              
              <p className="text-base text-gray-600"> 
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
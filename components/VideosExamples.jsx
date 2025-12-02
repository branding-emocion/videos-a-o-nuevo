export default function VideosExamples() {
  return (
    // 1. Fondo de la sección: Usamos el azul cian vibrante del logo (cyan-600)
    <section id="videos" className="py-24 bg-cyan-600"> 
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título: Texto en blanco con la palabra 'emoción' en amarillo, sobre el fondo oscuro */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white">
          Ejemplos llenos de <span className="text-yellow-300">emoción</span>
        </h2>

        {/* Contenedor de la cuadrícula */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((v) => (
            // Contenedor que simula un video flotando sobre el fondo cian
            <div 
              key={v}
              className="bg-white rounded-xl shadow-2xl overflow-hidden 
                         transform transition duration-300 hover:scale-[1.02] 
                         ring-2 ring-transparent hover:ring-yellow-300" // Anillo de acento en hover
            >
              <video 
                className="w-full"
                controls
                poster={`/images/video-preview-${v}.jpg`} 
                src={`/videos/video${v}.mp4`}
              >
                Tu navegador no soporta el tag de video.
              </video>
              
              {/* Pie de texto sutil con el acento cian */}
              <div className="p-3 text-center bg-gray-50 border-t border-gray-100">
                <span className="text-sm font-semibold text-cyan-700">Video Ejemplo {v}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default function NavTabs() {
  // Clase base para los enlaces.
  // 🛑 CAMBIO CLAVE AQUÍ: text-sm cambiado a text-base (tamaño estándar)
  const baseLinkClass = "px-4 py-1.5 rounded-full transition duration-300 ease-in-out font-semibold text-base"; 
  
  // Clase para el enlace normal
  const defaultLinkClass = "text-gray-700 hover:bg-blue-100 hover:text-blue-900"; 
  
  // Clase para el enlace activo
  const activeLinkClass = "bg-cyan-500 text-white shadow-md"; 

  // Simulamos que "Características" es la pestaña activa para el ejemplo
  const activeTab = "caracteristicas"; 

  return (
    // Contenedor exterior (manteniendo el padding exterior px-6 original)
    <div className="w-full bg-blue-50 py-3 sticky top-[70px] z-40"> 
      <div className="max-w-7xl mx-auto px-6"> 
        {/* Barra blanca ajustada al contenido */}
        <div className="bg-white rounded-full shadow-lg py-1 flex flex-wrap gap-1 justify-center w-fit mx-auto">
          
          <a 
            href="#razones" 
            className={`${baseLinkClass} ${activeTab === "razones" ? activeLinkClass : defaultLinkClass}`}
          >
            Razones
          </a>
          
          <a 
            href="#caracteristicas" 
            className={`${baseLinkClass} ${activeTab === "caracteristicas" ? activeLinkClass : defaultLinkClass}`}
          >
            Características
          </a>
          
          <a 
            href="#pasos" 
            className={`${baseLinkClass} ${activeTab === "pasos" ? activeLinkClass : defaultLinkClass}`}
          >
            Pasos
          </a>
          
          <a 
            href="#videos" 
            className={`${baseLinkClass} ${activeTab === "videos" ? activeLinkClass : defaultLinkClass}`}
          >
            Videos
          </a>
          
          <a 
            href="#planes" 
            className={`${baseLinkClass} ${activeTab === "planes" ? activeLinkClass : defaultLinkClass}`}
          >
            Planes
          </a>
          
          <a 
            href="#clientes" 
            className={`${baseLinkClass} ${activeTab === "clientes" ? activeLinkClass : defaultLinkClass}`}
          >
            Clientes
          </a>
        </div>
      </div>
    </div>
  );
}
export default function NavTabs() {
  // Clase base para los enlaces.
  // 🛑 AUMENTADO: px-8 (antes era px-6) para hacer cada pestaña más ancha
  const baseLinkClass = "px-8 py-2 rounded-full transition duration-300 ease-in-out font-semibold text-base whitespace-nowrap"; 
  
  // Clase para el enlace normal
  const defaultLinkClass = "text-gray-700 hover:bg-blue-100 hover:text-blue-900"; 
  
  // Clase para el enlace activo
  const activeLinkClass = "bg-cyan-500 text-white shadow-md"; 

  // Simulamos que "Características" es la pestaña activa para el ejemplo
  const activeTab = "caracteristicas"; 

  return (
    // Contenedor exterior (manteniendo el sticky y el top)
    // 🛑 AUMENTO EL ESPACIADO VERTICAL EXTERNO: py-5 (antes era py-4)
    <div className="w-full bg-blue-50 py-5 sticky top-[70px] z-40"> 
      <div className="max-w-7xl mx-auto px-6"> 
        {/* Barra blanca ajustada al contenido */}
        {/* 🛑 AUMENTO EL ESPACIADO VERTICAL INTERNO: py-3 (antes era py-2)
            🛑 AUMENTO LA SEPARACIÓN HORIZONTAL: gap-8 (antes era gap-6)
        */}
        <div className="bg-white rounded-full shadow-lg py-3 flex justify-center mx-auto max-w-5xl px-6 gap-8">
          
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
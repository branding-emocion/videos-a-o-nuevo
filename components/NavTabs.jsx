"use client";

import { useEffect, useState } from "react";

export default function NavTabs() {

  const sections = [
    "razones",
    "caracteristicas",
    "pasos",
    "videos",
    "planes",
    "clientes",
  ];

  const [activeTab, setActiveTab] = useState("");

  // ===========================
  // SCROLLSPY: Detect section visible
  // ===========================
  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveTab(id);
            }
          });
        },
        {
          root: null,
          rootMargin: "-50% 0px -50% 0px", // punto medio de pantalla
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // ===========================
  // STYLES
  // ===========================
  const baseLinkClass =
    "px-8 py-2 rounded-full transition duration-300 ease-in-out font-semibold text-base whitespace-nowrap";

  const defaultLinkClass =
    "text-gray-700 hover:bg-blue-100 hover:text-blue-900";

  const activeLinkClass =
    "bg-cyan-500 text-white shadow-md";

  return (
    <div className="w-full bg-blue-50 py-5 sticky top-[70px] z-40">
      <div className="max-w-7xl mx-auto px-6">

        {/* CONTENEDOR BLANCO CENTRADO */}
        <div className="bg-white rounded-full shadow-lg py-3 px-6 mx-auto max-w-5xl">

          {/* TABS CENTRADAS */}
          <div className="flex justify-center gap-8">

            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`${baseLinkClass} ${
                  activeTab === id ? activeLinkClass : defaultLinkClass
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

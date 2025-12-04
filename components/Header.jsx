"use client";

import { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const headerClasses = scrolled
    ? "bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg"
    : "bg-transparent shadow-none";

  const iconClasses = scrolled
    ? "text-white"
    : "text-cyan-400";

  const hoverColor = "hover:text-yellow-300";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out ${headerClasses}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={scrolled ? "slides/logo1.png" : "slides/logo.png"}
          alt="Logo Branding Emocion"
          className="h-12 w-auto"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`flex items-center gap-5 text-2xl ${iconClasses}`}
        >
          <a href="#" className={`transition duration-300 ${hoverColor} transform hover:scale-110`}>
            <FaFacebookF />
          </a>
          <a href="#" className={`transition duration-300 ${hoverColor} transform hover:scale-110`}>
            <FaInstagram />
          </a>
          <a href="#" className={`transition duration-300 ${hoverColor} transform hover:scale-110`}>
            <FaWhatsapp />
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
}

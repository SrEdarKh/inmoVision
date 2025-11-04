import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Home, Building2, Key } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-center bg-cover" style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg')",
        filter: "brightness(0.7)"
      }}></div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 leading-tight">
            Encuentra el hogar perfecto para tu <span className="text-accent-400">futuro</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl">
            Descubre propiedades exclusivas en las mejores ubicaciones. Nuestro equipo de expertos inmobiliarios te guiará en cada paso del camino.
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-lg p-1 shadow-lg mb-8">
            <div className="flex flex-col md:flex-row">
              <div className="flex-grow p-3">
                <input
                  type="text"
                  placeholder="Buscar por ciudad, dirección o código postal"
                  className="w-full border-0 focus:ring-0 text-neutral-800 text-lg"
                />
              </div>
              <Link to="/properties" className="btn btn-primary m-1 text-center py-4 md:py-3">
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </Link>
            </div>
          </div>

          {/* Quick Access Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/properties?listingType=sale" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-colors flex items-center justify-center">
              <Home className="w-5 h-5 mr-2" />
              <span>Comprar</span>
            </Link>
            <Link to="/properties?listingType=rent" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-colors flex items-center justify-center">
              <Key className="w-5 h-5 mr-2" />
              <span>Alquilar</span>
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-colors flex items-center justify-center">
              <Building2 className="w-5 h-5 mr-2" />
              <span>Vender</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
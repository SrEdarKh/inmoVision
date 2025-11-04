import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-accent-500 text-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-serif font-bold mb-4">
              ¿Listo para encontrar tu propiedad ideal?
            </h2>
            <p className="text-accent-50 mb-6 text-lg">
              No esperes más para encontrar la propiedad de tus sueños. Nuestro equipo de expertos está listo para ayudarte en cada paso del proceso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/properties" className="btn bg-white text-accent-600 hover:bg-accent-50">
                Ver Propiedades
              </Link>
              <Link to="/contact" className="btn bg-accent-600 text-white hover:bg-accent-700 border border-accent-400">
                Contáctanos
              </Link>
            </div>
          </div>
          
          <motion.div 
            className="bg-white text-accent-700 p-8 rounded-lg shadow-lg max-w-md w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-serif font-semibold">Solicita una consulta</h3>
            </div>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  className="input border-accent-200 focus:ring-accent-500" 
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Correo electrónico" 
                  className="input border-accent-200 focus:ring-accent-500" 
                  required
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Número de teléfono" 
                  className="input border-accent-200 focus:ring-accent-500" 
                  required
                />
              </div>
              <div>
                <select 
                  className="select border-accent-200 focus:ring-accent-500"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundSize: "1.5em 1.5em" }}
                  required
                >
                  <option value="">Tipo de servicio</option>
                  <option value="buy">Comprar una propiedad</option>
                  <option value="sell">Vender una propiedad</option>
                  <option value="rent">Alquilar una propiedad</option>
                  <option value="other">Otro servicio</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full btn bg-accent-600 text-white hover:bg-accent-700"
              >
                Enviar Solicitud
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
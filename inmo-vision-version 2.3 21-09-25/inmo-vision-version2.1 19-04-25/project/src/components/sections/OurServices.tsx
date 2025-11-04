import React from 'react';
import { motion } from 'framer-motion';
import { Home, Key, Building, Clipboard, LayoutGrid, Users } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Compra de Propiedades",
    description: "Te ayudamos a encontrar la propiedad perfecta según tus necesidades y presupuesto, guiándote durante todo el proceso de compra.",
    icon: <Home className="w-10 h-10" />
  },
  {
    id: 2,
    title: "Alquiler de Propiedades",
    description: "Ofrecemos una amplia selección de propiedades en alquiler, desde apartamentos hasta casas y locales comerciales.",
    icon: <Key className="w-10 h-10" />
  },
  {
    id: 3,
    title: "Venta de Propiedades",
    description: "Valoramos tu propiedad al precio justo de mercado y creamos una estrategia de marketing personalizada para venderla rápidamente.",
    icon: <Building className="w-10 h-10" />
  },
  {
    id: 4,
    title: "Asesoría Legal",
    description: "Nuestro equipo de expertos te asesora en todos los aspectos legales relacionados con la compra, venta o alquiler de propiedades.",
    icon: <Clipboard className="w-10 h-10" />
  },
  {
    id: 5,
    title: "Administración de Propiedades",
    description: "Nos encargamos de la gestión completa de tu propiedad en alquiler, desde la selección de inquilinos hasta el mantenimiento.",
    icon: <LayoutGrid className="w-10 h-10" />
  },
  {
    id: 6,
    title: "Asesoría Personalizada",
    description: "Ofrecemos asesoramiento personalizado adaptado a tus necesidades específicas en el mercado inmobiliario.",
    icon: <Users className="w-10 h-10" />
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const OurServices: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-3">Nuestros Servicios</h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Ofrecemos una amplia gama de servicios inmobiliarios para satisfacer todas tus necesidades. Nuestro equipo de expertos está listo para ayudarte.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="bg-neutral-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-neutral-100"
              variants={item}
            >
              <div className="text-primary-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
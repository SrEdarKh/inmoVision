import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Building } from 'lucide-react';
import { agents } from '../data/agents';
import AgentCard from '../components/ui/AgentCard';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Sobre Nosotros | Inmo-Visión';
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { id: 1, label: 'Años de experiencia', value: '20+', icon: <Shield className="w-8 h-8" /> },
    { id: 2, label: 'Propiedades vendidas', value: '1500+', icon: <Building className="w-8 h-8" /> },
    { id: 3, label: 'Clientes satisfechos', value: '3000+', icon: <Users className="w-8 h-8" /> },
    { id: 4, label: 'Premios recibidos', value: '25+', icon: <Award className="w-8 h-8" /> },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-primary-800 text-white">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg')" }}
        />
        <div className="container-custom relative py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              Conoce a Inmo-vision
            </h1>
            <p className="text-xl text-primary-100 mb-6">
              Líderes en el mercado inmobiliario con más de 20 años de experiencia, ofreciendo las mejores propiedades y un servicio personalizado a cada cliente.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Nuestra Historia</h2>
            <p className="text-neutral-700 mb-4">
            Inmo-vision nació en 2003 con la visión de transformar la experiencia inmobiliaria en Colombia. Fundada por un equipo de profesionales apasionados por el sector, nuestra empresa comenzó como una pequeña oficina en Medellin y ha crecido hasta convertirse en un referente nacional.
            </p>
            <p className="text-neutral-700 mb-4">
              A lo largo de estos años, hemos ayudado a miles de familias a encontrar el hogar de sus sueños y a inversores a desarrollar proyectos exitosos. Nuestra filosofía se basa en la transparencia, la excelencia y el compromiso con cada cliente.
            </p>
            <p className="text-neutral-700">
              Hoy, con presencia en las principales ciudades, aplicando a la tecnologia digital, seguimos fieles a nuestros valores originales, combinando la experiencia acumulada con las últimas tecnologías para ofrecer un servicio inmobiliario de primer nivel.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg" 
              alt="Edificio de oficinas" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
              alt="Equipo de trabajo" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" 
              alt="Reunión de negocios" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/7578989/pexels-photo-7578989.jpeg" 
              alt="Entrega de llaves" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-3">Nuestros Logros</h2>
            <p className="max-w-2xl mx-auto text-primary-100">
              Dos décadas de excelencia y dedicación nos han permitido alcanzar importantes hitos en el sector inmobiliario.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div 
                key={stat.id}
                className="bg-primary-700/50 backdrop-blur-sm rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-accent-400 mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="container-custom py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-3">Nuestros Valores</h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Estos principios guían cada una de nuestras acciones y decisiones, definiendo quiénes somos como empresa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Integridad</h3>
            <p className="text-neutral-600">
              Actuamos con honestidad y transparencia en todos nuestros tratos, construyendo relaciones de confianza con nuestros clientes.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Excelencia</h3>
            <p className="text-neutral-600">
              Nos esforzamos por superar las expectativas en cada proyecto, ofreciendo un servicio de calidad superior y atención al detalle.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Compromiso</h3>
            <p className="text-neutral-600">
              Nos dedicamos a entender y satisfacer las necesidades de cada cliente, acompañándolos en todo el proceso inmobiliario.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-3">Nuestro Equipo</h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              Conoce a los profesionales que hacen posible ofrecer un servicio inmobiliario excepcional todos los días.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {agents.map((agent) => (
              <div key={agent.id} className="h-full">
                <AgentCard agent={agent} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
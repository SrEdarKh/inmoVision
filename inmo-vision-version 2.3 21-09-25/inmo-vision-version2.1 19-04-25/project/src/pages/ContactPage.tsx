import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contacto | Inmo-Visión';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              Ponte en contacto con nosotros
            </h1>
            <p className="text-xl text-primary-100">
              Estamos aquí para ayudarte con todas tus necesidades inmobiliarias. No dudes en contactarnos.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-serif font-semibold mb-6">Información de Contacto</h2>

              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Dirección</h3>
                    <p className="text-neutral-600">
                      Calle 104, 70-4, Medellín<br />
                      Colombia
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                    <p className="text-neutral-600">
                      <a href="tel:+573001234567" className="hover:text-primary-600 transition-colors">
                        +57 300 123 4567
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-neutral-600">
                      <a href="mailto:info@inmovision.com" className="hover:text-primary-600 transition-colors">
                        info@inmovision.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Horario</h3>
                    <p className="text-neutral-600">
                      Lunes a Viernes: 9:00 - 19:00<br />
                      Sábados: 10:00 - 14:00<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-serif font-semibold mb-4">Enlaces Rápidos</h2>
              <div className="space-y-3">
                <a href="#" className="block py-2 px-4 bg-neutral-50 hover:bg-neutral-100 rounded-md text-neutral-800 transition-colors flex items-center">
                  <MessageSquare className="w-5 h-5 mr-3 text-primary-600" />
                  Preguntas Frecuentes
                </a>
                <a href="#" className="block py-2 px-4 bg-neutral-50 hover:bg-neutral-100 rounded-md text-neutral-800 transition-colors flex items-center">
                  <Send className="w-5 h-5 mr-3 text-primary-600" />
                  Solicitar Avalúo
                </a>
                <a href="#" className="block py-2 px-4 bg-neutral-50 hover:bg-neutral-100 rounded-md text-neutral-800 transition-colors flex items-center">
                  <Users className="w-5 h-5 mr-3 text-primary-600" />
                  Trabaja con Nosotros
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-serif font-semibold mb-6">Envíanos un mensaje</h2>
              <p className="text-neutral-600 mb-6">
                Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="input"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="input"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="input"
                    required
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-neutral-600">

                    Acepto la <a href="#" className="text-primary-600 hover:underline">política de privacidad</a> y el tratamiento de mis datos personales.
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full sm:w-auto"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="py-8">
        <div className="container-custom">
          <h2 className="text-2xl font-serif font-semibold mb-6">Nuestra Ubicación</h2>
          <div className="rounded-lg overflow-hidden shadow-md h-96 bg-neutral-200">
            {/* ESTE ES EL MAPA CORRECTAMENTE FORMATEADO */}
            <iframe
              title="Mapa SENA"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.707977660413!2d-75.5685611!3d6.302048000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f25d6670d4d%3A0x8043999e5e767b96!2sSENA%20-%20Centro%20de%20Tecnolog%C3%ADa%20de%20la%20Manufactura%20Avanzada!5e0!3m2!1ses-419!2sco!4v1745209034601!5m2!1ses-419!2sco"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria López",
    role: "Compradora",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    content: "El servicio de Inmo-Visión fue excepcional. Encontré la casa de mis sueños en tiempo récord y el proceso de compra fue sencillo gracias a su equipo de profesionales.",
    rating: 5
  },
  {
    id: 2,
    name: "Javier Rodríguez",
    role: "Vendedor",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    content: "Vendí mi propiedad en menos de un mes. Su estrategia de marketing y profesionalismo hicieron que todo el proceso fuera rápido y sin complicaciones.",
    rating: 5
  },
  {
    id: 3,
    name: "Laura Fernández",
    role: "Arrendataria",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
    content: "Alquilé un apartamento a través de Inmo-Visión y quedé muy satisfecha. Fueron atentos a mis necesidades y encontraron exactamente lo que buscaba en mi rango de presupuesto.",
    rating: 4
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-3">Lo que dicen nuestros clientes</h2>
          <p className="max-w-2xl mx-auto text-primary-100">
            La satisfacción de nuestros clientes es nuestro mayor orgullo. Estas son algunas de las experiencias que han compartido con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 relative shadow-lg"
            >
              <div className="absolute top-6 right-6 text-accent-400">
                <Quote className="w-10 h-10 opacity-50" />
              </div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-accent-400"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-primary-200 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index}
                    className={`w-5 h-5 ${index < testimonial.rating ? 'text-accent-400 fill-accent-400' : 'text-primary-300'}`}
                  />
                ))}
              </div>
              
              <p className="text-primary-100">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyCard from '../ui/PropertyCard';
import { Property } from '../../types';

interface FeaturedPropertiesProps {
  properties: Property[];
}

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({ properties }) => {
  // Filter featured properties and limit to 6
  const featuredProperties = properties
    .filter(property => property.featured)
    .slice(0, 6);

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">Propiedades Destacadas</h2>
            <p className="text-neutral-600 max-w-2xl">
              Descubre nuestras propiedades más exclusivas, seleccionadas cuidadosamente para ofrecerte lo mejor del mercado inmobiliario.
            </p>
          </div>
          <Link 
            to="/properties" 
            className="hidden md:flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
          >
            <span>Ver todas las propiedades</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link 
            to="/properties" 
            className="btn btn-primary"
          >
            Ver todas las propiedades
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
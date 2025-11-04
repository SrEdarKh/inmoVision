import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Bed, 
  Bath, 
  Move, 
  MapPin, 
  Calendar, 
  Tag, 
  Building2,
  Home,
  Share2,
  Heart,
  Phone,
  Mail
} from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import { properties } from '../data/properties';
import { agents } from '../data/agents';
import { motion } from 'framer-motion';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const property = properties.find(p => p.id === Number(id));
  const agent = agents[Math.floor(Math.random() * agents.length)];

  useEffect(() => {
    if (property) {
      document.title = `${property.title} | Inmo-vision`;
    } else {
      document.title = 'Propiedad no encontrada | Inmo-vision';
    }
    window.scrollTo(0, 0);
  }, [property]);

  if (!property) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-serif font-bold mb-4">Propiedad no encontrada</h1>
        <p className="text-neutral-600 mb-8">
          Lo sentimos, la propiedad que estás buscando no existe o ha sido eliminada.
        </p>
        <Link to="/properties" className="btn btn-primary">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver a propiedades
        </Link>
      </div>
    );
  }

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-neutral-50 min-h-screen pb-16">
      {/* Property Images Gallery */}
      <div className="bg-neutral-900 relative">
        <div className="container-custom relative">
          <div className="h-[60vh] flex items-center justify-center overflow-hidden">
            <img 
              src={property.images[currentImageIndex]} 
              alt={property.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full text-neutral-800"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full text-neutral-800"
          >
            <ArrowLeft className="w-6 h-6 transform rotate-180" />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-0 right-0">
            <div className="flex justify-center space-x-2 overflow-x-auto py-2 px-4">
              {property.images.map((img, index) => (
                <div 
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`w-16 h-16 rounded-md overflow-hidden cursor-pointer transition-all ${
                    index === currentImageIndex ? 'ring-2 ring-accent-500 ring-offset-2' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Back button */}
        <div className="mb-6">
          <Link to="/properties" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a propiedades
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      property.listingType === 'sale' ? 'bg-primary-600 text-white' : 'bg-accent-500 text-white'
                    }`}>
                      {property.listingType === 'sale' ? 'En Venta' : 'En Alquiler'}
                    </span>
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-neutral-800/70 text-white">
                      {property.propertyType === 'house' && 'Casa'}
                      {property.propertyType === 'apartment' && 'Apartamento'}
                      {property.propertyType === 'office' && 'Oficina'}
                      {property.propertyType === 'land' && 'Terreno'}
                    </span>
                  </div>
                  <h1 className="text-3xl font-serif font-bold">{property.title}</h1>
                  <div className="flex items-center text-neutral-500 mt-2">
                    <MapPin className="w-5 h-5 mr-1 flex-shrink-0" />
                    <span>{property.address}, {property.city}, {property.state}</span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0">
                  <div className="flex items-center text-primary-600 font-bold">
                    <Tag className="w-6 h-6 mr-2" />
                    <span className="text-3xl">
                      {formatCurrency(property.price)}
                      {property.listingType === 'rent' && <span className="text-sm text-neutral-500 font-normal">/mes</span>}
                    </span>
                  </div>
                </div>
              </div>

              {/* Property Features */}
              <div className="flex flex-wrap justify-between gap-4 py-4 border-t border-b border-neutral-200 my-4">
                {property.bedrooms > 0 && (
                  <div className="flex items-center">
                    <Bed className="w-5 h-5 mr-2 text-primary-600" />
                    <div>
                      <span className="text-lg font-semibold">{property.bedrooms}</span>
                      <p className="text-neutral-500 text-sm">Habitaciones</p>
                    </div>
                  </div>
                )}

                {property.bathrooms > 0 && (
                  <div className="flex items-center">
                    <Bath className="w-5 h-5 mr-2 text-primary-600" />
                    <div>
                      <span className="text-lg font-semibold">{property.bathrooms}</span>
                      <p className="text-neutral-500 text-sm">Baños</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center">
                  <Move className="w-5 h-5 mr-2 text-primary-600" />
                  <div>
                    <span className="text-lg font-semibold">{property.area}</span>
                    <p className="text-neutral-500 text-sm">Metros²</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Building2 className="w-5 h-5 mr-2 text-primary-600" />
                  <div>
                    <span className="text-lg font-semibold capitalize">
                      {property.propertyType === 'house' && 'Casa'}
                      {property.propertyType === 'apartment' && 'Apartamento'}
                      {property.propertyType === 'office' && 'Oficina'}
                      {property.propertyType === 'land' && 'Terreno'}
                    </span>
                    <p className="text-neutral-500 text-sm">Tipo</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary-600" />
                  <div>
                    <span className="text-lg font-semibold">
                      {new Date(property.createdAt).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <p className="text-neutral-500 text-sm">Publicado</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 mb-6">
                <button 
                  className="btn bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                  onClick={toggleFavorite}
                >
                  <Heart className={`w-5 h-5 mr-2 ${isFavorite ? 'text-red-500 fill-red-500' : ''}`} />
                  {isFavorite ? 'Guardado' : 'Guardar'}
                </button>
                <button className="btn bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50">
                  <Share2 className="w-5 h-5 mr-2" />
                  Compartir
                </button>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-semibold mb-4">Descripción</h2>
                <p className="text-neutral-700 whitespace-pre-line">{property.description}</p>
              </div>

              {/* Property Details */}
              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Detalles de la propiedad</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-b border-neutral-200 py-3 flex justify-between">
                    <span className="text-neutral-500">Tipo de propiedad</span>
                    <span className="font-medium">
                      {property.propertyType === 'house' && 'Casa'}
                      {property.propertyType === 'apartment' && 'Apartamento'}
                      {property.propertyType === 'office' && 'Oficina'}
                      {property.propertyType === 'land' && 'Terreno'}
                    </span>
                  </div>
                  <div className="border-b border-neutral-200 py-3 flex justify-between">
                    <span className="text-neutral-500">Precio</span>
                    <span className="font-medium">{formatCurrency(property.price)}</span>
                  </div>
                  <div className="border-b border-neutral-200 py-3 flex justify-between">
                    <span className="text-neutral-500">Área</span>
                    <span className="font-medium">{property.area} m²</span>
                  </div>
                  <div className="border-b border-neutral-200 py-3 flex justify-between">
                    <span className="text-neutral-500">Habitaciones</span>
                    <span className="font-medium">{property.bedrooms}</span>
                  </div>
                  <div className="border-b border-neutral-200 py-3 flex justify-between">
                    <span className="text-neutral-500">Baños</span>
                    <span className="font-medium">{property.bathrooms}</span>
                  </div>
                  <div className="border-b border-neutral-200 py-3 flex justify-between">
                    <span className="text-neutral-500">Estado</span>
                    <span className="font-medium">Disponible</span>
                  </div>
                  <div className="border-b border-neutral-200 py-3 flex justify-between">
                    <span className="text-neutral-500">Ciudad</span>
                    <span className="font-medium">{property.city}</span>
                  </div>
                  <div className="border-b border-neutral-200 py-3 flex justify-between">
                    <span className="text-neutral-500">Código Postal</span>
                    <span className="font-medium">{property.zipCode}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Agent */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-800 text-white p-4">
                <h3 className="text-xl font-serif font-semibold">Contacta con el agente</h3>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <img 
                    src={agent.photo} 
                    alt={agent.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{agent.name}</h4>
                    <p className="text-neutral-500 text-sm">Agente Inmobiliario</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <a href={`tel:${agent.phone}`} className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors">
                    <Phone className="w-5 h-5 mr-2 text-primary-600" />
                    {agent.phone}
                  </a>
                  <a href={`mailto:${agent.email}`} className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors">
                    <Mail className="w-5 h-5 mr-2 text-primary-600" />
                    {agent.email}
                  </a>
                </div>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Nombre completo" 
                      className="input" 
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Correo electrónico" 
                      className="input" 
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Número de teléfono" 
                      className="input" 
                      required
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Mensaje" 
                      className="input" 
                      rows={4}
                      defaultValue={`Me interesa la propiedad "${property.title}" con referencia ID: ${property.id}. Por favor contáctame para más información.`}
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full btn btn-primary"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Similar Properties */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-semibold mb-4">Propiedades Similares</h3>
              <div className="space-y-4">
                {properties
                  .filter(p => 
                    p.id !== property.id && 
                    p.propertyType === property.propertyType &&
                    p.listingType === property.listingType
                  )
                  .slice(0, 3)
                  .map(similarProperty => (
                    <Link 
                      key={similarProperty.id}
                      to={`/properties/${similarProperty.id}`}
                      className="flex gap-3 p-2 rounded-lg hover:bg-neutral-50 transition-colors"
                    >
                      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                        <img 
                          src={similarProperty.mainImage} 
                          alt={similarProperty.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium line-clamp-2 text-sm">
                          {similarProperty.title}
                        </h4>
                        <p className="text-primary-600 font-semibold mt-1 text-sm">
                          {formatCurrency(similarProperty.price)}
                          {similarProperty.listingType === 'rent' && <span className="text-xs text-neutral-500 font-normal">/mes</span>}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
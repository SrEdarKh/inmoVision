import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Move, MapPin, Tag } from 'lucide-react';
import { Property } from '../../types';
import { formatCurrency } from '../../utils/formatters';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const {
    id,
    title,
    price,
    bedrooms,
    bathrooms,
    area,
    propertyType,
    listingType,
    address,
    city,
    mainImage,
  } = property;

  return (
    <div className="card card-hover group">
      <div className="relative overflow-hidden">
        <Link to={`/properties/${id}`}>
          <div className="h-64 overflow-hidden">
            <img
              src={mainImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Badge */}
          <div className="absolute top-4 right-4">
            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
              listingType === 'sale' ? 'bg-primary-600 text-white' : 'bg-accent-500 text-white'
            }`}>
              {listingType === 'sale' ? 'En Venta' : 'En Alquiler'}
            </span>
          </div>

          {/* Property Type */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-neutral-800/70 text-white">
              {propertyType === 'house' && 'Casa'}
              {propertyType === 'apartment' && 'Apartamento'}
              {propertyType === 'office' && 'Oficina'}
              {propertyType === 'land' && 'Terreno'}
            </span>
          </div>
        </Link>
      </div>

      <div className="p-5">
        <div className="mb-3">
          <Link to={`/properties/${id}`} className="hover:text-primary-600 transition-colors">
            <h3 className="text-xl font-serif font-semibold line-clamp-1">{title}</h3>
          </Link>
          <div className="flex items-center text-neutral-500 mt-1">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="text-sm truncate">{address}, {city}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-primary-600 font-semibold">
            <Tag className="w-5 h-5 mr-1" />
            <span className="text-xl">
              {formatCurrency(price)}
              {listingType === 'rent' && <span className="text-sm text-neutral-500 font-normal">/mes</span>}
            </span>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-4">
          <div className="flex justify-between">
            {bedrooms > 0 && (
              <div className="flex items-center text-neutral-600">
                <Bed className="w-4 h-4 mr-1" />
                <span>{bedrooms} {bedrooms === 1 ? 'Habit.' : 'Habits.'}</span>
              </div>
            )}

            {bathrooms > 0 && (
              <div className="flex items-center text-neutral-600">
                <Bath className="w-4 h-4 mr-1" />
                <span>{bathrooms} {bathrooms === 1 ? 'Baño' : 'Baños'}</span>
              </div>
            )}

            <div className="flex items-center text-neutral-600">
              <Move className="w-4 h-4 mr-1" />
              <span>{area} m²</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
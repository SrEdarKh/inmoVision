import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropertyFilter from '../components/ui/PropertyFilter';
import PropertyCard from '../components/ui/PropertyCard';
import { properties as allProperties } from '../data/properties';
import { Property, PropertyFilter as PropertyFilterType } from '../types';
import { Building } from 'lucide-react';

const PropertiesPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const initialFilters: PropertyFilterType = {
    propertyType: queryParams.get('propertyType') || undefined,
    listingType: queryParams.get('listingType') || undefined,
    city: queryParams.get('city') || undefined,
  };

  const [filters, setFilters] = useState<PropertyFilterType>(initialFilters);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(allProperties);

  useEffect(() => {
    document.title = 'Propiedades | Inmo-Visión';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    filterProperties(filters);
  }, [filters]);

  const filterProperties = (currentFilters: PropertyFilterType) => {
    let result = [...allProperties];

    if (currentFilters.propertyType) {
      result = result.filter(property => property.propertyType === currentFilters.propertyType);
    }

    if (currentFilters.listingType) {
      result = result.filter(property => property.listingType === currentFilters.listingType);
    }

    if (currentFilters.city) {
      result = result.filter(property => 
        property.city.toLowerCase().includes(currentFilters.city?.toLowerCase() || '')
      );
    }

    if (currentFilters.minPrice) {
      result = result.filter(property => property.price >= (currentFilters.minPrice || 0));
    }

    if (currentFilters.maxPrice) {
      result = result.filter(property => property.price <= (currentFilters.maxPrice || Infinity));
    }

    if (currentFilters.minBedrooms) {
      result = result.filter(property => property.bedrooms >= (currentFilters.minBedrooms || 0));
    }

    if (currentFilters.minBathrooms) {
      result = result.filter(property => property.bathrooms >= (currentFilters.minBathrooms || 0));
    }

    if (currentFilters.minArea) {
      result = result.filter(property => property.area >= (currentFilters.minArea || 0));
    }

    setFilteredProperties(result);
  };

  const handleFilterChange = (newFilters: PropertyFilterType) => {
    setFilters(newFilters);
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-serif font-bold mb-4">Nuestras Propiedades</h1>
          <p className="text-primary-100 max-w-3xl text-lg">
            Explora nuestra selección de propiedades exclusivas. Utiliza los filtros para encontrar la propiedad que mejor se adapte a tus necesidades.
          </p>
        </div>
      </div>

      <div className="container-custom py-10">
        {/* Filters */}
        <div className="mb-10">
          <PropertyFilter onFilterChange={handleFilterChange} initialFilters={initialFilters} />
        </div>

        {/* Results */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-serif font-semibold">
            {filteredProperties.length} Propiedades encontradas
          </h2>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Building className="w-16 h-16 mx-auto text-neutral-300 mb-4" />
            <h3 className="text-2xl font-serif font-semibold mb-2">No se encontraron propiedades</h3>
            <p className="text-neutral-600 max-w-md mx-auto">
              No hay propiedades que coincidan con tus criterios de búsqueda. Intenta ajustar los filtros para ver más opciones.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;
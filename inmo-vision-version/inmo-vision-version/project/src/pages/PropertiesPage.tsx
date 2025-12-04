import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PropertyFilter from '../components/ui/PropertyFilter';
import PropertyCard from '../components/ui/PropertyCard';
import { Building } from 'lucide-react';

import { Propiedad, PropiedadFilter as PropertyFilterType } from '../types';

const PropertiesPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const initialFilters: PropertyFilterType = {
    propertyType: queryParams.get('propertyType') || undefined,
    listingType: queryParams.get('listingType') || undefined,
    city: queryParams.get('city') || undefined,
  };

  const [filters, setFilters] = useState<PropertyFilterType>(initialFilters);
  const [allProperties, setAllProperties] = useState<Propiedad[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Propiedad[]>([]);
  const [loading, setLoading] = useState(true);

  // ===========================
  // 🚀 CARGAR PROPIEDADES DE DJANGO
  // ===========================
  useEffect(() => {
    async function loadProperties() {
      try {
        const res = await fetch("http://localhost:8000/api/propiedades/");
        const data = await res.json();

        setAllProperties(data);
        setFilteredProperties(data); // por defecto mostrar todo
      } catch (error) {
        console.error("Error cargando propiedades:", error);
      }

      setLoading(false);
      window.scrollTo(0, 0);
    }

    loadProperties();
  }, []);

  useEffect(() => {
    if (allProperties.length > 0) {
      filterProperties(filters);
    }
  }, [filters, allProperties]);

  // ===========================
  // 🔍 FILTRAR PROPIEDADES
  // ===========================
  const filterProperties = (currentFilters: PropertyFilterType) => {
    let result = [...allProperties];

    if (currentFilters.propertyType) {
      result = result.filter(
        p => p.tipo_propiedad === currentFilters.propertyType
      );
    }

    if (currentFilters.listingType) {
      result = result.filter(
        p => p.tipo_negocio === currentFilters.listingType
      );
    }

    if (currentFilters.city) {
      result = result.filter(p =>
        p.ciudad.toLowerCase().includes(currentFilters.city!.toLowerCase())
      );
    }

    if (currentFilters.minPrice) {
      result = result.filter(p => Number(p.precio) >= currentFilters.minPrice!);
    }

    if (currentFilters.maxPrice) {
      result = result.filter(p => Number(p.precio) <= currentFilters.maxPrice!);
    }

    if (currentFilters.minBedrooms) {
      result = result.filter(p => Number(p.habitaciones) >= currentFilters.minBedrooms!);
    }

    if (currentFilters.minBathrooms) {
      result = result.filter(p => Number(p.banos) >= currentFilters.minBathrooms!);
    }

    setFilteredProperties(result);
  };

  const handleFilterChange = (newFilters: PropertyFilterType) => {
    setFilters(newFilters);
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-serif font-bold mb-4">Nuestras Propiedades</h1>
          <p className="text-primary-100 max-w-3xl text-lg">
            Explora nuestra selección de propiedades exclusivas. Usa filtros para encontrar la ideal.
          </p>
        </div>
      </div>

      <div className="container-custom py-10">
        {/* Filtros */}
        <div className="mb-10">
          <PropertyFilter onFilterChange={handleFilterChange} initialFilters={initialFilters} />
        </div>

        {/* Resultados */}
        {loading ? (
          <div className="text-center text-xl py-20">Cargando propiedades...</div>
        ) : (
          <>
            <h2 className="text-2xl font-serif font-semibold mb-6">
              {filteredProperties.length} Propiedades encontradas
            </h2>

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
                  Ajusta los filtros para ver más opciones.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { PropertyFilter as PropertyFilterType } from '../../types';

interface PropertyFilterProps {
  onFilterChange: (filters: PropertyFilterType) => void;
  initialFilters?: PropertyFilterType;
}

const PropertyFilter: React.FC<PropertyFilterProps> = ({ 
  onFilterChange, 
  initialFilters = {} 
}) => {
  const [filters, setFilters] = useState<PropertyFilterType>(initialFilters);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const numericFields = ['minPrice', 'maxPrice', 'minBedrooms', 'minBathrooms', 'minArea'];
    
    let parsedValue: string | number = value;
    if (numericFields.includes(name) && value !== '') {
      parsedValue = parseFloat(value);
    }

    setFilters(prev => ({
      ...prev,
      [name]: parsedValue
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  const resetFilters = () => {
    setFilters({});
    onFilterChange({});
  };

  const toggleAdvanced = () => {
    setIsAdvancedOpen(!isAdvancedOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Property Type */}
          <div>
            <label htmlFor="propertyType" className="block text-sm font-medium text-neutral-700 mb-1">
              Tipo de Propiedad
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={filters.propertyType || ''}
              onChange={handleInputChange}
              className="select"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundSize: "1.5em 1.5em" }}
            >
              <option value="">Todos los tipos</option>
              <option value="house">Casa</option>
              <option value="apartment">Apartamento</option>
              <option value="office">Oficina</option>
              <option value="land">Terreno</option>
            </select>
          </div>

          {/* Listing Type */}
          <div>
            <label htmlFor="listingType" className="block text-sm font-medium text-neutral-700 mb-1">
              Tipo de Anuncio
            </label>
            <select
              id="listingType"
              name="listingType"
              value={filters.listingType || ''}
              onChange={handleInputChange}
              className="select"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundSize: "1.5em 1.5em" }}
            >
              <option value="">Compra o Alquiler</option>
              <option value="sale">Compra</option>
              <option value="rent">Alquiler</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">
              Ciudad
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={filters.city || ''}
              onChange={handleInputChange}
              placeholder="Cualquier ciudad"
              className="input"
            />
          </div>
        </div>

        {/* Advanced Filters Toggle */}
        <div className="mb-4">
          <button
            type="button"
            onClick={toggleAdvanced}
            className="flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
          >
            <span>Filtros Avanzados</span>
            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isAdvancedOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Advanced Filters */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4 transition-all duration-300 ${
            isAdvancedOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
          }`}
        >
          {/* Min Price */}
          <div>
            <label htmlFor="minPrice" className="block text-sm font-medium text-neutral-700 mb-1">
              Precio Mínimo
            </label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              value={filters.minPrice || ''}
              onChange={handleInputChange}
              placeholder="€"
              className="input"
              min="0"
            />
          </div>

          {/* Max Price */}
          <div>
            <label htmlFor="maxPrice" className="block text-sm font-medium text-neutral-700 mb-1">
              Precio Máximo
            </label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              value={filters.maxPrice || ''}
              onChange={handleInputChange}
              placeholder="€"
              className="input"
              min="0"
            />
          </div>

          {/* Min Bedrooms */}
          <div>
            <label htmlFor="minBedrooms" className="block text-sm font-medium text-neutral-700 mb-1">
              Habitaciones (mín)
            </label>
            <input
              type="number"
              id="minBedrooms"
              name="minBedrooms"
              value={filters.minBedrooms || ''}
              onChange={handleInputChange}
              placeholder="Cualquier"
              className="input"
              min="0"
            />
          </div>

          {/* Min Bathrooms */}
          <div>
            <label htmlFor="minBathrooms" className="block text-sm font-medium text-neutral-700 mb-1">
              Baños (mín)
            </label>
            <input
              type="number"
              id="minBathrooms"
              name="minBathrooms"
              value={filters.minBathrooms || ''}
              onChange={handleInputChange}
              placeholder="Cualquier"
              className="input"
              min="0"
            />
          </div>

          {/* Min Area */}
          <div>
            <label htmlFor="minArea" className="block text-sm font-medium text-neutral-700 mb-1">
              Área (m² mín)
            </label>
            <input
              type="number"
              id="minArea"
              name="minArea"
              value={filters.minArea || ''}
              onChange={handleInputChange}
              placeholder="Cualquier"
              className="input"
              min="0"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
          <button
            type="submit"
            className="btn btn-primary flex-grow sm:flex-grow-0"
          >
            <Search className="w-5 h-5 mr-2" />
            Buscar Propiedades
          </button>
          <button
            type="button"
            onClick={resetFilters}
            className="btn btn-secondary"
          >
            Reiniciar Filtros
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyFilter;
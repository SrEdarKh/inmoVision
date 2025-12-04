import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, Bed, Bath, Move, MapPin, Calendar, Tag,
  Building2, Share2, Heart, Phone, Mail
} from 'lucide-react';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    async function loadProperty() {
      try {
        const res = await fetch(`http://localhost:8000/api/propiedades/${id}/`);
        const data = await res.json();
        setProperty(data);
      } catch (error) {
        console.error("Error cargando propiedad:", error);
      }
      setLoading(false);
      window.scrollTo(0, 0);
    }
    loadProperty();
  }, [id]);

  if (loading) {
    return <div className="p-10 text-center text-xl">Cargando...</div>;
  }

  if (!property) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl">Propiedad no encontrada</h1>
        <Link to="/properties" className="btn btn-primary mt-4">
          <ArrowLeft className="w-5 h-5 mr-2" /> Volver
        </Link>
      </div>
    );
  }

  // Preparar imágenes desde Django
  const images = property.imagenes?.map((img: any) => img.foto_propiedad) ?? [];
  const mainImage = property.main_image ? property.main_image : images[0];

  const allImages = [mainImage, ...images];

  return (
    <div className="bg-neutral-50 min-h-screen pb-16">
      {/* Galería de imágenes */}
      <div className="bg-neutral-900 relative">
        <div className="container-custom relative">
          <div className="h-[60vh] flex items-center justify-center overflow-hidden">
            <img
              src={allImages[currentImageIndex]}
              alt={property.titulo}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Botones */}
          <button
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev === 0 ? allImages.length - 1 : prev - 1
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev === allImages.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
          >
            <ArrowLeft className="w-6 h-6 rotate-180" />
          </button>

          {/* Miniaturas */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
            {allImages.map((img: string, index: number) => (
              <img
                key={index}
                src={img}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-16 h-16 object-cover rounded-md border cursor-pointer ${
                  index === currentImageIndex
                    ? "border-primary-600"
                    : "opacity-70 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Información */}
      <div className="container-custom py-8">
        <Link to="/properties" className="inline-flex items-center text-primary-600 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver a propiedades
        </Link>

        <h1 className="text-3xl font-serif font-bold">{property.titulo}</h1>
        <p className="mt-2 text-neutral-700">{property.descripcion}</p>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center">
            <Bed className="w-5 h-5 mr-2 text-primary-600" />
            {property.habitaciones} Hab.
          </div>
          <div className="flex items-center">
            <Bath className="w-5 h-5 mr-2 text-primary-600" />
            {property.baños} Baños
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-primary-600" />
            {property.barrio}, {property.ciudad}
          </div>
          <div className="flex items-center">
            <Tag className="w-5 h-5 mr-2 text-primary-600" />
            ${Number(property.precio).toLocaleString()}
          </div>
        </div>

        {/* Contacto del agente */}
        <div className="mt-10 bg-white shadow-md p-5 rounded-lg">
          <h2 className="text-xl font-serif font-semibold mb-4">Contactar</h2>

          <div className="space-y-3">
            <a href={`tel:${property.agente?.telefono}`} className="flex items-center hover:text-primary-600">
              <Phone className="w-5 h-5 mr-2" /> {property.agente?.telefono}
            </a>
            <a href={`mailto:${property.agente?.email}`} className="flex items-center hover:text-primary-600">
              <Mail className="w-5 h-5 mr-2" /> {property.agente?.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;

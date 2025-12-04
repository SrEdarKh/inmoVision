import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Propiedad } from "../types";
import { PlusCircle, Building } from "lucide-react";
import DashboardPropertyCard from "../components/ui/DashboardPropertyCard";
const DashboardPage: React.FC = () => {
  const [properties, setProperties] = useState<Propiedad[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("http://localhost:8000/api/mis-propiedades/", {
          credentials: "include",
        });
        const data = await res.json();
        setProperties(data);
      } catch (err) {
        console.error("Error cargando propiedades:", err);
      }
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-serif font-bold mb-4">Mi Dashboard</h1>
          <p className="text-primary-100 max-w-3xl text-lg">
            Administra tus propiedades, edítalas o agrega nuevas.
          </p>

          <Link
            to="/dashboard/nueva"
            className="btn btn-white mt-6 inline-flex items-center"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Agregar Nueva Propiedad
          </Link>
        </div>
      </div>

      <div className="container-custom py-10">
        {loading ? (
          <div className="text-center text-xl py-20">Cargando...</div>
        ) : properties.length === 0 ? (
          <div className="text-center py-16">
            <Building className="w-16 h-16 mx-auto text-neutral-300 mb-4" />
            <h3 className="text-2xl font-serif font-semibold mb-2">
              No tienes propiedades aún
            </h3>
            <p className="text-neutral-600">
              ¡Empieza agregando una propiedad ahora!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <DashboardPropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;

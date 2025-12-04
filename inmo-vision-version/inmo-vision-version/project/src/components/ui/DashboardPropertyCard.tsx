import React from "react";
import { Propiedad } from "../../types";
import { Link } from "react-router-dom";
import { Edit, Eye } from "lucide-react";

const DashboardPropertyCard: React.FC<{ property: Propiedad }> = ({ property }) => {
  const main = property.main_image || property.imagenes[0]?.foto_propiedad;

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
      <img src={main} className="h-48 w-full object-cover" alt={property.titulo} />

      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold">{property.titulo}</h3>
        <p className="text-neutral-600 mt-1">
          {property.ciudad} — {property.barrio}
        </p>

        <div className="mt-4 flex justify-between">
          <Link
            to={`/properties/${property.id}`}
            className="text-primary-600 inline-flex items-center"
          >
            <Eye className="w-5 h-5 mr-1" /> Ver
          </Link>

          <Link
            to={`/dashboard/editar/${property.id}`}
            className="text-primary-600 inline-flex items-center"
          >
            <Edit className="w-5 h-5 mr-1" /> Editar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPropertyCard;

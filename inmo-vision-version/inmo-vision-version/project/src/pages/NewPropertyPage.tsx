import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPropertyPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    precio: "",
    habitaciones: "",
    banos: "",
    municipio: "",
    ciudad: "",
    barrio: "",
    direccion: "",
    tipo_negocio: "COMP",
    tipo_propiedad: "CASA",
  });

  const [mainImage, setMainImage] = useState<File | null>(null);
  const [images, setImages] = useState<File[]>([]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    try {
      // Primero crear propiedad
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => formData.append(key, value as string));
      if (mainImage) formData.append("main_image", mainImage);

      const res = await fetch("http://localhost:8000/api/propiedades/", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      const propiedad = await res.json();

      // Subir fotos adicionales
      if (images.length > 0) {
        for (let img of images) {
          const fd = new FormData();
          fd.append("foto_propiedad", img);
          await fetch(`http://localhost:8000/api/propiedades/${propiedad.id}/imagenes/`, {
            method: "POST",
            body: fd,
            credentials: "include",
          });
        }
      }

      navigate("/dashboard");

    } catch (err) {
      console.error("Error al crear propiedad:", err);
    }

    setLoading(false);
  }

  return (
    <div className="container-custom py-10">
      <h1 className="text-3xl font-serif font-bold mb-8">Nueva Propiedad</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-xl grid gap-4">
        <input name="titulo" placeholder="Título" className="input" onChange={handleChange} />
        <textarea name="descripcion" placeholder="Descripción" className="input" onChange={handleChange} />

        <input name="precio" placeholder="Precio" className="input" onChange={handleChange} />

        <div className="grid grid-cols-2 gap-4">
          <input name="habitaciones" placeholder="Habitaciones" className="input" onChange={handleChange} />
          <input name="banos" placeholder="Baños" className="input" onChange={handleChange} />
        </div>

        <input name="municipio" placeholder="Municipio" className="input" onChange={handleChange} />
        <input name="ciudad" placeholder="Ciudad" className="input" onChange={handleChange} />
        <input name="barrio" placeholder="Barrio" className="input" onChange={handleChange} />
        <input name="direccion" placeholder="Dirección" className="input" onChange={handleChange} />

        <select name="tipo_negocio" className="input" onChange={handleChange}>
          <option value="COMP">Comprar</option>
          <option value="ARR">Arrendar</option>
        </select>

        <select name="tipo_propiedad" className="input" onChange={handleChange}>
          <option value="CASA">Casa</option>
          <option value="APARTAMENTO">Apartamento</option>
          <option value="LOTE">Lote</option>
          <option value="LOCAL">Local</option>
        </select>

        <h3 className="text-lg font-semibold">Imagen Principal</h3>
        <input type="file" onChange={(e) => setMainImage(e.target.files?.[0] || null)} />

        <h3 className="text-lg font-semibold">Fotos Extra</h3>
        <input type="file" multiple onChange={(e) => setImages(Array.from(e.target.files || []))} />

        <button className="btn btn-primary mt-4" disabled={loading}>
          {loading ? "Guardando..." : "Crear Propiedad"}
        </button>
      </form>
    </div>
  );
};

export default NewPropertyPage;

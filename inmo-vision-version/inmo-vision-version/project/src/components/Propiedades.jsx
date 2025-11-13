import React, { useEffect, useState } from "react";
import { getPropiedades, createPropiedad } from "./api";

function Propiedades() {
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    fetchPropiedades();
  }, []);

  const fetchPropiedades = async () => {
    const res = await getPropiedades();
    setPropiedades(res.data);
  };

  const agregarPropiedad = async () => {
    await createPropiedad({
      titulo: "Nueva Casa",
      descripcion: "Casa de prueba",
      direccion: "Calle falsa 123",
      precio: 999999,
      imagen: ""
    });
    fetchPropiedades(); // refresca la lista
  };

  return (
    <div>
      <h1>Propiedades</h1>
      <button onClick={agregarPropiedad}>Agregar propiedad</button>
      <ul>
        {propiedades.map((p) => (
          <li key={p.id}>
            {p.titulo} - {p.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Propiedades;

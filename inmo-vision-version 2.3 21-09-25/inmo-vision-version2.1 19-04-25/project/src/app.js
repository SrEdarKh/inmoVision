async function cargarPropiedades() {
    try {
      // ejemplo en app.js
      const API = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api/";
      const respuesta = await fetch(`${API}propiedades/`);

      // const respuesta = await fetch('http://127.0.0.1:8000/api/propiedades/');
      // const propiedades = await respuesta.json();
  
      const contenedor = document.getElementById("propiedades");
  
      propiedades.forEach((prop) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "card";
        tarjeta.style = "width: 18rem; margin: 10px;";
        tarjeta.innerHTML = `
          <img src="${prop.imagen}" class="card-img-top" alt="${prop.titulo}">
          <div class="card-body">
            <h5 class="card-title">${prop.titulo}</h5>
            <p class="card-text">${prop.descripcion}</p>
            <p><strong>Dirección:</strong> ${prop.direccion}</p>
            <p><strong>Precio:</strong> $${prop.precio}</p>
          </div>
        `;
        contenedor.appendChild(tarjeta);
      });
    } catch (error) {
      console.error("Error al cargar propiedades:", error);
    }
  }
  
  document.addEventListener("DOMContentLoaded", cargarPropiedades);

  document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-propiedad");
  
    formulario.addEventListener("submit", async function (e) {
      e.preventDefault(); // Evita que se recargue la página
  
      const nuevaPropiedad = {
        titulo: document.getElementById("titulo").value,
        descripcion: document.getElementById("descripcion").value,
        direccion: document.getElementById("direccion").value,
        precio: document.getElementById("precio").value,
        imagen: document.getElementById("imagen").value,
      };
  
      try {
        const respuesta = await fetch("http://127.0.0.1:8000/api/propiedades/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevaPropiedad),
        });
  
        if (respuesta.ok) {
          alert("Propiedad creada con éxito ✅");
          formulario.reset();
        } else {
          alert("Error al crear propiedad ❌");
        }
      } catch (error) {
        console.error("Error de red:", error);
      }
    });
  });

formulario.reset();

const nueva = await respuesta.json(); // datos devueltos por Django

const tarjeta = document.createElement("div");
tarjeta.className = "card";
tarjeta.style = "width: 18rem; margin: 10px;";
tarjeta.innerHTML = `
  <img src="${nueva.imagen}" class="card-img-top" alt="${nueva.titulo}">
  <div class="card-body">
    <h5 class="card-title">${nueva.titulo}</h5>
    <p class="card-text">${nueva.descripcion}</p>
    <p><strong>Dirección:</strong> ${nueva.direccion}</p>
    <p><strong>Precio:</strong> $${nueva.precio}</p>
    <button class="btn btn-primary btn-sm editar">Editar</button>
    <button class="btn btn-danger btn-sm eliminar">Eliminar</button>
  </div>
`;

document.getElementById("propiedades").appendChild(tarjeta);

// Agrega eventos para editar/eliminar
tarjeta.querySelector(".eliminar").addEventListener("click", () => eliminarPropiedad(nueva.id, tarjeta));
tarjeta.querySelector(".editar").addEventListener("click", () => editarPropiedad(nueva));

async function eliminarPropiedad(id, tarjeta) {
    const confirmar = confirm("¿Seguro que quieres eliminar esta propiedad?");
    if (!confirmar) return;
  
    try {
      const respuesta = await fetch(`http://127.0.0.1:8000/api/propiedades/${id}/`, {
        method: "DELETE",
      });
  
      if (respuesta.ok) {
        tarjeta.remove(); // Elimina de la vista
        alert("Propiedad eliminada ✅");
      } else {
        alert("Error al eliminar ❌");
      }
    } catch (error) {
      console.error("Error de red al eliminar:", error);
    }
  }
async function editarPropiedad(propiedad) {
  const nuevoTitulo = prompt("Nuevo título:", propiedad.titulo);
  const nuevaDescripcion = prompt("Nueva descripción:", propiedad.descripcion);

  if (!nuevoTitulo || !nuevaDescripcion) return;

  const nuevosDatos = {
    ...propiedad,
    titulo: nuevoTitulo,
    descripcion: nuevaDescripcion,
  };

  try {
    const respuesta = await fetch(`http://127.0.0.1:8000/api/propiedades/${propiedad.id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevosDatos),
    });

    if (respuesta.ok) {
      alert("Propiedad actualizada ✅");
      location.reload(); // Recarga la página para ver cambios
    } else {
      alert("Error al actualizar ❌");
    }
  } catch (error) {
    console.error("Error de red al editar:", error);
  }
}
  
  
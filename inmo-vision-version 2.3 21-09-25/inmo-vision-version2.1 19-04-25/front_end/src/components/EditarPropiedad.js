import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';


// Componente Editar permite editar los datos de la propiedad existente
const EditarPropiedad = () => {
    // Obtiene el parámetro `id` de la URL
    const { id } = useParams();


    // Hook para redirigir al usuario a otra ruta
    const navigate = useNavigate();


    // Estado inicial del formulario con los datos de la propiedad
    const [propiedad, setPropiedad] = useState({
        titulo: '', 
        descripcion: '', 
        direccion: '', // direccion de la propiedad
        precio: '',
        imagen: '', // se agrega imagen pero por medio de texto o vinculo
    });


    // Estado para manejar la carga de datos
    const [loading, setLoading] = useState(true);


    // Estado para manejar errores al cargar o actualizar datos
    const [error, setError] = useState(null);


    // Estado para mostrar alertas (éxito o error)
    const [showAlert, setShowAlert] = useState(null);


    // Hook useEffect: carga los datos al montar el componente
    useEffect(() => {
        const fetchPropiedad = async () => {
            setLoading(true); // Indica que los datos están cargando
            setError(null); // Reinicia el estado de error
            try {
                // Realiza una solicitud GET para obtener los datos de la propiedad
                const response = await axios.get(`http://127.0.0.1:8000/api/propiedades/${id}/`);
                setPropiedad(response.data); // Actualiza el estado con los datos
            } catch (err) {
                // maneja errores al cargar los datos
                setError(err.message || 'Error al cargar la propiedad.');
            } finally {
                setLoading(false); // Finaliza el estado de carga
            }
        };

        fetchPropiedad();
    }, [id]); // se ejecuta cuando se cambia el id

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        // actualiza el estado del formulario con el valor ingresado
        setPropiedad({ ...propiedad, [e.target.name]: e.target.value });
    };

    // Maneja el envio del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // previene el comportamiento por defecto del formulario
        try {
            // Realiza una solicitud put para actualizar datos
            await axios.put(`http://127.0.0.1:8000/api/propiedades/${id}/`, propiedad);
            // muestra una alerta con exito
            setShowAlert({variant: 'success', message: 'Propiedad actualizada exitosamente!!!!🎈🎆🎈🎆'});
            // Redirige al usuario a la pagina ppal despues de 1.5 sgs

            setTimeout(() => navigate('/'), 1500);
        } catch (err) {
            // maneja errores al actualizar datos
            console.error("error al actualizar propiedad:", err);
            setShowAlert({ variant: 'danger', message: err.message || 'Error al actualizar la propiedad'});
        }
    };

    // muestra un mensajje de carga mientras se obtienen los datos
    if (loading) {
        return <div> Cargando informacion de la propiedad... 🎭</div>;
    }
    // muestra mensaje de error por si ocurre un problema al cargar los datos
    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    return (
        <div>
            {/* Titulo del formulario */}
            <h2>Editar Propiedad✍</h2>

            {/* alerta condicional: se muestra si hay un mensajde de showAlert */}
            {showAlert && (
                <Alert variant={showAlert.variant} onClose={() => setShowAlert(null)} dismissible>
                    {showAlert.message}
                </Alert>
            )}

            {/* Formulario para editar los datos */}
            <Form onSubmit={handleSubmit}>
                {/* Campo para el nombre */}
                <Form.Group className="mb-3">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                        type="text"
                        name="titulo"
                        value={propiedad.titulo}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                {/* campo para la descripcion*/}
                <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                    type="Text"
                    name="descripcion"
                    value={propiedad.descripcion}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
                        {/* direccion */}
            <Form.Group className="mb-3">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                    type="text"
                    name="direccion"
                    value={propiedad.direccion}
                    onChange={handleChange}
                    required
                />
            </Form.Group>


            {/* precio */}
            <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                    type="number"
                    name="precio"
                    value={propiedad.precio}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* iamgen */}
            <Form.Group className="mb-3">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                type="text"
                name="imagen"
                value={propiedad.imagen}
                onChange={handleChange}
                required
                />
            </Form.Group>

            {/* boton para enviar el formulario */}
            <Button variant="primary" type="submit">Guardar Cambios 💾</Button>

            {/* enlace para cancelar y volver a la pagina ppal */}
            <Link to="/" className="btn btn-secundary ml-2">Cancelar🛑</Link>
            </Form>
        </div>
    );
};

export default EditarPropiedad;
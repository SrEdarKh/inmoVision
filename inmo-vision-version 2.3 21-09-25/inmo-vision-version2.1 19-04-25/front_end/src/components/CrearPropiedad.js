import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

// Componente CrearAlumno: permite crear una nueva propiedad enviando los datos a una API REST

const CrearPropiedad= () => {
    // estado inicial del formulario
    const [propiedad, setPropiedad] = useState({
        titulo: '', // Nombre de la propiedad
        descripcion: '',// descripcion de la propiedad
        direccion: '',
        precio: '',
        imagen: '',
    });

    // hook para redirigir al usuario a otra ruta
    const navigate = useNavigate();

    // Estado para mostrar alertas
    const [showAlert, setShowAlert] = useState(null);

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        // Actualiza el estado del formulario con el valor ingresado
        setPropiedad({ ...propiedad, [e.target.name]: e.target.value });
    };

    //maneja el envio del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // previene el comportamiento por defecto del formulario
        try {
            //envia los datos del formulario a la api
            const response = await axios.post('http://127.0.0.1:8000/api/propiedades/', propiedad);
            //alerta con exito
            setShowAlert ({ variant: 'success', message: 'Propiedad creada, La Puteria'});
            // redirige al usuario a la pagina ppal despues de 1.5 sg
            setTimeout(() => navigate('/'), 1500);
        } catch (error) {
            // muestra una alerta de error
            console.error("Error al crear la propiedad", error);
            setShowAlert({ variant: 'danger', message: error.message || ' Error , no creo ni chimba..'});
        }
    };

    return (
        <div>
            {/* titulo del formulario */}
            <h2>Crear Nueva Propiedad 🆕</h2>
            {/* alerta condicional: muestra si hay un mesaje de showAlert */}
            {showAlert && (
                <Alert variant={showAlert.variant} onClose={() => setShowAlert(null)} dismissible>
                    {showAlert.message}
                </Alert>
            )}
            {/* Formulario para crear una nueva propiedad */}
            <Form onSubmit={handleSubmit}>
                {/* Campo para el nombre*/}
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

                {/* campo para la descripcion */}
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
                    step="0.01"
                    name="precio"
                    value={propiedad.precio}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                {/* imagen*/}
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

                {/* Boton para enviar formulario */}
                <Button variant="primary" type="submit">Guardar💾</Button>

                {/* enlace para cancelar y volver a la pagina ppal */}
                <Link to="/" className="btn btn-secudary  ml-2">🔙</Link>
            </Form>
        </div>
    );
};

export default CrearPropiedad;
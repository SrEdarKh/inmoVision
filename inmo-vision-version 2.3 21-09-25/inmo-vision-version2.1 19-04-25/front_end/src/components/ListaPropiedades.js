import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import { FaEdit, faTrash } from 'react-icons/fa'; // iconos

const ListaPropiedades = () => {
    //estado para almacenar la lista
    const [propiedades, setPropiedades] = useState([]);

    //carga los datos
    const [loading, setLoading] = useState(true);

    //estado para manejar errores
    const [error, setError] = useState(null);

    // estado para mostrar alertas al eliminar usuario
    const [deleteAlert, setDeleteAlert] = useState(null);

    //tamaño de los iconos
    const iconSize = 20;

    // hook useEffect carga la lista de propiedades
    useEffect(() => {
        fetchPropiedades();// llama la funcion para obtener las propiedades
    }, []);

    // funcion para obtener la lista de propiedades desde la api
    const fetchPropiedades = async () => {
        setLoading(true); // Indica que los datos estan cargando
        setError(null); // Reiniciar el estado de error
        try {
            // Realiza una solicitud GET para obtener las propiedades
            const response = await axios.get('http://127.0.0.1:8000/api/propiedades/');
            setPropiedades(response.data); // actualiza el estado con los datos obtenidos
        } catch (err) {
            //maneja errores
            setError(err.message || 'Error al obtener las propiedades. ');
        } finally {
            setLoading(false); // finaliza el estado de carga
        }
    };

    // Funcion para eliminar una propiedad
    const handleDelete = async (id) => {
        // confirma si el usuario desea eliminar una propiedad
        if (window.confirm("¿estas seguro de elimiar esta Hermosa Propiedad..??")) {
            try {
                // realiza una solicitud Delete
                await axios.delete(`http://127.0.0.1:8000/api/propiedades/${id}/`);
                //muestra la alerta de exito
                setDeleteAlert({ variant: 'success', message: 'Propiedad eliminada exitosamente!' });
                fetchPropiedades(); // Recarga la lista de propiedades después de eliminar
                setTimeout(() => setDeleteAlert(null), 3000); // Oculta la alerta después de 3 segundos
            } catch (err) {
                // Maneja errores al eliminar 
                setDeleteAlert({ variant: 'danger', message: err.message || 'Error al eliminar propiedad' });
                setTimeout(() => setDeleteAlert(null), 3000); // Oculta la alerta después de 3 segundos
            }
        }
    };

    // Muestra un mensaje de carga mientras se obtienen los datos
    if (loading) {
        return <div>Cargando Propiedades...</div>;
    }

    // Muestra un mensaje de error si ocurre un problema al cargar los datos
    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    return (

        <div>
            {/* Título de la página */}
            <h2>Lista de Propiedades</h2>

            {/* Botón para crear una nueva propiedad*/}
            <Link to="/crear" className="btn btn-primary mb-3">Crear Nueva Propiedad</Link>

            {/* Alerta condicional: se muestra si hay un mensaje en deleteAlert */}
            {deleteAlert && <Alert variant={deleteAlert.variant}>{deleteAlert.message}</Alert>}

            {/* Tabla para mostrar la lista de propiedades */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Descripción</th>
                        <th>Dirección</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {/* mapea las propiedades y genera fila para cada uno */}

                    {propiedades.map(propiedad => (
                        <tr key={propiedad.id}>
                            <td>{propiedad.id}</td>
                            <td>{propiedad.titulo}</td>
                            <td>{propiedad.descripcion}</td>
                            <td>{propiedad.direccion}</td>
                            <td>{propiedad.precio}</td>
                            <td className="d-flex gap-2"> {/*Se usa flex para alinear iconos*/}
                                {/* Boton para editar propiedad */}
                                <Link to={`/editar/${propiedad.id}`} className="btn btn-warning btn-sm">
                                    <FaEdit size={iconSize} /> {/* Icono de ediar */}
                                </Link>
                                {/* Boton para eliminar la propiedad */}
                                <Button variant="danger" btn-sm onClick={() => handleDelete(propiedad.id)}>
                                    <faTrash size={iconSize} /> {/* icono de eliminar */}
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>    
        </div>
    );
};

export default ListaPropiedades;
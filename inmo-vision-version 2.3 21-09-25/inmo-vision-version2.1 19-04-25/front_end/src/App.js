import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListaPropiedades from "./components/ListaPropiedades";
import CrearPropiedad from "./components/CrearPropiedad";
import EditarPropiedad from "./components/EditarPropiedad"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
    return ( 
        <Router>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Gestión de Propiedades </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Lista de Propiedades</Nav.Link>
                            <Nav.Link as={Link} to="/crear">Crear Propiedad</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="mt-3">
                <Routes>
                    <Route path="/" element={<ListaPropiedades />} />
                    <Route path="/crear" element={<CrearPropiedad />} />
                    <Route path="/editar/:id" element={<EditarPropiedad />} />
                    {/* Nueva ruta pra editar */}
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
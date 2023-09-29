import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Stack, Card} from "react-bootstrap";
import { useNavigate, navigate, useLocation } from 'react-router-dom';
import './cards.css'
import Detalle from '../detalle/detalle';
import Encabezado from "../encabezado/header";

export default function Cards() {
    const location = useLocation();
    const userRole = location.state && location.state.userRole ? location.state.userRole : null;
    const [datos, setDatos] = useState([
        {
            datoId: 1,
            nombre: "Nombre 1",
            descripcion: "Descripcion 1",
            precio: "Precio 1",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXL_RAoqIqvNiORxmqt1PIzmpEv4z08zkWZyjEceo9gc_XgB2sR-iFGqmr1dAvCmBsDo0&usqp=CAU",
        },
        {
            datoId: 1,
            nombre: "Nombre 1",
            descripcion: "Descripcion 1",
            precio: "Precio 1",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXL_RAoqIqvNiORxmqt1PIzmpEv4z08zkWZyjEceo9gc_XgB2sR-iFGqmr1dAvCmBsDo0&usqp=CAU",
        },
        {
            datoId: 1,
            nombre: "Nombre 1",
            descripcion: "Descripcion 1",
            precio: "Precio 1",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXL_RAoqIqvNiORxmqt1PIzmpEv4z08zkWZyjEceo9gc_XgB2sR-iFGqmr1dAvCmBsDo0&usqp=CAU",
        },
        {
            datoId: 1,
            nombre: "Nombre 1",
            descripcion: "Descripcion 1",
            precio: "Precio 1",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXL_RAoqIqvNiORxmqt1PIzmpEv4z08zkWZyjEceo9gc_XgB2sR-iFGqmr1dAvCmBsDo0&usqp=CAU",
        }
    ]);
    const [datoId, setDatoId] = useState(0);

    const handleCardClick = (id) => {
        if (datoId !== id) { 
            setDatoId(id);
        } else {
            setDatoId(0);
        }
    }


    return(
        <Container>
        <Encabezado/>
        <Row>
            <Col md="8">
                <div className="card-container">
                    {datos.map((dato) => (
                        <Card key={dato.datoId} className="card" onClick={() => handleCardClick(dato.datoId)}>
                            <Card.Img className="img img-fluid" variant="top" src={dato.imagen} />
                            <Card.Body>
                                <Card.Title>{dato.nombre}</Card.Title>
                                <Card.Text>{dato.descripcion}</Card.Text>
                                <Card.Text>{dato.precio}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Col>
            <Col md="4">
                {datoId !== 0 && <Detalle id={datoId} />}
            </Col>
        </Row>
        </Container>
    );
}
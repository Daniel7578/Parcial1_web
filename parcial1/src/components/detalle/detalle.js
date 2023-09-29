import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Stack, Card} from "react-bootstrap";
import { useNavigate, navigate } from 'react-router-dom';

export default function Detalle(props) {
    const datos = props.datos
    const datosDetalle = [
        {
            id: 1,
            nombre: "Cafe especial para ti",
            fecha: "2023-01-18",
            notas: "Panela, durazno, caramelo",
            altura: "1920 msnm",
        },
        {
            id: 2,
            nombre: "Cafe de la casa",
            fecha: "2023-01-18",
            notas: "Panela, durazno, caramelo",
            altura: "1920 msnm",
        },
        {
            id: 3,
            nombre: "Cafe antioqueño",
            fecha: "2023-01-18",
            notas: "Panela, durazno, caramelo",
            altura: "1920 msnm",
        },
        {
            id: 4,
            nombre: "Cafe con amor",
            fecha: "2023-01-18",
            notas: "Panela, durazno, caramelo",
            altura: "1920 msnm",
        }
    ]
    const dato = datosDetalle.find(dato => dato.id === props.datoId);
    console.log(dato);
    return (
        <Container>
                    <Card>
                    <Card.Title style={{fontWeight: "bold"}}>{dato.nombre}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{dato.fecha}</Card.Subtitle>
                        <Card.Img className="img img-fluid" variant="top" src={"https://lavaive.com/wp-content/uploads/2022/01/PROMO-EDICION-TRADICIONAL_1.png"} />
                        <Card.Body>
                            <Card.Text>
                                <p className="card-text">Notas</p>
                                <p className="card-text">{dato.notas}</p>
                                <p><strong>Cultivado a una altura de:</strong></p>
                                <p className="card-text">{dato.altura}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
        </Container>
    );

}
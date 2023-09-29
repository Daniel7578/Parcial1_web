import React, { useState } from "react";
import { Row, Col} from "react-bootstrap";
import './cards.css'
import Detalle from '../detalle/detalle';

export default function Cards() {
    const [datos, setDatos] = useState([
        {
            id: 1,
            nombre: "Cafe especial para ti",
            tipo: "Planta",
            region: "Caldas"
        },
        {
            id: 2,
            nombre: "Cafe de la casa",
            tipo: "Planta",
            region: "Tolima"
        },
        {
            id: 3,
            nombre: "Cafe antioqueño",
            tipo: "antioqueño",
            region: "Antioquia"
        },
        {
            id: 4,
            nombre: "Cafe con amor",
            tipo: "Planta",
            region: "Cundinamarca"
        },
    ]);
    const [datoId, setDatoId] = useState(0);

    const handleClick = (id) => {
        if (datoId !== id) { 
            setDatoId(id);
        } else {
            setDatoId(0);
        }
    }


    return(
        <Row>
            <Col lg="8">
                <table className="table">
                    <thead class="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Tipo</th>
                            <th>Region</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((item) => (
                            <tr key={item.id} onClick={() => handleClick(item.id)}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.tipo}</td>
                                <td>{item.region}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Col>
            <Col lg="4">
                {datoId !== 0 ? <Detalle datoId={datoId} /> : null}
            </Col>
        </Row>
    );
}
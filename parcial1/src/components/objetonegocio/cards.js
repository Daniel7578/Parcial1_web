import React, { useState, useEffect } from "react";
import { Row, Col, Container} from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import './cards.css'
import Detalle from '../detalle/detalle';

export default function Tabla() {
    const [datoId, setDatoId] = useState(0);
    const [cafes, setCafes] = useState([]);
    useEffect(() => {
        const URL =
            "http://localhost:3001/cafes";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setCafes(data);
            });
    }, []);
    const handleClick = (id) => {
        if (datoId !== id) { 
            setDatoId(id);
            console.log(id);
        } else {
            setDatoId(0);
        }
    }


    return(
        <Container>
        <Row>
            <Col lg="8">
                <table className="table">
                    <thead class="table-dark">
                        <tr>
                            <th>#</th>
                            <th><FormattedMessage id= 'Nombre'/></th>
                            <th><FormattedMessage id= 'Tipo'/></th>
                            <th><FormattedMessage id= 'Region'/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cafes.map((item) => (
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
        </Container>
    );
}
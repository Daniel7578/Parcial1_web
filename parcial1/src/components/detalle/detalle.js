import React, { useEffect, useState } from "react";
import {Card} from "react-bootstrap";
import { FormattedMessage } from "react-intl";

export default function Detalle(cafeId) {
    console.log(cafeId);
    const [dato, setDato] = useState({});
    useEffect(() => {
        const URL =  `http://localhost:3001/cafes/${cafeId.datoId}`;
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setDato(data);
            });
    }
    , []);

    console.log(dato);
    return (
                <Card className="card mb-3" style={{width: '311px', height: '353px', backgroundColor: '#E0BBBB33', borderColor: 'black'}}>
                    <Card.Title style={{fontWeight: "bold"}}>{dato.nombre}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" >{dato.fecha_cultivo}</Card.Subtitle>
                        
                        <Card.Body>
                            <Card.Text>
                            <Card.Img className="img" style={{height: '150px', width: '116px', verticalAlign: 'middle'}} src={dato.imagen}/>
                                <p className="card-text"><FormattedMessage id = 'Notas'/> <br/> {dato.notas}</p>
                                <p><strong><FormattedMessage id = 'Cultivado'/> <br/> {dato.altura} <FormattedMessage id = 'msnm'/></strong></p>
                            </Card.Text>
                        </Card.Body>
                </Card>
    );

}
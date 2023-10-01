import './header.css'
import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

function Encabezado() {
    const Titulo = styled.h2`
        font-family: 'Indie Flower', cursive;
        font-size: 36px;
        font-weight: bolder;
        text-align: left;
        line-height: 53px;
        font-style: normal;
    `;
    return (
        <Container>
            <Titulo>
                El aroma mágico
            </Titulo>
            <hr />
            <img className="headerimg" src="https://cdn.discordapp.com/attachments/1106582725000966205/1111741198986649661/image_1.png" alt="cafe" />
            <hr />
        </Container>
    );
}

export default Encabezado;
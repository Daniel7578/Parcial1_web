import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import './login.css';

function Login() {
    const [nombreUsuario, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [fallo, setFallo] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nombreUsuario.trim() === '' || password.trim() === '') {
            setFallo(true);
            setError("Empty");
            return
        } else {
          let config = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({"login": nombreUsuario, "password": password})
          }
          const data = (await fetch('http://localhost:3001/login', config));
          const dataJson = await data.json();
          console.log(dataJson.status);
          if (dataJson.status === "success") {
            navigate("/Home")
            
          }
          else{
            setFallo(true);
            setError("Incorrect");
            return
            
          }

          
        }
        setFallo(false);
    }
    const handleAbort = (e) => {
        e.preventDefault();
        setNombre('');
        setPassword('');
        setFallo(false);
    }

    return (
      <Container>
        <Row>
            <Col lg="2"></Col>
            <Col>
                <Container className="contendor-formulario">
                <p style={{fontWeight: 'bold'}}>
                    <FormattedMessage 
                    id="Login"
                    values={{strong : (chunks) => <strong>{chunks}</strong>}} />
                </p>
                    <Form className="formulario">
                        <Form.Group className="formulario_texto">
                            <Form.Label><FormattedMessage id = 'Username'/></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre de usuario o Username"
                                onChange={e => setNombre(e.target.value)}
                                value={nombreUsuario}
                            />
                        </Form.Group>
                        <Form.Group className="formulario_texto">
                            <Form.Label><FormattedMessage id = 'Contra'/></Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña o Password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                        </Form.Group>
                        <br />
                        <Row style={{justifyContent: 'center', display: 'flex', alignItems: 'center', paddingBottom: '3rem'}}>
                        <Button className="ingresoSesion" type="submit" onClick={handleSubmit} style={{ backgroundColor:"#8FA98F", border: "0px", borderRadius: 0, color: "black", fontWeight: 'bold', padding: '10px 20px' , margin: '0 5rem'} }>
                            <FormattedMessage id = 'Access'/>
                        </Button>
                        <Button className="abortar" type="reset" style={{backgroundColor:"#E75D5D", border: "0px", borderRadius: 0, color: "black", fontWeight: 'bold', padding: '10px 20px' , margin: '0 5rem'}} onClick={handleAbort}>
                            <FormattedMessage id = 'Cancel'/>
                        </Button>
                        </Row>
                        {fallo && <p className="error"><FormattedMessage id={error}/></p>}
                    </Form>
                </Container>
            </Col>
            <Col lg="2"></Col>
        </Row>
      </Container>
    )
}

export default Login;

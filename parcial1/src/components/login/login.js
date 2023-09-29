import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const [nombreUsuario, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [fallo, setFallo] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const usuarios = [
      {
        nombre: "admin",
        password: "admin"
      },
      {
        nombre: "usuario",
        password: "usuario"
      }
    ] 

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nombreUsuario.trim() === '' || password.trim() === '') {
            setFallo(true);
            setError("Campos vacios");
            return
        } else {
          const usuario = usuarios.find(usuario => usuario.nombre === nombreUsuario && usuario.password === password);
          if (!usuario) {
            setFallo(true);
            setError("Usuario o contraseña incorrectos");
            return
          }
          else{
            navigate("/Home")
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

        <Row>
            <Col lg="2"></Col>
            <Col>
                <div className="contendor-formulario">
                    <p style={{fontWeight: 'bold'}}>Inicio de sesión</p>
                    <Form className="formulario">
                        <Form.Group className="formulario_texto">
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre de usuario o Username"
                                onChange={e => setNombre(e.target.value)}
                                value={nombreUsuario}
                            />
                        </Form.Group>
                        <Form.Group className="formulario_texto">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña o Password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                        </Form.Group>
                        <br />
                        <Button className="ingresoSesion" type="submit" onClick={handleSubmit} style={{ backgroundColor:"#8FA98F", border: "0px", borderRadius: 0, color: "black", fontWeight: 'bold'}}>
                            Ingresar
                        </Button>
                        <Button className="abortar" type="reset" onClick={handleAbort}>
                            Cancelar
                        </Button>
                        {fallo && <p className="error">{error}</p>}
                    </Form>
                </div>
            </Col>
            <Col lg="2"></Col>
        </Row>
    )
}

export default Login;

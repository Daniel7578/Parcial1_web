import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Stack} from "react-bootstrap";
import { useNavigate, navigate } from 'react-router-dom';
import './login.css'

export default function Login() {
    const emailRegex = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,}$/);
    const [title, setTitle] = useState("Acceder");
    const navigate = useNavigate();
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [showPasswordForm, setShowPasswordForm] = useState(false);

    const handleContinueClick = () => {
      if (email !== "") {
        // Validar que se haya ingresado un correo electrónico
        setPassword("");
        setShowPasswordForm(true);
        setTitle(email);
        
      }
    };
  
    const handleLoginClick = () => {
      if (password !== "") {
        // En caso de que se haya ingresado una contraseña, se navega a home
        navigate("/Home");
      }
    };
    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setPassword("");

    
        if (emailRegex.test(newEmail)) {
          setIsEmailValid(true);
          e.target.setCustomValidity('');
        } else {
          setIsEmailValid(false);
          e.target.setCustomValidity('Ingresa un email valido');
        }
      };
    
      const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    
        if (passwordRegex.test(newPassword)) {
          setIsPasswordValid(true);
          e.target.setCustomValidity('');
        } else {
          setIsPasswordValid(false);
          e.target.setCustomValidity('Contraseña invalida debe contener al menos 6 caracteres, una mayuscula, una minuscula, un numero y un caracter especial');
        }
      };

      return (
        <Container>
          <Row className="border solid grey" style={{margin: "40px"}}>
          <Col className="col-md-6">
          <img className="img img-fluid mx-auto" src="https://www.nationalgeographic.com.es/medio/2023/06/01/the-bottle-tree-portal_8aba9f36_230601093631_800x800.jpg" alt="img.png" border="0"  />
          </Col>
          <Col className="col-md-6 d-flex align-items-center  justify-content-center">
            <Stack allign = "center" justify= "center">
            <h3 className="title">{title}</h3>
                {showPasswordForm ? (
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              value={password}
                              type="password"
                              placeholder="Password"
                              onChange={handlePasswordChange}
                              isInvalid={!isPasswordValid}
                              isValid={isPasswordValid}
                            />
                            <Form.Text className="text-muted">
                              Your password should have numbers and letters and should be at least 9 characters long
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                              Invalid password
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" onClick={handleLoginClick}>
                            Ingresar
                        </Button>
                    </Form>
                ) : (
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control
                            value={email}
                            type="email"
                            placeholder="Enter email"
                            onChange={handleEmailChange}
                            isInvalid={!isEmailValid}
                            isValid={isEmailValid}
                            />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                            Invalid email
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" onClick={handleContinueClick}>
                            Continuar
                        </Button>
                    </Form>
                )}
            </Stack>
          </Col>
        </Row>
            
        </Container>
      );
}
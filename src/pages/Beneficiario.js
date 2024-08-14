import { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/Login.css';
import axios from "axios";
import RegisterPopup from '../components/EntrarPopup';
import logoMedi from '../components/imgs/logo-medi-login.png';

const Beneficiario = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8085/api/v1/client/login", {
        email: email,
        password: password,
      });

      console.log(response.data);

      if (response.data.message === "Email not exits") {
        alert("Email não existe");
      } else if (response.data.message === "Login Success") {
        navigate('/home');
      } else {
        alert("Email ou senha incorretos");
      }
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao tentar fazer login");
    }
  }

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="social-login-box">
        <a href="/" className="logomedi">
          <img src={logoMedi} alt="logomedi" />
        </a>
      </div>

      <div className="login-box">
        <h2>Área restrita</h2>
        <Form onSubmit={login}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nº da carteirinha</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nº do CPF</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>

      <div className="background-image">
        {/* Adicione uma imagem de ônibus como plano de fundo */}
      </div>
    </div>
  );
};

export default Beneficiario;

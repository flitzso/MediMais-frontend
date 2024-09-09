import { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/Funcionario.css';
import axios from "axios";
import RegisterPopup from '../components/EntrarPopup';
import logoMedi from '../components/imgs/logo-medi-login.png';

const Funcionario = () => {
  const [email, setEmail] = useState("");
  const [uuc, setUUC] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/employees", {
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
    <div className="login-container-2 d-flex justify-content-center align-items-center">
      <div className="social-login-box-2">
        <a href="/" className="logomedi">
          <img src={logoMedi} alt="logomedi" />
        </a>
      </div>

      <div className="login-box-2">
        <h2>Login</h2>
        <Form onSubmit={login}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="uuc">
            <Form.Label>UUC</Form.Label>
            <Form.Control
              type="uuc"
              placeholder="uuc"
              value={uuc}
              onChange={(event) => {
                setUUC(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" href="/credenciamento" type="submit">
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

export default Funcionario;

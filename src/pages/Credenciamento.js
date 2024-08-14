// Gredenciamento.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const Gredenciamento = () => {
  const [formData, setFormData] = useState({
    Nome: '',
    dataNascimento: '',
    CPF: '',
    Telefone: '',
    Email: '',
    Password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio de dados
    setMessage('Cadastro realizado com sucesso!');
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor, por exemplo.
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h4>Cadastro de Credenciamento</h4>
            </Card.Header>
            <Card.Body>
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNome">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="Nome"
                    value={formData.Nome}
                    onChange={handleChange}
                    placeholder="Digite seu nome"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formDataNascimento">
                  <Form.Label>Data de Nascimento</Form.Label>
                  <Form.Control
                    type="date"
                    name="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formCPF">
                  <Form.Label>CPF</Form.Label>
                  <Form.Control
                    type="text"
                    name="CPF"
                    value={formData.CPF}
                    onChange={handleChange}
                    placeholder="Digite seu CPF"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formTelefone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    type="text"
                    name="Telefone"
                    value={formData.Telefone}
                    onChange={handleChange}
                    placeholder="Digite seu telefone"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="Digite seu email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    name="Password"
                    value={formData.Password}
                    onChange={handleChange}
                    placeholder="Digite sua senha"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Cadastrar
                </Button>
                <Button variant="primary" href="/" type="submit">
                  Inicio
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Gredenciamento;

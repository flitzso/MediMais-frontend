import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import jsPDF from 'jspdf';

const Boleto = () => {
  const [formData, setFormData] = useState({
    codigoBoleto: '',
    valor: '',
    vencimento: '',
    emitenteNome: '',
    emitenteCpfCnpj: '',
    pagadorNome: '',
    pagadorCpfCnpj: '',
    situacao: 'pendente',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF();
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text("Boleto de Pagamento", 10, 10);
    doc.text(`Código do Boleto: ${formData.codigoBoleto}`, 10, 20);
    doc.text(`Valor: R$ ${formData.valor}`, 10, 30);
    doc.text(`Vencimento: ${formData.vencimento}`, 10, 40);
    doc.text(`Emitente: ${formData.emitenteNome}`, 10, 50);
    doc.text(`CPF/CNPJ do Emitente: ${formData.emitenteCpfCnpj}`, 10, 60);
    doc.text(`Pagador: ${formData.pagadorNome}`, 10, 70);
    doc.text(`CPF/CNPJ do Pagador: ${formData.pagadorCpfCnpj}`, 10, 80);
    doc.text(`Situação: ${formData.situacao}`, 10, 90);

    doc.save('boleto.pdf');
  };

  return (
    <Container>
      <h2 className="my-4">Emitir Boleto</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCodigoBoleto">
          <Form.Label>Código do Boleto</Form.Label>
          <Form.Control
            type="text"
            name="codigoBoleto"
            value={formData.codigoBoleto}
            onChange={handleChange}
            placeholder="Digite o código do boleto"
            required
          />
        </Form.Group>

        <Form.Group controlId="formValor">
          <Form.Label>Valor</Form.Label>
          <Form.Control
            type="number"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
            placeholder="Digite o valor"
            step="0.01"
            required
          />
        </Form.Group>

        <Form.Group controlId="formVencimento">
          <Form.Label>Data de Vencimento</Form.Label>
          <Form.Control
            type="date"
            name="vencimento"
            value={formData.vencimento}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmitenteNome">
          <Form.Label>Nome do Emitente</Form.Label>
          <Form.Control
            type="text"
            name="emitenteNome"
            value={formData.emitenteNome}
            onChange={handleChange}
            placeholder="Digite o nome do emitente"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmitenteCpfCnpj">
          <Form.Label>CPF/CNPJ do Emitente</Form.Label>
          <Form.Control
            type="text"
            name="emitenteCpfCnpj"
            value={formData.emitenteCpfCnpj}
            onChange={handleChange}
            placeholder="Digite o CPF ou CNPJ do emitente"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPagadorNome">
          <Form.Label>Nome do Pagador</Form.Label>
          <Form.Control
            type="text"
            name="pagadorNome"
            value={formData.pagadorNome}
            onChange={handleChange}
            placeholder="Digite o nome do pagador"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPagadorCpfCnpj">
          <Form.Label>CPF/CNPJ do Pagador</Form.Label>
          <Form.Control
            type="text"
            name="pagadorCpfCnpj"
            value={formData.pagadorCpfCnpj}
            onChange={handleChange}
            placeholder="Digite o CPF ou CNPJ do pagador"
            required
          />
        </Form.Group>

        <Form.Group controlId="formSituacao">
          <Form.Label>Situação</Form.Label>
          <Form.Control
            as="select"
            name="situacao"
            value={formData.situacao}
            onChange={handleChange}
          >
            <option value="pendente">Pendente</option>
            <option value="pago">Pago</option>
            <option value="cancelado">Cancelado</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Gerar e Baixar Boleto
        </Button>
      </Form>
    </Container>
  );
};

export default Boleto;

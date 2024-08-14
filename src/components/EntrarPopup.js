import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../components/css/EntrarPopup.css';


const EntrarPopup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <>
      <a className="btnEntrar btn" href="/cadastro" onClick={handleShow}>
        Entrar
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="button-container">
          <Button variant="#" href="/beneficiario" className="my-2">Beneficiario</Button>
          <Button variant="#" href="/gestorempresa" className="my-2">Gestor de empresa</Button>
          <Button variant="#" href="/credenciado" className="my-2">Credenciado</Button>
          <Button variant="#" href="/funcionario" className="my-2">Funcionario</Button>
          <Button variant="#" href="/boleto" className="my-2">Boleto</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EntrarPopup;
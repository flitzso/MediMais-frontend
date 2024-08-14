import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeBackground from '../components/imgs/home_background.png';
import '../components/css/Home.css'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Contratos from '../components/Contratos';

const FaleConosco = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
      <h2 className="text-center mb-4">FALE CONOSCO</h2>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input type="text" className="form-control" id="nome" placeholder="Digite seu nome" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
            </div>
            <div className="mb-3">
              <label htmlFor="telefone" className="form-label">Telefone para contato</label>
              <input type="tel" className="form-control" id="telefone" placeholder="Digite seu telefone" />
            </div>
            <div className="mb-3">
              <label htmlFor="celular" className="form-label">Celular para contato</label>
              <input type="tel" className="form-control" id="celular" placeholder="Digite seu celular" />
            </div>
            <div className="mb-3">
              <label htmlFor="mensagem" className="form-label">Mensagem</label>
              <textarea className="form-control" id="mensagem" rows="3" placeholder="Digite sua mensagem"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="mb-4">
            <h4>Unidade X</h4>
            <p>Centro Médico<br />
            Rua Sem nome, 0000<br />
            Vila Italia - US<br />
            <strong>(00) 0000-0000</strong><br />
            Atendimento de Segunda a Domingo inclusive feriados das 7hs às 22hs</p>
          </div>
          <div className="mb-4">
            <h4>Unidade Y</h4>
            <p>Rua Zero, 000<br />
            Vila T - US<br />
            <strong>(00) 0000-0000</strong><br />
            Atendimento de Segunda à Sexta das 7hs às 19hs</p>
          </div>
          <div>
            <h4>Telefones</h4>
            <p>Marcação de consulta: <strong>(00) 0000-0000</strong><br />
            Emissão de guias: <strong>(00) 0000-0000</strong><br />
            Administração: <strong>(00) 0000-0000</strong></p>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default FaleConosco ;

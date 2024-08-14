import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const AgendamentoConsulta = () => {
  return (
    <div>
      <NavBar />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Área Restrita</h5>
                <form>
                  <div className="form-group">
                    <label htmlFor="cardNumber">Nº da Carteirinha</label>
                    <input type="text" className="form-control" id="cardNumber" placeholder="Digite o número da carteirinha" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cpf">Nº do CPF</label>
                    <input type="text" className="form-control" id="cpf" placeholder="Digite o CPF" />
                  </div>
                  <button type="submit" className="btn btn-primary mt-3 w-100">Entrar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AgendamentoConsulta;

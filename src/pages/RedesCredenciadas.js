import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeBackground from '../components/imgs/home_background.png';
import '../components/css/Home.css'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Contratos from '../components/Contratos';

const RedesCredenciadas = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
      <h2 className="text-center mb-4">Rede Credenciada</h2>
      
      <form>
        <div className="mb-3">
          <label htmlFor="plano" className="form-label">Informe o Plano</label>
          <input type="text" className="form-control" id="plano" placeholder="Digite o plano"/>
        </div>

        <div className="mb-3">
          <label htmlFor="uf" className="form-label">UF</label>
          <select className="form-select" id="uf">
            <option value="" disabled selected>Selecione o estado</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="MG">Minas Gerais</option>
            <option value="RS">Rio Grande do Sul</option>
            {/* Adicione mais opções conforme necessário */}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="cidade" className="form-label">Cidade</label>
          <input type="text" className="form-control" id="cidade" placeholder="Digite a cidade"/>
        </div>

        <div className="mb-3">
          <label htmlFor="bairro" className="form-label">Bairro</label>
          <input type="text" className="form-control" id="bairro" placeholder="Digite o bairro"/>
        </div>

        <div className="mb-3">
          <label htmlFor="tipoServico" className="form-label">Tipo do Serviço</label>
          <input type="text" className="form-control" id="tipoServico" placeholder="Digite o tipo de serviço"/>
        </div>

        <div className="mb-3">
          <label htmlFor="especialidade" className="form-label">Especialidade</label>
          <input type="text" className="form-control" id="especialidade" placeholder="Digite a especialidade"/>
        </div>

        <button type="submit" className="btn btn-primary">Buscar Serviços</button>
      </form>

      <div className="mt-4">
        <h5>Serviços localizados</h5>
        {/* Aqui você pode listar os serviços localizados */}
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default RedesCredenciadas;

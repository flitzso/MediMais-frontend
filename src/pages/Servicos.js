import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeBackground from '../components/imgs/home_background.png';
import '../components/css/Home.css'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Contratos from '../components/Contratos';

const Servicos = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
      <h2 className="text-center mb-4">Medicina Assistencial</h2>
      <p className="mb-4">
        A STSaúde presta serviços em medicina assistencial através do sistema de planos de saúde.
      </p>

      <div className="mb-4">
        <div className="card-body">
          <h5 className="card-title">Objetivos</h5>
          <ul className="card-text">
            <li>Oferecer a seus beneficiários uma assistência médica sob a óptica de saúde integral com a tranqüilidade e segurança do médico da família.</li>
            <li>Autocapacitar seus beneficiários para, em ação conjunta com a equipe STSaúde, promover a saúde de todos.</li>
            <li>Produtividade e lucratividade para a empresa.</li>
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <div className="card-body">
          <h5 className="card-title">Benefícios Diferenciados</h5>
          <ul className="card-text">
            <li>Atendimento centralizado, personalizado e multidisciplinar.</li>
            <li>Médicos, nutricionistas, psicólogos, fisioterapeutas, fonoaudiólogos, enfermeiros, serviço social e outros.</li>
            <li>Unidades próprias para atendimento ambulatorial.</li>
            <li>Central de marcação de consultas por telefone, fax ou email.</li>
            <li>Serviço de apoio ao cliente (SAC).</li>
            <li>Plantão Administrativo 24 horas.</li>
            <li>DRE - Departamento de Relações Empresariais.</li>
            <li>Laboratórios e clínicas altamente qualificados.</li>
            <li>Controle informatizado do absenteísmo.</li>
            <li>Prontuário Médico Informatizado.</li>
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <div className="card-body">
          <h5 className="card-title">Tipo de Plano</h5>
          <p className="card-text">
            <strong>Ambulatorial Quality</strong><br/>
            <strong>Referência Quality</strong>
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="card-body">
          <h5 className="card-title">Relação Custo/Benefício</h5>
          <p className="card-text">
            A mais adequada do mercado. Permite o acesso à assistência médica a todos através de empresas ou individualmente.
          </p>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Servicos;

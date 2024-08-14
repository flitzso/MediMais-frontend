import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeBackground from '../components/imgs/home_background.png';
import '../components/css/Home.css'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const Sobre = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
      <h2 className="text-center mb-4">Sobre Nós</h2>
      <p className="text-center">Conheça um pouco sobre nossa história e nossos valores</p>

      <div className="mb-4">
        <div className="card-body">
          <h5 className="card-title">Histórico</h5>
          <p className="card-text">
            A MediMais é uma empresa de porte médio, no mercado desde 1984, dotada de uma administração dinâmica, buscando sempre um elevado padrão de atendimento.
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="card-body">
          <h5 className="card-title">Filosofia</h5>
          <p className="card-text">
            Centrar todas atenções no Ser Humano, direcionando nossas ações para Promoção da Saúde, de todos aqueles a quem prestamos serviços.
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="card-body">
          <h5 className="card-title">Missão</h5>
          <p className="card-text">
            Nossa missão é auto-capacitar os indivíduos promovendo a saúde de todos.
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="card-body">
          <h5 className="card-title">Objetivo</h5>
          <p className="card-text">
            Promoção da Saúde, através da identificação e ação nos Determinantes de Saúde em todos os processos que envolvem o atendimento e cuidado com os nossos beneficiários.
          </p>
        </div>
      </div>

      <div className="mb-4">
          <h5 className="card-title">Metas</h5>
          <ul className="card-text">
            <li>Maior resolubilidade</li>
            <li>Melhor qualidade no atendimento</li>
            <li>Ações pró-ativas de promoção da saúde</li>
            <li>Otimização de recursos</li>
          </ul>
        </div>
    </div>
      <Footer />
    </div>
  );
};

export default Sobre;

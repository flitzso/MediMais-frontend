import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeBackground from '../components/imgs/home_background.png';
import '../components/css/Home.css'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Contratos from '../components/Contratos';

const Unidades = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
      <h2 className="text-center mb-4">Nossas Unidades</h2>
      
      <div className="mb-5">
        <h4>Unidade X</h4>
        <p><strong>Endereço:</strong> Rua x, 000 - y - SP</p>
        <p><strong>Funcionamento:</strong> Segunda a sexta-feira das 7hs às 19hs.</p>
        <p><strong>Estacionamento Credenciado:</strong> xxxx, R. x, 000 - yyyy, São Paulo</p>
      </div>

      <div className="mb-5">
        <h4>Unidade Y</h4>
        <p><strong>Endereço:</strong> Rua x, 0000- Vila yy- SP</p>
        <p><strong>Funcionamento:</strong> Segunda a sexta-feira das 7hs às 19hs.</p>
        <p><strong>Estacionamento Credenciado:</strong> 
          Parking Estacionamento LTDA ? ME <br />
          Entrada I: Rua xx n° 0000 - yy - São Paulo <br />
          Entrada II: Rua x nº 000 - yy- São Paulo
        </p>
      </div>

      <div className="mb-5">
        <h4>Centro Médico</h4>
        <p><strong>Endereço:</strong> Rua xx, 000 - yy - SP</p>
        <p><strong>Funcionamento:</strong> Diariamente, inclusive aos sábados, domingos e feriados, das 7hs às 22hs.</p>
        <p><strong>Estacionamento Credenciado:</strong> 
          Parking Estacionamento LTDA ? ME <br />
          Entrada I: Rua xx n° 0000- yy - São Paulo <br />
          Entrada II: Rua xx nº 000 - yy - São Paulo
        </p>
      </div>

      <div className="my-4">
        <h5>Legenda de Ícones</h5>
        <ul>
          <li>Programa de Acreditação</li>
          <li>Comunicação de eventos adversos</li>
          <li>Profissional com especialização</li>
          <li>Profissional com residência</li>
          <li>Título de Especialista</li>
          <li>Qualidade monitorada</li>
          <li>Certificação de Entidades Gestoras de Outros Programas de Qualidade</li>
          <li>Certificado ISO 9001</li>
          <li>Profissional com Doutorado ou Pós-Doutorado</li>
        </ul>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Unidades;

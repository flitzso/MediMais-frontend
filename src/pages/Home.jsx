import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeBackground from '../components/imgs/home_background.png';
import '../components/css/Home.css'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Contratos from '../components/Contratos';

const Home = () => {
  return (
    <div>
      <Navbar />
        <img src={homeBackground} class="homeB"></img>
        <div className="consultaTabela container mt-0">
      <h2 className='marqueSuaConsulta'>Marque sua consulta</h2>
      <form>
        <div className="mb-1">
          <label className="caixa1 form-label"></label>
          <input type="text" placeholder='Tratamento' className="tabelaConsultaInput form-control" />
        </div>
        <div className="mb-1">
          <label className="caixa1 form-label"></label>
          <input type="text" placeholder='Estado' className="tabelaConsultaInput form-control" />
        </div>
        <div className="mb-1">
          <label className="caixa1 form-label"></label>
          <input type="text" placeholder='Cidade' className="tabelaConsultaInput form-control" />
        </div>
        <div className="mb-4">
          <label className="caixa1 form-label"></label>
          <input type="date" placeholder='Tratamento' className="tabelaConsultaInput form-control" />
        </div>
        <button type="submit" href="/login" className="tabelaConsultaBtn Data">Search</button>
      </form>
    </div>
        <Contratos />
      <Footer />
    </div>
  );
};

export default Home;
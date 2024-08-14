import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/Login';
import Cadastro from '../src/pages/Cadastro';
import Home from '../src/pages/Home';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Contratos from './components/Contratos';
import Sobre from './pages/Sobre';
import Planos from './pages/Planos';
import Servicos from './pages/Servicos';
import Unidades from './pages/Unidades';
import RedesCredenciadas from './pages/RedesCredenciadas';
import FaleConosco from './pages/FaleConosco';
import Beneficiario from './pages/Beneficiario';
import GestorEmpresa from './pages/GestorEmpresa';
import Credenciado from './pages/Credenciado';
import Funcionario from './pages/Funcionario';
import Boleto2Via from './pages/cardhome/Boleto2Via';
import CarteirinhaVirtual from './pages/cardhome/CarteiraVirtual';
import AgendamentoConsulta from './pages/cardhome/AgendamentoConsulta';
import Orcamento from './pages/cardhome/Orcamento';
import Credenciamento from './pages/Credenciamento';
import Boleto from './components/Boleto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/contratos" element={<Contratos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/redescredenciadas" element={<RedesCredenciadas />} />
        <Route path="/faleconosco" element={<FaleConosco />} />
        <Route path="/beneficiario" element={<Beneficiario />} />
        <Route path="/gestorempresa" element={<GestorEmpresa />} />
        <Route path="/credenciado" element={<Credenciado />} />
        <Route path="/funcionario" element={<Funcionario />} />
        <Route path="/boleto2via" element={<Boleto2Via />} />
        <Route path="/carterinhavirtual" element={<CarteirinhaVirtual />} />
        <Route path="/agendamentoconsulta" element={<AgendamentoConsulta />} />
        <Route path="/orcamento" element={<Orcamento />} />
        <Route path="/credenciamento" element={<Credenciamento />} />
        <Route path="/boleto" element={<Boleto/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

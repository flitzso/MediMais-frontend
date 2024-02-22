import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/Login';
import Cadastro from '../src/pages/Cadastro';
import Home from '../src/pages/Home';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Contratos from './components/Contratos';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

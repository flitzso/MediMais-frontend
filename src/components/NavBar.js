import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EntrarPopup from './EntrarPopup';
import '../components/css/EntrarPopup.css';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Twelfth navbar example">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="letterNav nav-link active" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="letterNav nav-link active" href="/sobre">Sobre nós</a>
              </li>
              <li className="nav-item">
                <a className="letterNav nav-link active" href="/planos">Planos</a>
              </li>
              <li className="nav-item">
                <a className="letterNav nav-link active" href="/servicos">Serviços</a>
              </li>
              <li className="nav-item">
                <a className="letterNav nav-link active" href="/unidades">Nossas unidades</a>
              </li>
              <li className="nav-item">
                <a className="letterNav nav-link active" href="/redescredenciadas">Rede credenciada</a>
              </li>
              <li className="nav-item">
                <a className="letterNav nav-link active" href="/faleconosco">Fale conosco</a>
              </li>
              <li className="nav-item">
                <a className="letterNav nav-link active" href="/minhaconta">Minha conta</a>
              </li>
              <li className="nav-item">
              <EntrarPopup /> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

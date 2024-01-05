import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Twelfth navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Provedores</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Med e Care</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Reembolsos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Loja</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-link" href="/">Login</a>
              <a class="btn btn-link" href="/cadastro">Cadastro</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;
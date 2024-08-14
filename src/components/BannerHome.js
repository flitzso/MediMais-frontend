import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeBackground from '../components/imgs/home_background.png';
import './css/BannerHome.css';
import CoronaVirus from '../components/imgs/img-covid.png';
import Imposto from '../components/imgs/img-imposto.png';

const BannerHome = () => {
  return (
    <div className="banner-container">
      <img src={homeBackground} alt="Fundo" className="home-background" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card banner-card">
              <div className="card-body text-center">
                <h5 className="card-title">Informativo de Coronavírus</h5>
                <p className="card-text">Fique atualizado com as últimas informações.</p>
                <img src={CoronaVirus} alt="Imagem relacionada ao Coronavírus" className="img-fluid mt-3" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card banner-card">
              <div className="card-body text-center">
                <h5 className="card-title">Imposto de Renda</h5>
                <p className="card-text">Fique atualizado com as últimas informações.</p>
                <img src={Imposto} alt="Imagem relacionada ao Imposto de Renda" className="img-fluid mt-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeBackground from '../components/imgs/home_background.png';
import '../components/css/Home.css'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Contratos from '../components/Contratos';

const Planos = () => {
  return (
    <div>
      <Navbar />
      <Contratos />
      <Footer />
    </div>
  );
};

export default Planos;

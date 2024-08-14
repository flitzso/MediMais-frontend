import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/Home.css'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import CardHome from '../components/CardHome';
import BannerHome from '../components/BannerHome';
import ChatPopup from '../components/ChatPopup';

const Home = () => {
  return (
    <div>
        <Navbar />
        <BannerHome />
        <ChatPopup />
        <CardHome />
      <Footer />
    </div>
  );
};

export default Home;
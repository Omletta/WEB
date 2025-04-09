import React from 'react';
import './HomePage.css';
import Header from './Header';

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      
      <div className="hero-image">
        <div className="hero-content">
          <h1>Bienvenue au CROUS</h1>
          <p className="subtitle">Villeurbanne</p>
        </div>
      </div>
      
      <div className="login-section">
        <a href="/login" className="login-button">Se connecter</a>
      </div>
    </div>
  );
};

export default HomePage;
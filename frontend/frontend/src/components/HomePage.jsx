import React from 'react';
import './HomePage.css';
import backgroundImage from '/Users/hadrienmarle/Documents/GitHub/WEB/frontend/frontend/src/img/Perspective+extérieure.jpg'; // Remplacez par le chemin de votre image

const HomePage = () => {
  const handleLoginClick = () => {
    // Redirige vers la page de connexion
    window.location.href = '/login';
  };

  return (
    <div className="home-container">
      <img src={backgroundImage} alt="Background" className="background-image" />
      <div className="content">
        <h1 className="main-title">Crous</h1>
        <h2 className="subtitle">Villeurbanne</h2>
        <button className="login-button" onClick={handleLoginClick}>
          S'identifier
        </button>
      </div>
    </div>
  );
};

export default HomePage;

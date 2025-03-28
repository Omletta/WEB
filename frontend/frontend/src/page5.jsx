import { Link } from 'react-router-dom';
import './page5.css';

const Page5 = () => {
  return (
    <div className="confirmation-container">
      <div className="red-header">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_Crous_vectoris%C3%A9.svg" 
          alt="Logo CROUS" 
          className="header-logo"
        />      
      </div>

      <div className="confirmation-content">
        <div className="checkmark">✓</div>
        <h1>Réservation confirmée !</h1>
        <p>Soyez à l'heure pour votre service</p>
        <Link to="/" className="back-link">
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default Page5;
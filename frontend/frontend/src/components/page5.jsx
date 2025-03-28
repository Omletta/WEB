import { Link } from 'react-router-dom';
import './page5.css';
import Header from './Header';

const Page5 = () => {
  return (
    <div className="confirmation-container">
      <Header />

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
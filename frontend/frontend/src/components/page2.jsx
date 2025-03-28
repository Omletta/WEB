import { Link, useNavigate } from 'react-router-dom';
import './page2.css';
import Header from './Header';

const Page2 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation'); // Redirection vers la confirmation
  };
  return (
    <div className="login-container">

      <Header />
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Connexion au compte CROUS</h2>
        
        <div className="form-group">
          <label htmlFor="username">👤Identifiant</label>
          <input 
            type="text" 
            id="username" 
            placeholder="Entrez votre identifiant"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">🔒Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Entrez votre mot de passe"
          />
        </div>

        <button type="submit" className="connect-button">
          Se connecter
        </button>

        <Link to="/" className="back-link">
          ← Retour à l'accueil
        </Link>
      </form>
    </div>
  );
};

export default Page2;
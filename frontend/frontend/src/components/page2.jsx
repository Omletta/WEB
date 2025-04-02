import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./page2.css";
import Header from "./Header";
import axios from "axios";

const Page2 = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    try {
      const response = await axios.post("http://localhost:7777/api/login", {
        username,
        password,
      });

      if (response.data.message === "Connexion réussie") {
        navigate("/Menu");
      }
    } catch (err) {
      setError("Identifiant ou mot de passe incorrect.");
    }
  };

  return (
    <div className="login-container">
      <Header />
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Connexion au compte CROUS</h2>

        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="username">👤Identifiant</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Entrez votre identifiant"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">🔒Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez votre mot de passe"
            required
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

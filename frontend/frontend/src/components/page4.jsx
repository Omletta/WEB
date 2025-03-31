import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './page4.css';

const Page4 = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState('');
  const currentDate = new Date().toLocaleDateString('fr-FR');
  const total = 9.50; // Récupérer cette valeur depuis le contexte/state

  const timeSlots = ['11:30', '12:00', '12:30', '13:00', '13:30', '14:00'];

  const handleReservation = () => {
    if (selectedTime) {
      navigate('/confirmation');
    }
  };

  return (
    <div className="reservation-container">
      <div className="red-header">
        <Link to="/login" className="back-button">← Retour</Link>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_Crous_vectoris%C3%A9.svg" 
          alt="Logo CROUS" 
          className="header-logo"
        />
      </div>

      <div className="ticket-container">
        <div className="reservation-ticket">
          <div className="ticket-header">
            <h2>CROUS Villeurbanne</h2>
            <p>{currentDate}</p>
          </div>
          
          <div className="time-selection">
            <h3>Choisissez votre horaire :</h3>
            <div className="time-buttons">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className={`time-btn ${selectedTime === time ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="ticket-footer">
            <div className="total">
              <span>Total à réguler :</span>
              <span>{total.toFixed(2)} €</span>
            </div>
          </div>
        </div>

        <button 
          className="reserve-button"
          onClick={handleReservation}
          disabled={!selectedTime}
        >
          Confirmer la réservation
        </button>
      </div>
    </div>
  );
};

export default Page4;
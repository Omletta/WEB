import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page4.css';
import Header from './Header';
import { CartContext } from './CartContainer';

const Page4 = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState('');
  const currentDate = new Date().toLocaleDateString('fr-FR', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  });
  const { total, clearCart, cartItems, removeFromCart } = useContext(CartContext);

  const timeSlots = ['11:30', '12:00', '12:30', '13:00', '13:30', '14:00'];

  const handleReservation = () => {
    if (selectedTime) {
      clearCart();
      navigate('/confirmation');
    }
  };

  return (
    <div className="reservation-container">
      <Header />
      
      <div className="reservation-content">
        <h2>Finaliser ma réservation</h2>
        
        <div className="reservation-card">
          <div className="reservation-header">
            <h3>CROUS Villeurbanne</h3>
            <p className="reservation-date">{currentDate}</p>
          </div>
          
          <div className="time-selection">
            <h4>Choisissez votre horaire :</h4>
            <div className="time-slots">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          
          <div className="order-summary">
            <h4>Détail de la commande</h4>
            <div className="order-items">
              {cartItems.map((item, index) => (
                <div key={index} className="order-item">
                  <span>{item.title}</span>
                  <div className="item-actions">
                  <span>{item.price}</span>

                    <button 
                      onClick={() => removeFromCart(index)}
                      className="remove-item"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-total">
              <span>Total</span>
              <span>{total} pt{total > 1 ? 's' : ''}</span>

            </div>
          </div>
        </div>
        
        <div className="action-buttons">
          <button 
            className="confirm-reservation"
            onClick={handleReservation}
            disabled={!selectedTime}
          >
            Confirmer la réservation
          </button>
          <button 
            className="modify-order"
            onClick={() => navigate('/menu')}
          >
            Modifier mon panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page4;
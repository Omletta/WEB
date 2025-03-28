import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Panier.css';
import { Link } from 'react-router-dom';


const PanierPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    
    <div className="cart-container">
        <Link to="http://localhost:5173/" className="back-to-home">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-15l-3.431 12h-2.102l2.542-9h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.196z"/>
             </svg>
            <span className="cart-count">{cartItems.length}</span>
        </Link>
      <h2>Panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt={item.title} width="50" />
              <span>{item.title} - {item.price}</span>
            </li>
          ))}
        </ul>
      )}
      <p>
        <strong>Total:</strong> {cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2)} €
      </p>
    </div>
  );
};

export default PanierPage;

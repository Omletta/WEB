import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import './Vendre.css';

const Vendre = ({ img, title, price }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ img, title, price, quantity });
  };

  const changeQuantity = (amount) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + amount;
      return newQuantity < 1 ? 1 : newQuantity;
    });
  };

  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={img} alt={title} />
      </div>
      <h3 className="product-card-title">{title}</h3>
      <p className="product-card-price">{price}</p>
      <div className="quantity-controls">
        <button className="quantity-btn" onClick={() => changeQuantity(-1)}>-</button>
        <span className="quantity-value">{quantity}</span>
        <button className="quantity-btn" onClick={() => changeQuantity(1)}>+</button>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Vendre;

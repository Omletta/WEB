import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContainer';
import './Header.css';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const location = useLocation();
  const showNav = ['/menu', '/reservation'].includes(location.pathname);

  return (
    <header className="app-header">
      {showNav && (
        <Link to={location.pathname === '/menu' ? '/' : '/menu'} className="back-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#E30613" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      )}
      
      <div className="logo-container">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_Crous_vectoris%C3%A9.svg" 
          alt="Logo CROUS"
          className="header-logo"
        />
      </div>
      
      {showNav && (
        <Link to="/reservation" className="cart-icon">
          {cartItems.length > 0 && <span className="cart-badge">{cartItems.length}</span>}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="#E30613" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="#E30613" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="#E30613" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      )}
    </header>
  );
};

export default Header;
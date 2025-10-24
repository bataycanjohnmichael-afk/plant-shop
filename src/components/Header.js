import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css';

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems);
  const location = useLocation();

  return (
    <header className="header">
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link>
        <Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>
          <ShoppingCartIcon /> ({totalItems})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
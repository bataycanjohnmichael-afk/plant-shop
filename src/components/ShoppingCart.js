import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../features/cartSlice';
import Header from './Header';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const { items, totalItems, totalCost } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <div className="shopping-cart">
        <h1>Shopping Cart</h1>
        <p>Total Plants: {totalItems}</p>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
          </div>
        ))}
        <button className="checkout-btn">Coming Soon</button>
        <Link to="/products">
          <button className="continue-btn">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
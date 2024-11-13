/* eslint-disable react/prop-types */

import React, { useContext, useRef } from 'react';
import { CartContext } from '../CartContext';

const CartModal = ({ onClose }) => {
  const { cart, removeFromCart } = useContext(CartContext);
  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="cart-modal">
      <div ref={modalRef} className="cart-modal-content">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartModal;

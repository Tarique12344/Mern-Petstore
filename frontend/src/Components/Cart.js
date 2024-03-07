// Cart.js
import React from 'react';
import NavigationBar from './Navbar';
import Footer from './Footer';

const Cart = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container mt-5">
        <h2>Your Cart</h2>
        <p>Your cart is currently empty.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
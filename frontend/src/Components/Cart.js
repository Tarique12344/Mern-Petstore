// Cart.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartProviderfunc';

const Cart = () => {
  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleCheckout = async () => {
    try {
      // Send a request to your backend server to process the order
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: state.cartItems }), // Send cart items to backend
      });

      if (response.ok) {
        // If checkout is successful, remove items from cart
        dispatch({ type: 'CLEAR_CART' });
      } else {
        console.error('Error processing checkout:', response.statusText);
      }
    } catch (error) {
      console.error('Error processing checkout:', error.message);
    }
  };

  return (
    <div>
      <h1 style={{ fontFamily: 'Arial', fontSize: '24px' }}>Your Cart:</h1>

      {state.cartItems.map((item) => (
        <Card key={item.id}>
          <Card.Img
            variant="top"
            src={item.image}
            alt={`Pet ${item.id}`}
            style={{ objectFit: 'cover', height: '200px', width: '20%' }}
          />

          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>{item.age}</Card.Text>
            <Button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</Button>
          </Card.Body>
        </Card>
      ))}

      <Button onClick={handleCheckout}>Checkout</Button>
    </div>
  );
};

export default Cart;

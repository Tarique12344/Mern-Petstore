// Cart.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from './CartProvider';

const Cart = () => {
  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {state.cartItems.map((item) => (
        <Card key={item.id}>
          <Card.Img variant="top" src={item.image} alt={`Pet ${item.id}`} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>{item.age}</Card.Text>
            <Button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cart;

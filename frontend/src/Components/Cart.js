// Cart.js
import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Modal } from 'react-bootstrap';
import { useCart } from '../context/CartProviderfunc';

const Cart = () => {
  const { state, dispatch } = useCart();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    emailAddress: '',
    phoneNumber: '',
  });
  const [showProcessingMessage, setShowProcessingMessage] = useState(false);

  const handleRemoveFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleCheckout = () => {
    setShowCheckoutForm(true);
  };

  const handleChangeCustomerInfo = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmitOrder = () => {
    setShowProcessingMessage(true);
    setTimeout(() => {
      setShowProcessingMessage(false);
      setShowCheckoutForm(false); // Hide the checkout form after 5 seconds
      state.cartItems.forEach(item => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: item });
      });
    }, 5000);
  };

  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
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

      <Modal show={showCheckoutForm} onHide={() => setShowCheckoutForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={customerInfo.firstName}
                onChange={handleChangeCustomerInfo}
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={customerInfo.lastName}
                onChange={handleChangeCustomerInfo}
              />
            </Form.Group>
            <Form.Group controlId="formStreetAddress">
              <Form.Label>Street Address:</Form.Label>
              <Form.Control
                type="text"
                name="streetAddress"
                value={customerInfo.streetAddress}
                onChange={handleChangeCustomerInfo}
              />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>City:</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={customerInfo.city}
                onChange={handleChangeCustomerInfo}
              />
            </Form.Group>
            <Form.Group controlId="formState">
              <Form.Label>State:</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={customerInfo.state}
                onChange={handleChangeCustomerInfo}
              />
            </Form.Group>
            <Form.Group controlId="formZipCode">
              <Form.Label>Zip Code:</Form.Label>
              <Form.Control
                type="text"
                name="zipCode"
                value={customerInfo.zipCode}
                onChange={handleChangeCustomerInfo}
              />
            </Form.Group>
            <Form.Group controlId="formEmailAddress">
              <Form.Label>Email Address:</Form.Label>
              <Form.Control
                type="email"
                name="emailAddress"
                value={customerInfo.emailAddress}
                onChange={handleChangeCustomerInfo}
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="number"
                name="phoneNumber"
                value={customerInfo.phoneNumber}
                onChange={handleChangeCustomerInfo}
              />
            </Form.Group>
            {/* Add more Form.Group elements for other fields */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCheckoutForm(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitOrder}>
            Submit Order
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showProcessingMessage} onHide={() => setShowProcessingMessage(false)}>
        <Modal.Body style={{ color: 'black'}}>Your order is processing and we will contact you when your pet is ready for pickup</Modal.Body>
      </Modal>
    </div>
  );
};

export default Cart;

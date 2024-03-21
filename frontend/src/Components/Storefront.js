import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import _ from 'lodash';
import { useCart } from '../context/CartProviderfunc';
import { Modal } from 'react-bootstrap';


const Storefront = () => {
  const { dispatch, state } = useCart();
  const [pets, setPets] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false); // State for modal visibility

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('https://mern-petstore-backend.onrender.com/storefront');
        const data = await response.json();
        // Filter out pets without images
        const petsWithImages = data.filter((pet) => pet.image !== null && pet.image !== undefined);
        console.log('Pets with images:', petsWithImages);
        setPets(petsWithImages);
      } catch (error) {
        console.error('Error fetching pets:', error.message);
      }
    };
    fetchPets();
  }, []);

  const handleAddToCart = (pet) => {
    const isItemInCart = state.cartItems.some(item => item._id === pet._id);

    if (isItemInCart) {
      alert('Your pet is already in the cart.');
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: pet });
      setShowNotification(true); // Show the notification modal
      setTimeout(() => {
        setShowNotification(false); // Hide the notification modal after 3 seconds
      }, 3000);
    }
  };

  return (
    <Container style={{ marginTop: '50px', paddingBottom: '80px', marginBottom: '20px' }}>
      {/* Top Carousel */}
      <Carousel interval={5000} style={{ overflow: 'hidden' }}>
        {_.shuffle(pets).slice(0, 25).map((pet) => (
          <Carousel.Item key={pet._id} style={{ height: '50vh' }}>
            <img
              className="d-block w-100"
              src={pet.image}
              alt={`Slide ${pet._id}`}
              style={{ maxHeight: '300px', objectFit: 'contain', width: '200vw' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
 
      {/* Pet Cards */}
      <Row className="mt-4">
        {pets.map((pet) => (
          <Col key={pet._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card style={{ height: '100%' }}>
              <Card.Img variant="top" src={pet.image} alt={`Pet ${pet._id}`} style={{ objectFit: 'cover', height: '200px' }} />
              <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                <Card.Text>{`Breed: ${pet.breed}`}</Card.Text>
                <Card.Text>{pet.description}</Card.Text>
                <Card.Text>{pet.age} year old</Card.Text>
                <Button variant="success" onClick={() => handleAddToCart(pet)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showNotification} onHide={() => setShowNotification(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You have added a new friend to your cart :-D</p>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
export default Storefront;








import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import _ from 'lodash';

import { useCart } from '../context/CartProviderfunc';

const Storefront = () => {
  const { dispatch, state } = useCart();
  const [pets, setPets] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState('');

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
    const isItemInCart = state.cartItems.some(item => item.id === pet.id);

    if (isItemInCart) {
      alert('Your pet is already in the cart.');
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: pet });
      setNotificationMessage('You have added a new friend to your cart :-D');
      setTimeout(() => {
        setNotificationMessage('');
      }, 5000);
    }
  };

  return (
    <Container style={{ marginTop: '50px', paddingBottom: '80px', marginBottom: '20px' }}>
      {/* Top Carousel */}
      <Carousel interval={5000} style={{ maxHeight: '400px', overflow: 'hidden' }}>
        {_.shuffle(pets).slice(0, 5).map((pet) => (
          <Carousel.Item key={pet._id}>
            <img
              className="d-block w-100 h-auto"
              src={pet.image}
              alt={`Slide ${pet._id}`}
              style={{ objectFit: 'contain', maxHeight: '400px', boxShadow: '0 4px 8px' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      
      {/* Notification display */}
      {notificationMessage && <div>{notificationMessage}</div>}

      {/* Pet Cards in Rows of Three */}
      <Row xs={1} md={3} className="g-4">
        {_.chunk(pets, 3).map((petRow, rowIndex) => (
          <Row key={rowIndex} className="mb-4">
            {petRow.map((pet) => (
              <Col key={pet._id}>
                <Card>
                  <Card.Img variant="top" src={pet.image} alt={`Pet ${pet._id}`} />
                  <Card.Body>
                    <Card.Title>{pet.name}</Card.Title>
                    <Card.Text>{`Breed: ${pet.breed}`}</Card.Text>
                    <Card.Text>{pet.age}</Card.Text>
                    <Button variant="success" onClick={() => handleAddToCart(pet)}>Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default Storefront;

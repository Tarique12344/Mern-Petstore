// Storefront.js
import React, { useState, useEffect } from 'react';
import { Container, Carousel, Row, Col, Card, Button } from 'react-bootstrap';
import _ from 'lodash';

import { useCart } from './CartProvider';

const Storefront = () => {
  const { dispatch, state } = useCart();
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
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
        setFilteredPets(petsWithImages);
      } catch (error) {
        console.error('Error fetching pets:', error.message);
      }
    };

    fetchPets();
  }, []);

  // Shuffle and slice the pets for the Top Carousel
  const shuffledAndSlicedTopPets = _.shuffle(pets).slice(0, 5);

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
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
 

      <Container style={{ marginTop: '50px', paddingBottom: '80px', marginBottom: '20px' }}>
        {/* Top Carousel */}
        <Carousel interval={5000} style={{ maxHeight: '400px', overflow: 'hidden' }}>
          {shuffledAndSlicedTopPets.map((pet) => (
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
        {notificationMessage && <div >{notificationMessage}</div>}

        {/* Bottom Carousel with rows */}
        <Carousel className="my-5" indicators={false} interval={null} style={{ maxHeight: '150px' }}>
          {_.chunk(filteredPets, 5).map((rowPets, rowIndex) => (
            <Row key={rowIndex} className="justify-content-center">
              {rowPets.map((pet) => (
                <Col key={pet._id} md={2} className="my-2">
                  <Card
                    style={{
                      maxWidth: '14rem',
                      margin: 'auto',
                      transition: 'transform 0.3s ease-in-out box-shadow: 0.3s ease-in-out',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 165, 0, 0.9)'}}
                    onMouseLeave={(e) => {e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0.5, 0.7)'}}
                  >


                    <Card.Img
                      variant="top"
                      src={pet.image}
                      alt={`Pet ${pet._id}`}
                      style={{ objectFit: 'cover', height: '100px' }}
                    />
                    <Card.Body className="d-flex flex-column ">
                      <Card.Title>{pet.name}</Card.Title>
                      <Card.Text> {`Breed: ${pet.breed}`}</Card.Text>
                      <Card.Text>{pet.age}</Card.Text>
                      <div className="mt-auto add">
                        <Button variant="success"  className="add-to-cart-button" onClick={() => handleAddToCart(pet)}>
                          Add to Cart
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ))}
        </Carousel>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Storefront;

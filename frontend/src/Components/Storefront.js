// Import statements
import React, { useState, useEffect } from 'react';
import { Container, Carousel, Row, Col, Card } from 'react-bootstrap';
import _ from 'lodash';
import NavigationBar from './Navbar';
import Footer from './Footer';


const Storefront = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:5000/storefront');
        const data = await response.json();

        // Filter out pets without images
        const petsWithImages = data.filter((pet) => pet.image !== null && pet.image !== undefined);

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

  return (
    <div>
      <NavigationBar />
      
      <Container style={{ marginTop: '50px', paddingBottom: '80px', marginBottom: '20px' }}>
        {/* Top Carousel */}
        <Carousel interval={5000} style={{ maxHeight: '400px', overflow: 'hidden' }}>
          {shuffledAndSlicedTopPets.map((pet) => (
            <Carousel.Item key={pet._id}>
              <img
                className="d-block w-100 h-auto"
                src={pet.image}
                alt={`Slide ${pet._id}`}
                style={{ objectFit: 'contain', maxHeight: '400px', boxShadow: '0 4px 8px'}}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Bottom Carousel with rows of three */}
        <Row className="my-5 justify-content-center hoverFlex">
          {filteredPets.map((pet) => (
            <Col key={pet._id} md={4} className="my-2">
  <Card style={{ maxWidth: '14rem', margin: 'auto', boxShadow: '0 4px 8px' , transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',}}
    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
    <Card.Img
      variant="top"
      src={pet.image}
      alt={`Pet ${pet._id}`}
      className="img-fluid"
      style={{ objectFit: 'cover', height: '180px' }}
    />
    <Card.Body>
      <Card.Title>{pet.name}</Card.Title>
      <Card.Text>
        {`Breed: ${pet.breed}, Age: ${pet.age} years`}
      </Card.Text>
    </Card.Body>
  </Card>
</Col>

          ))}
        </Row>      
      </Container>
    </div>
  );
};

export default Storefront;

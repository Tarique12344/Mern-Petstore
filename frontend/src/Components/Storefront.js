// Import statements
import React, { useState, useEffect } from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import NavigationBar from './Navbar';
import Footer from './Footer';
import logo from './Carousel1_pics/logo.jpg';

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

  return (
    <div>
      <NavigationBar />
      <img src={logo} alt='logo' className='logo' />
      <Container style={{ marginTop: '50px', paddingBottom: '80px' }}>
        {/* Top Carousel */}
        <Carousel interval={5000} style={{ maxHeight: '400px', overflow: 'hidden' }}>
          {_.shuffle(pets.slice()).map((pet) => (
            <Carousel.Item key={pet._id}>
              <img
                className="d-block w-100 h-auto"
                src={pet.image}
                alt={`Slide ${pet._id}`}
                style={{ objectFit: 'contain', maxHeight: '400px' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Bottom Carousel with two rows */}
        <Carousel className="my-5" indicators={false} interval={null} style={{ maxHeight: '150px' }}>
          <Row className="justify-content-center">
            {filteredPets.map((pet) => (
              <Col key={pet._id} md={2} className="my-5">
                <img
                  src={pet.image}
                  alt={`Pet ${pet._id}`}
                  className="img-fluid h-auto"
                  style={{ objectFit: 'contain', maxHeight: '120px' }}
                />
                <p className="mt-2">{pet.name}</p>
                <p className="mt-1">{pet.description}</p>
                <p className="mt-2">{pet.age}</p>
              </Col>
            ))}
          </Row>
        </Carousel>
      </Container>
      <Footer />
    </div>
  );
};

export default Storefront;

import React, { useState, useEffect } from 'react';
import NavigationBar from './Navbar';
import Footer from './Footer';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import logo from './Carousel1_pics/logo.jpg';

const Storefront = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:5000/storefront');
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error('Error fetching pets:', error.message);
      }
    };

    fetchPets();
  }, []);

  return (
    <div>
      <NavigationBar />
      <img src={logo} alt='logo'className='logo'/>
      <Container style={{ marginTop: '50px' }}>
        {/* Top Carousel */}
        <Carousel interval={5000}>
          {pets.slice(0, 5).map((pet) => (
            <Carousel.Item key={pet._id}>
              <img
                className="d-block w-100"
                src={pet.image}  // Assuming 'image' is the field containing the image URL
                alt={`Slide ${pet._id}`}
                height="400"
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Bottom Carousel with two rows */}
        <Carousel className="mt-3" indicators={false} interval={null}>
          <Row>
            {pets.slice(5, 10).map((pet) => (
              <Col key={pet._id} md={2} className="mb-2">
                <img
                  src={pet.image}  // Assuming 'image' is the field containing the image URL
                  alt={`Pet ${pet._id}`}
                  className="img-fluid"
                  height="80"
                />
                <p className="mt-2">{pet.name}</p>
              </Col>
            ))}
          </Row>
          <Row>
            {pets.slice(10, 15).map((pet) => (
              <Col key={pet._id} md={2} className="mb-2">
                <img
                  src={pet.image}  // Assuming 'image' is the field containing the image URL
                  alt={`Pet ${pet._id}`}
                  className="img-fluid"
                  height="80"
                />
                <p className="mt-2">{pet.name}</p>
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

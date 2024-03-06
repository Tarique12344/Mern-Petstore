import React, { useState, useEffect } from 'react';
import NavigationBar from './Navbar';
import Footer from './Footer';
import { Container, Carousel, Row, Col, Nav, Card } from 'react-bootstrap';

// ... (imports remain the same)

const Storefront2 = () => {
    const [pets, setPets] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    useEffect(() => {
      const fetchPets = async () => {
        try {
          const response = await fetch('http://localhost:5000/storefront2');
          const data = await response.json();
          setPets(data);
        } catch (error) {
          console.error('Error fetching pets:', error.message);
        }
      };
  
      fetchPets();
    }, []);
  
    const filterPetsByCategory = (category) => {
      setSelectedCategory(category);
    };
  
    const filteredPets = selectedCategory
      ? pets.filter((pet) => pet.category === selectedCategory)
      : pets;
  
    return (
      <div>
       
   
        <Container style={{ marginTop: '50px' }}>
          {/* Category Tabs */}
          <Nav fill variant="tabs" defaultActiveKey="all" onSelect={filterPetsByCategory}>
            <Nav.Item>
              <Nav.Link eventKey="all">All</Nav.Link>
            </Nav.Item>
            {/* Add more tabs for different categories */}
            <Nav.Item>
              <Nav.Link eventKey="dogs">Dogs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="cats">Cats</Nav.Link>
            </Nav.Item>
          </Nav>
  
          {/* Display Pets */}
          <Row className="my-5 justify-content-center">
            {filteredPets.map((pet) => (
              <Col key={pet._id} md={3} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={pet.image} alt={`Pet ${pet._id}`} />
                  <Card.Body>
                    <Card.Title>{pet.name}</Card.Title>
                    <Card.Text>{pet.description}</Card.Text>
                    <Card.Text>{pet.age} years old</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
     
      </div>
    );
  };
  
  export default Storefront2;
  
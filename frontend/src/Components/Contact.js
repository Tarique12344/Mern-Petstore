import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Create a Leaflet map when the component mounts
    const map = L.map('map').setView([39.0979, -84.5044], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Add a marker for the Cincinnati location
    L.marker([39.0979, -84.5044]).addTo(map).bindPopup('Cincinnati, OH');
  }, []); // Empty dependency array to ensure the effect runs only once

  const handleSubmit = async () => {
    // Your form submission logic here
  };

  return (
    <div>
      
    
      <br />
      <Container className="mt-5">
        <Row className="justify-content-center list">
          <Col md={6}>
            <h2 className='contact'>Contact Us</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
              </Form.Group>
              <Button className='blue' type="button" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
     
      <Container className="mt-5 map ">
  <Row className="justify-content-center">
    <Col md={6}>
      <div id="map" style={{ height: '400px' }}></div>
    </Col>
  </Row>
</Container>

<br></br>
    
   
    </div>
  
     )
};

export default Contact;

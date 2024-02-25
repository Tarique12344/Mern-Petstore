import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavigationBar from './Navbar';  // Updated import
import Footer from './Footer';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Create a Leaflet map when the component mounts
    const map = L.map('map').setView([39.1031, -84.5120], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Add a marker for the Cincinnati location
    L.marker([39.1031, -84.5120]).addTo(map).bindPopup('Cincinnati, OH');
  }, []); // Empty dependency array to ensure the effect runs only once

  const handleSubmit = async () => {
    // Your form submission logic here
  };

  return (
    <div>
<<<<<<< HEAD
      <NavigationBar />  {/* Updated import */}
      <br />
=======
      <NavigationBar />
      <br></br>
>>>>>>> e9c2a770d324b1b1545bc33852a23c098de6662f
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2>Contact Us</h2>
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
              <Button variant="primary" type="button" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
<<<<<<< HEAD

      {/* Add a div for the map */}
      <div id="map" style={{ height: '400px', width: '100%', marginTop: '20px' }}></div>

      <Footer />
    </div>
  );
=======
     return (
    <div>
          <div className='contact-container mb-3'></div>
     
      <div>
        <NavigationBar />
      </div>
      <h2>Contact Us</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <Footer />
    </div>
    </div>
     )
>>>>>>> e9c2a770d324b1b1545bc33852a23c098de6662f
};

export default Contact;

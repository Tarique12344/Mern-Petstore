import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavigationBar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Contact form submitted successfully:', data.message);
        // Optionally, you can reset the form fields here
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Contact form submission failed:', data.message);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
    }
  };

  return (
    <div>
      <NavigationBar />
      <br />
      <Container className="mt-5">
        <Row className="justify-content-center but">
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
              <Button variant="" type="button" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;

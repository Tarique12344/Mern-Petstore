import React, { useState } from 'react';
import NavigationBar from './Navbar';
import Footer from './Footer';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

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
        // Handle successful form submission, such as showing a success message
        console.log('Contact form submitted successfully:', data.message);
      } else {
        // Handle form submission failure
        console.error('Contact form submission failed:', data.message);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
    }
  };

  return (
    <div>
<<<<<<< HEAD
      <NavigationBar />
      <br></br>
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
=======
     return (
          <div className='contact-container'></div>
        )
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

>>>>>>> 47eedd61fd7d1b749a488d60a61c38bc56a293b9
      <Footer />
    </div>
  );
};

export default Contact;

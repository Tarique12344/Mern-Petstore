import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import NavigationBar from './Navbar';
import Footer from './Footer';


const Donation = () => {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonate = () => {
    // Implement your donation submission logic here
    console.log(`Donating ${donationAmount}`);
    // Optionally, you can redirect or show a thank you message after donation
  };

  return (
    <div>
      <NavigationBar />
     
      <Container style={{ marginTop: '50px', paddingBottom: '80px' }}>
      <p>
                Your donation directly impacts lives in your community. We are able to shelter, feed, and give medical attention
                to more than five animals per year because of your generous support. Your donation goes directly to the operation
                of our facility and improves our community by removing stray and unwanted animals from the street so they can be
                spayed or neutered and given to loving homes. This greatly reduces suffering and starvation of animals who are
                unable to choose their circumstances. THANK YOU for your generosity!
              </p>
        {/* Donation Section */}
        <Row className="justify-content-center">
          <Col md={8}>
            <h2>Make a Donation</h2>
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formDonationAmount">
                    <Form.Label>Donation Amount ($)</Form.Label>
                    <Form.Control
                      type="number"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="success" onClick={handleDonate}>
                    Donate
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="mt-4">
              
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Donation;
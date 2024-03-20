import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Navbar } from 'react-bootstrap';



const Donation = () => {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonate = () => {
    // Implement your donation submission logic here
    console.log(`Donating ${donationAmount}`);
    // Call backend API to process donation
    // Generate receipt and send it to the user
  };

  return (
    <div>
      <Container className='donation'>
        <p>Your donation to ADEPARTAR directly impacts lives in your community. We are able to shelter, feed, and give medical attention to more than five billion animals per year because of your generous support. Your donation goes directly to the operation of our facility and improves our community by removing stray and unwanted animals from the street so they can be spayed or neutered and given to loving homes. This greatly reduces suffering and starvation of animals who are unable to choose their circumstances. THANK YOU for your generosity!</p>
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
                  <Button variant="success" className='donate' onClick={handleDonate}>
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
    </div>
  );
};

export default Donation;

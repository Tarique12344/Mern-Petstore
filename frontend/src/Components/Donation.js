import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import NavigationBar from './Navbar';

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonate = () => {
    // Implement your donation submission logic here
    console.log(`Donating ${donationAmount}`);
    // Optionally, you can redirect or show a thank you message after donation
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const form = event.target;

    if (form.checkValidity()) {
      // If the form is valid, you can proceed with form submission
      console.log('Form submitted successfully');
    } else {
      // If the form is invalid, you can handle validation errors here
      console.log('Form validation failed');
    }
  };

  return (
    <div>
      <NavigationBar />

      <Container className='donation'>
        <p>Your donation to ADEPARTAR directly impacts lives in your community. We are able to shelter, feed, and give medical attention
        to more than five billion animals per year because of your generous support. Your donation goes directly to the operation
        of our facility and improves our community by removing stray and unwanted animals from the street so they can be
        spayed or neutered and given to loving homes. This greatly reduces suffering and starvation of animals who are
        unable to choose their circumstances. THANK YOU for your generosity!</p>
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
              {formComponent(handleSubmit)}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const formComponent = (handleSubmit) => {
  return (
    <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
      <div className="col-md-4">
        <label htmlFor="validationCustom01" className="form-label">First name</label>
        <input type="text" className="form-control" id="validationCustom01" defaultValue="Mark" required />
        <div className="valid-feedback">
          Looks good!
        </div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom02" className="form-label">Last name</label>
        <input type="text" className="form-control" id="validationCustom02" defaultValue="Otto" required />
        <div className="valid-feedback">
          Looks good!
        </div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustomUsername" className="form-label">Username</label>
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">@</span>
          <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
          <div className="invalid-feedback">
            Please choose a username.
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationCustom03" className="form-label">City</label>
        <input type="text" className="form-control" id="validationCustom03" required />
        <div className="invalid-feedback">
          Please provide a valid city.
        </div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">State</label>
        <select className="form-select" id="validationCustom04" required>
          <option selected disabled value="">Choose...</option>
          <option>...</option>
        </select>
        <div className="invalid-feedback">
          Please select a valid state.
        </div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom05" className="form-label">Zip</label>
        <input type="text" className="form-control" id="validationCustom05" required />
        <div className="invalid-feedback">
          Please provide a valid zip.
        </div>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
          <label className="form-check-label" htmlFor="invalidCheck">
            Agree to terms and conditions
          </label>
          <div className="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
  );
};

export default Donation;

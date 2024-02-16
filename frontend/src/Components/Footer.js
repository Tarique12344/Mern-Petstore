import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white fixed-bottom">
      <Container>
        <Row className="py-3">
          <Col md={4}>
            <Button variant="outline-light" className="mr-2">
              Home
            </Button>
            <Button variant="outline-light" className="mr-2">
              Storefront
            </Button>
            <Button variant="outline-light" className="mr-2">
              About
            </Button>
            <Button variant="outline-light" className="mr-2">
              Contact Us
            </Button>
            <Button variant="outline-light">Login</Button>
          </Col>
          <Col md={4} className="text-center">
            Address: 100 Broadway St. Cincinnati, OH  45202
            <br />
            Phone: 1-800-GET-A-PET
          </Col>
          <Col md={4} className="text-right">
            &copy; AdeTarPat Enterprises
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white fixed-bottom">
      <Container>
       
          <Col md={4} className="text-center">
            Address: 100 Broadway St. Cincinnati, OH  45202
            <br />
            Phone: 1-800-GET-A-PET
          </Col>
          <Col md={4} className="text-right">
            &copy; AdeTarPat Enterprises
          </Col>
    
      </Container>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-white mt-5 foot">
      <Container>
        <Row className='d-flex center-content justify-content-center'>
          <Col md={6} className="center-content">
            Address: 100 Broadway St. Cincinnati, OH 45202
            <br />
            Phone: 1-800-GET-A-PET
          </Col>
        </Row>
        <Row  className='d-flex center-content justify-content-center'>
          <Col md={4} className="center-content">
            &copy; AdeTarPat Enterprises
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

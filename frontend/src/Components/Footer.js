import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="foot text-white fixed-bottom">
      <Container>
        <Row>
          <Col md={8} className="text-center">
            Address: 100 Broadway St. Cincinnati, OH 45202
            <br />
            Phone: 1-800-GET-A-PET
          </Col>
        </Row>
        <Row>
          <Col md={8} className="text-center">
            &copy; AdeTarPat Enterprises
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

// Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">Your Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link to="/home">Home</Nav.Link>
            <Nav.Link to="/storefront">Storefront</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
            <Nav.Link to="/contact">Contact Us</Nav.Link>
            <Nav.Link to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
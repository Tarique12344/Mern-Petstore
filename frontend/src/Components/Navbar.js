// Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar className="logo" bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto hover">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="./storefront">Storefront</Nav.Link>
            <Nav.Link href="./about">About</Nav.Link>
            <Nav.Link href="./contact">Contact Us</Nav.Link>
            <Nav.Link href="./login">Login</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import { Link } from 'react-router-dom';
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home"><h3>BOOKING</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">ABOUT</Nav.Link>
            <Nav.Link href="#pricing">FACILITIES</Nav.Link>
            <Nav.Link href="#pricing">BOOKING</Nav.Link>
           
          </Nav>
          <Nav>
            <Link to="/login"><Nav.Link href="#deets">Login</Nav.Link></Link>
            <Nav.Link eventKey={2} href="#memes">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

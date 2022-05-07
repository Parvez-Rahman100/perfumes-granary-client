import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar style={{backgroundColor: 'rgba(255, 107, 129,1.0)'}} collapseOnSelect expand="lg"  variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/home">Perfumes Granary</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/products">Products</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar style={{backgroundColor: 'rgba(255, 107, 129,1.0)'}} collapseOnSelect expand="lg"  variant="dark">
  <Container>
  <Navbar.Brand href="/home">Perfumes Granary</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Products</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Blogs</Nav.Link>
      <Nav.Link href="#memes">
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
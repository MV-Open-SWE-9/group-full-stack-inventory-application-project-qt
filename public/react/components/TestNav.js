import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function TestNav({ setCreating }) {
  return (
    <Navbar expand="lg" className="mb-5 sticky-top" bg="primary">
      <Container>
        <Navbar.Brand className="text-light">Inventory App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default TestNav;

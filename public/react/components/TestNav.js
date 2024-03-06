import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function TestNav({ setCreating }) {
  return (
    <Navbar expand="lg" className="mb-5" bg="primary">
      <Container>
        <Navbar.Brand bg="light">Inventory App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Button onClick={() => setCreating(true)}>Add New Item</Button>
      </Container>
    </Navbar>
  );
}

export default TestNav;

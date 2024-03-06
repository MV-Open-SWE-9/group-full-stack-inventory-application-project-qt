import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function TestNav({ setCreating }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5">
      <Container>
        <Navbar.Brand>Inventory App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Button onClick={() => setCreating(true)}>Add New Item</Button>
      </Container>
    </Navbar>
  );
}

export default TestNav;

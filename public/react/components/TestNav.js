import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function TestNav({ logOut, login, loggingIn }) {
  return (
    <Navbar expand="lg" className="mb-5 sticky-top" bg="primary">
      <Container>
        <Navbar.Brand className="text-light ms-4">Inventory App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          {login ? 
            <>
              <Navbar.Text className="me-3">
                Signed in as: Mark Otto
              </Navbar.Text>
              <Button className="me-3" variant="secondary" onClick={logOut}>Logout</Button>
            </>
          :
            <Button onClick={loggingIn}>login</Button>
          }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TestNav;

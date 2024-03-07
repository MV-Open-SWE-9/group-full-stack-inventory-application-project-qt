import React, { useEffect } from "react";
import { Container, Navbar, Button, Badge } from "react-bootstrap";

function TestNav({ logOut, login, setLoggingIn, loggingIn, user, setCart }) {
  useEffect(() => console.log(user), []);
  return (
    <Navbar expand="lg" className="mb-5 sticky-top" bg="primary">
      {/* navbar component that shows login feature */}
      <Container>
        <Navbar.Brand className="text-light ms-4">Inventory App</Navbar.Brand>
        {!loggingIn && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              {login ? (
                <>
                  <Navbar.Text className="me-3 text-light">
                    Signed in as:{" "}
                    <Badge bg="dark" className="fs-6">
                      {user.username}
                    </Badge>
                  </Navbar.Text>
                  <Button
                    variant="success"
                    className="me-3"
                    onClick={() => setCart(true)}
                  >
                    Cart
                  </Button>
                  <Button className="me-3" variant="secondary" onClick={logOut}>
                    Logout
                  </Button>
                </>
              ) : (
                <Button variant="secondary" onClick={() => setLoggingIn(true)}>
                  login
                </Button>
              )}
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
}

export default TestNav;

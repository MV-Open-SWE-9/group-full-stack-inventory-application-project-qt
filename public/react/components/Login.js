import React, { useState, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import apiURL from "../api";
// get api from apiUrl

const Login = ({ setLoggingin, setLogin, setUser }) => {
  // initialize useStates
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [creatingAccount, setCreatingAccount] = useState(false);
  //checks if the username and password is correct
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiURL}/users/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        setUser(data);
        setLogin(true);
        setLoggingin(false);
      } else {
        console.log("not auth");
        window.alert("Incorrect Username or Password");
      }
    } catch (e) {
      console.error(e);
    }
  };

  //function that takes values stored and creates user
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiURL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email,
        }),
      });
      const data = await response.json();
      const newUser = {
        username: data.username,
        id: data.id,
      };
      setCreatingAccount(false);
      setLoggingin(false);
      setLogin(true);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setUsername("");
    setPassword("");
    setEmail("");
  }, [creatingAccount]);

  return (
    <>
      {!creatingAccount ? (
        <Container
          style={{ minHeight: "100vh" }}
          data-bs-theme="dark"
          className="text-light"
        >
          <legend>Log In</legend>
          <Form className="mt-3" onSubmit={(e) => handleLogin(e)}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                placeholder="Username"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button variant="success" className="me-2" type="submit">
              Log In
            </Button>
            <Button className="mx-2" onClick={() => setCreatingAccount(true)}>
              Create Account
            </Button>
            <Button
              variant="secondary"
              className="mx-2"
              onClick={() => setLoggingin(false)}
            >
              Back
            </Button>
          </Form>
        </Container>
      ) : (
        <Container
          style={{ minHeight: "100vh" }}
          data-bs-theme="dark"
          className="text-light"
        >
          <legend>Create Account</legend>
          <Form className="mt-3">
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                placeholder="Username"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                required
              />
            </Form.Group>
            <Button
              variant="success"
              className="me-2"
              onClick={(e) => handleCreate(e)}
            >
              Create Account
            </Button>
            <Button
              variant="secondary"
              className="mx-2"
              onClick={() => setCreatingAccount(false)}
            >
              Log In
            </Button>
          </Form>
        </Container>
      )}
    </>
  );
};

export default Login;

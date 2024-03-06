import React, { useState, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import apiURL from "../api";

const Login = ({ setLoggingin, setLogin, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

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
  }

  return (
    <Container
      style={{ minHeight: "100vh" }}
      data-bs-theme="dark"
      className="text-light"
    >
      <Form className="mt-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>

        <Button onClick={() => setLoggingin(false)}>Back</Button>
      </Form>
    </Container>
  );
};

export default Login;

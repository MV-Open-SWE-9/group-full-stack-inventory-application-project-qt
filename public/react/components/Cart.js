import React, { useState, useEffect } from "react";
import { Card, Button, CardText, Container, Row, Col } from "react-bootstrap";
import apiURL from "../api";

const Cart = ({ user }) => {
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch(`${apiURL}/users/${user.id}/cart`);
      const data = await res.json();
      console.log(data);
      setUserItems(data);
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <Container
      style={{ minHeight: "100vh" }}
      data-bs-theme="dark"
      className="text-light"
    >
      <Row>
        {userItems.map((item, i) => (
          <Col key={i}>
            <Card
              data-bs-theme="dark"
              style={{ width: "18rem" }}
              className="mb-3 mx-auto"
            >
              <Card.Img
                style={{ height: "20em" }}
                variant="top"
                src={item.image}
              />
              <Card.Body bg="secondary" key={"Secondary"}>
                <Card.Title style={{ height: "7em" }}>{item.name}</Card.Title>
                <CardText>${item.price.toFixed(2)}</CardText>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cart;

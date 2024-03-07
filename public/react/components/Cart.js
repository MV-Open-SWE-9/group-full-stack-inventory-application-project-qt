import React, { useState, useEffect } from "react";
import { Card, Button, CardText, Container, Row, Col } from "react-bootstrap";
import apiURL from "../api";

const Cart = ({ user, setCart }) => {
  //initialize user items with array
  const [userItems, setUserItems] = useState([]);

  //initialize page with items
  useEffect(() => {
    fetchItems();
  }, []);

  //fetch the user items from the cart association
  const fetchItems = async () => {
    try {
      const res = await fetch(`${apiURL}/users/${user.id}/cart`);
      const data = await res.json();
      setUserItems(data);
    } catch (e) {
      console.log("Error", e);
    }
  };

  //allow user to remove selected item
  const handleRemove = async (item) => {
    try {
      await fetch(`${apiURL}/users/removeFromCart`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          itemId: item.id,
        }),
      });
      fetchItems();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container
      style={{ minHeight: "100vh" }}
      data-bs-theme="dark"
      className="text-light"
    >
      {/* map all of the items from the user's cart */}
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
                <Button variant="danger" onClick={() => handleRemove(item)}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Button
          className="fixed-bottom m-3"
          style={{ maxWidth: "10em" }}
          onClick={() => setCart(false)}
        >
          Back
        </Button>
      </Row>
    </Container>
  );
};

export default Cart;

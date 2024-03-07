import React, { useState, useEffect } from "react";
import { Card, Button, CardText } from "react-bootstrap";

//component that forms the body of the default page
const Item = ({ item, setDetail, setItem }) => {
  return (
    <Card
      data-bs-theme="dark"
      style={{ width: "18rem" }}
      className="mb-3 mx-auto"
    >
      <Card.Img style={{ height: "20em" }} variant="top" src={item.image} />
      <Card.Body bg="secondary" key={"Secondary"}>
        <Card.Title style={{ height: "7em" }}>{item.name}</Card.Title>
        <CardText>${item.price.toFixed(2)}</CardText>

        {/* button that allows user to see extended details about product */}

        <Button
          variant="primary"
          onClick={() => {
            setDetail(true);
            setItem(item);
          }}
        >
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;

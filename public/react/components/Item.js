import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const Item = ({ item, setDetail, setItem }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Button variant="primary" onClick={() => {setDetail(true); setItem(item)}}>Details</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;

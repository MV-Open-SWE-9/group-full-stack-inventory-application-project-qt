import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Image, CardBody } from "react-bootstrap";

const ItemDetail = ({ item, setDetail }) => {
  return (
    <>
      
      <Row className="mt-3">
        <Col>
          <Image src={item.image} fluid />
        </Col>
        <Col>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <Card body>{item.category}</Card>
          <h4>${item.price.toFixed(2)}</h4>
          <Button onClick={() => setDetail(false)}>Back</Button>

        </Col>
        
      </Row>
      
    </>
  );
};

export default ItemDetail;

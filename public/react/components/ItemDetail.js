import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Image } from "react-bootstrap";

const ItemDetail = ({ item, setDetail, setEditing }) => {
  return (
    <>
      <Row className="mt-3">
        <Col>
          <Image
            style={{ maxHeight: "602px", minWidth: "602px" }}
            src={item.image}
          />
        </Col>
        <Col>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <Card body>{item.category}</Card>
          <h4>${Number(item.price).toFixed(2)}</h4>
          <Button onClick={() => setDetail(false)}>Back</Button>
          <Button onClick={() => setEditing(true)}>Edit Item</Button>
        </Col>
      </Row>
    </>
  );
};

export default ItemDetail;

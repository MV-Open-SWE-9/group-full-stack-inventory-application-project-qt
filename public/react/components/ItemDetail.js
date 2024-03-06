import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Image } from "react-bootstrap";

import apiURL from "../api";

const ItemDetail = ({ item, setDetail, setEditing }) => {

  const deleteItem = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${apiURL}/items/${item.id}`, {
        method: "DELETE",
      });
      setDetail(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Row className="mt-3">
        <Col>
          <Image
            style={{ maxHeight: "602px", minWidth: "602px" }}
            src={item.image}
          />
        </Col>
        <Col
          style={{ minHeight: "100vh" }}
          className="text-light"
          data-bs-theme="dark"
        >
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <Card body>{item.category}</Card>
          <h4>${Number(item.price).toFixed(2)}</h4>
          <Button onClick={() => setDetail(false)}>Back</Button>
          <Button onClick={() => setEditing(true)}>Edit Item</Button>
          <Button onClick={(e) => deleteItem(e)}>Delete</Button>
        </Col>
      </Row>
    </>
  );
};

export default ItemDetail;

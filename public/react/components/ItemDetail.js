import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Image } from "react-bootstrap";

import apiURL from "../api";

//component that renders extended item details
const ItemDetail = ({ item, setDetail, setEditing }) => {
  //function that confirms before deletion
  const deleteConfirm = (e) => {
    if (confirm("Are you sure you would like to delete?") === true) {
      deleteItem(e);
    } else {
      console.log("Aborted");
    }
  };

  //fetch item that needs to be deleted
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
          {/* row of buttons that give user options */}
          <div>
            <Button onClick={() => setDetail(false)}>Back</Button>
            <Button onClick={() => setEditing(true)}>Edit Item</Button>
            <Button onClick={(e) => deleteConfirm(e)}>Delete</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ItemDetail;

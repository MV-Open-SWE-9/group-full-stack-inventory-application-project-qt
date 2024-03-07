import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Image } from "react-bootstrap";

import apiURL from "../api";

//component that renders extended item details
const ItemDetail = ({ item, setDetail, setEditing, login, user }) => {
  //function that confirms before deletion
  const deleteConfirm = (e) => {
    if (confirm("Are you sure you would like to delete?") === true) {
      deleteItem(e);
    } else {
      console.log("Aborted");
    }
  };

  // fetch item that needs to be deleted
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
  // function that adds item to cart
  const handleClick = async () => {
    try {
      setDetail(false);
      await fetch(`${apiURL}/users/addToCart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          itemId: item.id,
        }),
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleClick = async () => {
    try {
      setDetail(false);
      await fetch(`${apiURL}/users/addToCart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          itemId: item.id,
        }),
      });
    } catch (e) {
      console.error(e);
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
            <Button
              variant="secondary"
              className="me-2"
              onClick={() => setDetail(false)}
            >
              Back
            </Button>
            <Button
              variant="warning"
              className="mx-2"
              onClick={() => setEditing(true)}
            >
              Edit Item
            </Button>
            <Button
              variant="danger"
              className="mx-2"
              onClick={(e) => deleteConfirm(e)}
            >
              Delete
            </Button>
            {login && (
              <Button variant="success" className="mx-2" onClick={handleClick}>
                Add to Cart
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ItemDetail;

import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const ItemDetail = ({ item, setDetail }) => {
  return (
    <>
      <h1>detail item view</h1>
      <p>{item.name}</p>
      <button onClick={() => setDetail(false)}>Back</button>
    </>
  );
};

export default ItemDetail;

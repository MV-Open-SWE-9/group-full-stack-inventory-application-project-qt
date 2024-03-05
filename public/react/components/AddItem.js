import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";

const addItem = ({ setCreating }) => {
  return (
    <>
      <Container>
        <Form className="mt-5">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Item Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control type="textarea" placeholder="Enter Description" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter Price" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" placeholder="Enter Category" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image Url</Form.Label>
            <Form.Control type="text" placeholder="Enter Image Url" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button onClick={() => setCreating(false)}>Back</Button>
        </Form>
      </Container>
    </>
  );
};

export default addItem;

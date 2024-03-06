import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import apiURL from "../api";

const AddItem = ({ setCreating }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  async function createItem(e) {
    e.preventDefault();
    try {
      await fetch(`${apiURL}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: description,
          price: price,
          category: category,
          image: image,
        }),
      });
      setCreating(false);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <Container
        className="text-light"
        data-bs-theme="dark"
        style={{ minHeight: "100vh" }}
      >
        <Form className="mt-5" onSubmit={(e) => createItem(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter Item Name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              as="textarea"
              style={{ height: "100px" }}
              placeholder="Enter Description"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
              placeholder="Enter Price"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              type="text"
              placeholder="Enter Category"
            >
              <option>Select Category</option>
              <option>Clothing</option>
              <option>Technology</option>
              <option>Jewelery</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              onChange={(e) => setImage(e.target.value)}
              value={image}
              type="text"
              placeholder="Enter Image Url"
            />
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

export default AddItem;

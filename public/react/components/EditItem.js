import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import apiURL from "../api";

const EditItem = ({ setEditing, item, setItem }) => {
  const [name, setName] = useState(`${item.name}`);
  const [description, setDescription] = useState(`${item.description}`);
  const [price, setPrice] = useState(item.price);
  const [category, setCategory] = useState(`${item.category}`);
  const [image, setImage] = useState(`${item.image}`);

  async function createItem(e) {
    e.preventDefault();
    const newItem = {
      id: item.id,
      name: name,
      description: description,
      price: price,
      category: category,
      image: image,
    };
    try {
      await fetch(`${apiURL}/items/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });
      setItem(newItem);
      setEditing(false);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <Container>
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
            <Form.Control
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              type="text"
              placeholder="Enter Category"
            />
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
          <Button onClick={() => setEditing(false)}>Back</Button>
        </Form>
      </Container>
    </>
  );
};

export default EditItem;

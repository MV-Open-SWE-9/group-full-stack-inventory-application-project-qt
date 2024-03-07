import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import apiURL from "../api";


//a component that allows user to make changes to existing item

const EditItem = ({ setEditing, item, setItem, categories }) => {
  const [name, setName] = useState(`${item.name}`);
  const [description, setDescription] = useState(`${item.description}`);
  const [price, setPrice] = useState(item.price);
  const [category, setCategory] = useState(`${item.category}`);
  const [image, setImage] = useState(`${item.image}`);

  //fetch particular item and make changes
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
      <Container
        style={{ minHeight: "100vh" }}
        data-bs-theme="dark"
        className="text-light"
      >
        <Form className="mt-3" onSubmit={(e) => createItem(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter Item Name"
              required
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
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
              placeholder="Enter Price"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              type="text"
              placeholder="Enter Category"
              required
            >
              {categories.map((category) => (
                <option>{category}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              onChange={(e) => setImage(e.target.value)}
              value={image}
              type="text"
              placeholder="Enter Image Url"
              required
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

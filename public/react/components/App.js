import React, { useState, useEffect } from "react";
import Item from "./Item";
import { Container, Row, Col, Button } from "react-bootstrap";

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import ItemDetail from "./ItemDetail";
import AddItem from "./AddItem";
import EditItem from "./EditItem";
import TestNav from "./TestNav";

export const App = () => {

  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
  const [detail, setDetail] = useState(false);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [login, setLogin] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);

  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];
  useEffect(() => {
    fetchItems();
  }, [creating, detail]);

  const fetchItems = async () => {
    try {
      const res = await fetch(`${apiURL}/items`);
      const data = await res.json();
      setItems(data);
    } catch (e) {
      console.log("Error", e);
    }
  };

  const logOut = () => {
    //todo log out user
    setLogin(false);
  }

  return (
    <>

      <TestNav login={login} logOut={logOut} loggingIn={loggingIn} setLoggingIn={setLoggingIn} />
      { loggingIn ?
          <>
            <h1>log in page</h1>
          </>
        :
        editing ? 
          <EditItem
            setEditing={setEditing}
            item={item}
            setItem={setItem}
            categories={categories}
          />
        : detail ? 
          <Container style={{ minHeight: "100vh" }}>
            <ItemDetail
              item={item}
              setDetail={setDetail}
              setEditing={setEditing}
            />
          </Container>
        : creating ?
          <AddItem setCreating={setCreating} categories={categories} />
        :
          <>
            <Container style={{ minHeight: "100vh" }} className="d-flex">
              <Row>
                {items.map((item, i) => (
                  <Col  key={i}>
                    <Item
                      key={i}
                      item={item}
                      setDetail={setDetail}
                      setItem={setItem}
                    />
                  </Col>
                ))}
              </Row>
              <Button
                className="fixed-bottom m-3"
                style={{ maxWidth: "10em" }}
                onClick={() => setCreating(true)}
              >
                Add New Item
              </Button>
            </Container>
          </>
      }
      
    </>
  );
};

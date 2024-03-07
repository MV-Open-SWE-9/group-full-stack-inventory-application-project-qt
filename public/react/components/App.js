import React, { useState, useEffect } from "react";
import Item from "./Item";
// import bootstrap-react components
import { Container, Row, Col, Button } from "react-bootstrap";

// import and prepend the api url to any fetch calls
import apiURL from "../api";
// import react components
import ItemDetail from "./ItemDetail";
import AddItem from "./AddItem";
import EditItem from "./EditItem";
import TestNav from "./TestNav";
import Login from "./Login";
import Cart from "./Cart";

export const App = () => {
  // initialize all useStates
  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
  const [detail, setDetail] = useState(false);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [login, setLogin] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(false);

  // initialize all item categories
  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  // allow page to reload on specific useState changes and initial load
  useEffect(() => {
    fetchItems();
  }, [creating, detail]);

  // get all items and store in items useState
  const fetchItems = async () => {
    try {
      const res = await fetch(`${apiURL}/items`);
      const data = await res.json();
      setItems(data);
    } catch (e) {
      console.log("Error", e);
    }
  };

  // log out user
  const logOut = () => {
    setLogin(false);
    setUser(null);
    setCart(false);
  };

  return (
    <>
      {/* always render navbar using bootstrap-react components */}
      <TestNav
        login={login}
        logOut={logOut}
        loggingIn={loggingIn}
        setLoggingIn={setLoggingIn}
        user={user}
        setCart={setCart}
      />
      {/* ternary to decide which mode of component manipulation user is in */}
      {cart ? (
        <>
          {/* view cart */}
          <Cart
            user={user}
            setCart={setCart}
            detail={detail}
            item={item}
            setDetail={setDetail}
            setItem={setItem}
          />
        </>
      ) : loggingIn ? (
        <>
          {/* view login */}
          <Login
            setLoggingin={setLoggingIn}
            setLogin={setLogin}
            setUser={setUser}
          />
        </>
      ) : editing ? (
        <>
          {/* view item edit */}
          <EditItem
            setEditing={setEditing}
            item={item}
            setItem={setItem}
            categories={categories}
          />
        </>
      ) : detail ? (
        <Container style={{ minHeight: "100vh" }}>
          {/* view detailed item */}
          <ItemDetail
            item={item}
            setDetail={setDetail}
            setEditing={setEditing}
            login={login}
            user={user}
          />
        </Container>
      ) : creating ? (
        <>
          {/* view adding item */}
          <AddItem setCreating={setCreating} categories={categories} />
        </>
      ) : (
        <>
          <Container style={{ minHeight: "100vh" }} className="d-flex">
            {/* view display of current items */}
            <Row>
              {items.map((item, i) => (
                <Col key={i}>
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
      )}
    </>
  );
};

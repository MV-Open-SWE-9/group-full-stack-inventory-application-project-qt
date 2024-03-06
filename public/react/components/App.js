import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import Item from "./Item";
import { Container, Row, Col, Button } from "react-bootstrap";

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import ItemDetail from "./ItemDetail";
import AddItem from "./AddItem";
import EditItem from "./EditItem";
import TestNav from "./TestNav";

export const App = () => {
  // const [sauces, setSauces] = useState([]);

  // async function fetchSauces(){
  // 	try {
  // 		const response = await fetch(`${apiURL}/sauces`);
  // 		const saucesData = await response.json();

  // 		setSauces(saucesData);
  // 	} catch (err) {
  // 		console.log("Oh no an error! ", err)
  // 	}
  // }

  // useEffect(() => {
  // 	fetchSauces();
  // }, []);

  // return (
  // 	<main>
  //   <h1>Sauce Store</h1>
  // 		<h2>All things 🔥</h2>
  // 		<SaucesList sauces={sauces} />
  // 	</main>
  // )

  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
  const [detail, setDetail] = useState(false);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);

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

  return (
    <>
      <TestNav setCreating={setCreating} />
      {editing ? (
        <EditItem setEditing={setEditing} item={item} setItem={setItem} />
      ) : detail ? (
        <Container style={{ minHeight: "100vh" }}>
          <ItemDetail
            item={item}
            setDetail={setDetail}
            setEditing={setEditing}
          />
        </Container>
      ) : creating ? (
        <AddItem setCreating={setCreating} />
      ) : (
        <>
          <Container style={{ minHeight: "100vh" }} className="d-flex">
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
          </Container>
        </>
      )}
    </>
  );
};

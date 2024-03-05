import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import Item from "./Item";
import { Container, Row, Col } from "react-bootstrap";

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import ItemDetail from "./ItemDetail";

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


  useEffect(() => {
    fetchItems();
  }, []);

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
    <Container className="d-flex">
      {detail ?
      
        <ItemDetail item={item} setDetail={setDetail} />
      :
        <Row>
        
          
            {items.map((item) => (
              <Col>
                <Item item={item} setDetail={setDetail} setItem={setItem} />
              </Col>
              
            ))}
          
        
        </Row>
      }
    </Container>
  );
};

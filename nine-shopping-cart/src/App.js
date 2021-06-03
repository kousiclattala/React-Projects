import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { Container, Row, Col } from "reactstrap";

import BuyPage from "./components/BuyPage";
import Cart from "./components/Cart";

function App() {
  const [cartItem, setCartitem] = useState([]);

  const addInCart = (item) => {
    const isItemAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isItemAdded !== -1) {
      toast("Item Already in cart", {
        type: "error",
      });
      return;
    }

    setCartitem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartitem([]);

    toast("Purchase Complete", {
      type: "success",
    });
  };

  const removeItem = (item) => {
    setCartitem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md={8}>
          <BuyPage addInCart={addInCart} />;
        </Col>
        <Col md={4}>
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

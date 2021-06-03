import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Axios from "axios";
import { random, commerce, datatype } from "faker";
import CardItem from "./CardItem";

const url = "http://myjson.dit.upm.es/api/bins/10n1";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.get(url);
    const { photos } = data;

    const allProducts = photos.map((photo) => ({
      mediumImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: datatype.uuid(),
    }));

    setProduct(allProducts);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CardItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;

import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardImg,
} from "reactstrap";

const CardItem = ({ product, addInCart }) => {
  return (
    <Card>
      <CardImg top height="250px" width="100%" src={product.mediumImage} />
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">
          price: {product.productPrice} /-
        </CardText>
        <Button color="success" onClick={() => addInCart(product)}>
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default CardItem;

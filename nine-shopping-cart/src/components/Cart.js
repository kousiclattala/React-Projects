import React from "react";
import {
  Card,
  CardBody,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
  CardHeader,
  CardFooter,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });
  return (
    <Container>
      <h1>Your Cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img src={item.tinyImage} alt="Product Image" height="80px" />
              </Col>
              <Col className="text-center">
                <div className="text-primary">
                  {item.productName}
                  <span>price:- {item.productPrice}</span>
                  <Button color="danger" onClick={() => removeItem(item)}>
                    Remove
                  </Button>
                </div>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* if everything is empty */}
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            Total amount for {cartItem.length} products in your cart {amount}
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              Purchase Them
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning">Cart is Empty</h1>
      )}
    </Container>
  );
};

export default Cart;

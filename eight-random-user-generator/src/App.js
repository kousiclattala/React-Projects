import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyCard from "./components/MyCard";
import Axios from "axios";

const App = () => {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const url = "https://randomuser.me/api/";

    const { data } = await Axios.get(url);
    const details = data.results[0];
    setDetails([details]);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={4} className="offset-md-4">
          <MyCard details={details}></MyCard>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

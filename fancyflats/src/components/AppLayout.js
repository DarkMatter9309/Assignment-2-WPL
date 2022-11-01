import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import LoactionCards from "./LocationCards";
import Menu from "./Menu";
import useStore from "./../store";

const AppLayout = () => {
  const display = useStore((state) => state.display);
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>
      <Row>
        <Col>
          <Menu />
        </Col>
        <Col xs={10}>
          {display == "cards" && <LoactionCards />}
          {display == "card_details" && <CardDetails />}
        </Col>
      </Row>
    </Container>
  );
};

export default AppLayout;

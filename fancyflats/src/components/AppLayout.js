import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import LoactionCards from "./LocationCards";
import Menu from "./Menu";

const AppLayout = () => {
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
          <LoactionCards />
        </Col>
      </Row>
    </Container>
  );
};

export default AppLayout;

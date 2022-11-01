import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../assets/Fancy.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useStore from "../store";

function Header() {
  const setFilteredProperties = useStore(
    (state) => state.setFilteredProperties
  );
  const properties = useStore((state) => state.properties);

  const [inputValue, setInputValue] = React.useState("");

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    let temp = [];
    if (properties.length == 0) {
      return;
    }
    if (inputValue == null || inputValue == "") {
      setFilteredProperties(properties);
      return;
    }
    console.log(properties);
    console.log(inputValue);
    for (let i = 0; i < properties.length; i++) {
      if (
        properties[i].title.includes(inputValue) ||
        properties[i].city.includes(inputValue)
      ) {
        temp.push(properties[i]);
      }
    }
    setFilteredProperties(temp);
  }, [inputValue]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <img href="#home" src={logo} width="80px" height="40px" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">FAQs</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={inputValue}
              style={{ marginRight: "1rem" }}
            />
            <Button variant="outline-primary" style={{ marginRight: "10px" }}>
              Login
            </Button>
            <Button variant="outline-warning">SignUp</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

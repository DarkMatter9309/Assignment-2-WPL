import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Menu() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "1rem",
      }}
    >
      <Dropdown.Menu show>
        <Dropdown.Item eventKey="1">Home</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dashboard</Dropdown.Item>
        <Dropdown.Item eventKey="3">Orders</Dropdown.Item>
        <Dropdown.Item eventKey="3">Products</Dropdown.Item>
        <Dropdown.Item eventKey="3">Favourites</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Team 1</Dropdown.Item>
      </Dropdown.Menu>
    </div>
  );
}

export default Menu;

import React from "react";

import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import logo from "../../logo.svg";

const myNavbar = () => {
  return (
    <Navbar bg="blue" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      <NavbarBrand>
        <img alt="logo" src={logo} width="40px" height="40px" />
        Logo
      </NavbarBrand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Products">
            <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
            <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
            <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#products">Contact </Nav.Link>
          <Nav.Link href="#products">About US </Nav.Link>
          <button className="btn my-4" id="menu-btn">
            Toggle Sidebar
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default myNavbar;

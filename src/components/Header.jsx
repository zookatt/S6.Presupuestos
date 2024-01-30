import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon.png";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar  collapseOnSelect expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand className="py-3 px-5 fs-5 text-center text-md-start" style={{ fontWeight: "bolder" }}>
          <img className="img-fluid" src={icon} style={{ maxWidth: '3%' }} alt="icon" />
          Frontender.itacademy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className="fs-4 btn btn-outline-info me-2">
              App
            </Nav.Link>
            <Nav.Link as={Link} to="/welcome" className="fs-4 btn btn-outline-info me-2">
              Welcome
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
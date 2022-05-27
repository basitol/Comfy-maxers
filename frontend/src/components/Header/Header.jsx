import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand>Comfy Maxers</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to={"/cart"}>
                <Nav.Link>
                  <FiShoppingCart /> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/login"}>
                <Nav.Link>
                  <FiUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const HeaderNav = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              width="300px"
              height="auto"
              src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
              alt="logo"
            ></img>
          </Navbar.Brand>
          <div style={{ alignItems: "flex-end" }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">About us</Nav.Link>
                <Nav.Link href="#link">Career</Nav.Link>
                <NavDropdown title="Departments" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Marketing & PR
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Customer sucess & sales
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    IT,Product,Data
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Finance & Administration
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    HR &more
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNav;

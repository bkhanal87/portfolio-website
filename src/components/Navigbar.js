import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Basu-Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="More" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Portfolio</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* Resume link and LinkedIn link go here */}
          <Nav>
            <Nav.Link href="#deets">Resume</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              LinkedIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Navigbar;

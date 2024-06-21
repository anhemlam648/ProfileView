import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logotechnology from "../assets/img/creative.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import "./NavBar.css"; 

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#" className="logo-technology" style={{width:'50px'}}>
          <img src={Logotechnology} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Link</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <img src={navIcon1} alt="Nav Icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Logotechnology from "../assets/img/logo_nav.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import "./NavBar.css"; 

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation(); 
  const isContactPage = location.pathname === '/contact';
  return (
    <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/" className="logo-technology" style={{width:'50px'}}>
          <img src={Logotechnology} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {!isContactPage && <Nav.Link href="#contactProfile">Contact</Nav.Link>}
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <img src={navIcon1} alt="Nav Icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

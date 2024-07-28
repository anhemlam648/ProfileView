import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Logotechnology from "../assets/img/logo_nav.png";
import navIcon1 from "../assets/img/facebook.png";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation(); 
  const isContactPage = location.pathname === '/contact';
  const Introduction = location.pathname === '/contact';
  const isAboutmePage = location.pathname === '/contact';
  const SpotifyPlaying = location.pathname === '/contact';
  const navbarStyle = {
    background: 'linear-gradient(135deg, #FF9900, #cc33ff)',
  };

  const brandStyle = {
    width: '50px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  // const linkHoverStyle = {
  //   opacity: '0.8',
  // };

  const toggleIconStyle = {
    backgroundImage: "url('data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255,255,255,.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e')",
  };

  const navbarCollapseStyle = {
    padding: '0',
  };

  return (
    <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark" style={navbarStyle}>
      <Container>
        <Navbar.Brand href="/" style={brandStyle}>
          <img src={Logotechnology} alt="Logo" style={{ height: '50px' }} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
          style={toggleIconStyle}
        />
        <Navbar.Collapse id="basic-navbar-nav" style={navbarCollapseStyle}>
          <Nav className="me-auto">
            <Nav.Link href="/" style={linkStyle}>Home</Nav.Link>
            {!Introduction && <Nav.Link href="#IntroductionProfile" style={linkStyle}>Introduction-Me</Nav.Link>}
            {!isAboutmePage && <Nav.Link href="#AboutProfile" style={linkStyle}>About-Me</Nav.Link>}
            {!SpotifyPlaying && <Nav.Link href="#SpotifyPlaying" style={linkStyle}>Spotify-Playing</Nav.Link>}
            {!isContactPage && <Nav.Link href="#contactProfile" style={linkStyle}>Contact</Nav.Link>}          
          </Nav>
          <Nav>
            <Nav.Link href="https://www.facebook.com/vu.nghia.18062">
              <img src={navIcon1} alt="Nav Icon" style={{ height: '24px' }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

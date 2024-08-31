import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Logotechnology from "../assets/img/logo_nav.png";
import navIcon1 from "../assets/img/facebook.png";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation(); 
  // const isContactPage = location.pathname === '/contact';
  // const Introduction = location.pathname === '/contact';
  // const isAboutmePage = location.pathname === '/contact';
  // const SpotifyPlaying = location.pathname === '/contact';
  //update hide with much url
  const hashToHideLinks = ['/show','/contact'];
  const HidePages = hashToHideLinks.includes(location.pathname)

  //navbar
  // const navbarStyles = {
  //   background: '#363636',
  //   width: '100%',
  //   padding: '1rem 0', 
  // };

  //brand
  const brandStyle = {
    height: '50px',
  };

  //link
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  //activel
  const activeLinkStyle = {
    color: '#00FFFF',
    borderBottom: '2px solid #00FFFF',
  };

  //images
  const imageStyle = {
    height: '1.5rem',
    width: 'auto',
  };

  
  // const linkHoverStyle = {
  //   opacity: '0.8',
  // };

  //toggle
  const toggleIconStyle = {
    marginLeft:'-1rem',
    marginRight:'1rem',
    backgroundImage: "url('data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255,255,255,.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e')",
  };

  //navbar collap
  const navbarCollapseStyle = {
    padding: '0',
    marginLeft:'0.5rem'
  };
  return (
    <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark" style={{ padding: '0.7rem 0', maxWidth: '1200px',margin: '0 auto' }}>
      <Container>
        <Navbar.Brand href="/" style={brandStyle}>
          <img src={Logotechnology} alt="Logo" style={{ height: '3.125rem', width:'auto'}} />
        </Navbar.Brand>
        {/* Config with Toggle */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
          style={toggleIconStyle}
        />
        <Navbar.Collapse id="basic-navbar-nav" style={navbarCollapseStyle}>
          <Nav className="me-auto">
            <Nav.Link href="/" style={linkStyle}>Home</Nav.Link>
            {/* hide with url */}
            {!HidePages && (
              <>
              <Nav.Link href="#IntroductionProfile" style={location.hash === '#IntroductionProfile' ? activeLinkStyle : linkStyle}>Introduction-Me</Nav.Link>
              <Nav.Link href="#AboutProfile" style={location.hash === '#AboutProfile' ? activeLinkStyle : linkStyle}>About-Me</Nav.Link>
              <Nav.Link href="#SpotifyPlaying" style={location.hash === '#SpotifyPlaying' ? activeLinkStyle : linkStyle}>Spotify-Playing</Nav.Link>
              <Nav.Link href="#contactProfile" style={location.hash === '#contactProfile' ? activeLinkStyle : linkStyle}>Contact</Nav.Link>
            </>
            )}
            {/* {!Introduction && <Nav.Link href="#IntroductionProfile" style={linkStyle}>Introduction-Me</Nav.Link>}
            {!isAboutmePage && <Nav.Link href="#AboutProfile" style={linkStyle}>About-Me</Nav.Link>}
            {!SpotifyPlaying && <Nav.Link href="#SpotifyPlaying" style={linkStyle}>Spotify-Playing</Nav.Link>}
            {!isContactPage && <Nav.Link href="#contactProfile" style={linkStyle}>Contact</Nav.Link>}  */}
          </Nav>
          <Nav>
            <Nav.Link href="https://www.facebook.com/vu.nghia.18062">
              <img src={navIcon1} alt="Nav Icon" style={imageStyle} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

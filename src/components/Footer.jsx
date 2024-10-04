import { useContext, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ThemContext } from './context/ThemProvider';
const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { theme } = useContext(ThemContext); //add Themcontext from ThemProvider
  //footer
  const footerStyle = {
    dark:{
      background: '#333',
      color: 'white',
      padding: '1rem 0', 
      marginTop: '-0.9rem', 
      zIndex: 1,
      borderBottom: '2px solid #ffeb3b' 
    },
    light:{
      background: 'linear-gradient(to right, #ff5722, #ffd700)',
      color: 'white',
      padding: '1rem 0', 
      marginTop: '-0.9rem', 
      zIndex: 1,
      borderBottom: '2px solid #ffeb3b' 
    }
  };

  //heading
  const headingStyle = {
    color: 'white',
    fontSize: '1.25rem', 
    textAlign: 'center', 
  };
  
  //heading1
  const headingStyle1 = {
    color: 'white',
    fontSize: '1rem', 
    textAlign: 'center', 
  };
  
  //link
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    display: 'block', 
    textAlign: 'center', 
  };
  
  //paragraph
  const paragraphStyle = {
    marginBottom: '0.5rem', 
    color: 'white',
    fontSize: '0.875rem', 
    textAlign: 'center', 
  };

  //maplocation
  const mapLocation = {
    marginTop: '1rem',
    marginBottom: '1rem',
    transform: isHovered ? 'scale(1.1)' : 'scale(1.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };
  
  return (
    // <footer style={footerStyle} >

      <footer style={footerStyle[theme]} className= {`footer ${theme}`} >
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h5 style={headingStyle}>Contact Information</h5>
            <p style={paragraphStyle}>📍 34/7, Str. So 1A, Long Thanh My Ward, Dist Thu Duc, Ho Chi Minh City</p>
            <p style={paragraphStyle}>📧 Email: vunghia467@gmail.com</p>
            <div id="address" style={mapLocation} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Container>
              <Row>
                <Col className="map-container">
                  <iframe title="Google Map" width="100%" height="250" src="https://maps.google.com/maps?q=34/7%2C%20đường.%20Số%201A%2C%20P.%20Long%20Thạnh%20Mỹ%2C%20Q.%20Thủ%20Đức%2C%20TP.HCM&t=&z=15&ie=UTF8&iwloc=&output=embed" allowFullScreen
                  ></iframe>
                </Col>
              </Row>
            </Container>
          </div>
          </Col>
          <Col xs={12} md={6}>
            <h6 style={headingStyle1}>Useful Links</h6>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href="https://www.facebook.com/vu.nghia.18062"
                  style={linkStyle}
                  onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
                  FaceBook
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href="https://github.com/anhemlam648"
                  style={linkStyle}
                  onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
                  GitHub
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href="https://www.pinterest.com/vunghia467"
                  style={linkStyle}
                  onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
                  Pinterest
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href="#contact"
                  style={linkStyle}
                  onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
                  Contact
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={paragraphStyle}>© 2024 By Vu Trung Nghia.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

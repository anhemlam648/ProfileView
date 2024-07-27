import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';
import Footer from './Footer';
import Image from "../assets/img/images_vunghia.jpg";

const contactPageStyle = {
  marginTop: '80px',
  background: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
};

const contactHeaderStyle = {
  textAlign: 'center',
  marginTop: '20px',
  color: '#333',
};

const contactInfoStyle = {
  marginTop: '20px',
  fontSize: '18px',
};

const contactInfoParagraphStyle = {
  marginBottom: '10px',
  textAlign: 'center',
  color: '#000000',
};

const contactInfoLinkStyle = {
  color: '#007bff',
};

const imageStyle = {
  marginTop: '50px',
  marginLeft: '55px',
  marginBottom: '10px',
  width: '550px',
  height: '350px',
  borderRadius: '15%',
};

const Contact = () => {
  return (
    <div style={contactPageStyle} className="contact-page">
      <NavBar />
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <img
              src={Image}
              style={imageStyle}
              alt="Profile Image"
            />
            <h1 style={contactHeaderStyle}>Contact Me</h1>
            <div style={contactInfoStyle}>
              <p style={contactInfoParagraphStyle}><strong>Email:</strong> vunghia467@gmail.com</p>
              <p style={contactInfoParagraphStyle}>
                <strong>Facebook:</strong> 
                <a 
                  href="https://www.facebook.com/vu.nghia.18062" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={contactInfoLinkStyle}
                >
                  VuNghia
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;

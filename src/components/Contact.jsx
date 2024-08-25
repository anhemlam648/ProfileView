import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';
import Image from "../assets/img/floating-cyberpunk.jpg";

//contactPage
const contactPageStyle = {
  backgroundColor: '#FFFFFF',
  minHeight: '100vh', 
  padding: '1rem', 
  boxSizing: 'border-box', 
  display: 'flex', 
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'center'
  
};

//contactFooter
const contactFooterStyle = {
  marginTop: '1rem',
  textAlign: 'center',
  color: '#333',
  fontSize: '1.5rem', 
  marginLeft: 'auto', 
  marginRight: 'auto', 
  display: 'block', 
};

//contactInfo
const contactInfoStyle = {
  marginTop: '1rem',
  fontSize: '1rem', 
};

const contactInfoParagraphStyle = {
  marginBottom: '0.75rem', 
  textAlign: 'center',
  color: '#000000',
};

const contactInfoParagraphStyle1 = {
  marginBottom: '0.75rem', 
  textAlign: 'center',
  color: '#000000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const contactInfoLinkStyle = {
  color: '#007bff',
  marginLeft: '0.25rem', 
};

//images
const imageStyle = {
  marginTop: '5rem', 
  width: '90%', 
  maxWidth: '450px', 
  padding: '0.5rem', 
  marginLeft: 'auto', 
  marginRight: 'auto', 
  display: 'block', 
  backgroundColor: '#EEEEEE', 
  borderRadius: '0.5rem', 
  marginBottom: '1rem', 
};



const Contact = () => {
  return (
    <div style={contactPageStyle} className="contact-page">
      <NavBar />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <img
              src={Image}
              style={imageStyle}
              alt="Profile Image"
            />
            <h1 style={contactFooterStyle}>💻 Contact Me</h1>
            <div style={contactInfoStyle}>
              <p style={contactInfoParagraphStyle}><strong>Email:</strong> vunghia467@gmail.com</p>
              <p style={contactInfoParagraphStyle1}>
                <strong>Facebook:</strong> 
                <a 
                  href="https://www.facebook.com/vu.nghia.18062" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={contactInfoLinkStyle}>
                  VuNghia
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

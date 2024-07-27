import { Container, Row, Col } from 'react-bootstrap'; // Assuming you have react-bootstrap imported
import NavBar from './NavBar';
import Footer from './Footer';
import Image from "../assets/img/images_vunghia.jpg"; 
import './Contact.css'
const Contact = () => {
  return (
    <div style={{marginTop:'80px',background:'#FFFFFF'}}className="contact-page">
    <NavBar />x
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <img
              src={Image}
              style={{marginLeft:'210px', marginBottom: '10px', width: '220px', height: '300px', borderRadius: '20%' }}
              alt="Profile Image"
            />
            <h1 className="contact-header" style={{textAlign:'center',color:'#000000'}}>Contact Me</h1>
            <div className="contact-info">
              <p style={{textAlign:'center',color:'#000000'}}><strong>Email:</strong> vunghia467@gmail.com</p>
              <p style={{textAlign:'center',color:'#000000'}}><strong>Facebook:</strong> <a href="https://www.facebook.com/vu.nghia.18062" target="_blank" rel="noopener noreferrer">VuNghia</a></p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;

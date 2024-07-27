import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <h5 style={{fontSize: '15px'}}>Contact Information</h5>
            <p style={{fontSize: '15px'}}>📍 34/7, Str. So 1A, Long Thanh My Ward, Dist Thu Duc, Ho Chi Minh City</p>
            <p style={{fontSize: '15px'}}>📧 Email: vunghia467@gmail.com</p>
          </Col>
          <Col md={6}>
            <h6>Useful Links</h6>
            <ul>
              <li><a href="https://www.facebook.com/vu.nghia.18062">FaceBook</a></li>
              <li><a href="https://github.com/anhemlam648">GitHub</a></li>
              <li><a href="https://www.pinterest.com/vunghia467">Pinterest</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center" style={{fontSize: '15px'}}>© 2024 Vu Trung Nghia.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

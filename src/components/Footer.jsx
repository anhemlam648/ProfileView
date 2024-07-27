import { Container, Row, Col } from "react-bootstrap";

const footerStyle = {
  background: 'linear-gradient(135deg, #FF9900, #cc33ff)',
  color: 'white',
  padding: '30px 0',
  marginTop: '50px',
};

const headingStyle = {
  color: 'white',
};

const headingStyle1 = {
  color: 'white',
  marginLeft:'450px'
};


const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginLeft:'450px'
};


const paragraphStyle = {
  marginBottom: '10px',
  color: 'white',
  fontSize: '15px',
};

const textCenterStyle = {
  marginTop: '20px',
  textAlign: 'center',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col md={6}>
            <h5 style={headingStyle}>Contact Information</h5>
            <p style={paragraphStyle}>📍 34/7, Str. So 1A, Long Thanh My Ward, Dist Thu Duc, Ho Chi Minh City</p>
            <p style={paragraphStyle}>📧 Email: vunghia467@gmail.com</p>
          </Col>
          <Col md={6}>
            <h6 style={headingStyle1}>Useful Links</h6>
            <ul style={{ listStyle: 'none', padding: '0'}}>
              <li style={{ marginBottom: '10px' }}>
                <a
                  href="https://www.facebook.com/vu.nghia.18062"
                  style={linkStyle}
                  onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                >
                  FaceBook
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a
                  href="https://github.com/anhemlam648"
                  style={linkStyle}
                  onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                >
                  GitHub
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a
                  href="https://www.pinterest.com/vunghia467"
                  style={linkStyle}
                  onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                >
                  Pinterest
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a
                  href="#contact"
                  style={linkStyle}
                  onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                >
                  Contact
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ ...paragraphStyle, ...textCenterStyle }}>© 2024 By Vu Trung Nghia.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

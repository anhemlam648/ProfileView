  import { useState, useEffect } from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCode, faPalette, faUser } from '@fortawesome/free-solid-svg-icons';
  import NavBar from "./NavBar";
  import Footer from "./Footer";
  import "./Profile.css";
  import profileImage from "../assets/img/DSC_7431.jpg"; 
  import SpotifyPlayer from '../components/SpotifyPlayer'; 
  import { useNavigate } from "react-router-dom";

  const Profile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
          navigate('/contact');
        };
  const [dynamicText, setdynamicText] = useState({
          description: "A passionate individual with a keen interest in Web Developer.",
          location: "In Ho Chi Minh, VietNam"
      });
    useEffect(() => {
        const timer = setInterval(() => {
          setdynamicText((prevText)=> {
            if(prevText.description === "A passionate individual with a keen interest in Web Developer.") {
              return{
                  description: "Driven by a relentless pursuit of excellence in Web Development.",
                  location: "In Ho Chi Minh, District 9, VietNam"
              };
            } else {
              return {
                description: "A passionate individual with a keen interest in Web Developer.",
                location: "In Ho Chi Minh, VietNam"
              };
            }
          });
        }, 6000);
          return () => clearInterval(timer);
      }, []);

    return (
      <div id="HomeProfile" className="profile">
        <NavBar />
        <Container className="profile-content">
          <Row>
            <Col className="profile-intro">
            <img
                  src={profileImage}
                  alt="Profile Image"
                  style={{ marginBottom: '10px', width: '220px', height: '300px', borderRadius: '20%' }}
                  />
              <h1 className="typing-container">Hi 👋, I'm Vu Trung Nghia</h1>
              <p>22 years old</p>
              <p>{dynamicText.description}</p>
              <p>{dynamicText.location}</p>
              <div className="skill-icons">
                <div className="skill-icon">
                  <FontAwesomeIcon icon={faCode} size="3x" />
                  <p>Web Developer</p>
                </div>
                <div className="skill-icon">
                  <FontAwesomeIcon icon={faPalette} size="3x" />
                  <p>UI Designer</p>
                </div>
                <div className="skill-icon">
                  <FontAwesomeIcon icon={faUser} size="3x" />
                  <p>UX Designer</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="content-section">
          <Container>
            <Row>
              <Col className="content">
                <p style={{marginTop:'-20px'}}>📚 I enjoy reading books, listening to music, traveling, and exploring new cuisines.</p>
                <SpotifyPlayer /> 
              </Col>
            </Row>
            <hr />
          </Container>
        </div>
        <div className="content-service">
          <Container>
              <Row>
              <Col className="content">
                  <p style={{ fontSize: '50px', textAlign: "center" ,color:'#33FFFF' }}>It is never too late to be what you might have been.</p>
                  <p style={{ fontSize: '30px', textAlign: "center" }}>-George Eliotygiai-</p>
              </Col>
              </Row>
          </Container>
          </div>
          <div style={{ textAlign: 'center', fontSize: '50px', color: '#FFCCFF' }}>&#9660;</div>
          <div className="about-me">
          <Container>
              <Row>
              <Col className="content-about">
                  <p style={{ fontSize: '50px', textAlign: "center", color:'#FFFF00' }}>About me</p>
                  <p style={{ fontSize: '30px', textAlign: "center" }}>Welcome</p>
              </Col>
              </Row>
              <Row>
            <Col md={6} lg={3}>
              <div className="square-box">
                <div>
                  <p className="education"style={{ fontSize: '40px'}}>Education</p>
                  <p>University of Technology - HUTECH</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="square-box">
                <div>
                  <p className="figma" style={{ fontSize: '40px' }}>Figma</p>
                  <p>Interface design using Figma. Convert Figma to HTML/CSS.</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="square-box">
                <div>
                  <p className="network" style={{ fontSize: '40px' }}>Networking</p>
                  <p>Created a platform on FaceBook connect with everyone</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="square-box">
                <div>
                  <p className="music" style={{ fontSize: '40px' }}>Music & Games</p>
                  <p>Listen to EDM music and play game in my free time.</p>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          </Container>
          <div id="contactProfile" className="content-contact" >
          <Container>
              <Row>
              <Col className="content">
                  <p style={{ fontSize: '50px', textAlign: "center" ,color:'#66FFCC' }}>Work Together?</p>
                    <button className="button" onClick={handleClick}>Contact me »</button>
              </Col>
              </Row>
          </Container>
          </div>
          </div>
        <Footer />
      </div>
    );
  };
  export default Profile;

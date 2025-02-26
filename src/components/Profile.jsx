  import { useState, useEffect } from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCode, faPalette, faUser } from '@fortawesome/free-solid-svg-icons';
  import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import NavBar from "./NavBar";
  import Footer from "./Footer";
  import Copied from "../assets/img/Copied.png";
  import "./Profile.css";
  //import profileImage from "../assets/img/computer.jpg";
  import Pixel from "../assets/img/Pixel.jpg";
  import Image from "../assets/img/Image.jpg";
  import SpotifyPlayer from '../components/SpotifyPlayer'; 
  import { useNavigate } from "react-router-dom";
  import { ThemContext } from "./context/ThemProvider";
  import { useContext } from "react";
  const Profile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
          navigate('/contact');
        };
  const handleShowCV = () => {
          navigate('/show');
  };
  const handlecopied = (year,description,location) => {
    year = document.getElementById('yearold').innerText;
    description = document.getElementById('desciption').innerText;
    location = document.getElementById('location').innerText;
    const Copyright = `Year: ${year}\nDesciption:${description}\nLocation:${location}`;
    navigator.clipboard.writeText(Copyright).then(()=> {
        alert('copy right');
    })
  };

  
  const [dynamicText, setdynamicText] = useState({
          description: "A passionate individual with a keen interest in Web Developer.",
          location: "In Ho Chi Minh, VietNam",
          Image: Image
      });
    useEffect(() => {
        const timer = setInterval(() => {
          setdynamicText((prevText)=> {
            if(prevText.description === "A passionate individual with a keen interest in Web Developer.") {
              return{
                 Image: Pixel,
                  description: "Driven by a relentless pursuit of excellence in Web Development.",
                  location: "In Ho Chi Minh, District 9, VietNam"
                 
              };
            } else {
              return {
                Image: Image,
                description: "A passionate individual with a keen interest in Web Developer.",
                location: "In Ho Chi Minh, VietNam"
              };
            }
          });
        }, 6000);
          return () => clearInterval(timer);
      }, []);
      useEffect(() => {
        const profileElement = document.getElementById('IntroductionProfile');
    
        if (profileElement) {
          // create snow
          const snowfallDiv = document.createElement('div');
          snowfallDiv.className = 'snowfall';
          profileElement.appendChild(snowfallDiv);
    
          // create location snow
          for (let i = 0; i < 80; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            
            // random snow
            snowflake.style.left = `${Math.random() * 100}%`;
            snowflake.style.right = `${Math.random() * 100}%`;
            snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
            snowflake.style.opacity = `${Math.random() * 1 + 1}`;
            snowfallDiv.appendChild(snowflake);
          }
        }
      }, []);
      // const [darkMode, setDarkMode] = useState(false);
      // const handleToggleDarkMode = () => {
      //   setDarkMode(!darkMode);
      // };
    const { theme } = useContext(ThemContext); //add Themcontext from ThemProvider
    return (
    // <div className={darkMode ? "dark-mode" : "light-mode"}>

      // <div id="IntroductionProfile" className="profile">

     <div id="IntroductionProfile" className={`profile ${theme}`}>
        <NavBar/>
        {/* <Button id="themesbutton" variant={darkMode ? "dark" : "light"} onClick={handleToggleDarkMode} style={{ marginLeft: '1rem' }}>
           <i className={`fas ${darkMode ? "fa-moon" : "fa-sun"}`}></i> {darkMode ? "Dark Mode" : "Light Mode"}
         </Button> */}
        <Container className="profile-content">
          <Row>
            <Col className="profile-intro">
            <img className="profile-image"
                 //src={profileImage}
                  src={dynamicText.Image}
                  alt="Profile Image"
                  />
              <h1 className="typing-container"><span className="typing-text1"></span></h1>
              <h1 className="typing-container1"><span className="typing-text2"></span></h1>
              <p id="yearold">22 years old</p>
              <p id="desciption">{dynamicText.description}</p>
              <p id="location">{dynamicText.location}</p>
              <p className="buttonIconCopied"onClick={ handlecopied } style={{width:"3%",margin:'auto'}}><img src={Copied}></img> </p>
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
            <div className="button-cv">
                  <button onClick={handleShowCV}> Explore My CV</button>
            </div>
              <div className="social-icons">
                <a href="https://www.facebook.com/vu.nghia.18062" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://github.com/anhemlam648" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/vũ-nghĩa-9277bb350/" aria-label="Linkedin">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
          </Row>
        </Container>
        <div id='SpotifyPlaying' className="content-section">
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
          <div id="AboutProfile" className="about-me">
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
            <hr/>
        <Footer />
      </div>
    );
  };
  export default Profile;

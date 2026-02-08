  import { useState, useEffect } from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCode, faPalette, faUser } from '@fortawesome/free-solid-svg-icons';
  import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const handleClick = () => {
          navigate('/contact');
        };
  const handleShowCV = () => {
          navigate('/show');
  };
  const handlecopied = () => {
    const yearEl = document.getElementById('yearold');
    const descEl = document.getElementById('desciption');
    const locationEl = document.getElementById('location');
    if (!yearEl || !descEl || !locationEl) return;
    const copyright = `${t('profile.copyYearLabel')}: ${yearEl.innerText}\n${t('profile.copyDescriptionLabel')}: ${descEl.innerText}\n${t('profile.copyLocationLabel')}: ${locationEl.innerText}`;
    navigator.clipboard.writeText(copyright).then(() => {
      alert(t('profile.copyRightAlert'));
    }).catch(() => {});
  };

  const [imageVariant, setImageVariant] = useState(1);
  const [dynamicImage, setDynamicImage] = useState(Image);
    useEffect(() => {
        const timer = setInterval(() => {
          setImageVariant((v) => (v === 1 ? 2 : 1));
          setDynamicImage((img) => (img === Image ? Pixel : Image));
        }, 6000);
        return () => clearInterval(timer);
      }, []);
      useEffect(() => {
        const profileElement = document.getElementById('IntroductionProfile');
    
        if (!profileElement) return;
        const snowfallDiv = document.createElement('div');
        snowfallDiv.className = 'snowfall';
        profileElement.appendChild(snowfallDiv);
        for (let i = 0; i < 80; i++) {
          const snowflake = document.createElement('div');
          snowflake.className = 'snowflake';
          snowflake.style.left = `${Math.random() * 100}%`;
          snowflake.style.right = `${Math.random() * 100}%`;
          snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
          snowflake.style.opacity = `${Math.random() * 1 + 1}`;
          snowfallDiv.appendChild(snowflake);
        }
        return () => {
          if (snowfallDiv.parentNode) snowfallDiv.parentNode.removeChild(snowfallDiv);
        };
      }, []);
      // const [darkMode, setDarkMode] = useState(false);
      // const handleToggleDarkMode = () => {
      //   setDarkMode(!darkMode);
      // };
    const { theme } = useContext(ThemContext);
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
                  src={dynamicImage}
                  alt="Profile Image"
                  />
              {/* <h1 className="typing-container"><span className="typing-text1" /></h1>
              <h1 className="typing-container1"><span className="typing-text2" /></h1> */}
              <h1 id="typingtext1">{t('profile.typing-text1')}</h1>
              <h1 id="typingtext2">{t('profile.typing-text2')}</h1>
              <p id="yearold">{t('profile.yearsOld')}</p>
              <p id="desciption">{t(`profile.description${imageVariant}`)}</p>
              <p id="location">{t(`profile.location${imageVariant}`)}</p>
              <p className="buttonIconCopied" onClick={handlecopied} style={{ width: '3%', margin: 'auto' }} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), handlecopied())}>
                <img src={Copied} alt="Copy" />
              </p>
              <div className="skill-icons">
                <div className="skill-icon">
                  <FontAwesomeIcon icon={faCode} size="3x" />
                  <p>{t('profile.webDeveloper')}</p>
                </div>
                <div className="skill-icon">
                  <FontAwesomeIcon icon={faPalette} size="3x" />
                  <p>{t('profile.uiDesigner')}</p>
                </div>
                <div className="skill-icon">
                  <FontAwesomeIcon icon={faUser} size="3x" />
                  <p>{t('profile.uxDesigner')}</p>
                </div>
              </div>
            </Col>
            <div className="button-cv">
                  <button onClick={handleShowCV}>{t('profile.exploreMyCv')}</button>
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
                <p style={{marginTop:'-20px'}}>{t('profile.hobbies')}</p>
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
                  <p style={{ fontSize: '50px', textAlign: "center" ,color:'#33FFFF' }}>{t('profile.quote')}</p>
                  <p style={{ fontSize: '30px', textAlign: "center" }}>{t('profile.quoteAuthor')}</p>
              </Col>
              </Row>
          </Container>
          </div>
          <div style={{ textAlign: 'center', fontSize: '50px', color: '#FFCCFF' }}>&#9660;</div>
          <div id="AboutProfile" className="about-me">
          <Container>
              <Row>
              <Col className="content-about">
                  <p style={{ fontSize: '50px', textAlign: "center", color:'#FFFF00' }}>{t('profile.aboutMe')}</p>
                  <p style={{ fontSize: '30px', textAlign: "center" }}>{t('profile.welcome')}</p>
              </Col>
              </Row>
              <Row>
            <Col md={6} lg={3}>
              <div className="square-box">
                <div>
                  <p className="education" style={{ fontSize: '40px' }}>{t('profile.education')}</p>
                  <p>{t('profile.educationDesc')}</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="square-box">
                <div>
                  <p className="figma" style={{ fontSize: '40px' }}>{t('profile.figma')}</p>
                  <p>{t('profile.figmaDesc')}</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="square-box">
                <div>
                  <p className="network" style={{ fontSize: '40px' }}>{t('profile.networking')}</p>
                  <p>{t('profile.networkingDesc')}</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="square-box">
                <div>
                  <p className="music" style={{ fontSize: '40px' }}>{t('profile.musicGames')}</p>
                  <p>{t('profile.musicGamesDesc')}</p>
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
                  <p style={{ fontSize: '50px', textAlign: "center" ,color:'#66FFCC' }}>{t('profile.workTogether')}</p>
                    <button className="button" onClick={handleClick}>{t('profile.contactMe')}</button>
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

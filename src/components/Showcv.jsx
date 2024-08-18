import cvImage from "../assets/img/Show.png"; 
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const Show_CV = () => {
  const style_main ={
    backgroundColor: '#FFFFFF',
  }
  const style_image ={
   marginTop: '95px',
   display: 'flex',
   width: '50%',
   padding: '10px',
   alignItems: 'center',
   backgroundColor: '#EEEEEE',
   boxSizing: 'border-box',
   borderRadius: '10px',
   marginLeft: '380px',
   marginBottom: '-50px',
  }
  return (
    <div className="main-cv" style={style_main} >
      <NavBar />
        <img src={cvImage} alt="Images" style={style_image} /> 
      <Footer />
    </div>
  );
};

export default Show_CV;

import cvImage from "../assets/img/VuTrungNghia.jpg"; 
import NavBar from "../components/NavBar";

const Show_CV = () => {

  //style-main
  const style_main = {
    backgroundColor: '#FFFFFF',
    minHeight: '100vh', 
    padding: '1rem', 
    boxSizing: 'border-box', // Includes padding and border in the element's total width and height
    display: 'flex', // Enables flexbox layout.
    flexDirection: 'row', // Should be 'row' or 'column'.
    alignItems: 'center',  // Centers items along the cross axis.
    justifyContent: 'center', //Centers items along the main axis.
  };

  //style-images
  const style_images = {
    marginTop: '4rem', 
    width: '90%', 
    maxWidth: '450px', 
    padding: '0.5rem', 
    backgroundColor: '#EEEEEE',
    borderRadius: '0.5rem', 
    marginBottom: '-2.5rem', 
  };

  return (
    <div className="main-cv" style={style_main}>
      <NavBar />
      <img src={cvImage} alt="CV" style={style_images} />  
    </div>
  );
};

export default Show_CV;

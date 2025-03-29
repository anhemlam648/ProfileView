import cvImage from "../assets/img/CV_Vũ_Trung_Nghĩa.jpg"; 
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { ThemContext } from "./context/ThemProvider";
const Show_CV = () => {

  const { theme } = useContext(ThemContext); 
  //style-main
  const style_main = {
    background: theme === "dark" ? '#333' : 'linear-gradient(to right, #ff5722, #ffd700)', 
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
    width: '100%', 
    maxWidth: '430px', 
    padding: '0.5rem', 
    backgroundColor: '#EEEEEE',
    borderRadius: '0.5rem', 
    marginBottom: '-2.5rem', 
  };

  return (
    <div className={`style_main ${theme}`} style={style_main}>
      <NavBar />
      <img src={cvImage} alt="CV" style={style_images} />  
    </div>
  );
};

export default Show_CV;

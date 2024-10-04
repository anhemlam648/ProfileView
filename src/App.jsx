import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; 
import Profile from './components/Profile';
import Contact from './components/Contact';
import Showcv from './components/Showcv';
import { useContext } from 'react';
import { ThemContext } from './components/context/ThemProvider'; 
function App() {
  const { theme } = useContext(ThemContext); //add Themcontext from ThemProvider
  return (
    
    <Router>
      <div className={`${theme}_app`}>
        <Routes>
        <Route path="/" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/show" element={<Showcv />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; 
import Profile from './components/Profile';
import Contact from './components/Contact';
import Showcv from './components/Showcv';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/showcv" element={<Showcv />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Showcv from './components/Showcv';
import { useContext } from 'react';
import { ThemContext } from './components/context/ThemProvider';

function App() {
  const { theme } = useContext(ThemContext);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
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

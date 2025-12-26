import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Exhibitors from './pages/Exhibitors';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Committee from './pages/Committee';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exhibitors" element={<Exhibitors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/committee" element={<Committee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

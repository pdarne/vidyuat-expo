import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          ⚡ Vidyut Expo
        </Link>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/exhibitors" className="nav-link">Exhibitors</Link></li>
          <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li><button className="register-btn">Register Free</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
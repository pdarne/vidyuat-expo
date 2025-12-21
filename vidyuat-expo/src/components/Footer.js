import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>⚡ Vidyut Expo</h3>
          <p>Central India's Biggest Electrical Expo 2026</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/exhibitors">Exhibitors</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📞 +91 XXXXX XXXXX</p>
          <p>📧 info@vidyutexpo.com</p>
          <p>📍 Venue Address</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Vidyut Expo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
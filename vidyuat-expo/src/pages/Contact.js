import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Contact & Venue Details</h1>
          <p>Get in Touch with Us</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="contact-item">
                <h4>📞 Phone</h4>
                <p>+91 XXXXX XXXXX</p>
                <button className="whatsapp-btn">WhatsApp</button>
              </div>
              <div className="contact-item">
                <h4>📧 Email</h4>
                <p>info@vidyutexpo.com</p>
              </div>
              <div className="contact-item">
                <h4>🌐 Social Media</h4>
                <div className="social-links">
                  <a href="#" className="social-link">Facebook</a>
                  <a href="#" className="social-link">Instagram</a>
                  <a href="#" className="social-link">LinkedIn</a>
                  <a href="#" className="social-link">Twitter</a>
                </div>
              </div>
            </div>

            <div className="venue-info">
              <h2>Venue Details</h2>
              <div className="venue-details">
                <h4>📍 Address</h4>
                <p>
                  Exhibition Ground<br/>
                  Central India Convention Center<br/>
                  City, State - 462001<br/>
                  India
                </p>
              </div>
              
              <div className="venue-features">
                <h4>Venue Features</h4>
                <ul>
                  <li>50,000 sq ft Exhibition Space</li>
                  <li>Air Conditioned Halls</li>
                  <li>Ample Parking Space</li>
                  <li>Food Court & Refreshments</li>
                  <li>Easy Public Transport Access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Location Map</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <p>[Google Maps Integration - Coming Soon]</p>
              <p>Interactive map showing venue location and nearby landmarks</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Event Schedule</h2>
          <div className="schedule">
            <div className="schedule-item">
              <h4>Day 1 - March 15, 2026</h4>
              <p>9:00 AM - 6:00 PM</p>
              <p>Opening Ceremony & Exhibition</p>
            </div>
            <div className="schedule-item">
              <h4>Day 2 - March 16, 2026</h4>
              <p>9:00 AM - 6:00 PM</p>
              <p>Live Demos & Workshops</p>
            </div>
            <div className="schedule-item">
              <h4>Day 3 - March 17, 2026</h4>
              <p>9:00 AM - 5:00 PM</p>
              <p>B2B Meetings & Closing Ceremony</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
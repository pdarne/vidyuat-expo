import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Vidyut Expo</h1>
          <p>Central India's Premier Electrical & Power Solutions Exhibition</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Why This Expo is Organized</h2>
          <p>
            Vidyut Expo is organized to bridge the gap between electrical industry manufacturers, 
            service providers, and end-users. Our mission is to create a comprehensive platform 
            where innovation meets opportunity in the electrical and power sector.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mission-vision">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>
                To provide a world-class platform for electrical industry stakeholders to 
                showcase innovations, build partnerships, and drive technological advancement 
                in Central India's power sector.
              </p>
            </div>
            <div className="vision">
              <h3>Our Vision</h3>
              <p>
                To become Central India's most influential electrical expo, fostering 
                sustainable growth and innovation in the electrical and renewable energy sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Target Audience</h2>
          <div className="audience-grid">
            <div className="audience-item">Industry Professionals</div>
            <div className="audience-item">Students</div>
            <div className="audience-item">Manufacturers</div>
            <div className="audience-item">Distributors</div>
            <div className="audience-item">Retailers</div>
            <div className="audience-item">Contractors</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Organizer Details</h2>
          <div className="organizer-info">
            <h3>Vidyut Expo Organizing Committee</h3>
            <p>
              With years of experience in organizing trade shows and exhibitions, 
              our team is committed to delivering an exceptional experience for 
              all participants.
            </p>
            <div className="contact-info">
              <p><strong>Contact:</strong> +91 XXXXX XXXXX</p>
              <p><strong>Email:</strong> info@vidyutexpo.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
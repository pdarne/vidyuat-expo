import React, { useState, useEffect } from 'react';
import VisitorRegistration from '../components/VisitorRegistration';

const Homepage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-03-15T00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="homepage">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Central India's Biggest Electrical Expo 2026</h1>
          <p>Experience Innovation. Technology. Power Solutions—All Under One Roof.</p>
          
          {/* Countdown Timer */}
          <div className="countdown-timer">
            <div className="timer-box">
              <span className="timer-number">{timeLeft.days}</span>
              <span className="timer-label">Days</span>
            </div>
            <div className="timer-box">
              <span className="timer-number">{timeLeft.hours}</span>
              <span className="timer-label">Hours</span>
            </div>
            <div className="timer-box">
              <span className="timer-number">{timeLeft.minutes}</span>
              <span className="timer-label">Minutes</span>
            </div>
            <div className="timer-box">
              <span className="timer-number">{timeLeft.seconds}</span>
              <span className="timer-label">Seconds</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="cta-btn primary">Register Free</button>
            <button className="cta-btn secondary">Book Your Stall</button>
            <button className="cta-btn tertiary">Get Directions</button>
          </div>
        </div>
      </section>

      {/* Running Ticker */}
      <div className="ticker">
        <div className="ticker-content">
          150+ Brands • 10,000+ Visitors • Live Product Demos • Power Zone • Solar Zone • EV Vehicle Zone • Electrical Safety Workshops
        </div>
      </div>

      {/* What is Vidyut Expo */}
      <section className="section">
        <div className="container">
          <h2>What is Vidyut Expo?</h2>
          <p>Central India's premier electrical and power solutions exhibition bringing together industry leaders, innovators, and professionals under one roof.</p>
        </div>
      </section>

      {/* Key Features */}
      <section className="section features">
        <div className="container">
          <h2>Event Highlights</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>10,000+</h3>
              <p>Visitors Expected</p>
            </div>
            <div className="stat-card">
              <h3>150+</h3>
              <p>Brands</p>
            </div>
            <div className="stat-card">
              <h3>30+</h3>
              <p>Live Demos</p>
            </div>
            <div className="stat-card">
              <h3>3-Day</h3>
              <p>Mega Event</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why You MUST Attend */}
      <section className="section why-attend">
        <div className="container">
          <h2>Why You MUST Attend</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h4>150+ Brands Showcasing</h4>
            </div>
            <div className="benefit-card">
              <h4>Live Product Demos</h4>
            </div>
            <div className="benefit-card">
              <h4>EV Vehicle Zone</h4>
            </div>
            <div className="benefit-card">
              <h4>Electrical Safety Workshops</h4>
            </div>
            <div className="benefit-card">
              <h4>Special Discounts at Expo</h4>
            </div>
            <div className="benefit-card">
              <h4>B2B Networking Zone</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="section who-should-visit">
        <div className="container">
          <h2>Who Should Visit?</h2>
          <div className="personas-grid">
            <div className="persona-card">
              <h4>Electricians</h4>
            </div>
            <div className="persona-card">
              <h4>Contractors</h4>
            </div>
            <div className="persona-card">
              <h4>Students</h4>
            </div>
            <div className="persona-card">
              <h4>Industrial Buyers</h4>
            </div>
            <div className="persona-card">
              <h4>EV Enthusiasts</h4>
            </div>
            <div className="persona-card">
              <h4>Solar Installers</h4>
            </div>
            <div className="persona-card">
              <h4>Distributors & Dealers</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Registration */}
      <VisitorRegistration />
    </div>
  );
};

export default Homepage;
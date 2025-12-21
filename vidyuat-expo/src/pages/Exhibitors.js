import React from 'react';
import StallBookingForm from '../components/StallBookingForm';

const Exhibitors = () => {
  const categories = [
    'Solar/Renewable Energy',
    'EV Automobile',
    'Electrical Equipment',
    'Power Tools',
    'Transformers',
    'Cables & Wires',
    'Electronics',
    'Safety Equipment',
    'Startups'
  ];

  return (
    <div className="exhibitors-page">
      <section className="page-header">
        <div className="container">
          <h1>Exhibitors & Stalls</h1>
          <p>Join 150+ Leading Brands at Central India's Biggest Electrical Expo</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Exhibition Categories</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <h3>{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Stall Layout Map</h2>
          <div className="stall-map">
            <p>Interactive stall layout map will be displayed here</p>
            <div className="map-placeholder">
              [Stall Layout Map - Coming Soon]
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Featured Exhibitors</h2>
          <div className="exhibitors-list">
            <div className="exhibitor-item">Leading Solar Solutions Pvt. Ltd.</div>
            <div className="exhibitor-item">PowerTech Industries</div>
            <div className="exhibitor-item">EV Motors India</div>
            <div className="exhibitor-item">SafeElectric Equipment Co.</div>
            <div className="exhibitor-item">GreenEnergy Systems</div>
            <div className="exhibitor-item">TechStartup Innovations</div>
          </div>
        </div>
      </section>

      {/* Stall Booking Form */}
      <StallBookingForm />
    </div>
  );
};

export default Exhibitors;
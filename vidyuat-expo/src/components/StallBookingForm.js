import React, { useState } from 'react';

const StallBookingForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    ownerName: '',
    mobile: '',
    email: '',
    stallSize: '',
    stallCategory: '',
    electricityRequired: false,
    additionalSetup: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Stall Booking:', formData);
    alert('Stall booking request submitted! Our team will contact you shortly.');
    setFormData({
      companyName: '',
      ownerName: '',
      mobile: '',
      email: '',
      stallSize: '',
      stallCategory: '',
      electricityRequired: false,
      additionalSetup: ''
    });
  };

  return (
    <section className="section stall-booking">
      <div className="container">
        <h2>Book Your Stall</h2>
        <p>Secure your space at Central India's Biggest Electrical Expo</p>
        
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="companyName">Company Name *</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="ownerName">Owner Name *</label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number *</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="stallSize">Stall Size *</label>
              <select
                id="stallSize"
                name="stallSize"
                value={formData.stallSize}
                onChange={handleChange}
                required
              >
                <option value="">Select Stall Size</option>
                <option value="3x3">3m x 3m (₹25,000)</option>
                <option value="3x6">3m x 6m (₹45,000)</option>
                <option value="6x6">6m x 6m (₹80,000)</option>
                <option value="6x9">6m x 9m (₹1,20,000)</option>
                <option value="custom">Custom Size</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="stallCategory">Stall Category *</label>
              <select
                id="stallCategory"
                name="stallCategory"
                value={formData.stallCategory}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="solar">Solar/Renewable Energy</option>
                <option value="ev">EV Automobile</option>
                <option value="electrical">Electrical Equipment</option>
                <option value="power-tools">Power Tools</option>
                <option value="transformers">Transformers</option>
                <option value="cables">Cables & Wires</option>
                <option value="electronics">Electronics</option>
                <option value="safety">Safety Equipment</option>
                <option value="startup">Startup</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="electricityRequired"
                checked={formData.electricityRequired}
                onChange={handleChange}
              />
              Electricity Connection Required
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="additionalSetup">Additional Setup Requirements</label>
            <textarea
              id="additionalSetup"
              name="additionalSetup"
              value={formData.additionalSetup}
              onChange={handleChange}
              rows="3"
              placeholder="Describe any additional setup requirements..."
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Booking Request
          </button>
        </form>

        <div className="stall-benefits">
          <h3>Stall Benefits</h3>
          <ul>
            <li>✅ Prime Location</li>
            <li>✅ Basic Furniture Included</li>
            <li>✅ Electricity Connection</li>
            <li>✅ Marketing Support</li>
            <li>✅ Lead Generation</li>
            <li>✅ Networking Opportunities</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StallBookingForm;
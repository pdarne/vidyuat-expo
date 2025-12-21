import React, { useState } from 'react';

const VisitorRegistration = () => {
  const [formData, setFormData] = useState({
    visitorName: '',
    mobile: '',
    email: '',
    companyName: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Visitor Registration:', formData);
    alert('Registration successful! You will receive a WhatsApp confirmation shortly.');
    // Reset form
    setFormData({
      visitorName: '',
      mobile: '',
      email: '',
      companyName: '',
      category: ''
    });
  };

  return (
    <section className="section visitor-registration">
      <div className="container">
        <h2>Visitor Registration</h2>
        <p>Register now for free entry to Central India's Biggest Electrical Expo</p>
        
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="visitorName">Visitor Name *</label>
            <input
              type="text"
              id="visitorName"
              name="visitorName"
              value={formData.visitorName}
              onChange={handleChange}
              required
            />
          </div>

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

          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="student">Student</option>
              <option value="business-owner">Business Owner</option>
              <option value="electrician">Electrician</option>
              <option value="manufacturer">Manufacturer</option>
              <option value="contractor">Contractor</option>
              <option value="distributor">Distributor</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Register Free
          </button>
        </form>

        <div className="registration-benefits">
          <h3>Registration Benefits</h3>
          <ul>
            <li>✅ Free Entry Pass</li>
            <li>✅ Access to All Zones</li>
            <li>✅ Live Demo Sessions</li>
            <li>✅ Networking Opportunities</li>
            <li>✅ Special Discounts</li>
            <li>✅ QR-based Entry</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisitorRegistration;
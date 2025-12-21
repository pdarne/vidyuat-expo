import { useState } from 'react';
import { theme } from '../theme/colors';

const Exhibitors = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    category: '',
    stallSize: '',
    requirements: ''
  });

  const categories = [
    'Technology & Software',
    'Electronics & Hardware',
    'Renewable Energy',
    'Automotive',
    'Healthcare & Medical',
    'Education & Training',
    'Manufacturing',
    'Startups & Innovation'
  ];

  const stallSizes = [
    { size: '3x3m', price: '$500' },
    { size: '3x6m', price: '$800' },
    { size: '6x6m', price: '$1200' },
    { size: '6x9m', price: '$1800' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // WhatsApp integration
    const message = `Stall Booking Request:
Company: ${formData.companyName}
Contact: ${formData.contactPerson}
Email: ${formData.email}
Phone: ${formData.phone}
Category: ${formData.category}
Stall Size: ${formData.stallSize}
Requirements: ${formData.requirements}`;
    
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16" style={{ color: theme.primary[700] }}>
          Exhibitors
        </h1>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: theme.secondary[600] }}>
            Exhibition Categories
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer"
                style={{ backgroundColor: theme.neutral[50], borderLeft: `4px solid ${theme.primary[500]}` }}
              >
                <h3 className="font-semibold" style={{ color: theme.neutral[800] }}>
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Stall Sizes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: theme.secondary[600] }}>
            Stall Options
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {stallSizes.map((stall, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-2" style={{ color: theme.primary[600] }}>
                  {stall.size}
                </h3>
                <p className="text-3xl font-bold mb-4" style={{ color: theme.accent[500] }}>
                  {stall.price}
                </p>
                <p style={{ color: theme.neutral[600] }}>Standard booth setup included</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.primary[700] }}>
            Book Your Stall
          </h2>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: theme.neutral[300], focusRingColor: theme.primary[500] }}
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Contact Person"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: theme.neutral[300] }}
                value={formData.contactPerson}
                onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                required
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: theme.neutral[300] }}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: theme.neutral[300] }}
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <select
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: theme.neutral[300] }}
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
              
              <select
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: theme.neutral[300] }}
                value={formData.stallSize}
                onChange={(e) => setFormData({...formData, stallSize: e.target.value})}
                required
              >
                <option value="">Select Stall Size</option>
                {stallSizes.map((stall, idx) => (
                  <option key={idx} value={`${stall.size} - ${stall.price}`}>
                    {stall.size} - {stall.price}
                  </option>
                ))}
              </select>
            </div>
            
            <textarea
              placeholder="Special Requirements"
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 mb-6"
              style={{ borderColor: theme.neutral[300] }}
              value={formData.requirements}
              onChange={(e) => setFormData({...formData, requirements: e.target.value})}
            ></textarea>
            
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: theme.primary[600] }}
            >
              Book Stall via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Exhibitors;
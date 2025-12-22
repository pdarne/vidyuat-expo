import { useState } from 'react';
import { theme } from '../theme/colors';
import FloatingCTA from '../components/FloatingCTA';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    interests: [],
    dietaryRestrictions: '',
    newsletter: false
  });

  const interestOptions = [
    'Technology & Software',
    'Electronics & Hardware',
    'Renewable Energy',
    'Automotive',
    'Healthcare & Medical',
    'Education & Training',
    'Manufacturing',
    'Startups & Innovation'
  ];

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // WhatsApp integration
    const message = `Visitor Registration:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Designation: ${formData.designation}
Interests: ${formData.interests.join(', ')}
Dietary Restrictions: ${formData.dietaryRestrictions}
Newsletter: ${formData.newsletter ? 'Yes' : 'No'}`;
    
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6" style={{ color: theme.primary[700] }}>
            Register for Vidyut Expo 2024
          </h1>
          <p className="text-xl" style={{ color: theme.neutral[600] }}>
            Join thousands of innovators, entrepreneurs, and tech enthusiasts
          </p>
        </div>

        {/* Registration Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: '🎫', title: 'Free Entry', desc: 'Complete access to all exhibition areas' },
            { icon: '🍽️', title: 'Complimentary Lunch', desc: 'Networking lunch with fellow attendees' },
            { icon: '📚', title: 'Resource Kit', desc: 'Digital resources and expo materials' }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.primary[600] }}>
                {benefit.title}
              </h3>
              <p style={{ color: theme.neutral[600] }}>{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.secondary[600] }}>
                Personal Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: theme.neutral[300] }}
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: theme.neutral[300] }}
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: theme.neutral[300] }}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: theme.neutral[300] }}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
            </div>

            {/* Professional Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.secondary[600] }}>
                Professional Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Company/Organization"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: theme.neutral[300] }}
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Designation/Title"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: theme.neutral[300] }}
                  value={formData.designation}
                  onChange={(e) => setFormData({...formData, designation: e.target.value})}
                />
              </div>
            </div>

            {/* Interests */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.secondary[600] }}>
                Areas of Interest
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {interestOptions.map((interest, idx) => (
                  <label key={idx} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded"
                      style={{ accentColor: theme.primary[500] }}
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                    />
                    <span style={{ color: theme.neutral[700] }}>{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.secondary[600] }}>
                Additional Information
              </h2>
              
              <textarea
                placeholder="Dietary restrictions or special requirements"
                rows="3"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 mb-4"
                style={{ borderColor: theme.neutral[300] }}
                value={formData.dietaryRestrictions}
                onChange={(e) => setFormData({...formData, dietaryRestrictions: e.target.value})}
              ></textarea>
              
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded"
                  style={{ accentColor: theme.primary[500] }}
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                />
                <span style={{ color: theme.neutral[700] }}>
                  Subscribe to our newsletter for updates and future events
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg font-semibold text-white text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: theme.primary[600] }}
            >
              Register via WhatsApp
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-8">
          <p style={{ color: theme.neutral[600] }}>
            Need help with registration? Contact us at{' '}
            <a href="mailto:register@vidyutexpo.com" style={{ color: theme.primary[600] }}>
              register@vidyutexpo.com
            </a>
          </p>
        </div>
      </div>
      
      <FloatingCTA />
    </div>
  );
};

export default Register;
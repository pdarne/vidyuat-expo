import { theme } from '../theme/colors';

const Contact = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16" style={{ color: theme.primary[700] }}>
          Contact Us
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8" style={{ color: theme.secondary[600] }}>
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: theme.primary[500] }}
                >
                  📍
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: theme.neutral[800] }}>
                    Venue Address
                  </h3>
                  <p style={{ color: theme.neutral[600] }}>
                    Convention Center<br/>
                    123 Exhibition Street<br/>
                    Tech City, TC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: theme.secondary[500] }}
                >
                  📞
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: theme.neutral[800] }}>
                    Phone Numbers
                  </h3>
                  <p style={{ color: theme.neutral[600] }}>
                    General Inquiries: +1 (555) 123-4567<br/>
                    Exhibitor Support: +1 (555) 123-4568<br/>
                    Media Relations: +1 (555) 123-4569
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: theme.accent[500] }}
                >
                  ✉️
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: theme.neutral[800] }}>
                    Email Addresses
                  </h3>
                  <p style={{ color: theme.neutral[600] }}>
                    General: info@vidyutexpo.com<br/>
                    Exhibitors: exhibitors@vidyutexpo.com<br/>
                    Press: media@vidyutexpo.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: theme.primary[400] }}
                >
                  🕒
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: theme.neutral[800] }}>
                    Office Hours
                  </h3>
                  <p style={{ color: theme.neutral[600] }}>
                    Monday - Friday: 9:00 AM - 6:00 PM<br/>
                    Saturday: 10:00 AM - 4:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4" style={{ color: theme.neutral[800] }}>
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social, idx) => (
                  <a
                    key={social}
                    href="#"
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                    style={{ backgroundColor: theme.primary[500] }}
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map and Venue Details */}
          <div>
            <h2 className="text-3xl font-bold mb-8" style={{ color: theme.secondary[600] }}>
              Venue Details
            </h2>
            
            {/* Map Placeholder */}
            <div 
              className="w-full h-64 rounded-lg mb-6 flex items-center justify-center text-white"
              style={{ backgroundColor: theme.neutral[300] }}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p>Interactive Map</p>
                <p className="text-sm">Click to view in Google Maps</p>
              </div>
            </div>

            {/* Venue Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4" style={{ color: theme.primary[600] }}>
                Convention Center Facilities
              </h3>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span style={{ color: theme.accent[500] }}>✓</span>
                  <span style={{ color: theme.neutral[700] }}>Free WiFi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span style={{ color: theme.accent[500] }}>✓</span>
                  <span style={{ color: theme.neutral[700] }}>Parking Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span style={{ color: theme.accent[500] }}>✓</span>
                  <span style={{ color: theme.neutral[700] }}>Food Court</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span style={{ color: theme.accent[500] }}>✓</span>
                  <span style={{ color: theme.neutral[700] }}>Accessibility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span style={{ color: theme.accent[500] }}>✓</span>
                  <span style={{ color: theme.neutral[700] }}>Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span style={{ color: theme.accent[500] }}>✓</span>
                  <span style={{ color: theme.neutral[700] }}>Air Conditioning</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t" style={{ borderColor: theme.neutral[200] }}>
                <h4 className="font-semibold mb-2" style={{ color: theme.neutral[800] }}>
                  Transportation
                </h4>
                <p className="text-sm" style={{ color: theme.neutral[600] }}>
                  • Metro Station: Tech Center (5 min walk)<br/>
                  • Bus Routes: 15, 23, 45, 67<br/>
                  • Airport: 30 minutes by taxi<br/>
                  • Hotel Shuttle: Available from partner hotels
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2 text-red-800">
            Emergency Contact
          </h3>
          <p className="text-red-700">
            For urgent matters during the expo: <strong>+1 (555) 911-EXPO</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
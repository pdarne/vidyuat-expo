import { theme } from '../theme/colors';
import FloatingCTA from '../components/FloatingCTA';
import { contactInfo } from '../data/constants';

const Contact = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" style={{ color: theme.primary[700] }}>
            Contact Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: theme.neutral[600] }}>
            Get in touch with us for any queries or information
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8" style={{ color: theme.primary[600] }}>
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: theme.neutral[800] }}>
                  📞 Phone Numbers
                </h3>
                {contactInfo.phones.map((phone, idx) => (
                  <p key={idx} className="text-lg mb-2" style={{ color: theme.neutral[600] }}>
                    <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
                  </p>
                ))}
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: theme.neutral[800] }}>
                  📧 Email
                </h3>
                <p className="text-lg" style={{ color: theme.neutral[600] }}>
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                    {contactInfo.email}
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: theme.neutral[800] }}>
                  📍 Location
                </h3>
                <p className="text-lg" style={{ color: theme.neutral[600] }}>
                  Dr. Vasantrao Deshpande Hall Premises<br/>
                  Civil Lines, {contactInfo.location}
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8" style={{ color: theme.primary[600] }}>
              Location Map
            </h2>
            
            <div className="bg-gray-200 rounded-lg h-64 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4425.106223768844!2d79.0621393124917!3d21.150171146791845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0c011f8b8d1%3A0xc25ca5550eb4947d!2sVasatrao%20Deshpande%20Sabhagruh%2C%20Civil%20Lines!5e0!3m2!1sen!2sin!4v1766430205017!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Dr. Vasantrao Deshpande Hall Location"
              />
            </div>
            
            <div className="text-center p-8">
              <button 
                onClick={() => window.open('https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRiPAtIBBzM3MmowajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KTPOgBr2wNQ7MZycPy4XZb9C&daddr=Amdar+Niwas,+Temple+Rd,+Civil+Lines,+Nagpur,+Maharashtra+440001', '_blank')}
                className="px-6 py-3 rounded-lg font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme.primary[600] }}
              >
                Get Directions
              </button>
            </div>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: theme.primary[700] }}>
            Quick Contact
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.neutral[800] }}>
                Call Us
              </h3>
              <p style={{ color: theme.neutral[600] }}>Available 9 AM - 6 PM</p>
            </div>
            
            <div>
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.neutral[800] }}>
                WhatsApp
              </h3>
              <p style={{ color: theme.neutral[600] }}>Quick responses</p>
            </div>
            
            <div>
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.neutral[800] }}>
                Email
              </h3>
              <p style={{ color: theme.neutral[600] }}>24/7 support</p>
            </div>
          </div>
        </div>
      </div>
      
      <FloatingCTA />
    </div>
  );
};

export default Contact;
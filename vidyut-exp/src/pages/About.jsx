import { theme } from '../theme/colors';
import FloatingCTA from '../components/FloatingCTA';
import { eventData, targetAudience } from '../data/constants';

const About = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-6" style={{ color: theme.primary[700] }}>
            About {eventData.name}
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: theme.neutral[600] }}>
            {eventData.tagline} - Empowering Central India's Electrical Industry
          </p>
        </div>

        {/* What is Vidyut Expo */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: theme.primary[600] }}>
            What is Vidyut Expo?
          </h2>
          <p className="text-lg leading-relaxed mb-2" style={{ color: theme.neutral[700] }}>
            Vidyut Expo is Central India's premier electrical exhibition, bringing together industry leaders, 
            manufacturers, contractors, and professionals under one roof. This comprehensive platform showcases 
            the latest innovations, technologies, and solutions in the electrical sector.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: theme.neutral[700] }}>
            With over 200+ exhibitors and 1000+ products on display, the expo serves as a catalyst for 
            business growth, knowledge sharing, and technological advancement in the electrical industry.
          </p>
        </div>

        {/* Importance & Why Central India */}
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6" style={{ color: theme.primary[600] }}>
              Importance for Electrical Industry
            </h2>
            <ul className="space-y-3 text-lg" style={{ color: theme.neutral[700] }}>
              <li>• Showcase latest electrical technologies and innovations</li>
              <li>• Foster business partnerships and collaborations</li>
              <li>• Provide platform for knowledge exchange</li>
              <li>• Connect manufacturers with contractors and end-users</li>
              <li>• Promote sustainable and energy-efficient solutions</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6" style={{ color: theme.secondary[600] }}>
              Why Central India?
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: theme.neutral[700] }}>
              Central India, with Nagpur as its hub, is strategically positioned as the geographical center 
              of India, making it easily accessible from all major cities.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: theme.neutral[700] }}>
              The region's growing industrial base, infrastructure development, and increasing demand for 
              electrical solutions make it the perfect location for this landmark exhibition.
            </p>
          </div>
        </div>

        {/* Who Should Attend */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: theme.primary[700] }}>
            Who Should Attend?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {targetAudience.map((audience, idx) => (
              <div key={idx} className="text-center p-4 rounded-lg" style={{ backgroundColor: theme.neutral[50] }}>
                <video 
                  src={audience.icon} 
                  autoPlay
                  loop
                  muted
                  className="w-16 h-16 mx-auto mb-4 object-cover rounded-lg"
                />
                <h3 className="text-lg font-semibold" style={{ color: theme.neutral[800] }}>
                  {audience.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Organizer Info */}
        <div className="text-center bg-gray-100 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6" style={{ color: theme.primary[700] }}>
            Organized By
          </h2>
          <p className="text-xl font-semibold mb-2" style={{ color: theme.neutral[800] }}>
            {eventData.organizer}
          </p>
          <p className="text-lg mb-4" style={{ color: theme.neutral[600] }}>
            In Association With: {eventData.association}
          </p>
          <p className="text-md" style={{ color: theme.neutral[500] }}>
            {eventData.established}
          </p>
        </div>
      </div>
      
      <FloatingCTA />
    </div>
  );
};

export default About;
import { theme } from '../theme/colors';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" style={{ color: theme.primary[700] }}>
            About Vidyut Expo
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: theme.neutral[600] }}>
            Empowering innovation and fostering technological advancement through world-class exhibitions
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6" style={{ color: theme.primary[600] }}>
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: theme.neutral[700] }}>
              To create a premier platform that brings together innovators, entrepreneurs, and technology 
              enthusiasts to showcase cutting-edge solutions, foster collaboration, and drive technological 
              advancement for a better future.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6" style={{ color: theme.secondary[600] }}>
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: theme.neutral[700] }}>
              To be the leading technology exhibition that inspires innovation, connects global communities, 
              and shapes the future of technology by providing unparalleled opportunities for learning, 
              networking, and business growth.
            </p>
          </div>
        </div>

        {/* Organizer Details */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.primary[700] }}>
            Meet Our Organizers
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Johnson',
                role: 'Event Director',
                bio: '15+ years in tech industry, former CTO at major tech companies'
              },
              {
                name: 'Michael Chen',
                role: 'Operations Manager',
                bio: 'Expert in large-scale event management and logistics coordination'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Partnership Director',
                bio: 'Specialist in building strategic partnerships and sponsor relations'
              }
            ].map((organizer, idx) => (
              <div key={idx} className="text-center">
                <div 
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: theme.accent[400] }}
                >
                  {organizer.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: theme.neutral[800] }}>
                  {organizer.name}
                </h3>
                <p className="font-medium mb-3" style={{ color: theme.primary[600] }}>
                  {organizer.role}
                </p>
                <p className="text-sm" style={{ color: theme.neutral[600] }}>
                  {organizer.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '500+', label: 'Exhibitors' },
            { number: '10K+', label: 'Visitors' },
            { number: '50+', label: 'Countries' },
            { number: '100+', label: 'Speakers' }
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl font-bold mb-2" style={{ color: theme.primary[600] }}>
                {stat.number}
              </div>
              <div style={{ color: theme.neutral[600] }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
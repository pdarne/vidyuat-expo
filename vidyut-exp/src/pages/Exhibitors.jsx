import { theme } from '../theme/colors';
import FloatingCTA from '../components/FloatingCTA';
import ExhibitorCard from '../components/ExhibitorCard';
import { exhibitors, majorParticipants } from '../data/constants';

const Exhibitors = () => {
  return (
    <div className="min-h-screen py-10 px-1">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-5xl font-bold mb-3"
            style={{ color: theme.primary[700] }}
          >
            Our Exhibitors
          </h1>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: theme.neutral[600] }}
          >
            Meet the leading brands and companies showcasing their latest
            innovations
          </p>
        </div>

        {/* All Exhibitors */}
        <div className="mb-8">
          <h2
            className="text-3xl font-bold text-center mb-6"
            style={{ color: theme.primary[700] }}
          >
            All Exhibitors
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {exhibitors.map((exhibitor, idx) => (
              <ExhibitorCard key={idx} exhibitor={exhibitor} />
            ))}
          </div>
        </div>

        {/* Major Participants */}
        <div className="mb-16">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: theme.secondary[600] }}
          >
            Major Participants
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {majorParticipants.map((participant, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-102 transition-all duration-300"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #AAC4F5",
                  minWidth: "150px",
                }}
              >
                <img
                  src={participant.logo}
                  alt={participant.name}
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-bold" style={{ color: "#0F172A" }}>
                  {participant.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: theme.primary[700] }}
          >
            Exhibition Categories
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Electrical Equipment & Components",
              "Power Generation & Distribution",
              "Renewable Energy Solutions",
              "Smart Grid Technology",
              "Industrial Automation",
              "Safety & Protection Equipment",
              "Cables & Wiring Solutions",
              "Lighting & LED Technology",
              "Energy Storage Systems",
            ].map((category, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border-l-4"
                style={{
                  borderColor: theme.accent[400],
                  backgroundColor: theme.neutral[50],
                }}
              >
                <h3
                  className="font-semibold"
                  style={{ color: theme.neutral[800] }}
                >
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits for Exhibitors */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Brand Visibility",
              desc: "Showcase your products to thousands of industry professionals",
              icon: "🎆",
            },
            {
              title: "Lead Generation",
              desc: "Connect directly with potential customers and partners",
              icon: "🎯",
            },
            {
              title: "Market Expansion",
              desc: "Expand your reach in Central India's growing market",
              icon: "📈",
            },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: theme.primary[600] }}
              >
                {benefit.title}
              </h3>
              <p style={{ color: theme.neutral[600] }}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <FloatingCTA />
    </div>
  );
};

export default Exhibitors;
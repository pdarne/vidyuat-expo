import { Link } from "react-router-dom";
import { theme } from "../theme/colors";
import Countdown from "../components/Countdown";
import ActionButtons from "../components/ActionButtons";
import FloatingCTA from "../components/FloatingCTA";
import QRCode from "../components/QRCode";
import logo from "../assets/logo/logo.jpeg";

const Home = () => {
  const expoDate = new Date(
    import.meta.env.VITE_EXPO_DATE || "2024-12-31T10:00:00.000Z"
  ).getTime();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative p-4 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-gradient-to-r opacity-90"
          style={{
            background: `linear-gradient(135deg, ${theme.primary[600]} 0%, ${theme.secondary[600]} 100%)`,
          }}
        ></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-2">
          <img
            src={logo}
            alt="Vidyut Expo Logo"
            className="w-40 h-40 mx-auto mb-3 rounded-full object-cover"
          />
          <h1 className="text-5xl md:text-4xl font-bold mb-4">
            Vidyut Expo 2026
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            The Ultimate Technology & Innovation Exhibition
          </p>

          {/* Countdown Timer */}
          <Countdown targetDate={expoDate} className="justify-center mb-4" />

          <ActionButtons />

        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-8"
            style={{ color: theme.primary[700] }}
          >
            Why Attend Vidyut Expo?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation Showcase",
                desc: "Discover cutting-edge technologies and innovations",
              },
              {
                title: "Networking",
                desc: "Connect with industry leaders and professionals",
              },
              {
                title: "Learning",
                desc: "Attend workshops and seminars by experts",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: theme.secondary[500] }}
                >
                  {idx + 1}
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: theme.neutral[800] }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: theme.neutral[600] }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingCTA />
    </div>
  );
};

export default Home;

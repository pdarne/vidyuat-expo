import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { theme } from "../theme/colors";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const expoDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = expoDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-gradient-to-r opacity-90"
          style={{
            background: `linear-gradient(135deg, ${theme.primary[600]} 0%, ${theme.secondary[600]} 100%)`,
          }}
        ></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Vidyut Expo 2024
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The Ultimate Technology & Innovation Exhibition
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <div
                key={unit}
                className="rounded-lg p-4"
                style={{
                  backgroundColor: theme.primary[100],
                }}
              >
                <div
                  style={{ color: theme.neutral[600] }}
                  className={`text-3xl font-bold`}
                >
                  {value}
                </div>
                <div
                  style={{ color: theme.neutral[600] }}
                  className="text-sm uppercase text-${theme.neutral[600]}`opacity-90"
                >
                  {unit}
                </div>
              </div>
            ))}
          </div>

          <div className="space-x-4">
            <Link
              to="/register"
              className="inline-block px-8 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: theme.accent[500] }}
            >
              Register Now
            </Link>
            <Link
              to="/exhibitors"
              className="inline-block px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white transition-colors"
              style={{ color: "white" }}
              onMouseEnter={(e) => (e.target.style.color = theme.primary[600])}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              Book Stall
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-16"
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
    </div>
  );
};

export default Home;

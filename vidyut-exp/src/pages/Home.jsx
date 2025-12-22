import { Link } from "react-router-dom";
import { theme } from "../theme/colors";
import Countdown from "../components/Countdown";
import ActionButtons from "../components/ActionButtons";
import FloatingCTA from "../components/FloatingCTA";
import QRCode from "../components/QRCode";
import Carousel from "../components/Carousel";
import { eventData, highlights } from "../data/constants";
import logo from "../assets/logo/logo.jpeg";

const Home = () => {
  const expoDate = new Date(
    import.meta.env.VITE_EXPO_DATE || "2026-01-09T10:00:00.000Z"
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
            {eventData.name}
          </h1>
          <p className="text-xl md:text-2xl mb-2">
            {eventData.tagline}
          </p>
          <p className="text-lg mb-2">
            {eventData.dates}
          </p>
          <p className="text-md mb-4">
            {eventData.venue}
          </p>

          {/* Countdown Timer */}
          <Countdown targetDate={expoDate} className="justify-center mb-4" />

          <ActionButtons />
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: theme.primary[700] }}
          >
            Event Gallery
          </h2>
          <Carousel />
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-8"
            style={{ color: theme.primary[700] }}
          >
            Event Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: theme.secondary[500] }}
                >
                  ⚡
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: theme.neutral[800] }}
                >
                  {highlight}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizer Info */}
      <section className="py-10 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: theme.primary[700] }}
          >
            Inaugurated By
          </h2>
          <p className="text-xl mb-4" style={{ color: theme.neutral[700] }}>
            {eventData.inauguratedBy}
          </p>
          <div className="mt-8">
            <p className="text-lg font-semibold" style={{ color: theme.neutral[800] }}>
              Organised By: {eventData.organizer}
            </p>
            <p className="text-md" style={{ color: theme.neutral[600] }}>
              In Association With: {eventData.association}
            </p>
            <p className="text-sm" style={{ color: theme.neutral[500] }}>
              ({eventData.established})
            </p>
          </div>
        </div>
      </section>

      {/* QR Registration */}
      <section className="py-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: theme.primary[700] }}
          >
            Quick Registration
          </h2>
          <QRCode className="mb-4" />
        </div>
      </section>

      <FloatingCTA />
    </div>
  );
};

export default Home;

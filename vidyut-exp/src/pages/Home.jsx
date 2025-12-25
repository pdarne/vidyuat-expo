import { Link } from "react-router-dom";
import { theme } from "../theme/colors";
import Countdown from "../components/Countdown";
import ActionButtons from "../components/ActionButtons";
import FloatingCTA from "../components/FloatingCTA";
import QRCode from "../components/QRCode";
import Carousel from "../components/Carousel";
import ExhibitorCard from "../components/ExhibitorCard";
import { eventData, highlights, exhibitors, targetAudience } from "../data/constants";
import logo from "../assets/logo/logo.jpeg";
import nitin_gadkari from "../assets/logo/nitin_gadkari.webp";

const Home = () => {
  const expoDate = new Date(
    import.meta.env.VITE_EXPO_DATE || "2026-01-09T10:00:00.000Z"
  ).getTime();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-50">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in-up">
          <img
            src={logo}
            alt="Vidyut Expo Logo"
            className="w-32 h-32 mx-auto mb-6 rounded-full object-cover shadow-lg hover-lift"
          />
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-sky-500 to-amber-400 bg-clip-text text-transparent">
            {eventData.name}
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-slate-700 font-light">
            {eventData.tagline}
          </p>
          <p className="text-xl mb-2 text-sky-600 font-medium">
            {eventData.dates}
          </p>
          <p className="text-lg mb-8 text-slate-600">
            {eventData.venue}
          </p>

          {/* Countdown Timer */}
          <Countdown targetDate={expoDate} className="justify-center mb-8" />

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

     
      {/* Organizer Info */}
      <section className="py-10 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: theme.primary[700] }}
          >
            Inaugurated By
          </h2>
           <img
            src={nitin_gadkari}
            alt="Vidyut Expo Logo"
            className="w-32 h-32 mx-auto mb-6 rounded-full object-cover shadow-lg hover-lift"
          />
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
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: theme.primary[700] }}
          >
            Quick Registration
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <QRCode className="mb-4" />
              <p className="text-sm text-gray-600">Scan QR code to register instantly</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4" style={{ color: theme.primary[700] }}>Registration Steps:</h3>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#8CA9FF' }}>1</div>
                <p className="text-gray-700">Scan the QR code with your phone camera</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#8CA9FF' }}>2</div>
                <p className="text-gray-700">Fill out the registration form with your details</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#8CA9FF' }}>3</div>
                <p className="text-gray-700">Submit the form to complete registration</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#8CA9FF' }}>4</div>
                <p className="text-gray-700">Receive confirmation email with event details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitors Section */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl font-bold text-center mb-8 text-slate-800">
            Our Exhibitors
          </h2>
          <div className="flex flex-wrap justify-center lg:grid-cols-5 gap-6">
            {exhibitors.slice(0, 10).map((exhibitor, idx) => (
              <ExhibitorCard key={idx} exhibitor={exhibitor} />
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl font-bold text-center mb-8 text-slate-800">
            Who Should Attend?
          </h2>
         <div className="flex flex-wrap justify-center lg:grid-cols-5 gap-6">
            {targetAudience.map((audience, idx) => (
              <div 
                key={idx} 
                className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-102 transition-all duration-300"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #AAC4F5' }}
              >
                <video 
                  src={audience.icon} 
                  autoPlay
                  loop
                  muted
                  className="w-16 h-16 mx-auto mb-4 object-cover rounded-lg"
                />
                <h3 className="text-lg font-semibold" style={{ color: '#0F172A' }}>
                  {audience.name}
                </h3>
              </div>
            ))}
          </div>
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
          <div className="flex flex-wrap justify-center lg:grid-cols-5 gap-6">
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


      {/* Contact Preview */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-8 text-slate-800">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-glass p-6 rounded-xl hover-lift">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Call Us</h3>
              <p className="text-slate-600">9823122306</p>
            </div>
            <div className="card-glass p-6 rounded-xl hover-lift">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Email</h3>
              <p className="text-slate-600">vidyutexpo23@gmail.com</p>
            </div>
            <div className="card-glass p-6 rounded-xl hover-lift">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Location</h3>
              <p className="text-slate-600">Nagpur</p>
            </div>
          </div>
        </div>
      </section>

      <FloatingCTA />
    </div>
  );
};

export default Home;

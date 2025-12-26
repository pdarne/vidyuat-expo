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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-50 px-4">
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in-up">
          <img
            src={logo}
            alt="Vidyut Expo Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 rounded-full object-cover shadow-lg hover-lift"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-600 via-sky-500 to-amber-400 bg-clip-text text-transparent">
            {eventData.name}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 text-slate-700 font-light px-4">
            {eventData.tagline}
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-2 text-sky-600 font-medium">
            {eventData.dates}
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-slate-600">
            {eventData.venue}
          </p>

          {/* Countdown Timer */}
          <Countdown targetDate={expoDate} className="justify-center mb-6 sm:mb-8" />

          <ActionButtons />
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-8 sm:py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8"
            style={{ color: theme.primary[700] }}
          >
            Event Gallery
          </h2>
          <Carousel />
        </div>
      </section>

     
      {/* Organizer Info */}
      <section className="py-8 sm:py-10 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
            style={{ color: theme.primary[700] }}
          >
            Inaugurated By
          </h2>
           <img
            src={nitin_gadkari}
            alt="Vidyut Expo Logo"
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full object-cover shadow-lg hover-lift"
          />
          <p className="text-lg sm:text-xl mb-4 px-4" style={{ color: theme.neutral[700] }}>
            {eventData.inauguratedBy}
          </p>
         
          <div className="mt-6 sm:mt-8 px-4">
            <p className="text-base sm:text-lg font-semibold" style={{ color: theme.neutral[800] }}>
              Organised By: {eventData.organizer}
            </p>
            <p className="text-sm sm:text-base" style={{ color: theme.neutral[600] }}>
              In Association With: {eventData.association}
            </p>
            <p className="text-xs sm:text-sm" style={{ color: theme.neutral[500] }}>
              ({eventData.established})
            </p>
          </div>
        </div>
      </section>

      {/* QR Registration */}
      <section className="py-8 sm:py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8"
            style={{ color: theme.primary[700] }}
          >
            Quick Registration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="text-center order-2 md:order-1">
              <QRCode className="mb-4" />
              <p className="text-sm text-gray-600">Scan QR code to register instantly</p>
            </div>
            <div className="space-y-3 sm:space-y-4 order-1 md:order-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: theme.primary[700] }}>Registration Steps:</h3>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0" style={{ backgroundColor: '#8CA9FF' }}>1</div>
                <p className="text-sm sm:text-base text-gray-700">Scan the QR code with your phone camera</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0" style={{ backgroundColor: '#8CA9FF' }}>2</div>
                <p className="text-sm sm:text-base text-gray-700">Fill out the registration form with your details</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0" style={{ backgroundColor: '#8CA9FF' }}>3</div>
                <p className="text-sm sm:text-base text-gray-700">Submit the form to complete registration</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0" style={{ backgroundColor: '#8CA9FF' }}>4</div>
                <p className="text-sm sm:text-base text-gray-700">Receive confirmation email with event details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitors Section */}
      <section className="py-12 sm:py-16 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-slate-800">
            Our Exhibitors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {exhibitors.slice(0, 10).map((exhibitor, idx) => (
              <ExhibitorCard key={idx} exhibitor={exhibitor} />
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-slate-800">
            Who Should Attend?
          </h2>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {targetAudience.map((audience, idx) => (
              <div 
                key={idx} 
                className="text-center p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-102 transition-all duration-300"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #AAC4F5' }}
              >
                <video 
                  src={audience.icon} 
                  autoPlay
                  loop
                  muted
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 object-cover rounded-lg"
                />
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold" style={{ color: '#0F172A' }}>
                  {audience.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Event Highlights */}
      <section className="py-8 sm:py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8"
            style={{ color: theme.primary[700] }}
          >
            Event Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="text-center p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center text-white text-lg sm:text-2xl font-bold"
                  style={{ backgroundColor: theme.secondary[500] }}
                >
                  ⚡
                </div>
                <h3
                  className="text-sm sm:text-base lg:text-lg font-semibold"
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
      <section className="py-12 sm:py-16 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-slate-800">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="card-glass p-4 sm:p-6 rounded-xl hover-lift">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📞</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-800">Call Us</h3>
              <p className="text-sm sm:text-base text-slate-600">9823122306</p>
            </div>
            <div className="card-glass p-4 sm:p-6 rounded-xl hover-lift">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📧</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-800">Email</h3>
              <p className="text-sm sm:text-base text-slate-600 break-all">vidyutexpo23@gmail.com</p>
            </div>
            <div className="card-glass p-4 sm:p-6 rounded-xl hover-lift sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📍</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-800">Location</h3>
              <p className="text-sm sm:text-base text-slate-600">Nagpur</p>
            </div>
          </div>
        </div>
      </section>

      <FloatingCTA />
    </div>
  );
};

export default Home;

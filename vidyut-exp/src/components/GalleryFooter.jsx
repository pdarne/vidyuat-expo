import { theme } from "../theme/colors";

const GalleryFooter = () => {
  return (
    <footer className="bg-slate-900 border-t mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-3 text-indigo-400">
              Contact Information
            </h3>
            <p className="text-slate-300">
              Ministry of Power & Renewable Energy<br />
              Government of India<br />
              Email: info@vidyutexpo.gov.in<br />
              Phone: +91-11-2436-0707
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-indigo-400">
              Event Details
            </h3>
            <p className="text-slate-300">
              Venue: India Expo Mart<br />
              Greater Noida, UP<br />
              Date: March 15-18, 2024<br />
              Time: 10:00 AM - 6:00 PM
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-indigo-400">
              Quick Links
            </h3>
            <div className="space-y-1">
              <a href="/register" className="block hover:underline text-slate-300 hover:text-sky-400">
                Register Now
              </a>
              <a href="/exhibitors" className="block hover:underline text-slate-300 hover:text-sky-400">
                Book Stall
              </a>
              <a href="/schedule" className="block hover:underline text-slate-300 hover:text-sky-400">
                Event Schedule
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-xs text-slate-400">
          © 2024 Vidyut Expo. All rights reserved. | Government of India
        </div>
      </div>
    </footer>
  );
};

export default GalleryFooter;
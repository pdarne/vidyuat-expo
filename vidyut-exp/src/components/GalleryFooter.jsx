import { theme } from "../theme/colors";

const GalleryFooter = () => {
  return (
    <footer className="bg-white border-t mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-3" style={{ color: theme.primary[700] }}>
              Contact Information
            </h3>
            <p style={{ color: theme.neutral[600] }}>
              Ministry of Power & Renewable Energy<br />
              Government of India<br />
              Email: info@vidyutexpo.gov.in<br />
              Phone: +91-11-2436-0707
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3" style={{ color: theme.primary[700] }}>
              Event Details
            </h3>
            <p style={{ color: theme.neutral[600] }}>
              Venue: India Expo Mart<br />
              Greater Noida, UP<br />
              Date: March 15-18, 2024<br />
              Time: 10:00 AM - 6:00 PM
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3" style={{ color: theme.primary[700] }}>
              Quick Links
            </h3>
            <div className="space-y-1">
              <a href="/register" className="block hover:underline" style={{ color: theme.neutral[600] }}>
                Register Now
              </a>
              <a href="/exhibitors" className="block hover:underline" style={{ color: theme.neutral[600] }}>
                Book Stall
              </a>
              <a href="/schedule" className="block hover:underline" style={{ color: theme.neutral[600] }}>
                Event Schedule
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-xs" style={{ color: theme.neutral[500] }}>
          © 2024 Vidyut Expo. All rights reserved. | Government of India
        </div>
      </div>
    </footer>
  );
};

export default GalleryFooter;
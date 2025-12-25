import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { theme } from '../theme/colors';
import logo from '../assets/logo/navbarLogo.jpg';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/exhibitors', label: 'Exhibitors' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="card-glass sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover-lift rounded-xl p-2">
            <img src={logo} alt="Vidyut Expo Logo" className="w-15 h-10 rounded-full object-cover" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-sky-400 bg-clip-text text-transparent">
              Vidyut Expo
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover-lift ${
                    location.pathname === item.path 
                      ? 'bg-gradient-to-r from-indigo-600 to-sky-400 text-white shadow-lg' 
                      : 'text-slate-700 hover:bg-indigo-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md"
              style={{ color: theme.primary[600] }}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && isOpen && (
          <div className="pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium"
                style={{
                  backgroundColor: location.pathname === item.path ? theme.primary[600] : 'transparent',
                  color: location.pathname === item.path ? 'white' : theme.neutral[700]
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
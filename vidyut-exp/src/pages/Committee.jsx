import { theme } from '../theme/colors';
import FloatingCTA from '../components/FloatingCTA';
import { socialMediaLinks } from '../data/constants';
import logo from '../assets/logo/logo.jpeg';

const Committee = () => {
  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8 text-slate-800">
            VIDYUT EXPO 2026 – Organising Committee
          </h1>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                <img 
                  src="/photo/deva_dhore.jpg" 
                  alt="Mr. DEVA DHORE"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-700">Convener:</h3>
              <p className="text-base font-semibold text-slate-800">Mr. DEVA DHORE</p>
              <p className="text-sm text-slate-600">📞 9823122306</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                <img 
                  src="/photo/ramesh_konojiya.jpg" 
                  alt="Mr. RAMESH KANOJIA"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-700">Co-Convener:</h3>
              <p className="text-base font-semibold text-slate-800">Mr. RAMESH KANOJIA</p>
              <p className="text-sm text-slate-600">📞 7507771111</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                <img 
                  src="/photo/Avinash_Khaiwale.jpg" 
                  alt="Mr. AVINASH KHAIWALE"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-700">Co-Convener:</h3>
              <p className="text-base font-semibold text-slate-800">Mr. AVINASH KHAIWALE</p>
              <p className="text-sm text-slate-600">📞 9423103209</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Column 1 */}
          <div className="space-y-6">
            {/* Venue Committee */}
            <div className="bg-white p-4 border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-800 text-lg mb-2">Venue Committee</h3>
              <p className="font-semibold mb-1">Head: YOGIRAJ SOMKUVAR (BABA)</p>
              <p className="font-semibold mb-1">Members:</p>
              <div className="text-sm space-y-0.5">
                <p>PRASHANT GURJAR</p>
                <p>RAKSHAK DALAL</p>
                <p>SANJAY CHORE</p>
              </div>
            </div>

            {/* Account Committee */}
            <div className="bg-white p-4 border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-800 text-lg mb-2">Account Committee</h3>
              <p className="font-semibold mb-1">Head:</p>
              <div className="text-sm space-y-0.5 mb-2">
                <p>HEMRAJ PUNEKAR</p>
                <p>ASHOK PARAD</p>
              </div>
              <p className="font-semibold mb-1">Members:</p>
              <p className="text-sm">RAJESH PANJWANI</p>
            </div>

            {/* Catering Committee */}
            <div className="bg-white p-4 border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-800 text-lg mb-2">Catering Committee</h3>
              <p className="font-semibold mb-1">Head: ASHOK DHORE</p>
              <p className="font-semibold mb-1">Members:</p>
              <div className="text-sm space-y-0.5">
                <p>DILIP BELSARE</p>
                <p>T. K. GHOSH</p>
                <p>SHARAD DURUGKAR</p>
                <p>PRAKASH SOMALKAR</p>
                <p>ASHOK PATIL</p>
                <p>VISHWANATH KUMBHALKAR</p>
              </div>
            </div>

            {/* Transport & Accommodation Committee */}
            <div className="bg-white p-4 border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-800 text-lg mb-2">Transport & Accommodation Committee</h3>
              <p className="font-semibold mb-1">Head:</p>
              <div className="text-sm space-y-0.5 mb-2">
                <p>SANJAY CHORE</p>
                <p>VIJAY KAREMORE</p>
              </div>
              <p className="font-semibold mb-1">Members:</p>
              <div className="text-sm space-y-0.5">
                <p>SANJIV KHOT</p>
                <p>MANGESH BANTE</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {/* Technical Seminar Committee */}
            <div className="bg-white p-4 border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-800 text-lg mb-2">Technical Seminar Committee</h3>
              <p className="font-semibold mb-1">Head:</p>
              <div className="text-sm space-y-0.5 mb-2">
                <p>NITIN KHIRWADKAR</p>
              </div>
              <p className="font-semibold mb-1">Members:</p>
              <div className="text-sm space-y-0.5">
                <p>MADHAV JOSHI</p>
                <p>ANKUSH HARKARE</p>
              </div>
            </div>

            {/* House Keeping Committee */}
            <div className="bg-white p-4 border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-800 text-lg mb-2">House Keeping Committee</h3>
              <p className="font-semibold mb-1">Head: PRAVIN KATURE</p>
              <p className="font-semibold mb-1">Members:</p>
              <div className="text-sm space-y-0.5">
                <p>NARAYAN GHOGARE</p>
                <p>PRASHANT NAIK</p>
                <p>AJAY KATYARMAL</p>
                <p>SACHIN BUTALE</p>
              </div>
            </div>

            {/* Advertisement & Publicity Committee */}
            <div className="bg-white p-4 border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-800 text-lg mb-2">Advertisement & Publicity Committee</h3>
              <p className="font-semibold mb-1">Head: GOVIND DEHEDKAR</p>
              <p className="font-semibold mb-1">Members:</p>
              <div className="text-sm space-y-0.5">
                <p>RAKSHAK DALAL</p>
                <p>DIPESH JAIN</p>
                <p>SATISH NIKOSE</p>
                <p>KHUSHAL MESHRAM</p>
                <p>ARPIT TABHANE</p>
              </div>
            </div>

            {/* Invitation & P.R.O Committee */}
            <div className="bg-white p-4 border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-800 text-lg mb-2">Invitation & P.R.O Committee</h3>
              <div className="text-sm space-y-0.5">
                <p>GOVIND DEHEDKAR</p>
                <p>RAVINDRA DESHMUKH</p>
                <p>ANIL MANAPURE</p>
                <p>ANAND MAHAJAN</p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            {/* Registration Committee */}
            <div className="bg-white p-4 border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-800 text-lg mb-2">Registration Committee</h3>
              <p className="font-semibold mb-1">Head: NILKANTH JAISWAL</p>
              <p className="font-semibold mb-1">Members:</p>
              <div className="text-sm space-y-0.5">
                <p>SANJAY AGRAWAL</p>
                <p>NITIN NAMJOSHI</p>
                <p>AMIT BADKI</p>
                <p>SANJAY SAWANKAR</p>
                <p>RAHUL DHORE</p>
                <p>OM ULHE</p>
              </div>
            </div>

            {/* Permission & Co-ordination Committee */}
            <div className="bg-white p-4 border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-800 text-lg mb-2">Permission & Co-ordination Committee</h3>
              <div className="text-sm space-y-0.5">
                <p>PRAFULL KHAPRIKAR</p>
                <p>ASHOK PARAD</p>
              </div>
            </div>

            {/* Souvenir & Diary Committee */}
            <div className="bg-white p-4 border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-800 text-lg mb-2">Souvenir & Diary Committee</h3>
              <p className="font-semibold mb-1">Head: GOVIND DEHEDKAR</p>
              <p className="font-semibold mb-1">Members:</p>
              <div className="text-sm space-y-0.5 mb-2">
                <p>SACHIN SAWALKAR</p>
                <p>RAKSHAK DALAL</p>
                <p>PRAFULL MOHOD</p>
              </div>
              <p className="font-semibold mb-1">Sub-Head (Printing & Design):</p>
              <p className="text-sm mb-2">JITENDRA CHARDE</p>
              <p className="font-semibold mb-1">Members:</p>
              <div className="text-sm space-y-0.5">
                <p>PRASHANT GUJAR</p>
                <p>VIJAY MOURYA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="py-16 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src={logo}
            alt="The Electrical Contractors' Association, Nagpur"
            className="w-35 h-35 mx-auto mb-4 rounded-full object-cover shadow-lg"
          />
          <h2 className="text-3xl font-bold mb-6 text-slate-800">THE ELECTRICAL CONTRACTOR'S ASSOCIATION, NAGPUR</h2>
          <div className="grid md:grid-cols-3 gap-4 text-lg">
            <div className="text-slate-600">
              <p className="font-bold">President:</p>
              <p>Shri Anil Manapure – 9822200692</p>
            </div>
            <div className="text-slate-600">
              <p className="font-bold">Secretary:</p>
              <p>Shri Prafull Mohod – 9370224434</p>
            </div>
            <div className="text-slate-600">
              <p className="font-bold">Treasurer:</p>
              <p>Shri Rajesh Panjwani – 9822238067</p>
            </div>
          </div>
          {/* Email and Social Media Row */}
          <div className="mt-6 flex flex-col md:flex-row md:justify-between items-center gap-4">
            <p className="text-lg text-slate-600"><strong>Email:</strong> vidyutexpo23@gmail.com</p>
            <div className="flex items-center space-x-4">
              <span className="text-lg font-bold text-slate-800">Follow Us:</span>
              <div className="flex space-x-4">
                <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-pink-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href={socialMediaLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-red-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-700 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <FloatingCTA />
    </div>
  );
};

export default Committee;
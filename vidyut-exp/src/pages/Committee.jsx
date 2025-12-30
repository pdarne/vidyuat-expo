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

      {/* Advisory Committee */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
            <h3 className="font-bold text-blue-800 text-xl mb-4 text-center">Advisory Committee</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <p className="text-sm font-medium text-slate-700">ASHOK KRIPLANI</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <p className="text-sm font-medium text-slate-700">HEMANT DOSHI</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <p className="text-sm font-medium text-slate-700">RAJU HARDAS</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <p className="text-sm font-medium text-slate-700">ASHOK TIJARE</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <p className="text-sm font-medium text-slate-700">RAJA GOYANKA</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <p className="text-sm font-medium text-slate-700">DHARAMSINGH THETTY</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <p className="text-sm font-medium text-slate-700">KRISHNAJI LUTE</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <p className="text-sm font-medium text-slate-700">SANJAY CHOPDE</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <p className="text-sm font-medium text-slate-700">KAILASH ROTKAR</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <p className="text-sm font-medium text-slate-700">BAIJU HARDAS</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <p className="text-sm font-medium text-slate-700">ANIL CHANEKAR</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <p className="text-sm font-medium text-slate-700">PRADEEP DESHMUKH</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <p className="text-sm font-medium text-slate-700">SUBHASH GIRADKAR</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <p className="text-sm font-medium text-slate-700">FATTECHAND AWADHIYA</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-md text-center">
                <p className="text-sm font-medium text-slate-700">NARENDRA PAHADE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Committee Structure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Column 1 */}
            <div className="space-y-6">
              {/* Venue Committee */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-800 text-lg mb-3">Venue Committee</h3>
                <div className="bg-blue-50 p-3 rounded-md mb-3">
                  <p className="font-semibold text-blue-700 text-sm">Head: YOGIRAJ SOMKUVAR (BABA)</p>
                </div>
                <p className="font-semibold mb-2 text-gray-700 text-sm">Members:</p>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">PRASHANT GURJAR</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">RAKSHAK DALAL</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">SANJAY CHORE</p>
                </div>
              </div>

              {/* Invitation & P.R.O Committee */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-800 text-lg mb-3">Invitation & P.R.O Committee</h3>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">GOVIND DEHEDKAR</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">RAVINDRA DESHMUKH</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">ANIL MANAPURE</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">ANAND MAHAJAN</p>
                </div>
              </div>

              {/* Registration Committee */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-800 text-lg mb-3">Registration Committee</h3>
                <div className="bg-blue-50 p-3 rounded-md mb-3">
                  <p className="font-semibold text-blue-700 text-sm">Head: NILKANTH JAISWAL</p>
                </div>
                <p className="font-semibold mb-2 text-gray-700 text-sm">Members:</p>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">SANJAY AGRAWAL</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">NITIN NAMJOSHI</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">AMIT BADKI</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">SANJAY SAWANKAR</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">RAHUL DHORE</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">OM ULHE</p>
                </div>
              </div>

              {/* Catering Committee */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-800 text-lg mb-3">Catering Committee</h3>
                <div className="bg-blue-50 p-3 rounded-md mb-3">
                  <p className="font-semibold text-blue-700 text-sm">Head: ASHOK DHORE</p>
                </div>
                <p className="font-semibold mb-2 text-gray-700 text-sm">Members:</p>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">DILIP BELSARE</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">T. K. GHOSH</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">SHARAD DURUGKAR</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">PRAKASH SOMALKAR</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">ASHOK PATIL</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">VISHWANATH KUMBHALKAR</p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              {/* Transport & Accommodation Committee */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-800 text-lg mb-3">Transport & Accommodation Committee</h3>
                <div className="bg-blue-50 p-3 rounded-md mb-3">
                  <p className="font-semibold text-blue-700 text-sm mb-1">Head:</p>
                  <p className="text-sm text-blue-600">SANJAY CHORE</p>
                  <p className="text-sm text-blue-600">VIJAY KAREMORE</p>
                </div>
                <p className="font-semibold mb-2 text-gray-700 text-sm">Members:</p>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">SANJIV KHOT</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">MANGESH BANTE</p>
                </div>
              </div>

              {/* Technical Seminar Committee */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-800 text-lg mb-3">Technical Seminar Committee</h3>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">NITIN KHIRWADKAR</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">MADHAV JOSHI</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">ANKUSH HARKARE</p>
                </div>
              </div>

              {/* Advertisement & Publicity Committee */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-800 text-lg mb-3">Advertisement & Publicity Committee</h3>
                <div className="bg-blue-50 p-3 rounded-md mb-3">
                  <p className="font-semibold text-blue-700 text-sm mb-1">Head:</p>
                  <p className="text-sm text-blue-600">GOVIND DEHEDKAR</p>
                  <p className="text-sm text-blue-600">RAKSHAK DALAL</p>
                  <p className="text-sm text-blue-600">DIPESH JAIN</p>
                </div>
                <p className="font-semibold mb-2 text-gray-700 text-sm">Members:</p>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">SATISH NIKOSE</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">KHUSHAL MESHRAM</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">ARPIT TABHANE</p>
                </div>
              </div>

              {/* Permission & Co-ordination Committee */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-800 text-lg mb-3">Permission & Co-ordination Committee</h3>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">PRAFULL KHAPRIKAR</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">ASHOK PARAD</p>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              {/* Souvenir & Diary Committee */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-800 text-lg mb-3">Souvenir & Diary Committee</h3>
                <div className="bg-blue-50 p-3 rounded-md mb-3">
                  <p className="font-semibold text-blue-700 text-sm mb-1">Head:</p>
                  <p className="text-sm text-blue-600">GOVIND DEHEDKAR</p>
                  <p className="text-sm text-blue-600">SACHIN SAWALKAR</p>
                  <p className="text-sm text-blue-600">RAKSHAK DALAL</p>
                  <p className="text-sm text-blue-600">PRAFULL MOHOD</p>
                </div>
                <div className="bg-green-50 p-3 rounded-md mb-3">
                  <p className="font-semibold text-green-700 text-sm mb-1">Sub-Head (Printing & Design):</p>
                  <p className="text-sm text-green-600">JITENDRA CHARDE</p>
                </div>
                <p className="font-semibold mb-2 text-gray-700 text-sm">Members:</p>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">PRASHANT GUJAR</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">VIJAY MOURYA</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">RAMESHWAR BAHE</p>
                </div>
              </div>

              {/* Press & Publicity Committee */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-800 text-lg mb-3">Press & Publicity Committee</h3>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">RAJU BHOYAR</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">SUNIL ULHE</p>
                </div>
              </div>

              {/* Account Committee */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-800 text-lg mb-3">Account Committee</h3>
                <div className="bg-blue-50 p-3 rounded-md mb-3">
                  <p className="font-semibold text-blue-700 text-sm mb-1">Head:</p>
                  <p className="text-sm text-blue-600">HEMRAJ PUNEKAR</p>
                  <p className="text-sm text-blue-600">ASHOK PARAD</p>
                </div>
                <p className="font-semibold mb-2 text-gray-700 text-sm">Members:</p>
                <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">RAJESH PANJWANI</p>
              </div>

              {/* Housekeeping Committee */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-800 text-lg mb-3">Housekeeping Committee</h3>
                <div className="bg-blue-50 p-3 rounded-md mb-3">
                  <p className="font-semibold text-blue-700 text-sm">Head: PRAVIN KATURE</p>
                </div>
                <p className="font-semibold mb-2 text-gray-700 text-sm">Members:</p>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">NARAYAN GHOGARE</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">PRASHANT NAIK</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">AJAY KATYARMAL</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">SACHIN BUTALE</p>
                </div>
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
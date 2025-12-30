import { theme } from '../theme/colors';
import FloatingCTA from '../components/FloatingCTA';

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
          <h2 className="text-2xl font-bold mb-4 text-slate-800">THE ELECTRICAL CONTRACTOR'S ASSOCIATION, NAGPUR</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <p className="text-slate-600"><strong>President:</strong> Shri Anil Manapure – 9822200692</p>
            <p className="text-slate-600"><strong>Secretary:</strong> Shri Prafull Mohod – 9370224434</p>
            <p className="text-slate-600"><strong>Treasurer:</strong> Shri Rajesh Panjwani – 9822238067</p>
          </div>
          <p className="mt-4 text-sm text-slate-600"><strong>Email:</strong> vidyutexpo23@gmail.com</p>
        </div>
      </div>
      
      <FloatingCTA />
    </div>
  );
};

export default Committee;
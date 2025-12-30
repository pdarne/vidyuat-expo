const GetInTouch = ({ contactInfo }) => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-slate-800">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-6 rounded-xl shadow-lg bg-slate-50 border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-slate-700">Contact Numbers</h3>
            <div className="space-y-2">
              {contactInfo.phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone}`}
                  className="block text-lg text-blue-600 hover:text-blue-800 transition-colors"
                >
                  📞 {phone}
                </a>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-lg bg-slate-50 border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-slate-700">Email & Location</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${contactInfo.email}`}
                className="block text-lg text-blue-600 hover:text-blue-800 transition-colors"
              >
                ✉️ {contactInfo.email}
              </a>
              <p className="text-lg text-slate-600">
                📍 {contactInfo.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
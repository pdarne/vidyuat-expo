const EventHighlight = ({ highlights }) => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto animate-fade-in-up">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-slate-800">
          Event Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="text-center p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white border border-blue-200"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                {highlight}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlight;
import { useState, useEffect } from "react";

const Countdown = ({ targetDate, className = "" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`flex gap-4 ${className}`}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="card-glass rounded-2xl px-6 py-4 text-center hover-lift transition-all duration-300">
          <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-sm uppercase text-slate-500 font-medium">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
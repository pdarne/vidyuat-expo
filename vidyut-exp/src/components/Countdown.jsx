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
    <div className={`flex gap-1 sm:gap-2 md:gap-4 ${className}`}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-white/20 backdrop-blur-sm rounded px-1 py-1 sm:px-2 sm:py-2 md:px-4 md:py-3 text-center">
          <div className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-white">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-xs md:text-sm uppercase text-white/80">
            {unit.charAt(0)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
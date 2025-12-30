import React from "react";
import { theme } from "../theme/colors";

export default function EventHighlight({highlights}) {
  return (
    <section className="py-8 sm:py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8"
          style={{ color: theme.primary[700] }}
        >
          Event Highlights
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="text-center p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center text-white text-lg sm:text-2xl font-bold"
                style={{ backgroundColor: theme.secondary[500] }}
              >
                ⚡
              </div>
              <h3
                className="text-sm sm:text-base lg:text-lg font-semibold"
                style={{ color: theme.neutral[800], width: 230, minWidth: 200 }}
              >
                {highlight}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
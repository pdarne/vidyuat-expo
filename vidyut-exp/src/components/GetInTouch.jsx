import React from "react";
import { theme } from "../theme/colors";

export default function GetInTouch({ contactInfo }) {
  return (
    <section className="py-12 sm:py-16 px-4 bg-slate-100">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-slate-800">
          Get In Touch
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex-1 min-w-64 max-w-80 text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">Call Us</h3>
            <div className="space-y-2">
              {contactInfo.phones.map((phone, idx) => (
                <a key={idx} href={`tel:${phone}`} className="block text-slate-600 hover:text-blue-600 hover:underline">
                  {phone}
                </a>
              ))}
            </div>
          </div>
          <div className="flex-1 min-w-64 max-w-80 text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">Email</h3>
            <a href="mailto:vidyutexpo23@gmail.com" className="text-slate-600 hover:text-blue-600 hover:underline break-all">
              vidyutexpo23@gmail.com
            </a>
          </div>
          <div className="flex-1 min-w-64 max-w-80 min-h-55 text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">Location</h3>
            <p className="text-slate-600">   Dr. Vasantrao Deshpande Hall Premises<br/>
                  Civil Lines, {contactInfo.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

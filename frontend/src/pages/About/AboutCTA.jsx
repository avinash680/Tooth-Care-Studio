import React from "react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <div className="mt-24 bg-[#1a6faf] rounded-3xl p-10 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">
        Excellence in Modern Dentistry
      </h2>

      <p className="max-w-3xl mx-auto text-blue-100">
        With a holistic and progressive approach, Dr. Nisha (Dua) Arora
        continues to be a trusted name in dentistry, delivering exceptional
        care that meets both current and future demands of oral healthcare.
      </p>

      <Link
        to="/book_appointment"
        className="inline-block mt-8 bg-white text-[#1a6faf] px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
      >
        Book Appointment
      </Link>
    </div>
  );
};

export default AboutCTA;

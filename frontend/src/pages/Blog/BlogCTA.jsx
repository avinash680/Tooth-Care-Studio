import React from "react";
import { Link } from "react-router-dom";

const BlogCTA = () => {
  return (
    <div className="mt-16 text-center">
      <h3 className="text-3xl font-bold text-gray-900 mb-4">
        Need Professional Dental Care?
      </h3>

      <p className="text-gray-600 mb-6">
        Schedule an appointment today and let our experienced dental team
        help you achieve a healthier smile.
      </p>

      <Link
        to="/book_appointment"
        className="inline-block bg-[#1a6faf] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#14598d] transition"
      >
        Book Appointment
      </Link>
    </div>
  );
};

export default BlogCTA;

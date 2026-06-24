import React from "react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <div className="text-center mt-20">
      <div className="bg-[#1a6faf] rounded-3xl p-10 text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready for a Healthier Smile?
        </h2>

        <p className="mt-4 text-lg text-blue-100">
          Book your appointment today and experience personalized dental
          care from our expert team.
        </p>

        <Link
          to="/book_appointment"
          className="inline-block mt-6 px-8 py-4 bg-white text-[#1a6faf] font-semibold rounded-full hover:bg-gray-100 transition"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default ContactCTA;
